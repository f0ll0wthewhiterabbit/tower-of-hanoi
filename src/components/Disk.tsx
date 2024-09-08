import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { FC } from 'react'

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

  return (
    <div
      className={cn(
        'absolute',
        'h-[40px]',
        'p-[8px]',
        `bottom-[${index * 24 + 32}px]`,
        isDisabled || isGameFinished ? 'cursor-default' : 'cursor-pointer',
        isDisabled || isOver ? 'z-20' : 'z-30',
      )}
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        width: `calc(100% / 12 * ${data.size + 1} + 16px)`,
      }}
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
