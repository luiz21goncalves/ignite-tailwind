import { ComponentProps } from 'react'

type FileInputRootProps = ComponentProps<'div'>

export function FileInputRoot(props: FileInputRootProps) {
  const { ...attrs } = props

  return <div {...attrs} />
}
