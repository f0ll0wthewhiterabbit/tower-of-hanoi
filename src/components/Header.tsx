import { Shapes } from 'lucide-react'

export const Header = () => {
  return (
    <header className='flex items-center justify-between bg-neutral p-10 text-neutral-content'>
      <div className='flex items-center'>
        <Shapes className='mr-[8px]' size={32} strokeWidth={2} />{' '}
        <span className='font-["Bruno_Ace_SC",_sans-serif] text-2xl font-semibold'>
          TOWER OF HANOI
        </span>
      </div>
    </header>
  )
}
