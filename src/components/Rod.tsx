import { useDroppable } from '@dnd-kit/core'
import { FC, useEffect, useState } from 'react'

import { IDisk } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod-index.types'

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
  const [disks, setDisks] = useState<IDisk[]>([])
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${index}`,
    data: { index },
    disabled: isDisabled,
  })
  const bgClass = isOver ? 'bg-yellow-900' : 'bg-yellow-950'

  useEffect(() => {
    setDisks(getRodDisks(index))
  }, [allDisks, index, getRodDisks])

  return (
    <div className='relative flex flex-col items-center justify-end py-[24px]' ref={setNodeRef}>
      {disks.map((disk, index) => (
        <Disk data={disk} isDisabled={index !== 0} key={disk.size}></Disk>
      ))}
      <div
        className={cn(
          'absolute',
          'bottom-[48px]',
          'z-10',
          'h-[216px]',
          'w-[24px]',
          'rounded-t-2xl',
          'transition-colors',
          bgClass,
        )}
      ></div>
      <div className={cn('h-[24px]', 'w-10/12', 'rounded-2xl', 'transition-colors', bgClass)}></div>
    </div>
  )
}
