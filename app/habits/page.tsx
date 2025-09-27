import { Sidebar } from "@/components/layout/sidebar"
import { HabitManager } from "@/components/habits/habit-manager"

export default function HabitsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Habits</h1>
            <p className="text-muted-foreground text-pretty">Build lasting habits with psychology-driven tracking</p>
          </div>
          <HabitManager />
        </div>
      </main>
    </div>
  )
}
