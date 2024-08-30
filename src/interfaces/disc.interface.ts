import { TRodIndex } from './rod-index.interface'

export interface IDisk {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  rodIndex: TRodIndex
  widthClass: string
  bgClass: string
  bgClassActive: string
}
