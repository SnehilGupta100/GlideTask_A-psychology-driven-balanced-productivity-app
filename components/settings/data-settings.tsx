"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, Upload, HardDrive, Trash2 } from "lucide-react"

export function DataSettings() {
  const storageData = [
    { type: "Tasks", size: "2.3 MB", percentage: 35 },
    { type: "Habits", size: "1.1 MB", percentage: 17 },
    { type: "Analytics", size: "4.7 MB", percentage: 48 },
  ]

  const totalUsed = storageData.reduce((acc, item) => acc + Number.parseFloat(item.size), 0)

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Storage Usage */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HardDrive className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-foreground">Storage Usage</h3>
          </div>

          <div className="space-y-3">
            {storageData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.type}</span>
                  <span className="font-medium">{item.size}</span>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>

          <div className="p-3 bg-muted/50 border border-border">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">Total Used</span>
              <span className="font-medium">{totalUsed.toFixed(1)} MB of 100 MB</span>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Data Management</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
              <Download className="h-5 w-5" />
              <span className="text-sm">Export Data</span>
            </Button>

            <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
              <Upload className="h-5 w-5" />
              <span className="text-sm">Import Data</span>
            </Button>
          </div>

          <div className="p-4 border border-border space-y-3">
            <h4 className="font-medium text-foreground">Export Options</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Tasks and projects in JSON or CSV format</p>
              <p>• Habit tracking data with progress history</p>
              <p>• Analytics and productivity insights</p>
              <p>• All data is exported in standard formats</p>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Data Retention</h3>
          <div className="p-4 border border-border space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-foreground">Automatic Cleanup</h4>
                <p className="text-sm text-muted-foreground">Remove completed tasks older than 90 days</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                Configure
              </Button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="space-y-4">
          <h3 className="font-medium text-destructive">Danger Zone</h3>
          <div className="p-4 border border-destructive/20 bg-destructive/5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-foreground">Clear All Data</h4>
                <p className="text-sm text-muted-foreground">Permanently delete all tasks, habits, and analytics</p>
              </div>
              <Button variant="destructive" size="sm" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Clear Data
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
