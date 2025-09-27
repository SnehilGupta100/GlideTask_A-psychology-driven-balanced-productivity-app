"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Plus, Calendar } from "lucide-react"
import { useState } from "react"

const mockTasks = [
  {
    id: 1,
    title: "Review quarterly goals and metrics",
    priority: "HIGH" as const,
    dueDate: "Today",
    completed: false,
  },
  {
    id: 2,
    title: "Update project documentation",
    priority: "MEDIUM" as const,
    dueDate: "Dec 20",
    completed: false,
  },
  {
    id: 3,
    title: "Schedule team meeting for next week",
    priority: "LOW" as const,
    dueDate: "Dec 25",
    completed: true,
  },
  {
    id: 4,
    title: "Research new productivity frameworks",
    priority: "MEDIUM" as const,
    dueDate: "Tomorrow",
    completed: false,
  },
  {
    id: 5,
    title: "Complete expense reports",
    priority: "HIGH" as const,
    dueDate: "Dec 18",
    completed: false,
  },
]

export function TodaysTasks() {
  const [tasks, setTasks] = useState(mockTasks)
  const [newTask, setNewTask] = useState("")

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const getPriorityColor = (priority: "HIGH" | "MEDIUM" | "LOW") => {
    switch (priority) {
      case "HIGH":
        return "bg-destructive text-destructive-foreground"
      case "MEDIUM":
        return "bg-chart-4 text-white"
      case "LOW":
        return "bg-muted text-muted-foreground"
    }
  }

  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <Card className="border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-foreground">{"Today's Tasks"}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {completedTasks}/{tasks.length} complete
            </p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Upload className="h-4 w-4" />
            Import
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* AI Task Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Type anything... AI will organize it as a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1"
          />
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-3 p-3 border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center pt-0.5">
                {task.completed ? (
                  <div className="h-5 w-5 bg-primary flex items-center justify-center text-primary-foreground">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm font-medium ${task.completed ? "text-muted-foreground" : "text-foreground"}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge className={`text-xs font-bold ${getPriorityColor(task.priority)}`}>{task.priority}</Badge>
                    <Badge variant="outline" className="text-xs font-bold border-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {task.dueDate}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
