'use client'

import { ChangeEvent, ComponentProps, useCallback } from 'react'

import { useFileInput } from './FileInputContext'

type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl(props: FileInputControlProps) {
  const { type: _type, className: _className, ...attrs } = props

  const { id, onFilesSelected } = useFileInput()

  const handleFileSelected = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files?.length) {
        const files = Array.from(event.target.files)
        onFilesSelected(files)
      }
    },
    [onFilesSelected],
  )

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFileSelected}
      {...attrs}
    />
  )
}
