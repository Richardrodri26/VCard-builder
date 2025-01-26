import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { colorThemes } from '../../constants';
import { cn } from '@/lib/utils';
import { IThemeColors, IVCardData } from '@/interfaces/VCard.interface';
import { ColorPicker } from '@/components/ColorPicker';

export const SelectThemeColor = () => {
  const { setValue, watch } = useFormContext<IVCardData>();

  const currentValue = watch('themeColor') || '';
  const options = useMemo(() => Object.entries(colorThemes), []);

  const handleChange = (data: IThemeColors) => {
    setValue('themeColor', data);
  };

  const currentOptionSelected = useMemo(() => {
    const currentData = options.find(([key]) => key === currentValue);

    return currentData?.[0];
  }, [currentValue]);

  const setThemeColor = (key: 'themeColor.from' | 'themeColor.to', value: string) => {
    setValue(key, value, {
      shouldValidate: true,
    });
  };

  return (
    <div>
      <p>Paleta de colores por defecto</p>

      <div className="flex flex-wrap gap-2">
        {options.map(([key, value]) => (
          <div
            key={key}
            className={cn(
              'w-[112px] h-12 flex cursor-pointer border-2 border-transparent',
              currentOptionSelected === key && 'border-primary'
            )}
            onClick={() => handleChange({ from: value.from, to: value.to })}>
            <div style={{ backgroundColor: value.from }} className="w-1/2 h-full" />
            <div style={{ backgroundColor: value.to }} className="w-1/2 h-full" />
          </div>
        ))}
      </div>

      <div className="space-y-1 mt-1">
        <p className="text-muted-foreground">Colores personalizados</p>
        <div className="flex gap-[2px] [&>*]:h-full [&>*]:w-1/2 w-[110px] h-12 cursor-pointer border-2 border-muted-foreground">
          <ColorPicker
            className="rounded-r-none border-r-1 rounded-none"
            onChange={(value) => setThemeColor('themeColor.from', value)}
            value={watch('themeColor.from')}
          />
          <ColorPicker
            className="rounded-l-none border-l-1 rounded-none"
            onChange={(value) => setThemeColor('themeColor.to', value)}
            value={watch('themeColor.to')}
          />
        </div>
      </div>
    </div>
  );
};
