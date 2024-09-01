import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { TGameSlice, createGameSlice } from './game.slice'

export const useStore = create<TGameSlice>()(
  devtools((set, get, api) => ({ ...createGameSlice(set, get, api) })),
)
