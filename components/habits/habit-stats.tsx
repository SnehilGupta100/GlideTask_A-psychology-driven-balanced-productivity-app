import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, TrendingUp } from "lucide-react"

interface HabitStatsProps {
  longestStreak: number
  activeHabits: number
  successRate: number
}

export function HabitStats({ longestStreak, activeHabits, successRate }: HabitStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Longest Streak</p>
              <p className="text-2xl font-bold text-foreground">{longestStreak} days</p>
            </div>
            <div className="h-12 w-12 bg-chart-4/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-chart-4" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Habits</p>
              <p className="text-2xl font-bold text-foreground">{activeHabits}</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
              <p className="text-2xl font-bold text-foreground">{successRate}%</p>
            </div>
            <div className="h-12 w-12 bg-chart-1/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-chart-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
