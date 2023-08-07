'use client'

import { filesize } from 'filesize'
import { Trash2, UploadCloud } from 'lucide-react'

import { useFileInput } from './FileInputContext'

export function FileInputFileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file, index) => {
        const key = `${file.name}-${index}`

        const size = filesize(file.size, { round: 1 }) as string

        return (
          <div
            key={key}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col items-start">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">{size}</span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-4/5 bg-violet-600" />
                </div>

                <span className="text-sm font-medium text-zinc-900">80%</span>
              </div>
            </div>

            <button
              type="button"
              className="rounded-md p-2 transition-colors hover:bg-zinc-50"
            >
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
