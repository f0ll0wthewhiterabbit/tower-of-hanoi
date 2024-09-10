import { TAILWIND_COLORS } from '@/constants/tailwind.constants'

import { IDisk, TDiskSize, TInitialDisksNumber } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod.types'

import { getRandomUniqueElementsFromArray } from './utils.helpers'

export const getInitialDisks = (disksNumber: TInitialDisksNumber): IDisk[] => {
  const colors = getRandomUniqueElementsFromArray<string>(TAILWIND_COLORS, disksNumber)

  return colors.map((color, index) => {
    const size = (disksNumber - index) as TDiskSize

    return {
      size,
      rodIndex: 0 as TRodIndex,
      bgClass: `bg-${color}-200 dark:bg-${color}-800`,
      bgClassActive: `bg-${color}-500 dark:bg-${color}-400`,
      isDragging: false,
    }
  })
}
