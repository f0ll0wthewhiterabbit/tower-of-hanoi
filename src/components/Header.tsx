import { ResetGame } from './ResetGame'
import { useStore } from '@/store'

export const Header = () => {
  const disks = useStore(state => state.disks)

  return <header className='flex items-center'>{Boolean(disks.length) && <ResetGame />}</header>
}
