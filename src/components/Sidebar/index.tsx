import { Search } from 'lucide-react'

import { Input } from '../Input'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Icon>
          <Search className="text-zinc-500" />
        </Input.Icon>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />
      <UsedSpaceWidget />
      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}
