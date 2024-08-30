import { Rod } from './Rod'

export const Board = () => {
  return (
    <div className='grid h-[240px] grid-cols-3 px-8'>
      <Rod
        discs={[
          { size: 1, widthClass: 'w-2/12', backgroundClass: 'bg-rose-400' },
          { size: 2, widthClass: 'w-3/12', backgroundClass: 'bg-teal-400' },
          { size: 3, widthClass: 'w-4/12', backgroundClass: 'bg-fuchsia-400' },
          { size: 4, widthClass: 'w-5/12', backgroundClass: 'bg-amber-400' },
          { size: 5, widthClass: 'w-6/12', backgroundClass: 'bg-violet-400' },
          { size: 6, widthClass: 'w-7/12', backgroundClass: 'bg-cyan-400' },
          { size: 7, widthClass: 'w-8/12', backgroundClass: 'bg-lime-400' },
          { size: 8, widthClass: 'w-9/12', backgroundClass: 'bg-indigo-400' },
        ]}
      />
      <Rod discs={[]} />
      <Rod discs={[]} />
    </div>
  )
}
