import { ComponentProps, ReactNode } from 'react'

type InputRootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function InputRoot(props: InputRootProps) {
  const { children, className: _, ...attrs } = props

  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...attrs}
    >
      {children}
    </div>
  )
}
