import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { FC, memo, useState } from 'react'

import { Rod } from './Rod'
import { getInitialDisks } from '@/helpers/disk.helper'
import { IDisk } from '@/interfaces/disc.interface'
import { TRodIndex } from '@/interfaces/rod-index.interface'

interface BoardProps {
  handleChange: () => void
}

export const Board: FC<BoardProps> = memo(function Board({ handleChange }) {
  const [disks, setDisks] = useState<IDisk[]>(getInitialDisks(8))
  const [disabledRods, setDisabledRods] = useState<TRodIndex[]>([])
  const rod0Disks = disks.filter(({ rodIndex }) => rodIndex === 0)
  const rod1Disks = disks.filter(({ rodIndex }) => rodIndex === 1)
  const rod2Disks = disks.filter(({ rodIndex }) => rodIndex === 2)

  function handleDragStart(event: DragStartEvent) {
    const { rodIndex, size } = event.active?.data?.current || {}
    const newDisabledRods: TRodIndex[] = [...disabledRods]

    if (typeof rodIndex === 'number') {
      newDisabledRods.push(rodIndex as TRodIndex)
    }

    const upperSizes = [rod0Disks[0]?.size, rod1Disks[0]?.size, rod2Disks[0]?.size]
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
    const diskSize: number | undefined = event.active?.data?.current?.size

    if (typeof rodIndex !== 'number' || typeof diskSize !== 'number') {
      return
    }

    setDisks(disks => disks.map(disk => (disk.size === diskSize ? { ...disk, rodIndex } : disk)))
    handleChange()
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
        <Rod index={0} isDisabled={disabledRods.includes(0)} discs={rod0Disks} />
        <Rod index={1} isDisabled={disabledRods.includes(1)} discs={rod1Disks} />
        <Rod index={2} isDisabled={disabledRods.includes(2)} discs={rod2Disks} />
      </main>
    </DndContext>
  )
})
