'use client'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'

export default function ThemeToggle(): ReactElement {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (enabled) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [enabled])

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="px-2 py-1 border rounded hover:bg-charcoal hover:text-softwhite dark:bg-softwhite dark:text-charcoal"
      aria-label="Toggle dark mode"
    >
      {enabled ? 'Light' : 'Dark'}
    </button>
  )
}
