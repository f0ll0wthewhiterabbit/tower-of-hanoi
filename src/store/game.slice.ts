import { StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { LOCAL_STORAGE_KEYS } from '@/constants/storage.constants'

import { IDisk, TDiskSize, TInitialDisksNumber } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod.types'

import { getInitialDisks } from '@/helpers/disk.helpers'

export interface IGameState {
  steps: number
  disks: IDisk[]
  disksNumber: TInitialDisksNumber
}

const initialState: IGameState = {
  steps: 0,
  disks: [],
  disksNumber: 6,
}

export interface IGameGetters {
  getRodDisks: (rodIndex: TRodIndex) => IDisk[]
  isGameFinished: () => boolean
}

export interface IGameActions {
  incrementSteps: () => void
  setDisksNumber: (disksNumber: TInitialDisksNumber) => void
  setInitialDisks: () => void
  moveDisk: (rodIndex: TRodIndex, diskSize: TDiskSize) => void
  resetGame: () => void
}

export type TGameSlice = IGameState & IGameGetters & IGameActions

export const createGameSlice: StateCreator<TGameSlice, [], [['zustand/persist', TGameSlice]]> =
  persist(
    (set, get) => ({
      ...initialState,
      getRodDisks: (rodIndex: TRodIndex) => get().disks.filter(disk => disk.rodIndex === rodIndex),
      isGameFinished: () => get().disks.length === get().getRodDisks(2).length,
      incrementSteps: () => set({ steps: get().steps + 1 }),
      setDisksNumber: (disksNumber: TInitialDisksNumber) => set({ disksNumber }),
      setInitialDisks: () => set({ disks: getInitialDisks(get().disksNumber) }),
      moveDisk: (rodIndex: TRodIndex, diskSize: TDiskSize) =>
        set({
          disks: get().disks.map(disk => (disk.size === diskSize ? { ...disk, rodIndex } : disk)),
        }),
      resetGame: () =>
        set({
          ...initialState,
          disksNumber: get().disksNumber,
        }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.GAME_STORAGE,
    },
  )
