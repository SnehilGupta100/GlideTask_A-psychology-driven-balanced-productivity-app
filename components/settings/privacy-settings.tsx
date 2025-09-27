"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Shield, Eye, Share, Trash2 } from "lucide-react"

export function PrivacySettings() {
  const [privacy, setPrivacy] = useState({
    analyticsSharing: false,
    extendedDataRetention: true,
    usageAnalytics: true,
    crashReporting: true,
  })

  const togglePrivacy = (key: string) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Privacy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Privacy Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary/10 flex items-center justify-center">
                <Share className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Analytics Sharing</h4>
                <p className="text-sm text-muted-foreground">Help improve the platform</p>
              </div>
            </div>
            <Switch checked={privacy.analyticsSharing} onCheckedChange={() => togglePrivacy("analyticsSharing")} />
          </div>

          <div className="flex items-center justify-between p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary/10 flex items-center justify-center">
                <Eye className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Extended Data Retention</h4>
                <p className="text-sm text-muted-foreground">Keep data beyond 1 year</p>
              </div>
            </div>
            <Switch
              checked={privacy.extendedDataRetention}
              onCheckedChange={() => togglePrivacy("extendedDataRetention")}
            />
          </div>

          <div className="flex items-center justify-between p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Usage Analytics</h4>
                <p className="text-sm text-muted-foreground">Anonymous usage data to improve features</p>
              </div>
            </div>
            <Switch checked={privacy.usageAnalytics} onCheckedChange={() => togglePrivacy("usageAnalytics")} />
          </div>

          <div className="flex items-center justify-between p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Crash Reporting</h4>
                <p className="text-sm text-muted-foreground">Automatic crash reports to fix bugs</p>
              </div>
            </div>
            <Switch checked={privacy.crashReporting} onCheckedChange={() => togglePrivacy("crashReporting")} />
          </div>
        </div>

        {/* Data Rights */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Your Data Rights</h3>
          <div className="p-4 border border-border space-y-3">
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• You have the right to access all your personal data</p>
              <p>• You can request data portability in standard formats</p>
              <p>• You can request deletion of your account and all associated data</p>
              <p>• You can opt out of data processing for marketing purposes</p>
            </div>
            <Button variant="outline" size="sm" className="bg-transparent">
              View Privacy Policy
            </Button>
          </div>
        </div>

        {/* Account Deletion */}
        <div className="space-y-4">
          <h3 className="font-medium text-destructive">Delete Account</h3>
          <div className="p-4 border border-destructive/20 bg-destructive/5 space-y-3">
            <div>
              <h4 className="font-medium text-foreground">Permanently delete your account</h4>
              <p className="text-sm text-muted-foreground">This action cannot be undone</p>
            </div>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              Delete Account
            </Button>
          </div>
        </div>

        {/* App Version */}
        <div className="pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with psychology principles for sustainable productivity
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
