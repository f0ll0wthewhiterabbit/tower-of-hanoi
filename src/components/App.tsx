import { Footer } from './Footer'
import { GameBoard } from './GameBoard'
import { GameFooter } from './GameFooter'
import { GameHeader } from './GameHeader'
import { GameStart } from './GameStart'
import { Header } from './Header'
import { useStore } from '@/store'

export const App = () => {
  const disks = useStore(state => state.disks)
  const incrementSteps = useStore(state => state.incrementSteps)

  return (
    <>
      <Header />
      <main className='w-full max-w-screen-xl justify-self-center p-10'>
        <div className='grid h-[464px] grid-rows-[80px,1fr,80px] overflow-hidden rounded-xl bg-neutral-50 px-8 py-[12px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:bg-gray-950'>
          <GameHeader />
          {disks.length ? <GameBoard onChange={incrementSteps} /> : <GameStart />}
          <GameFooter />
        </div>
      </main>
      <Footer />
    </>
  )
}
