"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp } from "lucide-react"

const monthlyData = [
  { month: "January", taskCompletion: 78, habitStreaks: 21 },
  { month: "February", taskCompletion: 84, habitStreaks: 14 },
  { month: "March", taskCompletion: 81, habitStreaks: 28 },
]

const habitStreaks = [
  { name: "Exercise", days: 21 },
  { name: "Reading", days: 14 },
  { name: "Meditation", days: 28 },
]

export function MonthlyTrends() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Monthly Trends
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Task Completion Trends */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Task Completion</h4>
          <div className="space-y-3">
            {monthlyData.map((data, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{data.month}</span>
                  <span className="font-medium">{data.taskCompletion}%</span>
                </div>
                <Progress value={data.taskCompletion} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Habit Streaks */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Habit Streaks</h4>
          <div className="space-y-2">
            {habitStreaks.map((habit, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{habit.name}</span>
                <span className="font-medium">{habit.days} days</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
