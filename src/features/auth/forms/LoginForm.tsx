import { cn, ToastyErrorGraph } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInSchema, signInSchemaType } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSigninMutation } from '@/domain/graphql';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie'

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<signInSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(signInSchema),
    reValidateMode: 'onChange',
  });
  const [signMutation] = useSigninMutation();

  const mutation = useMutation({
    mutationFn: async (data: signInSchemaType) => {

      try {
        const mutationData = await signMutation({
          variables: {
            signinInput: data
          }
        });

        const token = mutationData.data?.signin?.token

        if (token) {
          Cookies.set(import.meta.env.VITE_APP_KEY_COOKIE_SESSION, mutationData.data?.signin?.token!)
          Cookies.set(import.meta.env.VITE_APP_KEY_COOKIE_USER, JSON.stringify(mutationData.data?.signin?.user))
        }

        navigate('/vcards');
        

        return mutationData
      } catch (error) {
        ToastyErrorGraph(error as any)
      }

    }
  })

  const navigate = useNavigate();

  const submitFn = (data: signInSchemaType) => {
    mutation.mutate(data);
  };

  const onSubmit = handleSubmit(submitFn);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Inicio de sesión</CardTitle>
          <CardDescription>Ingresa tu email para iniciar sesión en tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="m@example.com" required {...register('email')} />
                {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <Input type="password" {...register('password')} />
                {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}
              </div>
              <Button disabled={!isValid || mutation.isPending} type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              No tienes una cuenta?{' '}
              <a href="#" className="underline underline-offset-4">
                Registrate
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
