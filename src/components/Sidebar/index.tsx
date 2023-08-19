import { Search } from 'lucide-react'

import { Input } from '../Form/Input'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="fixed inset-0 z-20 flex h-screen flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
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
