import { IDisk } from '@/interfaces/disc.interface'

export const getInitialDisks = (): IDisk[] => [
  {
    size: 1,
    rodIndex: 0,
    widthClass: 'w-2/12',
    bgClass: 'bg-rose-800',
    bgClassActive: 'bg-rose-400',
  },
  {
    size: 2,
    rodIndex: 0,
    widthClass: 'w-3/12',
    bgClass: 'bg-teal-800',
    bgClassActive: 'bg-teal-400',
  },
  {
    size: 3,
    rodIndex: 0,
    widthClass: 'w-4/12',
    bgClass: 'bg-fuchsia-800',
    bgClassActive: 'bg-fuchsia-400',
  },
  {
    size: 4,
    rodIndex: 0,
    widthClass: 'w-5/12',
    bgClass: 'bg-amber-800',
    bgClassActive: 'bg-amber-400',
  },
  {
    size: 5,
    rodIndex: 0,
    widthClass: 'w-6/12',
    bgClass: 'bg-violet-800',
    bgClassActive: 'bg-violet-400',
  },
  {
    size: 6,
    rodIndex: 0,
    widthClass: 'w-7/12',
    bgClass: 'bg-cyan-800',
    bgClassActive: 'bg-cyan-400',
  },
  {
    size: 7,
    rodIndex: 0,
    widthClass: 'w-8/12',
    bgClass: 'bg-lime-800',
    bgClassActive: 'bg-lime-400',
  },
  {
    size: 8,
    rodIndex: 0,
    widthClass: 'w-9/12',
    bgClass: 'bg-indigo-800',
    bgClassActive: 'bg-indigo-400',
  },
]
