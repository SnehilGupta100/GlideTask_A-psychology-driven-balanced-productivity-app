import { Sidebar } from "@/components/layout/sidebar"
import { SettingsManager } from "@/components/settings/settings-manager"

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Settings</h1>
            <p className="text-muted-foreground text-pretty">Customize your productivity experience</p>
          </div>
          <SettingsManager />
        </div>
      </main>
    </div>
  )
}
