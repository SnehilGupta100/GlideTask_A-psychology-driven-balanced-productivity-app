import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, TrendingUp } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      type: "productivity",
      title: "Peak Performance Pattern",
      description:
        "Your productivity peaks in the morning. Consider scheduling your most important tasks between 9-11 AM for optimal results.",
      confidence: "High",
      icon: TrendingUp,
    },
    {
      type: "habit",
      title: "Habit Stacking Opportunity",
      description:
        "You consistently meditate after morning coffee. Try adding a 5-minute journaling session to this routine.",
      confidence: "Medium",
      icon: Lightbulb,
    },
    {
      type: "optimization",
      title: "Task Batching Suggestion",
      description:
        "You complete similar tasks 40% faster when grouped together. Consider batching email responses and administrative tasks.",
      confidence: "High",
      icon: Brain,
    },
  ]

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI Insights
          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
            Premium
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="p-3 border border-border space-y-2">
            <div className="flex items-start gap-2">
              <div className="h-6 w-6 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <insight.icon className="h-3 w-3 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {insight.confidence}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
