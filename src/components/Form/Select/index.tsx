'use client'

import { ReactNode } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

type SelectProps = {
  children: ReactNode
  placeholder: string
}

export function Select(props: SelectProps) {
  const { children, placeholder } = props

  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="pv-2 flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-500 px-3 shadow-sm data-[placeholder]:text-zinc-600">
        <RadixSelect.Value placeholder={placeholder} className="text-black" />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
