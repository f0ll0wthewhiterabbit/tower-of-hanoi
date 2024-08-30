import { FC } from 'react'

import { cn } from '@/helpers/utils.helper'
import { Disk } from '@/interfaces/disc.interface'

interface RodProps {
  discs: Disk[]
}

export const Rod: FC<RodProps> = ({ discs }) => {
  return (
    <div className='relative flex flex-col items-center justify-end'>
      {discs.map(({ size, widthClass, backgroundClass }) => (
        <div
          className={cn('rounded-2xl', 'h-[24px]', 'z-20', widthClass, backgroundClass)}
          key={size}
        ></div>
      ))}
      <div className='absolute bottom-[24px] z-10 h-[216px] w-[24px] rounded-t-2xl bg-yellow-900'></div>
      <div className='h-[24px] w-10/12 rounded-2xl bg-yellow-900'></div>
    </div>
  )
}
