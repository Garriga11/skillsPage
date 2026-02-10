'use client'
import { AnimatedBackground } from '@/app/components/ui/animated-background';
import { TextLoop } from '@/app/components/ui/text-loop';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-100 px-0 py-2 dark:border-zinc-800">
      <div className="flex flex-col items-center gap-2">
        <img src="/logo.jpg" alt="logo" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-lg" />
        <p className="text-zinc-900 dark:text-zinc-50 text-lg font-semibold italic">G19 Programs</p>
        <a href="https://github.com/garriga11/portfoliopage" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>Built with Next.js.</span>
            <span>G19 Programs.com</span>
            <span>Built with Motion-Primitives.</span>
          </TextLoop>
        </a>

        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
