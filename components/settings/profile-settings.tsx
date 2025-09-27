"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Clock } from "lucide-react"

export function ProfileSettings() {
  const [profile, setProfile] = useState({
    displayName: "Alex Johnson",
    email: "alex@example.com",
    timezone: "PST (UTC-8)",
    avatar: "",
  })

  const handleSave = () => {
    // Handle profile save
    console.log("Saving profile:", profile)
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile.avatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              {profile.displayName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" size="sm" className="bg-transparent">
              Change Avatar
            </Button>
            <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF. Max size 2MB.</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="display-name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Display Name
            </Label>
            <Input
              id="display-name"
              value={profile.displayName}
              onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Timezone
            </Label>
            <Select value={profile.timezone} onValueChange={(value) => setProfile({ ...profile, timezone: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PST (UTC-8)">PST (UTC-8)</SelectItem>
                <SelectItem value="EST (UTC-5)">EST (UTC-5)</SelectItem>
                <SelectItem value="GMT (UTC+0)">GMT (UTC+0)</SelectItem>
                <SelectItem value="CET (UTC+1)">CET (UTC+1)</SelectItem>
                <SelectItem value="JST (UTC+9)">JST (UTC+9)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
