import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { colorThemes } from '../../constants';



export const SelectThemeColor = () => {

  const { setValue } = useFormContext()

  const options = useMemo(() => Object.entries(colorThemes), []);

  const handleChange = (value: string) => {
    setValue('themeColor', value);
  };

  return (
    <div>
      <p>Paleta de colores</p>

      <div className="flex flex-wrap gap-2">
        {options.map(([key, value]) => (
          <div key={key} className="w-[112px] h-12 rounded-lg flex cursor-pointer" onClick={() => handleChange(key)}>
            <div style={{ backgroundColor: value.from }} className="w-1/2 h-full" />
            <div style={{ backgroundColor: value.to }} className="w-1/2 h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
