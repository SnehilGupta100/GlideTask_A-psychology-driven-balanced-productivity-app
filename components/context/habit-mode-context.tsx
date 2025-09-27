"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type HabitModeContextType = {
  activeHabitMode: string | null
  zenTheme: string
  musicPlaylist: string | null
  isDimmed: boolean
  enterHabitMode: (habitName: string, playlist?: string) => void
  exitHabitMode: () => void
  setMusicPlaylist: (playlist: string) => void
}

const HabitModeContext = createContext<HabitModeContextType | undefined>(undefined)

export function useHabitMode() {
  const ctx = useContext(HabitModeContext)
  if (!ctx) throw new Error("useHabitMode must be used within a HabitModeProvider")
  return ctx
}

const ZEN_DEFAULT = "zen-default"

export function HabitModeProvider({ children }: { children: ReactNode }) {
  const [activeHabitMode, setActiveHabitMode] = useState<string | null>(null)
  const [musicPlaylist, setMusicPlaylist] = useState<string | null>(null)
  const [isDimmed, setIsDimmed] = useState(false)

  // Clear any zen-* classes
  const clearZenClasses = () => {
    document.body.className = document.body.className.replace(/\bzen-\w+\b/g, "").trim()
  }

  const enterHabitMode = (habitName: string, playlist?: string) => {
    const theme = `zen-${habitName.toLowerCase().replace(/\s+/g, "-")}`
    setActiveHabitMode(habitName)
    setIsDimmed(true)
    if (playlist) setMusicPlaylist(playlist)
    clearZenClasses()
    document.body.classList.add(theme)
  }

  const exitHabitMode = () => {
    setActiveHabitMode(null)
    setIsDimmed(false)
    setMusicPlaylist(null)
    clearZenClasses()
    document.body.classList.add(ZEN_DEFAULT) // back to neutral if needed
  }

  // Dim overlay lifecycle
  useEffect(() => {
    let overlay: HTMLDivElement | null = null
    if (isDimmed) {
      overlay = document.createElement("div")
      overlay.className = "zen-overlay"
      document.body.appendChild(overlay)
    }
    return () => {
      if (overlay?.parentNode) overlay.parentNode.removeChild(overlay)
    }
  }, [isDimmed])

  return (
    <HabitModeContext.Provider
      value={{
        activeHabitMode,
        zenTheme: activeHabitMode ? `zen-${activeHabitMode.toLowerCase().replace(/\s+/g, "-")}` : "",
        musicPlaylist,
        isDimmed,
        enterHabitMode,
        exitHabitMode,
        setMusicPlaylist,
      }}
    >
      {children}
    </HabitModeContext.Provider>
  )
}
