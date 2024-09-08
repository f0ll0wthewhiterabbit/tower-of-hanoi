import { Fish, FishSymbol } from 'lucide-react'
import { ChangeEvent } from 'react'

import { TInitialDisksNumber } from '@/types/disc.types'

import { getMinimumNumberOfSteps } from '@/helpers/steps.helper'
import { cn } from '@/helpers/utils.helpers'
import { useStore } from '@/store'

export const DifficultySlider = () => {
  const disksNumber = useStore(state => state.disksNumber)
  const setDisksNumber = useStore(state => state.setDisksNumber)
  const minimumNumberOfSteps = getMinimumNumberOfSteps(disksNumber)

  function handleDisksNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setDisksNumber(Number(event.target.value) as TInitialDisksNumber)
  }

  function getProFishColor() {
    if (disksNumber === 8) {
      return 'text-indigo-600'
    }

    if (disksNumber === 7) {
      return 'text-indigo-800'
    }

    if (disksNumber === 6) {
      return 'text-indigo-950'
    }

    return 'text-gray-800'
  }

  function getNewbieFishColor() {
    if (disksNumber === 3) {
      return 'text-sky-600'
    }

    if (disksNumber === 4) {
      return 'text-sky-800'
    }

    if (disksNumber === 5) {
      return 'text-sky-950'
    }

    return 'text-gray-800'
  }

  return (
    <div className='w-96 text-center'>
      <h2 className='mb-6 text-2xl'>Select disk count</h2>
      <div className='relative'>
        <FishSymbol
          className={cn(
            'absolute',
            '-left-4',
            'top-1/2',
            '-translate-x-full',
            'translate-y-[calc(-50%-4px)]',
            'transition-colors',
            'duration-500',
            getNewbieFishColor(),
          )}
          size={48}
        />
        <input
          className='range'
          type='range'
          min='3'
          max='8'
          step='1'
          value={disksNumber}
          onChange={handleDisksNumberChange}
        />
        <Fish
          className={cn(
            'absolute',
            '-right-4',
            'top-1/2',
            'translate-x-full',
            'translate-y-[calc(-50%-4px)]',
            'transition-colors',
            'duration-500',
            getProFishColor(),
          )}
          size={48}
        />
      </div>
      <div className='mt-[8px] flex w-full justify-between px-2 text-xl'>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
      </div>
      <p className='mt-6 text-base'>Minimum moves to solve: {minimumNumberOfSteps}</p>
    </div>
  )
}
