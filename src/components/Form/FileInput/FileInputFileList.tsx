'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from './FileInputContext'
import { FileInputFileItem } from './FileInputFileItem'

export function FileInputFileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file, index) => {
        const key = `${file.name}-${index}`

        return (
          <FileInputFileItem
            key={key}
            name={file.name}
            size={file.size}
            state="complete"
          />
        )
      })}
    </div>
  )
}
