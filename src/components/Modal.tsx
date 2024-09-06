import { FC, useEffect, useRef } from 'react'

import { Button } from './Button'

interface ModalProps {
  isOpened: boolean
  title: string
  text: string
  confirmButtonTitle: string
  isCancelButtonHidden?: boolean
  onCancel: () => void
  onConfirm: () => void
}

export const Modal: FC<ModalProps> = ({
  isOpened,
  title,
  text,
  confirmButtonTitle,
  isCancelButtonHidden,
  onCancel,
  onConfirm,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpened) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpened])

  return (
    <dialog ref={dialogRef} className='modal'>
      <div className='modal-box rounded-lg bg-[#141519]'>
        <h3 className='mb-[16px] text-lg font-bold'>{title}</h3>
        <p className='text-lg'>{text}</p>
        <div className='modal-action mt-[40px]'>
          {!isCancelButtonHidden && <Button onClick={onCancel}>Cancel</Button>}
          <Button isWarning onClick={onConfirm}>
            {confirmButtonTitle}
          </Button>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop' onSubmit={onCancel}>
        <button>Cancel</button>
      </form>
    </dialog>
  )
}
