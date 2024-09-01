import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export const getRandomUniqueElementsFromArray = <T>(array: Readonly<T[]>, size: number): T[] => {
  const shuffledItems = [...array].sort(() => 0.5 - Math.random())

  return shuffledItems.slice(0, size)
}
