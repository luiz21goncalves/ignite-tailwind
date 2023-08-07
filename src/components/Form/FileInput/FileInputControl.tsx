import { ComponentProps } from 'react'

type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl(props: FileInputControlProps) {
  const { type: _type, className: _className, ...attrs } = props

  return <input type="file" className="sr-only" {...attrs} />
}
