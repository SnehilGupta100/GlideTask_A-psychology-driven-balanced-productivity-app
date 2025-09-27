"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Camera, Link, ImageIcon, CheckCircle } from "lucide-react"

interface ImportResult {
  source: string
  tasksFound: number
  status: "processing" | "completed" | "error"
  tasks: Array<{
    title: string
    priority: string
    dueDate: string
    confidence: number
  }>
}

export function AdvancedImport() {
  const [importResults, setImportResults] = useState<ImportResult[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleScreenshotImport = async (file: File) => {
    setIsProcessing(true)
    setUploadProgress(0)

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const mockResult: ImportResult = {
      source: file.name,
      tasksFound: 5,
      status: "completed",
      tasks: [
        { title: "Review project proposal", priority: "HIGH", dueDate: "Today", confidence: 95 },
        { title: "Update team on progress", priority: "MEDIUM", dueDate: "Tomorrow", confidence: 88 },
        { title: "Schedule client meeting", priority: "HIGH", dueDate: "Dec 20", confidence: 92 },
        { title: "Prepare presentation slides", priority: "MEDIUM", dueDate: "Dec 22", confidence: 85 },
        { title: "Send follow-up emails", priority: "LOW", dueDate: "Dec 25", confidence: 78 },
      ],
    }

    setImportResults([mockResult])
    setIsProcessing(false)
    setUploadProgress(0)
  }

  const handleUrlImport = async (url: string) => {
    setIsProcessing(true)

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2500))

    const mockResult: ImportResult = {
      source: url,
      tasksFound: 8,
      status: "completed",
      tasks: [
        { title: "Design system updates", priority: "HIGH", dueDate: "Dec 18", confidence: 90 },
        { title: "User research analysis", priority: "MEDIUM", dueDate: "Dec 20", confidence: 85 },
        { title: "Sprint planning meeting", priority: "HIGH", dueDate: "Dec 19", confidence: 95 },
      ],
    }

    setImportResults([mockResult])
    setIsProcessing(false)
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Advanced Import
          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
            AI-Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="screenshot" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="screenshot">Screenshot</TabsTrigger>
            <TabsTrigger value="url">URL Import</TabsTrigger>
            <TabsTrigger value="file">File Upload</TabsTrigger>
          </TabsList>

          <TabsContent value="screenshot" className="mt-6 space-y-4">
            <div className="text-center p-8 border-2 border-dashed border-border">
              <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">Import from Screenshot</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Take a screenshot of your Notion, Trello, or any task management tool
              </p>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleScreenshotImport(file)
                }}
                className="max-w-xs mx-auto"
              />
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Processing screenshot...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </TabsContent>

          <TabsContent value="url" className="mt-6 space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="import-url">Paste URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="import-url"
                    placeholder="https://notion.so/your-page or https://trello.com/your-board"
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleUrlImport("https://notion.so/example")}
                    disabled={isProcessing}
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link className="h-4 w-4" />
                    Import
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-muted/20 border border-border">
                <h4 className="font-medium text-foreground mb-2">Supported Platforms</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Notion pages</div>
                  <div>• Trello boards</div>
                  <div>• Asana projects</div>
                  <div>• Monday.com boards</div>
                  <div>• ClickUp spaces</div>
                  <div>• Linear issues</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="file" className="mt-6 space-y-4">
            <div className="text-center p-8 border-2 border-dashed border-border">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">Upload File</h3>
              <p className="text-sm text-muted-foreground mb-4">CSV, Excel, JSON, or exported files from other apps</p>
              <Input type="file" accept=".csv,.xlsx,.xls,.json,.txt" className="max-w-xs mx-auto" />
            </div>
          </TabsContent>
        </Tabs>

        {/* Import Results */}
        {importResults.map((result, index) => (
          <div key={index} className="mt-6 p-4 border border-border bg-muted/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-chart-1" />
                <h3 className="font-medium text-foreground">Import Completed</h3>
              </div>
              <Badge className="bg-chart-1 text-white">{result.tasksFound} tasks found</Badge>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Source: {result.source}</p>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Detected Tasks:</h4>
                {result.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="flex items-center justify-between p-2 bg-background border border-border"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          className={`text-xs ${
                            task.priority === "HIGH"
                              ? "bg-destructive text-destructive-foreground"
                              : task.priority === "MEDIUM"
                                ? "bg-chart-4 text-white"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {task.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {task.confidence}% confidence
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Import All Tasks</Button>
                <Button variant="outline" className="bg-transparent">
                  Review & Edit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
