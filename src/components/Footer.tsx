import { useStore } from '@/store'

export const Footer = () => {
  const disks = useStore(state => state.disks)
  const steps = useStore(state => state.steps)

  return (
    <footer className='flex items-center justify-end'>
      {Boolean(disks.length) && <span className='text-xl font-semibold'>Steps: {steps}</span>}
    </footer>
  )
}
