"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Target, TrendingUp, Zap, Palette } from "lucide-react"
import { useHabitMode } from "@/components/context/habit-mode-context"
import { HabitModePanel } from "./habit-mode-panel"

const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

interface Habit {
  id: number
  name: string
  description: string
  streak: number
  goal: number
  category: string
  weekProgress: boolean[]
  monthProgress: boolean[]
  color: string
  icon: string
  bestStreak: number
  completionRate: number
  playlist?: string[] // make optional
}

interface HabitCardProps {
  habit: Habit
  onToggle: () => void
}

export function HabitCard({ habit, onToggle }: HabitCardProps) {
  const progressPercentage = (habit.streak / habit.goal) * 100
  const remainingDays = Math.max(0, habit.goal - habit.streak)
  const isCompletedToday = habit.weekProgress[6]

  const { activeHabitMode, enterHabitMode, exitHabitMode } = useHabitMode()
  const isInHabitMode = activeHabitMode === habit.name

  return (
    <>
      <Card className="border-border hover:shadow-sm transition-shadow">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 ${habit.color} flex items-center justify-center text-primary-foreground text-lg`}
                >
                  {habit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-balance">{habit.name}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{habit.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {habit.category}
                </Badge>
                <Button
                  size="sm"
                  variant={isInHabitMode ? "default" : "outline"}
                  onClick={() => (isInHabitMode ? exitHabitMode() : enterHabitMode(habit.name, habit.playlist?.[0]))}
                  className="gap-1"
                >
                  <Palette className="h-3 w-3" />
                  {isInHabitMode ? "Exit Mode" : "Zen Mode"}
                </Button>
              </div>
            </div>

            {/* Progress Info */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-chart-4" />
                  <span className="font-medium">{habit.streak} day streak</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Goal: {habit.goal} days</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {remainingDays} to go
                </Badge>
                <Button
                  size="sm"
                  variant={isCompletedToday ? "default" : "outline"}
                  onClick={onToggle}
                  className={isCompletedToday ? "bg-primary text-primary-foreground" : ""}
                >
                  {isCompletedToday ? "Done Today" : "Mark Done"}
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progress to goal</span>
                <span className="font-medium">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Week Progress */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">This Week</p>
              <div className="flex items-center gap-1">
                {weekDays.map((day, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <span className="text-xs text-muted-foreground">{day}</span>
                    <div
                      className={`h-6 w-6 flex items-center justify-center text-xs ${
                        habit.weekProgress[index]
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {habit.weekProgress[index] && (
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                <span>Best: {habit.bestStreak} days</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Success rate: {habit.completionRate}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {isInHabitMode && <HabitModePanel habitName={habit.name} habitPlaylist={habit.playlist} />}
    </>
  )
}
