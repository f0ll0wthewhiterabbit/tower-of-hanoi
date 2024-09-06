import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { FC } from 'react'

import { IDisk } from '@/types/disc.types'

import { cn } from '@/helpers/utils.helpers'
import { useStore } from '@/store'

interface DiskProps {
  data: IDisk
  isDisabled: boolean
  isOver: boolean
}

export const Disk: FC<DiskProps> = ({ data, isDisabled, isOver }) => {
  const isGameFinished = useStore(state => state.isGameFinished())
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${data.size}`,
    data,
    disabled: isDisabled || isGameFinished,
  })

  return (
    <div
      className={cn(
        'rounded-2xl',
        'h-[24px]',
        'transition-colors',
        data.widthClass,
        isDisabled && !isGameFinished ? data.bgClass : data.bgClassActive,
        isDisabled || isGameFinished ? 'cursor-default' : 'cursor-pointer',
        isDisabled || isOver ? 'z-20' : 'z-30',
      )}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...listeners}
      {...attributes}
    ></div>
  )
}
