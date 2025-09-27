"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Clock, Target, TrendingUp, MessageCircle } from "lucide-react"

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    taskReminders: true,
    habitCues: true,
    progressUpdates: true,
    motivationalMessages: true,
    weeklyReports: true,
    achievementCelebrations: true,
  })

  const toggleNotification = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const notificationSettings = [
    {
      key: "taskReminders",
      title: "Task Reminders",
      description: "Get notified about upcoming deadlines",
      icon: Clock,
    },
    {
      key: "habitCues",
      title: "Habit Cues",
      description: "Receive behavioral cues for habits",
      icon: Target,
    },
    {
      key: "progressUpdates",
      title: "Progress Updates",
      description: "Weekly productivity summaries",
      icon: TrendingUp,
    },
    {
      key: "motivationalMessages",
      title: "Motivational Messages",
      description: "Encouraging messages based on psychology",
      icon: MessageCircle,
    },
    {
      key: "weeklyReports",
      title: "Weekly Reports",
      description: "Comprehensive weekly productivity reports",
      icon: Bell,
    },
    {
      key: "achievementCelebrations",
      title: "Achievement Celebrations",
      description: "Celebrate milestones and streak achievements",
      icon: Target,
    },
  ]

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Notification Types */}
        <div className="space-y-4">
          {notificationSettings.map((setting) => (
            <div key={setting.key} className="flex items-center justify-between p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-primary/10 flex items-center justify-center">
                  <setting.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{setting.title}</h4>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
              </div>
              <Switch checked={notifications[setting.key]} onCheckedChange={() => toggleNotification(setting.key)} />
            </div>
          ))}
        </div>

        {/* Notification Timing */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Notification Timing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Daily Summary Time</label>
              <Select defaultValue="18:00">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                  <SelectItem value="19:00">7:00 PM</SelectItem>
                  <SelectItem value="20:00">8:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Habit Reminder Frequency</label>
              <Select defaultValue="smart">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smart">Smart (AI-optimized)</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="twice">Twice daily</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Quiet Hours */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Quiet Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Start Time</label>
              <Select defaultValue="22:00">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="21:00">9:00 PM</SelectItem>
                  <SelectItem value="22:00">10:00 PM</SelectItem>
                  <SelectItem value="23:00">11:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">End Time</label>
              <Select defaultValue="07:00">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06:00">6:00 AM</SelectItem>
                  <SelectItem value="07:00">7:00 AM</SelectItem>
                  <SelectItem value="08:00">8:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
