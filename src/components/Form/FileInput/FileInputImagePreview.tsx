'use client'

import { useMemo } from 'react'

import { User } from 'lucide-react'

import { useFileInput } from './FileInputContext'

export function FileInputImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    const isEmpty = files.length === 0

    if (isEmpty) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      <User className="h-8 w-8 text-violet-500" />
    </div>
  )
}
