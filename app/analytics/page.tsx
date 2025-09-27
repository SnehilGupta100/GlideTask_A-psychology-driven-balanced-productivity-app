import { Sidebar } from "@/components/layout/sidebar"
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Analytics</h1>
            <p className="text-muted-foreground text-pretty">Insights and patterns in your productivity journey</p>
          </div>
          <AnalyticsDashboard />
        </div>
      </main>
    </div>
  )
}
