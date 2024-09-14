import { THEMES } from './theme.constants'

export const TAILWIND_COLORS = [
  'amber',
  'lime',
  'emerald',
  'cyan',
  'blue',
  'indigo',
  'violet',
  'fuchsia',
] as const

export const TAILWIND_THEMES = {
  [THEMES.LIGHT]: 'emerald',
  [THEMES.DARK]: 'night',
} as const

export const TAILWIND_DARK_THEME_CLASS = 'dark'

export enum TAILWIND_BREAKPOINTS {
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  '2XL' = 1536,
}
