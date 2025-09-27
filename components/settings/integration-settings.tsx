"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Calendar, Clock, Users, Link, CheckCircle, AlertCircle } from "lucide-react"

const integrations = [
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Sync your calendar events and find optimal time slots for tasks",
    icon: Calendar,
    connected: true,
    category: "Calendar",
  },
  {
    id: "calendly",
    name: "Calendly",
    description: "Import your Calendly schedule to optimize task planning",
    icon: Clock,
    connected: false,
    category: "Scheduling",
  },
  {
    id: "outlook",
    name: "Outlook Calendar",
    description: "Integrate with Microsoft Outlook for seamless scheduling",
    icon: Calendar,
    connected: false,
    category: "Calendar",
  },
  {
    id: "class-schedule",
    name: "Class Schedule",
    description: "Add your class schedule for better time management",
    icon: Users,
    connected: false,
    category: "Education",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Import tasks and projects from your Notion workspace",
    icon: Link,
    connected: true,
    category: "Productivity",
  },
  {
    id: "trello",
    name: "Trello",
    description: "Sync boards and cards from Trello",
    icon: Link,
    connected: false,
    category: "Productivity",
  },
]

export function IntegrationSettings() {
  const [connectedIntegrations, setConnectedIntegrations] = useState(
    integrations.reduce(
      (acc, integration) => ({
        ...acc,
        [integration.id]: integration.connected,
      }),
      {},
    ),
  )

  const toggleIntegration = (id: string) => {
    setConnectedIntegrations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const categories = [...new Set(integrations.map((i) => i.category))]

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <Card key={category} className="border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">{category} Integrations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {integrations
              .filter((integration) => integration.category === category)
              .map((integration) => (
                <div
                  key={integration.id}
                  className="flex items-center justify-between p-4 border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 flex items-center justify-center">
                      <integration.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground">{integration.name}</h4>
                        {connectedIntegrations[integration.id] ? (
                          <Badge className="bg-chart-1 text-white gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Connected
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="gap-1">
                            <AlertCircle className="h-3 w-3" />
                            Not Connected
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={connectedIntegrations[integration.id]}
                      onCheckedChange={() => toggleIntegration(integration.id)}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent"
                      onClick={() => toggleIntegration(integration.id)}
                    >
                      {connectedIntegrations[integration.id] ? "Disconnect" : "Connect"}
                    </Button>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}

      {/* AI Optimization Settings */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            AI Time Optimization
            <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
              Premium
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-border bg-muted/20">
            <h4 className="font-medium text-foreground mb-2">Intelligent Task Scheduling</h4>
            <p className="text-sm text-muted-foreground mb-3">
              AI analyzes your calendar and productivity patterns to suggest optimal time slots for high-priority tasks.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="font-medium text-foreground">Schedule high-priority tasks during peak hours</p>
                <p className="text-muted-foreground">Automatically suggests 9-11 AM slots for important work</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="p-4 border border-border bg-muted/20">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="font-medium text-foreground">Smart break scheduling</p>
                <p className="text-muted-foreground">Suggests breaks between intensive tasks</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="p-4 border border-border bg-muted/20">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="font-medium text-foreground">Context switching minimization</p>
                <p className="text-muted-foreground">Groups similar tasks to reduce mental overhead</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
