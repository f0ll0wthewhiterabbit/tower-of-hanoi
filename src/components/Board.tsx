import { FC, PropsWithChildren } from 'react'

export const Board: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-[500px] flex-1 rounded-lg bg-gray-950 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      {children}
    </div>
  )
}
