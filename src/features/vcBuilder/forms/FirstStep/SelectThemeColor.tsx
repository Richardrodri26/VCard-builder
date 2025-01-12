import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { colorThemes } from '../../constants';
import { cn } from '@/lib/utils';



export const SelectThemeColor = () => {

  const { setValue, watch } = useFormContext()

  const currentValue = watch('themeColor');
  const options = useMemo(() => Object.entries(colorThemes), []);

  const handleChange = (value: string) => {
    setValue('themeColor', value);
  };

  const currentOptionSelected = useMemo(() => {
    const currentData = options.find(([key]) => key === currentValue);

    return currentData?.[0];
  }, [currentValue]);

  return (
    <div>
      <p>Paleta de colores</p>

      <div className="flex flex-wrap gap-2">
        {options.map(([key, value]) => (
          <div key={key} className={cn("w-[112px] h-12 flex cursor-pointer border-2 border-transparent", currentOptionSelected === key && 'border-primary')} onClick={() => handleChange(key)}>
            <div style={{ backgroundColor: value.from }} className="w-1/2 h-full" />
            <div style={{ backgroundColor: value.to }} className="w-1/2 h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
