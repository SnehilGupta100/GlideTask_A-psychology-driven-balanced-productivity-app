"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Sparkles, Clock, Target, Calendar, Plus } from "lucide-react"

interface ProcessedTask {
  title: string
  description: string
  priority: "HIGH" | "MEDIUM" | "LOW"
  estimatedTime: string
  suggestedDate: string
  category: string
  subtasks: string[]
}

export function AITaskProcessor() {
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedTasks, setProcessedTasks] = useState<ProcessedTask[]>([])

  const processWithAI = async () => {
    if (!input.trim()) return

    setIsProcessing(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock AI-processed task
    const mockProcessedTask: ProcessedTask = {
      title: "Complete quarterly review presentation",
      description: "Prepare comprehensive quarterly review with metrics, achievements, and next quarter goals",
      priority: "HIGH",
      estimatedTime: "3 hours",
      suggestedDate: "Tomorrow, 9:00 AM",
      category: "Work",
      subtasks: [
        "Gather Q4 performance metrics",
        "Create presentation slides",
        "Review with team lead",
        "Schedule presentation meeting",
      ],
    }

    setProcessedTasks([mockProcessedTask])
    setIsProcessing(false)
  }

  const addTask = (task: ProcessedTask) => {
    // Add task to the main task list
    console.log("Adding task:", task)
    setProcessedTasks([])
    setInput("")
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI Task Processor
          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
            Premium
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* AI Input */}
        <div className="space-y-2">
          <Textarea
            placeholder="Describe what you need to do in natural language... 
            
Examples:
• 'I need to prepare for the client meeting next week'
• 'Plan my vacation to Japan in March'
• 'Get ready for the product launch'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            className="resize-none"
          />
          <Button
            onClick={processWithAI}
            disabled={!input.trim() || isProcessing}
            className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isProcessing ? (
              <>
                <Sparkles className="h-4 w-4 animate-spin" />
                AI is organizing your task...
              </>
            ) : (
              <>
                <Brain className="h-4 w-4" />
                Process with AI
              </>
            )}
          </Button>
        </div>

        {/* Processed Tasks */}
        {processedTasks.map((task, index) => (
          <div key={index} className="p-4 border border-border bg-muted/20 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{task.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
              </div>
              <Badge
                className={`ml-2 ${
                  task.priority === "HIGH"
                    ? "bg-destructive text-destructive-foreground"
                    : task.priority === "MEDIUM"
                      ? "bg-chart-4 text-white"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {task.priority}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{task.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{task.suggestedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                <span>{task.category}</span>
              </div>
            </div>

            {task.subtasks.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Suggested subtasks:</p>
                <div className="space-y-1">
                  {task.subtasks.map((subtask, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1 w-1 bg-primary rounded-full" />
                      <span>{subtask}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={() => addTask(task)}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                Add Task
              </Button>
              <Button variant="outline" className="bg-transparent">
                Modify
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
