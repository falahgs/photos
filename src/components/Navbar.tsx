import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b dark:border-gray-800">
      <h1 className="text-xl font-bold">Books Library</h1>
      <ThemeToggle />
    </nav>
  )
} 