import { ComponentProps } from 'react'

import { FileInputProvider } from './FileInputContext'

type FileInputRootProps = ComponentProps<'div'>

export function FileInputRoot(props: FileInputRootProps) {
  const { ...attrs } = props

  return (
    <FileInputProvider>
      <div {...attrs} />
    </FileInputProvider>
  )
}
