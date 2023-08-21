import { ComponentProps } from 'react'

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  const { className: _, ...attrs } = props

  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...attrs}
    />
  )
}
