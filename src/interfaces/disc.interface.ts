import { TRodIndex } from './rod-index.interface'

export type TDiskSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface IDisk {
  size: TDiskSize
  rodIndex: TRodIndex
  widthClass: string
  bgClass: string
  bgClassActive: string
}
