"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Plus, Filter, Calendar, Clock, AlertCircle } from "lucide-react"
import { TaskImportDialog } from "./task-import-dialog"
import { QuickStats } from "./quick-stats"

const mockTasks = [
  {
    id: 1,
    title: "Review quarterly goals and metrics",
    priority: "HIGH" as const,
    dueDate: "Today",
    completed: false,
    project: "Work",
    tags: ["review", "goals"],
  },
  {
    id: 2,
    title: "Update project documentation",
    priority: "MEDIUM" as const,
    dueDate: "Dec 20",
    completed: false,
    project: "Development",
    tags: ["documentation"],
  },
  {
    id: 3,
    title: "Schedule team meeting for next week",
    priority: "LOW" as const,
    dueDate: "Dec 25",
    completed: true,
    project: "Management",
    tags: ["meeting", "team"],
  },
  {
    id: 4,
    title: "Research new productivity frameworks",
    priority: "MEDIUM" as const,
    dueDate: "Tomorrow",
    completed: false,
    project: "Learning",
    tags: ["research", "productivity"],
  },
  {
    id: 5,
    title: "Complete expense reports",
    priority: "HIGH" as const,
    dueDate: "Dec 18",
    completed: false,
    project: "Finance",
    tags: ["reports", "expenses"],
  },
  {
    id: 6,
    title: "Design new landing page mockups",
    priority: "MEDIUM" as const,
    dueDate: "Dec 22",
    completed: false,
    project: "Design",
    tags: ["design", "mockups"],
  },
  {
    id: 7,
    title: "Review code pull requests",
    priority: "HIGH" as const,
    dueDate: "Today",
    completed: true,
    project: "Development",
    tags: ["code", "review"],
  },
  {
    id: 8,
    title: "Plan vacation itinerary",
    priority: "LOW" as const,
    dueDate: "Dec 30",
    completed: false,
    project: "Personal",
    tags: ["vacation", "planning"],
  },
]

export function TaskManager() {
  const [tasks, setTasks] = useState(mockTasks)
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [showImportDialog, setShowImportDialog] = useState(false)

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

  const getPriorityIcon = (priority: "HIGH" | "MEDIUM" | "LOW") => {
    switch (priority) {
      case "HIGH":
        return <AlertCircle className="h-3 w-3" />
      case "MEDIUM":
        return <Clock className="h-3 w-3" />
      case "LOW":
        return <Calendar className="h-3 w-3" />
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active" && task.completed) return false
    if (filter === "completed" && !task.completed) return false
    if (priorityFilter !== "all" && task.priority !== priorityFilter) return false
    return true
  })

  const activeTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <QuickStats totalTasks={tasks.length} activeTasks={activeTasks.length} completedTasks={completedTasks.length} />

      {/* Main Task Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Task List */}
        <div className="lg:col-span-3">
          <Card className="border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-foreground">Tasks</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                    onClick={() => setShowImportDialog(true)}
                  >
                    <Upload className="h-4 w-4" />
                    Import Tasks
                  </Button>
                  <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Plus className="h-4 w-4" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* AI Task Input */}
              <div className="flex gap-2 mt-4">
                <Input
                  placeholder="Type anything... AI organizes it instantly"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tasks</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="HIGH">HIGH</SelectItem>
                    <SelectItem value="MEDIUM">MEDIUM</SelectItem>
                    <SelectItem value="LOW">LOW</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs value={filter} onValueChange={setFilter} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All ({tasks.length})</TabsTrigger>
                  <TabsTrigger value="active">Active ({activeTasks.length})</TabsTrigger>
                  <TabsTrigger value="completed">Complete ({completedTasks.length})</TabsTrigger>
                </TabsList>

                <TabsContent value={filter} className="mt-6">
                  <div className="space-y-3">
                    {filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start gap-3 p-4 border border-border hover:bg-muted/50 transition-colors"
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
                            <div className="flex-1">
                              <p
                                className={`text-sm font-medium mb-1 ${
                                  task.completed ? "text-muted-foreground" : "text-foreground"
                                }`}
                              >
                                {task.title}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{task.project}</span>
                                {task.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <Badge className={`text-xs font-bold ${getPriorityColor(task.priority)} gap-1`}>
                                {getPriorityIcon(task.priority)}
                                {task.priority}
                              </Badge>
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
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Stats */}
        <div className="lg:col-span-1">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Completed this week</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-chart-2">3.4</p>
                <p className="text-sm text-muted-foreground">Average per day</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-chart-4">8 days</p>
                <p className="text-sm text-muted-foreground">Current streak</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <TaskImportDialog open={showImportDialog} onOpenChange={setShowImportDialog} />
    </div>
  )
}
