import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  const { className: _className, ...attrs } = props

  return (
    <textarea
      className="dark:placehorder-zinc-400 min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none transition-colors focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-violet-500 dark:focus:ring-violet-500/10"
      {...attrs}
    />
  )
}
