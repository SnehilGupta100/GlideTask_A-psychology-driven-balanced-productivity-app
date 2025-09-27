import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

const mockHabits = [
  {
    id: 1,
    name: "Morning Meditation",
    streak: 14,
    goal: 30,
    weekProgress: [true, true, false, true, true, true, true],
  },
  {
    id: 2,
    name: "Read 30 minutes",
    streak: 8,
    goal: 21,
    weekProgress: [true, false, true, true, false, true, true],
  },
  {
    id: 3,
    name: "Exercise",
    streak: 5,
    goal: 14,
    weekProgress: [false, true, true, false, true, true, true],
  },
]

const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

export function HabitTracker() {
  return (
    <Card className="border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">Habit Tracker</CardTitle>
          <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Add Habit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockHabits.map((habit) => (
          <div key={habit.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-foreground">{habit.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {habit.streak} day streak • Goal: {habit.goal} days
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {habit.goal - habit.streak} to go
              </Badge>
            </div>

            {/* Week Progress */}
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
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
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
        ))}
      </CardContent>
    </Card>
  )
}
