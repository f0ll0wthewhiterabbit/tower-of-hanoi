import { DifficultySlider } from './DifficultySlider'
import { useStore } from '@/store'

export const GameStart = () => {
  const setInitialDisks = useStore(state => state.setInitialDisks)

  return (
    <main className='flex flex-col items-center justify-center'>
      <DifficultySlider />
      <button className='btn btn-primary btn-lg mt-12 text-2xl ' onClick={setInitialDisks}>
        Let&apos;s play!
      </button>
    </main>
  )
}
