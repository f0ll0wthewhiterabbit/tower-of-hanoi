import { ArrowLeftToLine } from 'lucide-react'
import { useState } from 'react'

import { Modal } from './Modal'
import { cn } from '@/helpers/utils.helpers'
import { useStore } from '@/store'

export const GameReset = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const resetGame = useStore(state => state.resetGame)

  function closeModal(): void {
    setIsModalOpened(false)
  }

  function showModal(): void {
    setIsModalOpened(true)
  }

  function handleModalConfirm(): void {
    closeModal()
    resetGame()
  }

  return (
    <>
      <button
        className={cn('btn', 'btn-sm', 'md:btn-md', 'btn-ghost', 'rounded-md', 'btn-square')}
        onClick={showModal}
      >
        <ArrowLeftToLine size={28} />
      </button>
      <Modal
        isOpened={isModalOpened}
        title='Restart game'
        text='Are you sure you want to restart? All progress will be lost.'
        confirmButtonTitle='Restart'
        isWarning
        onCancel={closeModal}
        onConfirm={handleModalConfirm}
      />
    </>
  )
}
