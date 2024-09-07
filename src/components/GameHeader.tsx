import { GameReset } from './GameReset'
import { useStore } from '@/store'

export const GameHeader = () => {
  const disks = useStore(state => state.disks)

  return <header className='flex items-center'>{Boolean(disks.length) && <GameReset />}</header>
}
