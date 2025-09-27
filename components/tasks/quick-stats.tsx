import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle, Target } from "lucide-react"

interface QuickStatsProps {
  totalTasks: number
  activeTasks: number
  completedTasks: number
}

export function QuickStats({ totalTasks, activeTasks, completedTasks }: QuickStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total</p>
              <p className="text-2xl font-bold text-foreground">{totalTasks}</p>
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
              <p className="text-sm font-medium text-muted-foreground">Active</p>
              <p className="text-2xl font-bold text-foreground">{activeTasks}</p>
            </div>
            <div className="h-12 w-12 bg-chart-2/10 flex items-center justify-center">
              <Circle className="h-6 w-6 text-chart-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Complete</p>
              <p className="text-2xl font-bold text-foreground">{completedTasks}</p>
            </div>
            <div className="h-12 w-12 bg-chart-1/10 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-chart-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
