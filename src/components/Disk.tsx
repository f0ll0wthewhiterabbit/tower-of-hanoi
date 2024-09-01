import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { FC } from 'react'

import { IDisk } from '@/types/disc.types'

import { cn } from '@/helpers/utils.helpers'

interface DiskProps {
  data: IDisk
  isDisabled: boolean
}

export const Disk: FC<DiskProps> = ({ data, isDisabled }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${data.size}`,
    data,
    disabled: isDisabled,
  })

  return (
    <div
      className={cn(
        'rounded-2xl',
        'h-[24px]',
        'transition-colors',
        data.widthClass,
        isDisabled ? data.bgClass : data.bgClassActive,
        isDisabled ? 'cursor-default' : 'cursor-pointer',
        isDisabled ? 'z-20' : 'z-30',
      )}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...listeners}
      {...attributes}
    ></div>
  )
}
