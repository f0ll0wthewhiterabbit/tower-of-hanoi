import { getRandomUniqueElementsFromArray } from './utils.helper'
import { COLORS } from '@/constants.ts/tailwind.constants'
import { IDisk, TDiskSize, TInitialDisksNumber } from '@/interfaces/disc.interface'
import { TRodIndex } from '@/interfaces/rod-index.interface'

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
