import { getMinimumNumberOfSteps } from '@/helpers/steps.helper'
import { useStore } from '@/store'

export const GameFooter = () => {
  const disks = useStore(state => state.disks)
  const steps = useStore(state => state.steps)
  const minimumNumberOfSteps = useStore(state => getMinimumNumberOfSteps(state.disksNumber))

  return (
    <footer className='flex items-center justify-center sm:justify-end'>
      {Boolean(disks.length) && (
        <span className='text-xl font-semibold'>
          <span className='hidden sm:inline'>Moves: </span>
          {steps} / {minimumNumberOfSteps}
        </span>
      )}
    </footer>
  )
}
