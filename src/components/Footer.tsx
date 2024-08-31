import { FC } from 'react'

interface FooterProps {
  steps: number
}

export const Footer: FC<FooterProps> = ({ steps }) => {
  return (
    <footer className='flex h-[80px] items-center justify-end pb-[12px]'>
      <span className='text-2xl font-semibold'>Steps: {steps}</span>
    </footer>
  )
}
