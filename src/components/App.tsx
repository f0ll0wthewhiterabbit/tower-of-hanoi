import { Board } from './Board'

export const App = () => {
  return (
    <div className='flex-1 overflow-hidden rounded-xl bg-gray-950 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <header className='mb-[40px] h-[64px]'></header>
      <Board />
      <footer className='mt-[40px] h-[64px]'></footer>
    </div>
  )
}
