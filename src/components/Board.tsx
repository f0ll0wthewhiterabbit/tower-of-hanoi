import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { FC, useEffect, useState } from 'react'

import { TDiskSize } from '@/types/disc.types'
import { TRodIndex } from '@/types/rod-index.types'

import { Rod } from './Rod'
import { useStore } from '@/store'

interface BoardProps {
  onChange: () => void
}

export const Board: FC<BoardProps> = ({ onChange }) => {
  const setInitialDisks = useStore(state => state.setInitialDisks)
  const moveDisk = useStore(state => state.moveDisk)
  const getRodDisks = useStore(state => state.getRodDisks)
  const [disabledRods, setDisabledRods] = useState<TRodIndex[]>([])

  useEffect(() => {
    setInitialDisks()
  }, [setInitialDisks])

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

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
    >
      <main className='grid h-[288px] grid-cols-3'>
        <Rod index={0} isDisabled={disabledRods.includes(0)} />
        <Rod index={1} isDisabled={disabledRods.includes(1)} />
        <Rod index={2} isDisabled={disabledRods.includes(2)} />
      </main>
    </DndContext>
  )
}
