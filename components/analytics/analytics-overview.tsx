import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Zap } from "lucide-react"

export function AnalyticsOverview() {
  const metrics = [
    {
      title: "Weekly Average",
      value: "8.2",
      unit: "tasks/day",
      change: "+12%",
      trend: "up",
      icon: Target,
    },
    {
      title: "Completion Rate",
      value: "84%",
      unit: "this month",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Habit Consistency",
      value: "76%",
      unit: "last 30 days",
      change: "",
      trend: "neutral",
      icon: Zap,
    },
    {
      title: "Focus Score",
      value: "7.8",
      unit: "/10",
      change: "-3%",
      trend: "down",
      status: "Improving",
      icon: Target,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.unit}</p>
                </div>
                {metric.change && (
                  <p
                    className={`text-xs font-medium ${
                      metric.trend === "up"
                        ? "text-chart-1"
                        : metric.trend === "down"
                          ? "text-destructive"
                          : "text-muted-foreground"
                    }`}
                  >
                    {metric.change}
                  </p>
                )}
                {metric.status && <p className="text-xs text-chart-1 font-medium">{metric.status}</p>}
              </div>
              <div className="h-12 w-12 bg-primary/10 flex items-center justify-center">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
