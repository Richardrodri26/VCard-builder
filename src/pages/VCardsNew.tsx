import { BuildVCStepForm } from '@/features/vcBuilder/BuildVCStepForm'

export const VCardsNew = () => {
  return (
    <div className='h-full'>
      <BuildVCStepForm defaultData={{ orientation: 'horizontal' } as any} />
    </div>
  )
}
