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
  const bgClass =
    isOver || isGameFinished ? 'bg-slate-400 dark:bg-gray-600' : 'bg-slate-300 dark:bg-gray-800'

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
        'mx-[1px]',
        'sm-[4px]',
        'md:mx-[8px]',
        'lg:mx-[16px]',
        'xl:mx-[24px]',
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
          'h-[208px]',
          'sm:h-[216px]',
          'w-[8px]',
          'sm:w-[16px]',
          'rounded-t-2xl',
          'transition-colors',
          bgClass,
        )}
      ></div>
      <div
        className={cn(
          'h-[8px]',
          'sm:h-[16px]',
          'w-full',
          'rounded-2xl',
          'transition-colors',
          bgClass,
        )}
      ></div>
    </div>
  )
}
