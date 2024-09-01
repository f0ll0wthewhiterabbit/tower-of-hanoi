import { Undo2 } from 'lucide-react'
import { useRef } from 'react'

import { Button } from './Button'
import { useStore } from '@/store'

export const ResetGame = () => {
  const resetGame = useStore(state => state.resetGame)
  const setInitialDisks = useStore(state => state.setInitialDisks)
  const resetGameDialog = useRef<HTMLDialogElement | null>(null)

  function showModal(): void {
    resetGameDialog.current?.showModal()
  }

  function closeModal(): void {
    resetGameDialog.current?.close()
  }

  function handleConfirmButtonClick(): void {
    resetGame()
    setInitialDisks()
    closeModal()
  }

  return (
    <>
      <Button isIconOnly onClick={showModal}>
        <Undo2 size={18} />
      </Button>
      <dialog ref={resetGameDialog} className='modal'>
        <div className='modal-box rounded-lg bg-[#141519]'>
          <p className='text-lg'>Are you sure you want to reset the game?</p>
          <div className='modal-action'>
            <Button onClick={closeModal}>Cancel</Button>
            <Button isWarning onClick={handleConfirmButtonClick}>
              Confirm
            </Button>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
