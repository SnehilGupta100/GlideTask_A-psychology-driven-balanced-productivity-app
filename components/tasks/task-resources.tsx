"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink, Play, FolderOpen, Trash2, Plus, Youtube, HardDrive, File } from "lucide-react"

export type TaskResource = {
  id: string
  type: "drive" | "youtube" | "pdf" | "link" | "file"
  name: string
  url: string
  description?: string
}

type Props = {
  taskId?: string
  resources: TaskResource[]
  onAddResource: (resource: Omit<TaskResource, "id">) => void
  onRemoveResource: (resourceId: string) => void
}

export function TaskResources({ taskId, resources, onAddResource, onRemoveResource }: Props) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [newResource, setNewResource] = useState<Omit<TaskResource, "id">>({
    type: "link",
    name: "",
    url: "",
    description: "",
  })

  const handleAddResource = () => {
    if (newResource.name && newResource.url) {
      onAddResource(newResource)
      setNewResource({ type: "link", name: "", url: "", description: "" })
      setShowAddForm(false)
    }
  }

  const getResourceIcon = (type: TaskResource["type"]) => {
    switch (type) {
      case "drive":
        return <HardDrive className="h-4 w-4" />
      case "youtube":
        return <Youtube className="h-4 w-4" />
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "file":
        return <File className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: TaskResource["type"]) => {
    switch (type) {
      case "drive":
        return "bg-blue-500"
      case "youtube":
        return "bg-red-500"
      case "pdf":
        return "bg-orange-500"
      case "file":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Task Resources</CardTitle>
          <Button size="sm" variant="outline" onClick={() => setShowAddForm(!showAddForm)} className="gap-1">
            <Plus className="h-3 w-3" />
            Add Resource
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {showAddForm && (
          <Card className="border-dashed">
            <CardContent className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Type</Label>
                  <select
                    value={newResource.type}
                    onChange={(e) => setNewResource({ ...newResource, type: e.target.value as TaskResource["type"] })}
                    className="w-full px-2 py-1 text-xs border rounded"
                  >
                    <option value="link">Web Link</option>
                    <option value="drive">Google Drive</option>
                    <option value="youtube">YouTube Playlist</option>
                    <option value="pdf">PDF Document</option>
                    <option value="file">File</option>
                  </select>
                </div>
                <div>
                  <Label className="text-xs">Name</Label>
                  <Input
                    placeholder="Resource name"
                    value={newResource.name}
                    onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
                    className="text-xs"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs">URL</Label>
                <Input
                  placeholder="https://..."
                  value={newResource.url}
                  onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
                  className="text-xs"
                />
              </div>
              <div>
                <Label className="text-xs">Description (optional)</Label>
                <Input
                  placeholder="Brief description"
                  value={newResource.description}
                  onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                  className="text-xs"
                />
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAddResource} className="text-xs">
                  Add Resource
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowAddForm(false)} className="text-xs">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {resources.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            <FolderOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs">No resources added yet</p>
            <p className="text-xs">Add links, documents, and playlists to help with this task</p>
          </div>
        ) : (
          <div className="space-y-2">
            {resources.map((resource) => (
              <div key={resource.id} className="flex items-center gap-3 p-3 bg-muted/30 rounded border">
                <div
                  className={`h-8 w-8 ${getTypeColor(resource.type)} rounded flex items-center justify-center text-white`}
                >
                  {getResourceIcon(resource.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm truncate">{resource.name}</h4>
                    <Badge variant="outline" className="text-xs capitalize">
                      {resource.type}
                    </Badge>
                  </div>
                  {resource.description && (
                    <p className="text-xs text-muted-foreground truncate">{resource.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(resource.url, "_blank")}
                    className="h-7 w-7 p-0"
                  >
                    {resource.type === "youtube" ? <Play className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onRemoveResource(resource.id)}
                    className="h-7 w-7 p-0 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
