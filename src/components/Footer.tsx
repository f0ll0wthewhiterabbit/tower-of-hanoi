import { getMinimumNumberOfSteps } from '@/helpers/steps.helper'
import { useStore } from '@/store'

export const Footer = () => {
  const disks = useStore(state => state.disks)
  const steps = useStore(state => state.steps)
  const minimumNumberOfSteps = useStore(state => getMinimumNumberOfSteps(state.disksNumber))

  return (
    <footer className='flex items-center justify-end'>
      {Boolean(disks.length) && (
        <span className='text-xl font-semibold'>
          Moves: {steps} / {minimumNumberOfSteps}
        </span>
      )}
    </footer>
  )
}
