import { getRandomUniqueElementsFromArray } from './utils.helper'
import { COLORS } from '@/constants.ts/tailwind.constants'
import { IDisk, TDiskSize } from '@/interfaces/disc.interface'
import { TRodIndex } from '@/interfaces/rod-index.interface'

export const getInitialDisks = (size: 3 | 4 | 5 | 6 | 7 | 8): IDisk[] => {
  const colors = getRandomUniqueElementsFromArray<string>(COLORS, size)

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
