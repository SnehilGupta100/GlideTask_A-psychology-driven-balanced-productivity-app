"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { HabitCard } from "./habit-card"
import { HabitStats } from "./habit-stats"
import { HabitFormationTips } from "./habit-formation-tips"
import { CreateHabitDialog } from "./create-habit-dialog"

const mockHabits = [
  {
    id: 1,
    name: "Morning Meditation",
    description: "10 minutes of mindfulness meditation",
    streak: 14,
    goal: 30,
    category: "Wellness",
    weekProgress: [true, true, false, true, true, true, true],
    monthProgress: Array.from({ length: 30 }, (_, i) => Math.random() > 0.3),
    color: "bg-primary",
    icon: "🧘",
    bestStreak: 21,
    completionRate: 78,
  },
  {
    id: 2,
    name: "Read 30 minutes",
    description: "Daily reading for personal growth",
    streak: 8,
    goal: 21,
    category: "Learning",
    weekProgress: [true, false, true, true, false, true, true],
    monthProgress: Array.from({ length: 30 }, (_, i) => Math.random() > 0.4),
    color: "bg-chart-2",
    icon: "📚",
    bestStreak: 15,
    completionRate: 65,
  },
  {
    id: 3,
    name: "Exercise",
    description: "30 minutes of physical activity",
    streak: 5,
    goal: 14,
    category: "Health",
    weekProgress: [false, true, true, false, true, true, true],
    monthProgress: Array.from({ length: 30 }, (_, i) => Math.random() > 0.5),
    color: "bg-chart-4",
    icon: "💪",
    bestStreak: 12,
    completionRate: 58,
  },
  {
    id: 4,
    name: "Write Journal",
    description: "Reflect on the day and set intentions",
    streak: 21,
    goal: 30,
    category: "Wellness",
    weekProgress: [true, true, true, true, true, true, false],
    monthProgress: Array.from({ length: 30 }, (_, i) => Math.random() > 0.2),
    color: "bg-chart-5",
    icon: "✍️",
    bestStreak: 21,
    completionRate: 85,
  },
]

export function HabitManager() {
  const [habits, setHabits] = useState(mockHabits)
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  const toggleHabitToday = (habitId: number) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === habitId) {
          const newWeekProgress = [...habit.weekProgress]
          newWeekProgress[6] = !newWeekProgress[6] // Toggle today (last day of week)
          const newStreak = newWeekProgress[6] ? habit.streak + 1 : Math.max(0, habit.streak - 1)
          return {
            ...habit,
            weekProgress: newWeekProgress,
            streak: newStreak,
          }
        }
        return habit
      }),
    )
  }

  const longestStreak = Math.max(...habits.map((h) => h.bestStreak))
  const activeHabits = habits.length
  const avgSuccessRate = Math.round(habits.reduce((acc, h) => acc + h.completionRate, 0) / habits.length)

  return (
    <div className="space-y-6">
      {/* Habit Stats Overview */}
      <HabitStats longestStreak={longestStreak} activeHabits={activeHabits} successRate={avgSuccessRate} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Habit List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Habit Tracker</h2>
            <Button
              onClick={() => setShowCreateDialog(true)}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              Add Habit
            </Button>
          </div>

          <div className="space-y-4">
            {habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} onToggle={() => toggleHabitToday(habit.id)} />
            ))}
          </div>

          {/* Create Habit Button */}
          <Card className="border-dashed border-2 border-border hover:bg-muted/50 cursor-pointer transition-colors">
            <CardContent className="p-8 text-center" onClick={() => setShowCreateDialog(true)}>
              <Plus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Create a new habit to start building consistency</p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <HabitFormationTips />
        </div>
      </div>

      <CreateHabitDialog open={showCreateDialog} onOpenChange={setShowCreateDialog} />
    </div>
  )
}
