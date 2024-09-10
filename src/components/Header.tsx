import { Logo } from './Logo'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <header className='flex items-center justify-between bg-neutral p-10 text-neutral-content'>
      <Logo />
      <ThemeSwitcher />
    </header>
  )
}
