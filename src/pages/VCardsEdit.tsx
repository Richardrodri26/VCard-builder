import { BuildVCStepForm } from "@/features/vcBuilder/BuildVCStepForm";
import { vcardDataMock } from "@/mockData";


export const VCardsEdit = () => {
  return (
    <div className="h-full">
      <BuildVCStepForm defaultData={vcardDataMock} />
    </div>
  );
};
