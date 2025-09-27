import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Link, BarChart3 } from "lucide-react"

export function HabitFormationTips() {
  const tips = [
    {
      icon: Lightbulb,
      title: "Start Small",
      description: "Begin with tiny habits that take less than 2 minutes to complete",
    },
    {
      icon: Link,
      title: "Stack Habits",
      description: "Link new habits to existing routines for better consistency",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Visual feedback reinforces the habit loop and builds momentum",
    },
  ]

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Habit Formation Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex gap-3">
            <div className="h-8 w-8 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <tip.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-foreground text-sm">{tip.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{tip.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
