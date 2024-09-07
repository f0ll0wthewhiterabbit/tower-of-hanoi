import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { FC, useEffect, useState } from 'react'

import { LOCAL_STORAGE_KEYS } from '@/constants/storage.constants'

import { TDiskSize } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod.types'

import { Modal } from './Modal'
import { Rod } from './Rod'
import { useStore } from '@/store'

interface BoardProps {
  onChange: () => void
}

export const Board: FC<BoardProps> = ({ onChange }) => {
  const [isFinishGameModalOpened, setIsFinishGameModalOpened] = useState(false)
  const steps = useStore(state => state.steps)
  const isGameFinished = useStore(state => state.isGameFinished())
  const moveDisk = useStore(state => state.moveDisk)
  const getRodDisks = useStore(state => state.getRodDisks)
  const resetGame = useStore(state => state.resetGame)
  const [disabledRods, setDisabledRods] = useState<TRodIndex[]>([])

  useEffect(() => {
    if (isGameFinished) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GAME_STORAGE)

      setTimeout(() => {
        setIsFinishGameModalOpened(true)
      }, 2000)
    }
  }, [isGameFinished])

  function handleDragStart(event: DragStartEvent) {
    const { rodIndex, size } = event.active?.data?.current || {}
    const newDisabledRods: TRodIndex[] = [...disabledRods]

    if (typeof rodIndex === 'number') {
      newDisabledRods.push(rodIndex as TRodIndex)
    }

    const upperSizes = [getRodDisks(0)[0]?.size, getRodDisks(1)[0]?.size, getRodDisks(2)[0]?.size]
    upperSizes.forEach((upperSize, index) => {
      if (rodIndex !== index && upperSize < size) {
        newDisabledRods.push(index as TRodIndex)
      }
    })
    setDisabledRods(newDisabledRods)
  }

  function handleDragEnd(event: DragEndEvent) {
    setDisabledRods([])
    const rodIndex: TRodIndex | undefined = event.over?.data?.current?.index
    const diskSize: TDiskSize | undefined = event.active?.data?.current?.size

    if (typeof rodIndex !== 'number' || typeof diskSize !== 'number') {
      return
    }

    moveDisk(rodIndex, diskSize)
    onChange()
  }

  function handleDragCancel() {
    setDisabledRods([])
  }

  function handleFinishGameModalConfirm() {
    setIsFinishGameModalOpened(false)
    resetGame()
  }

  return (
    <>
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
      >
        <main className='grid h-[280px] grid-cols-3'>
          <Rod index={0} isDisabled={disabledRods.includes(0)} />
          <Rod index={1} isDisabled={disabledRods.includes(1)} />
          <Rod index={2} isDisabled={disabledRods.includes(2)} />
        </main>
      </DndContext>
      <Modal
        isOpened={isFinishGameModalOpened}
        title='Congratulations!'
        text={`You've successfully completed the Tower of Hanoi puzzle in ${steps} steps!`}
        confirmButtonTitle='Play Again'
        isCloseDisabled
        onConfirm={handleFinishGameModalConfirm}
      >
        <p className='mt-[16px] text-lg'>Great job! Ready to challenge yourself again?</p>
      </Modal>
    </>
  )
}
