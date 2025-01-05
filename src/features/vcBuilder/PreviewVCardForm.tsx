import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { VCard } from "@/components/VCard";
import { type IVCardData } from "@/interfaces/VCard.interface";
import { useFormContext } from "react-hook-form";


export const PreviewVCardForm = () => {
  const { watch } = useFormContext()

  const data = watch() as IVCardData;

  return (
    <Iphone15Pro className="max-h-[520px] lg:max-h-[750px] mx-auto w-fit">
      <VCard data={data} />
    </Iphone15Pro>
  );
};
