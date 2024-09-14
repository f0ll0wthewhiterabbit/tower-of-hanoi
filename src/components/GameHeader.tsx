import { GameReset } from './GameReset'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useStore } from '@/store'

export const GameHeader = () => {
  const disks = useStore(state => state.disks)

  return (
    <header className='flex items-center justify-center gap-4 sm:justify-start'>
      {Boolean(disks.length) && <GameReset />}
      <ThemeSwitcher isSmallScreenOnly />
    </header>
  )
}
