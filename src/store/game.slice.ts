import { StateCreator } from 'zustand'

import { getInitialDisks } from '@/helpers/disk.helper'
import { IDisk, TDiskSize, TInitialDisksNumber } from '@/interfaces/disc.interface'
import { TRodIndex } from '@/interfaces/rod-index.interface'

export interface IGameState {
  steps: number
  disks: IDisk[]
  disksNumber: TInitialDisksNumber
}

const initialState: IGameState = {
  steps: 0,
  disks: [],
  disksNumber: 8,
}

export interface IGameGetters {
  getRodDisks: (rodIndex: TRodIndex) => IDisk[]
}

export interface IGameActions {
  incrementSteps: () => void
  resetGame: () => void
  setInitialDisks: () => void
  moveDisk: (rodIndex: TRodIndex, diskSize: TDiskSize) => void
}

export type TGameSlice = IGameState & IGameGetters & IGameActions

export const createGameSlice: StateCreator<TGameSlice, [], [], TGameSlice> = (set, get) => ({
  ...initialState,
  getRodDisks: (rodIndex: TRodIndex) => get().disks.filter(disk => disk.rodIndex === rodIndex),
  incrementSteps: () => set({ steps: get().steps + 1 }),
  resetGame: () => set(initialState),
  setInitialDisks: () => set({ disks: getInitialDisks(get().disksNumber) }),
  moveDisk: (rodIndex: TRodIndex, diskSize: TDiskSize) =>
    set({
      disks: get().disks.map(disk => (disk.size === diskSize ? { ...disk, rodIndex } : disk)),
    }),
})
