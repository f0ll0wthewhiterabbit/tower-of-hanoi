import { Fish, FishSymbol } from 'lucide-react'
import { ChangeEvent } from 'react'

import { TInitialDisksNumber } from '@/types/disc.types'

import { useStore } from '@/store'

export const GameStart = () => {
  const disksNumber = useStore(state => state.disksNumber)
  const setDisksNumber = useStore(state => state.setDisksNumber)
  const setInitialDisks = useStore(state => state.setInitialDisks)

  function handleDisksNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setDisksNumber(Number(event.target.value) as TInitialDisksNumber)
  }

  return (
    <main className='flex flex-col items-center justify-center gap-16'>
      <div className='w-96 text-center'>
        <h2 className='mb-6 text-2xl'>Choose disk size</h2>
        <div className='relative'>
          <FishSymbol
            className='absolute -left-4 top-1/2 -translate-x-full -translate-y-1/2 text-[#262937]'
            size={48}
          />
          <input
            className='range'
            type='range'
            min='3'
            max='8'
            step='1'
            value={disksNumber}
            onChange={handleDisksNumberChange}
          />
          <Fish
            className='absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full text-[#262937]'
            size={48}
          />
        </div>
        <div className='mt-[8px] flex w-full justify-between px-2 text-xl'>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </div>
      </div>
      <button className='btn btn-primary btn-lg text-2xl' onClick={setInitialDisks}>
        Let&apos;s play!
      </button>
    </main>
  )
}
