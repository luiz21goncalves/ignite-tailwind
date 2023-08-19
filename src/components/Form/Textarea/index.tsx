import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  const { className: _className, ...attrs } = props

  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none transition-colors focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      {...attrs}
    />
  )
}
