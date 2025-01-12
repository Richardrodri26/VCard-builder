import { forwardRef, useMemo, useState } from 'react';
import { DropzoneOptions } from 'react-dropzone';
import { IExternalState } from '@/interfaces/general.interfaces';
import { cn } from '@/lib/utils';
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem, ITypeFile } from '.';
import { Image } from 'lucide-react';

// #region Config area

interface IValidFormats {
  validFormatsText: string;
  allExtensionsValid: string[];
}

const dropzoneOptDefault = {
  multiple: true,
  maxFiles: 1,
  maxSize: 4 * 1024 * 1024,
} satisfies DropzoneOptions;

/*****************************************************/

export interface IUploadFileGeneralProps {
  dropzoneOpts?: DropzoneOptions;
  externalState?: IExternalState<ITypeFile[] | null>;
  callBack?: (files: ITypeFile[] | null) => void;
  containerClassName?: string;
  title: string;
  defaultFiles?: ITypeFile[] | null;
}

export const UploadFileGeneral = forwardRef<HTMLDivElement, IUploadFileGeneralProps>(({ dropzoneOpts, externalState, title, callBack, containerClassName, defaultFiles }, ref) => {
  const formatter = new Intl.ListFormat('es', {
    style: 'long',
    type: 'conjunction',
  });

  const [filesDefault, setFilesDefault] = useState<ITypeFile[] | null>(defaultFiles || []);

  const { files, setFiles } = externalState
    ? {
        files: externalState.state,
        setFiles: externalState.setter,
      }
    : {
        files: filesDefault,
        setFiles: setFilesDefault,
      };

  const onValueChange: (value: ITypeFile[] | null) => void = files => {
    const filesToSend: ITypeFile[] =
      files?.map(file => {
        const isFile = file instanceof File;

        return {
          name: file.name,
          size: file?.size || 0,
          nativeFile: isFile ? file : undefined,
        };
      }) || [];

    if (callBack) {
      callBack(filesToSend);
    }

    // setFiles(files);
    setFiles(filesToSend);
  };

  const dropzoneOptsToSend = dropzoneOpts ? { ...dropzoneOptDefault,...dropzoneOpts } : dropzoneOptDefault;

  const hasFiles = (files?.length || 0) > 0;

  const filesNames = formatter.format((files || []).map(file => file?.name || ''));

  const validFormats: IValidFormats = useMemo(() => {
    const acceptedFiles = (dropzoneOptsToSend as DropzoneOptions).accept || {};

    const allExtensionsValid = Object.values(acceptedFiles).flat();

    const formatTextToSend = formatter.format(allExtensionsValid);

    return {
      validFormatsText: formatTextToSend,
      allExtensionsValid,
    };
  }, [dropzoneOptsToSend]);

  return (
    <>
      <FileUploader ref={ref} value={files} className={cn('max-w-7xl overflow-hidden', containerClassName)} onValueChange={onValueChange} dropzoneOptions={dropzoneOptsToSend} reSelect={true}>
        <div className='inline-flex flex-col items-start justify-start gap-2'>
          <UploadFileTrigger hasFiles={hasFiles} title={title} validFormats={validFormats} filesNames={hasFiles ? filesNames : 'Sin archivo seleccionado'} />

          {/* Files content */}
          <FileUploaderContent className='flex h-fit flex-row flex-wrap items-center gap-2 pb-0.5'>
            {files?.map((file, index) => (
              <FileUploaderItem
                key={index}
                index={index}
                className='inline-flex h-[58px] min-h-6 w-full cursor-default items-center justify-start gap-3 rounded-[5px] border border-[#2b2b2b] bg-white p-2 pr-[24px] hover:bg-white'
                aria-roledescription={`file ${index + 1} containing ${file.name}`}>
                <FileUploaderContentItem file={file} />
              </FileUploaderItem>
            ))}
          </FileUploaderContent>
        </div>
      </FileUploader>
    </>
  );
});

// #region Elements

interface IUploadFileTriggerProps {
  title: string;
  filesNames: string;
  validFormats: IValidFormats;
  hasFiles: boolean
}

