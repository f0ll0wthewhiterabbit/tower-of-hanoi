import { TInitialDisksNumber } from '@/types/disc.types'

export const getMinimumNumberOfSteps = (disksNumber: TInitialDisksNumber): number => {
  return 2 ** disksNumber - 1
}
