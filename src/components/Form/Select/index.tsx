'use client'

import { ReactNode } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

type SelectProps = RadixSelect.SelectProps & {
  children: ReactNode
  placeholder: string
}

export function Select(props: SelectProps) {
  const { children, placeholder, ...attrs } = props

  return (
    <RadixSelect.Root {...attrs}>
      <RadixSelect.Trigger className="pv-2 flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-500 px-3 shadow-sm outline-none transition-colors focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:data-[placeholder]:text-zinc-400">
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
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
