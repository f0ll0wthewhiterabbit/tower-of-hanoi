import { TRodIndex } from './rod.types'

export type TDiskSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type TInitialDisksNumber = 3 | 4 | 5 | 6 | 7 | 8

export interface IDisk {
  size: TDiskSize
  rodIndex: TRodIndex
  bgClass: string
  bgClassActive: string
  isDragging: boolean
}
