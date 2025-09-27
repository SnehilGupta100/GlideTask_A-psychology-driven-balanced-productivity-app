"use client"
import { useState } from "react"
import Link from "next/link"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, Calendar, Table, CheckCircle } from "lucide-react"

interface TaskImportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TaskImportDialog({ open, onOpenChange }: TaskImportDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [importUrl, setImportUrl] = useState("")

  const importSources = [
    {
      id: "notion",
      name: "Notion",
      icon: FileText,
      description: "Import from Notion database or page screenshot",
      type: "screenshot",
    },
    {
      id: "trello",
      name: "Trello",
      icon: Table,
      description: "Import from Trello board screenshot",
      type: "screenshot",
    },
    {
      id: "sheets",
      name: "Google Sheets",
      icon: Table,
      description: "Import from spreadsheet file or screenshot",
      type: "file",
    },
    {
      id: "excel",
      name: "Excel",
      icon: Table,
      description: "Import from Excel file",
      type: "file",
    },
    {
      id: "reminders",
      name: "Apple Reminders",
      icon: Calendar,
      description: "Import from Reminders app screenshot",
      type: "screenshot",
    },
    {
      id: "todoist",
      name: "Todoist",
      icon: CheckCircle,
      description: "Import from Todoist export or screenshot",
      type: "both",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Import Tasks</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="sources" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="sources">Import Sources</TabsTrigger>
            <TabsTrigger value="file">File Upload</TabsTrigger>
            <TabsTrigger value="url">URL Import</TabsTrigger>
          </TabsList>

          <TabsContent value="sources" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importSources.map((source) => (
                <Card key={source.id} className="border-border hover:bg-muted/50 cursor-pointer transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary/10 flex items-center justify-center">
                        <source.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{source.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{source.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="outline" className="w-full gap-2 bg-transparent">
                      <Upload className="h-4 w-4" />
                      Import from {source.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="file" className="mt-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Upload File</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">Drag and drop your file here, or click to browse</p>
                  <p className="text-xs text-muted-foreground">Supports: CSV, Excel, JSON, Screenshots (PNG, JPG)</p>
                  <Input
                    type="file"
                    className="mt-4"
                    accept=".csv,.xlsx,.xls,.json,.png,.jpg,.jpeg"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  />
                </div>
                {selectedFile && (
                  <div className="flex items-center justify-between p-3 bg-muted">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">{selectedFile.name}</span>
                    </div>
                    <Button size="sm">Process File</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="url" className="mt-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Import from URL</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="import-url">URL</Label>
                  <Input
                    id="import-url"
                    placeholder="https://notion.so/your-page or https://trello.com/your-board"
                    value={importUrl}
                    onChange={(e) => setImportUrl(e.target.value)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Paste a link to your Notion page, Trello board, or other supported productivity tool
                </p>
                <Button className="w-full gap-2" disabled={!importUrl}>
                  <Link className="h-4 w-4" />
                  Import from URL
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">AI Process & Import</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
