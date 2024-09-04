import { Board } from './Board'
import { Footer } from './Footer'
import { GameStart } from './GameStart'
import { Header } from './Header'
import { useStore } from '@/store'

export const App = () => {
  const disks = useStore(state => state.disks)
  const incrementSteps = useStore(state => state.incrementSteps)

  return (
    <div className='grid h-[464px] flex-1 grid-rows-[80px,1fr,80px] overflow-hidden rounded-xl bg-gray-950 px-8 py-[12px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <Header />
      {disks.length ? <Board onChange={incrementSteps} /> : <GameStart />}
      <Footer />
    </div>
  )
}
