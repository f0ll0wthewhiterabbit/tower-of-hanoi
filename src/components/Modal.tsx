import { FC, KeyboardEvent, PropsWithChildren, useEffect, useRef } from 'react'

import { Button } from './Button'

interface ModalProps {
  isOpened: boolean
  title: string
  text: string
  confirmButtonTitle: string
  isCloseDisabled?: boolean
  onConfirm: () => void
  onCancel?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  isOpened,
  title,
  text,
  confirmButtonTitle,
  isCloseDisabled,
  onConfirm,
  onCancel,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpened) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpened])

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (isCloseDisabled) {
      event.preventDefault()
    }
  }

  return (
    <dialog ref={dialogRef} className='modal' onKeyDown={handleKeyDown}>
      <div className='modal-box rounded-lg bg-[#141519]'>
        <h3 className='mb-[24px] text-lg font-bold'>{title}</h3>
        <p className='text-lg'>{text}</p>
        {children}
        <div className='modal-action mt-[40px]'>
          {onCancel && <Button onClick={onCancel}>Cancel</Button>}
          <Button isWarning onClick={onConfirm}>
            {confirmButtonTitle}
          </Button>
        </div>
      </div>
      {!isCloseDisabled && (
        <form method='dialog' className='modal-backdrop' onSubmit={onCancel}>
          <button>Cancel</button>
        </form>
      )}
    </dialog>
  )
}
