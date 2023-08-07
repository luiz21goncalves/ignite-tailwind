'use client'

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
} from 'react'

type OnFilesSelectedParams = {
  files: File[]
  multiple: boolean
}

type FileInputContextData = {
  id: string
  files: File[]
  onFilesSelected: (params: OnFilesSelectedParams) => void
}

type FileInputProviderProps = {
  children: ReactNode
}

const FileInputContext = createContext({} as FileInputContextData)

export function FileInputProvider(props: FileInputProviderProps) {
  const { children } = props

  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const onFilesSelected = useCallback((params: OnFilesSelectedParams) => {
    if (params.multiple) {
      setFiles((prevState) => {
        return [...prevState, ...params.files]
      })
    } else {
      setFiles(params.files)
    }
  }, [])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      {children}
    </FileInputContext.Provider>
  )
}

export function useFileInput() {
  return useContext(FileInputContext)
}
