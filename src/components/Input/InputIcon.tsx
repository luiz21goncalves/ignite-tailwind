import { ComponentProps, ReactNode } from 'react'

type InputIconProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function InputIcon(props: InputIconProps) {
  const { children, className: _, ...attrs } = props

  return (
    <div className="flex h-5 w-5 items-center justify-center" {...attrs}>
      {children}
    </div>
  )
}
