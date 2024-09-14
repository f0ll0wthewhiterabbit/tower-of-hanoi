import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { FC, useEffect, useState } from 'react'

import { TAILWIND_BREAKPOINTS } from '@/constants/tailwind.constants'

import { IDisk } from '@/types/disc.types'

import { cn } from '@/helpers/utils.helpers'
import { useStore } from '@/store'

interface DiskProps {
  data: IDisk
  index: number
  isDisabled: boolean
  isOver: boolean
}

export const Disk: FC<DiskProps> = ({ data, index, isDisabled, isOver }) => {
  const isGameFinished = useStore(state => state.isGameFinished())
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${data.size}`,
    data,
    disabled: isDisabled || isGameFinished,
  })
  const [width, setWidth] = useState<string>('0px')

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth
      let multiplier: 2 | 3 | 4 = 4
      let extraPx: 16 | 24 = 16

      if (screenWidth < TAILWIND_BREAKPOINTS.SM) {
        multiplier = 2
        extraPx = 24
      } else if (screenWidth >= TAILWIND_BREAKPOINTS.SM && screenWidth < TAILWIND_BREAKPOINTS.MD) {
        multiplier = 3
      }

      setWidth(`calc(${(8 - data.size) * multiplier}px + 100% / 9 * ${data.size} + ${extraPx}px)`)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [data.size])

  return (
    <div
      className={cn(
        'absolute',
        'h-[40px]',
        'p-[8px]',
        `bottom-[${index * 24 + 24}px]`,
        `sm:bottom-[${index * 24 + 32}px]`,
        isDisabled || isGameFinished ? 'cursor-default' : 'cursor-pointer',
        isDisabled || isOver ? 'z-20' : 'z-30',
      )}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), width }}
      {...listeners}
      {...attributes}
    >
      <div
        className={cn(
          'transition-colors',
          'rounded-2xl',
          'h-full',
          isDisabled && !isGameFinished ? data.bgClass : data.bgClassActive,
        )}
      ></div>
    </div>
  )
}
