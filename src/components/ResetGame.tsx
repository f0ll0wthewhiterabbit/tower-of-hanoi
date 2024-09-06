import { Undo2 } from 'lucide-react'
import { useRef } from 'react'

import { Button } from './Button'
import { useStore } from '@/store'

export const ResetGame = () => {
  const resetGame = useStore(state => state.resetGame)
  const resetGameDialog = useRef<HTMLDialogElement | null>(null)

  function showModal(): void {
    resetGameDialog.current?.showModal()
  }

  function closeModal(): void {
    resetGameDialog.current?.close()
  }

  function handleConfirmButtonClick(): void {
    resetGame()
    closeModal()
  }

  return (
    <>
      <Button isIconOnly onClick={showModal}>
        <Undo2 size={18} />
      </Button>
      <dialog ref={resetGameDialog} className='modal'>
        <div className='modal-box rounded-lg bg-[#141519]'>
          <h3 className='mb-[16px] text-lg font-bold'>Restart game</h3>
          <p className='text-lg'>Are you sure you want to restart? All progress will be lost.</p>
          <div className='modal-action mt-[40px]'>
            <Button onClick={closeModal}>Cancel</Button>
            <Button isWarning onClick={handleConfirmButtonClick}>
              Restart
            </Button>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>Cancel</button>
        </form>
      </dialog>
    </>
  )
}
