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
      <main className='size-full max-w-screen-xl justify-self-center md:h-auto md:p-6 lg:p-10'>
        <div className='grid h-full grid-rows-[max-content,1fr,max-content] items-center overflow-hidden bg-neutral-50 p-[8px] sm:p-[12px] md:h-[464px] md:grid-rows-[80px,1fr,80px] md:rounded-xl md:p-[24px] md:py-[12px] md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] lg:px-[40px] dark:bg-gray-950'>
          <GameHeader />
          {disks.length ? <GameBoard onChange={incrementSteps} /> : <GameStart />}
          <GameFooter />
        </div>
      </main>
      <Footer />
    </>
  )
}
