import { useDroppable } from '@dnd-kit/core'
import { FC } from 'react'

import { Disk } from './Disk'
import { cn } from '@/helpers/utils.helper'
import { IDisk } from '@/interfaces/disc.interface'
import { TRodIndex } from '@/interfaces/rod-index.interface'

interface RodProps {
  discs: IDisk[]
  index: TRodIndex
  isDisabled: boolean
}

export const Rod: FC<RodProps> = ({ discs, index, isDisabled }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${index}`,
    data: { index },
    disabled: isDisabled,
  })
  const bgClass = isOver ? 'bg-yellow-900' : 'bg-yellow-950'

  return (
    <div className='relative flex flex-col items-center justify-end py-[24px]' ref={setNodeRef}>
      {discs.map((disk, index) => (
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
          bgClass,
        )}
      ></div>
      <div className={cn('h-[24px]', 'w-10/12', 'rounded-2xl', bgClass)}></div>
    </div>
  )
}
