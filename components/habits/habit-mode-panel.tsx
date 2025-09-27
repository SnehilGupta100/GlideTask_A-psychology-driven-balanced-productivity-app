"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useHabitMode } from "@/components/context/habit-mode-context"
import { Play, Pause, VolumeX, Volume2, ExternalLink, X } from "lucide-react"

export function HabitModePanel({ habitName, habitPlaylist }: { habitName: string; habitPlaylist?: string | string[] }) {
  const { activeHabitMode, exitHabitMode, setMusicPlaylist } = useHabitMode()
  const initial = Array.isArray(habitPlaylist) ? habitPlaylist[0] : habitPlaylist
  const [playlistUrl, setPlaylistUrl] = useState(initial || "")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  if (activeHabitMode !== habitName) return null

  return (
    <div className="fixed top-4 right-4 z-[9999]" role="dialog" aria-label={`${habitName} mode panel`}>
      <Card className="w-80 border-2 border-primary/20 shadow-lg backdrop-blur-sm bg-card/95">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse" aria-hidden />
              <CardTitle className="text-sm font-medium">{habitName} Mode</CardTitle>
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={exitHabitMode}
              className="h-6 w-6 p-0"
              aria-label="Exit zen mode"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium" htmlFor="playlist-url">
              Music Playlist
            </Label>
            <div className="flex gap-2">
              <Input
                id="playlist-url"
                placeholder="Paste Spotify/YouTube playlist URL"
                value={playlistUrl}
                onChange={(e) => setPlaylistUrl(e.target.value)}
                className="text-xs"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={() => setMusicPlaylist(playlistUrl)}
                className="shrink-0"
                aria-label="Open playlist"
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>

            {playlistUrl && (
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="gap-1"
                  aria-pressed={isPlaying}
                >
                  {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsMuted(!isMuted)}
                  className="gap-1"
                  aria-pressed={isMuted}
                >
                  {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                </Button>
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Zen mode applies soft colors and a dim overlay.</p>
            <p>Add your playlist to enhance focus.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
