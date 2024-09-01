import { Board } from './Board'
import { Footer } from './Footer'
import { Header } from './Header'
import { useStore } from '@/store'

export const App = () => {
  const incrementSteps = useStore(state => state.incrementSteps)

  return (
    <div className='flex-1 overflow-hidden rounded-xl bg-gray-950 px-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <Header />
      <Board onChange={incrementSteps} />
      <Footer />
    </div>
  )
}
