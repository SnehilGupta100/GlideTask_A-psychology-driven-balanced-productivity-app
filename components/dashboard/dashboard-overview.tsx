import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Zap, TrendingUp } from "lucide-react"
import { DailyGlideRitual } from "./daily-glide-ritual"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Daily Glide Ritual */}
      <DailyGlideRitual />

      {/* Existing overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tasks Today */}
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tasks Today</p>
                <p className="text-2xl font-bold text-foreground">8/12</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Habits Today */}
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Habits Today</p>
                <p className="text-2xl font-bold text-foreground">3/5</p>
              </div>
              <div className="h-12 w-12 bg-chart-2/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-chart-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Streak */}
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold text-foreground">14 days</p>
                <p className="text-xs text-muted-foreground">Personal Best: 21 days</p>
              </div>
              <div className="h-12 w-12 bg-chart-4/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-chart-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Progress */}
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Weekly Progress</p>
                <p className="text-2xl font-bold text-foreground">78%</p>
                <p className="text-xs text-chart-1 font-medium">+12% from last week</p>
              </div>
              <div className="h-12 w-12 bg-chart-1/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-chart-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
