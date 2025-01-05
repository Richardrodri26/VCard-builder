import { RowForm } from '@/components/Form';
import { InputForm } from '@/components/Form/Inputs';

export const CompanyInformationForm = () => {
  return (
    <div>
      <RowForm>
        <InputForm name="companyData.companyName" label={'Nombre'} placeholder="Agregar nombre" />
      </RowForm>
      <InputForm name="companyData.job" label={'Puesto'} placeholder="Agregar puesto" />
    </div>
  );
};