const UploadFileTrigger = ({ filesNames, title, validFormats, hasFiles }: IUploadFileTriggerProps) => {
  return (
    <>
      <div className='flex min-h-[67px] flex-col items-start justify-start gap-2 self-stretch'>
        {/* Tittle */}
        <div className='inline-flex items-center justify-start gap-4 self-stretch'>
          <div className="font-['Work Sans'] text-base font-normal leading-[18.80px] text-[#2b2b2b]">{title}</div>
        </div>

        {/* INPUT */}
        <div className='inline-flex items-center justify-start self-stretch'>
          <div className='flex h-10 shrink grow basis-0 items-start justify-start'>
            <FileInput containerClassName='w-fit' className='w-fit'>
              <div className='flex h-[40px] items-center justify-start gap-2.5 rounded-bl-[5px] rounded-tl-[5px] border border-primary bg-primary p-2.5'>
                <div className="font-['Work Sans'] text-base font-medium leading-[18.80px] text-white">Seleccionar archivo</div>
              </div>
            </FileInput>

            <div className='flex h-10 shrink grow basis-0 items-center justify-start rounded-br-[5px] rounded-tr-[5px] border border-neutral-200 bg-white p-2.5 text-muted-foreground'>
              <div className="font-['Work Sans'] h-[19px] shrink grow basis-0 text-base font-normal leading-[18.80px] text-neutral-500">{filesNames} </div>
            </div>
          </div>
        </div>

      {
        ((validFormats?.allExtensionsValid?.length || 0) > 0 && !hasFiles)
          ? <p className='text-muted-foreground'>Soporta los siguientes formatos: {validFormats.validFormatsText}</p>
          : null
      }
      </div>
    </>
  );
};

interface IFileUploaderContentItemProps {
  file: ITypeFile;
}

const FileUploaderContentItem = ({ file }: IFileUploaderContentItemProps) => {
  // const getFileExtension = (file: ITypeFile): string => {
  //   let fileExtension: string | undefined = undefined;

  //   // if (file?.fileInfo?.fileExtension) {
  //   //   fileExtension = file?.fileInfo?.fileExtension;
  //   // }

  //   // if (file?.nativeFile?.type) {
  //   //   fileExtension = getExtensionFromFileName(file.nativeFile.name).substring(1);
  //   // }

  //   return fileExtension || file.name;
  // };

  // const getDownloadUrl = (fileInfo: ITypeFile) => {
  //   const url = fileInfo?.fileInfo?.url ? import.meta.env.VITE_URL_BACKEND_API + fileInfo?.fileInfo?.url.substring(1) : getDownloadURL(`${fileInfo?.fileInfo?.id}` || '');

  //   return url;
  // };

  return (
    <>
      <div className='flex h-10 shrink grow basis-0 items-center justify-start gap-2.5'>
        <div className='!mr-0 flex !h-[40px] !w-[40px] items-center justify-center border-none bg-transparent'>
          {/* <IconByExtension className='m-auto' extension={getFileExtension(file)} /> */}
          <Image />
        </div>

        <div className='mr-2 inline-flex shrink grow basis-0 flex-col items-start justify-start'>
          <div className="font-['Work Sans'] self-stretch text-ellipsis text-base font-normal leading-tight text-[#2b2b2b]">{file?.name}</div>
          {/* <div className="font-['Work Sans'] self-stretch text-[10px] font-normal leading-tight text-[#5f5f5f]">{formatBytes(file?.size || 0)}</div> */}
        </div>

        {/* <RenderIf condition={Boolean(file.fileInfo)}>
          <div className='mr-1 flex h-10 w-10 items-center justify-center gap-2.5 rounded-3xl p-2.5'>
            <Icons.FileSave
              onClick={() => {
                downloadFileFromUrl(getDownloadUrl(file), file?.name);
              }}
              className='h-[18px] w-[15px] cursor-pointer fill-primary-purple'
            />
          </div>
        </RenderIf> */}
        {/* <RenderIf condition={Boolean(file?.nativeFile)}>
          <div className='mr-1 flex h-10 w-10 items-center justify-center gap-2.5 rounded-3xl p-2.5'>
            <Icons.FileSave
              onClick={() => {
                downloadFile(file.nativeFile!, file.name);
              }}
              className='h-[18px] w-[15px] cursor-pointer fill-primary-purple'
            />
          </div>
        </RenderIf> */}
      </div>
    </>
  );
};
