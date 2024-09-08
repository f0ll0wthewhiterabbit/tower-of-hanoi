import { useDroppable } from '@dnd-kit/core'
import { FC, useEffect, useState } from 'react'

import { IDisk } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod.types'

import { Disk } from './Disk'
import { cn } from '@/helpers/utils.helpers'
import { useStore } from '@/store'

interface RodProps {
  index: TRodIndex
  isDisabled: boolean
}

export const Rod: FC<RodProps> = ({ index, isDisabled }) => {
  const allDisks = useStore(state => state.disks)
  const getRodDisks = useStore(state => state.getRodDisks)
  const isGameFinished = useStore(state => state.isGameFinished())
  const [disks, setDisks] = useState<IDisk[]>([])
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${index}`,
    data: { index },
    disabled: isDisabled,
  })
  const bgClass = isOver || isGameFinished ? 'bg-gray-600' : 'bg-gray-800'

  useEffect(() => {
    setDisks(getRodDisks(index))
  }, [allDisks, index, getRodDisks])

  return (
    <div
      className={cn(
        'relative',
        'flex',
        'flex-col',
        'items-center',
        'justify-end',
        'py-[24px]',
        isGameFinished && 'animate-pulse',
      )}
      ref={setNodeRef}
    >
      {disks.map((disk, index) => (
        <Disk
          data={disk}
          index={index}
          isDisabled={index !== disks.length - 1}
          isOver={isOver}
          key={disk.size}
        ></Disk>
      ))}
      <div
        className={cn(
          'z-10',
          'h-[216px]',
          'w-[16px]',
          'rounded-t-2xl',
          'transition-colors',
          bgClass,
        )}
      ></div>
      <div className={cn('h-[16px]', 'w-10/12', 'rounded-2xl', 'transition-colors', bgClass)}></div>
    </div>
  )
}
