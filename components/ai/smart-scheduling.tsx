"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Brain } from "lucide-react"

const schedulingSuggestions = [
  {
    task: "Review quarterly goals and metrics",
    currentTime: "2:00 PM",
    suggestedTime: "9:30 AM",
    reason: "Peak focus time for analytical work",
    energyLevel: "High",
    improvement: "+40% efficiency",
  },
  {
    task: "Team standup meeting",
    currentTime: "9:00 AM",
    suggestedTime: "10:30 AM",
    reason: "Better team availability",
    energyLevel: "Medium",
    improvement: "+25% participation",
  },
  {
    task: "Email responses",
    currentTime: "11:00 AM",
    suggestedTime: "3:30 PM",
    reason: "Low-energy task for afternoon dip",
    energyLevel: "Low",
    improvement: "+15% completion rate",
  },
]

export function SmartScheduling() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Smart Scheduling
          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
            Premium
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          AI analyzes your productivity patterns and calendar to suggest optimal scheduling
        </p>

        <div className="space-y-3">
          {schedulingSuggestions.map((suggestion, index) => (
            <div key={index} className="p-4 border border-border hover:bg-muted/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-foreground">{suggestion.task}</h4>
                  <Badge className="bg-chart-1 text-white">{suggestion.improvement}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Current</p>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">{suggestion.currentTime}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Suggested</p>
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3 text-primary" />
                      <span className="font-medium text-primary">{suggestion.suggestedTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <p>{suggestion.reason}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span>Energy level:</span>
                      <Badge variant="outline" className="text-xs">
                        {suggestion.energyLevel}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Ignore
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-2 text-sm">
            <Brain className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">AI Insight:</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Your productivity is 35% higher when high-priority tasks are scheduled during your 9-11 AM peak focus
            window.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
