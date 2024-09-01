import { IDisk, TDiskSize, TInitialDisksNumber } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod-index.types'

import { getRandomUniqueElementsFromArray } from './utils.helpers'
import { COLORS } from '@/constants.ts/tailwind.constants'

export const getInitialDisks = (disksNumber: TInitialDisksNumber): IDisk[] => {
  const colors = getRandomUniqueElementsFromArray<string>(COLORS, disksNumber)

  return colors
    .map((color, index) => {
      const size = (8 - index) as TDiskSize

      return {
        size,
        rodIndex: 0 as TRodIndex,
        widthClass: `w-${size + 1}/12`,
        bgClass: `bg-${color}-800`,
        bgClassActive: `bg-${color}-400`,
      }
    })
    .reverse()
}