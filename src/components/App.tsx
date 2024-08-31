import { useCallback, useState } from 'react'

import { Board } from './Board'
import { Footer } from './Footer'
import { Header } from './Header'

export const App = () => {
  const [steps, setSteps] = useState<number>(0)

  const handleBoardChange = useCallback(() => setSteps(steps => steps + 1), [])

  return (
    <div className='flex-1 overflow-hidden rounded-xl bg-gray-950 px-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <Header />
      <Board handleChange={handleBoardChange} />
      <Footer steps={steps} />
    </div>
  )
}
