import { Logo } from './Logo'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <header className='flex items-center justify-center bg-neutral-50 p-[16px] text-inherit sm:justify-between sm:bg-neutral sm:p-7 sm:text-neutral-content md:p-10 dark:bg-gray-950 sm:dark:bg-neutral'>
      <Logo />
      <ThemeSwitcher isSmallScreenOnly={false} />
    </header>
  )
}
