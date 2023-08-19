'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

type TabItemProps = {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem(props: TabItemProps) {
  const { title, value, isSelected = false } = props

  return (
    <Tabs.Trigger
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-400 outline-none transition-colors hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span className="rounded transition-colors group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="active-tab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
