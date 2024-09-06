import { Undo2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from './Button'
import { Modal } from './Modal'
import { useStore } from '@/store'

export const ResetGame = () => {
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
      <Button isIconOnly onClick={showModal}>
        <Undo2 size={18} />
      </Button>
      <Modal
        isOpened={isModalOpened}
        title='Restart game'
        text='Are you sure you want to restart? All progress will be lost.'
        confirmButtonTitle='Restart'
        onCancel={closeModal}
        onConfirm={handleModalConfirm}
      />
    </>
  )
}
