"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface CreateHabitDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onCreate?: (habit: { name: string; category: string; icon?: string; playlist?: string }) => void
}

const habitCategories = [
  { value: "health", label: "Health", color: "bg-chart-4" },
  { value: "wellness", label: "Wellness", color: "bg-primary" },
  { value: "learning", label: "Learning", color: "bg-chart-2" },
  { value: "productivity", label: "Productivity", color: "bg-chart-5" },
  { value: "creativity", label: "Creativity", color: "bg-chart-3" },
  { value: "social", label: "Social", color: "bg-chart-1" },
  { value: "others", label: "Others", color: "bg-muted" }, // added "Others" option
]

const habitIcons = ["🧘", "📚", "💪", "✍️", "🎨", "🏃", "💧", "🌱", "🎯", "⭐"]

export function CreateHabitDialog({ open, onOpenChange, onCreate }: CreateHabitDialogProps) {
  const [localOpen, setLocalOpen] = useState(false)
  const controlled = typeof open === "boolean"
  const isOpen = controlled ? open : localOpen
  const setOpen = (v: boolean) => (controlled ? onOpenChange?.(v) : setLocalOpen(v))

  const [name, setName] = useState("")
  const [category, setCategory] = useState(habitCategories[0].value)
  const [icon, setIcon] = useState(habitIcons[0])
  const [playlist, setPlaylist] = useState("")

  const handleCreate = () => {
    if (!name.trim()) return
    onCreate?.({ name: name.trim(), category, icon, playlist: playlist.trim() || undefined })
    setOpen(false)
    setName("")
    setPlaylist("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Create New Habit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Create New Habit</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="habit-name">Name</Label>
            <Input
              id="habit-name"
              placeholder="e.g., Deep Work"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Category</Label>
            <div className="flex flex-wrap gap-2">
              {habitCategories.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setCategory(c.value)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    category === c.value ? `${c.color} text-foreground` : "bg-muted"
                  }`}
                  aria-pressed={category === c.value}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Icon</Label>
            <div className="flex flex-wrap gap-2">
              {habitIcons.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIcon(i)}
                  className={`px-2 py-1 rounded border text-sm ${icon === i ? "bg-accent" : "bg-muted"}`}
                  aria-pressed={icon === i}
                >
                  <span aria-hidden>{i}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="playlist">Optional: Playlist link for “[Habit] Mode”</Label>
            <Input
              id="playlist"
              placeholder="https://open.spotify.com/playlist/... or https://youtube.com/playlist?list=..."
              value={playlist}
              onChange={(e) => setPlaylist(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              This link can be used in the habit’s “[Habit Name] Mode” to play music while you focus.
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
