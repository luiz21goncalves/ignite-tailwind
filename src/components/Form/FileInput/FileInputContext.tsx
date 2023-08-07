'use client'

import { ReactNode, createContext, useContext, useId, useState } from 'react'

type FileInputContextData = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

type FileInputProviderProps = {
  children: ReactNode
}

const FileInputContext = createContext({} as FileInputContextData)

export function FileInputProvider(props: FileInputProviderProps) {
  const { children } = props

  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      {children}
    </FileInputContext.Provider>
  )
}

export function useFileInput() {
  return useContext(FileInputContext)
}
