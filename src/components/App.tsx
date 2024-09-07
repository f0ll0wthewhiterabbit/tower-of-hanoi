import { Footer } from './Footer'
import { GameBoard } from './GameBoard'
import { GameFooter } from './GameFooter'
import { GameHeader } from './GameHeader'
import { GameStart } from './GameStart'
import { useStore } from '@/store'

export const App = () => {
  const disks = useStore(state => state.disks)
  const incrementSteps = useStore(state => state.incrementSteps)

  return (
    <>
      <main className='p-8'>
        <div className='grid h-[464px] grid-rows-[80px,1fr,80px] overflow-hidden rounded-xl bg-gray-950 px-8 py-[12px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
          <GameHeader />
          {disks.length ? <GameBoard onChange={incrementSteps} /> : <GameStart />}
          <GameFooter />
        </div>
      </main>
      <Footer />
    </>
  )
}
