import { Sidebar } from "@/components/layout/sidebar"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { TodaysTasks } from "@/components/dashboard/todays-tasks"
import { HabitTracker } from "@/components/dashboard/habit-tracker"
import { AITaskProcessor } from "@/components/ai/ai-task-processor"
import { SmartScheduling } from "@/components/ai/smart-scheduling"
import { AdvancedImport } from "@/components/import/advanced-import"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Good morning!</h1>
            <p className="text-muted-foreground text-pretty">{"Here's your productivity overview for today"}</p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overview Cards */}
            <div className="lg:col-span-3">
              <DashboardOverview />
            </div>

            {/* Today's Tasks */}
            <div className="lg:col-span-2">
              <TodaysTasks />
            </div>

            {/* Habit Tracker */}
            <div className="lg:col-span-1">
              <HabitTracker />
            </div>

            {/* AI Features */}
            <div className="lg:col-span-2">
              <AITaskProcessor />
            </div>

            <div className="lg:col-span-1">
              <SmartScheduling />
            </div>

            {/* Advanced Import */}
            <div className="lg:col-span-3">
              <AdvancedImport />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
