import { useStore } from '@/store'

export const Footer = () => {
  const steps = useStore(state => state.steps)

  return (
    <footer className='flex h-[80px] items-center justify-end pb-[12px]'>
      <span className='text-2xl font-semibold'>Steps: {steps}</span>
    </footer>
  )
}
