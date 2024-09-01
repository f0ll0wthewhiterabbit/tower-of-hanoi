import { FC, PropsWithChildren } from 'react'

import { cn } from '@/helpers/utils.helper'

interface ButtonProps {
  isIconOnly?: boolean
  isWarning?: boolean
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  isIconOnly,
  isWarning,
  children,
}) => {
  return (
    <button
      className={cn(
        'btn',
        'btn-outline',
        'btn-sm',
        'rounded-md',
        isIconOnly && 'btn-square',
        isWarning && 'btn-warning',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
