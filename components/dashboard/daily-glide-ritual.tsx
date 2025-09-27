"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Target, Calendar } from "lucide-react"

const suggestedTasks = [
  {
    id: 1,
    title: "Review quarterly goals and metrics",
    reason: "High priority, due today",
    estimatedTime: "45 min",
    energyLevel: "High",
  },
  {
    id: 2,
    title: "Complete expense reports",
    reason: "Deadline approaching",
    estimatedTime: "30 min",
    energyLevel: "Medium",
  },
  {
    id: 3,
    title: "Team standup meeting",
    reason: "Scheduled for 10 AM",
    estimatedTime: "15 min",
    energyLevel: "Low",
  },
  {
    id: 4,
    title: "Update project documentation",
    reason: "Good time for focused work",
    estimatedTime: "60 min",
    energyLevel: "High",
  },
]

export function DailyGlideRitual() {
  const [selectedTasks, setSelectedTasks] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const toggleTask = (taskId: number) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : prev.length < 3 ? [...prev, taskId] : prev,
    )
  }

  const completeRitual = () => {
    setIsCompleted(true)
    // Save selected tasks as today's priorities
  }

  if (isCompleted) {
    return (
      <Card className="border-border bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-foreground mb-2">Daily Glide Ritual Complete!</h3>
          <p className="text-sm text-muted-foreground">
            You've set your intentions for today. Focus on your chosen priorities.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Target className="h-5 w-5" />
          Daily Glide Ritual
        </CardTitle>
        <p className="text-sm text-muted-foreground">What 1-3 things would make today feel like a success?</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {suggestedTasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 border cursor-pointer transition-colors ${
                selectedTasks.includes(task.id) ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
              }`}
              onClick={() => toggleTask(task.id)}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => toggleTask(task.id)}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{task.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{task.reason}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {task.estimatedTime}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {task.energyLevel} energy
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">Selected: {selectedTasks.length}/3 priorities</p>
          <Button
            onClick={completeRitual}
            disabled={selectedTasks.length === 0}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Sparkles className="h-4 w-4" />
            Set Today's Focus
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
