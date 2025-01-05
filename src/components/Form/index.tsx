import { type SubmitErrorHandler, useForm, useFormContext } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { HTMLAttributes } from "react";

type DeepPartialWithZod<T extends z.ZodObject<any, any>> = {
  [K in keyof T]?: T[K] extends z.ZodObject<any, any> ? DeepPartialWithZod<T[K]> : T[K];
};

interface ISubmitModulesFormZod<T extends z.ZodObject<any, any> = z.ZodObject<any, any>> {
  children: React.ReactNode;
  schema?: T;
  submit?: (data: T['_input']) => void;
  onError?: SubmitErrorHandler<DeepPartialWithZod<T>>; // Ajustamos el tipo de la función de manejo de errores
  defaultValue?: any;
  className?: string;
}

export function BasicFormProviderZod<T extends z.ZodObject<any, any>>({ children, submit, onError, defaultValue, schema, className }: ISubmitModulesFormZod<T>) {
  // hooks
  const currentMethods = useForm({
    defaultValues: defaultValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <form onSubmit={submit ? currentMethods.handleSubmit(data => submit(data), onError) : undefined} className={className}>
      <Form  {...currentMethods}>
        {children}
      </Form>
    </form>
  );
}

export const RowForm = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('mb-2.5 flex w-full flex-1 gap-2.5', className)} {...props} />;
};

export const ButtonForm = ({ ...rest }: ButtonProps) => {
  const { formState: { isValid } } = useFormContext()
  return (
    <Button disabled={!isValid} {...rest}  />
  )
}