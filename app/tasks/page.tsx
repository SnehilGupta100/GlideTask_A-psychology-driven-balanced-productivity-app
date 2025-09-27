import { Sidebar } from "@/components/layout/sidebar"
import { TaskManager } from "@/components/tasks/task-manager"

export default function TasksPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Tasks</h1>
            <p className="text-muted-foreground text-pretty">Frictionless task capture from any source</p>
          </div>
          <TaskManager />
        </div>
      </main>
    </div>
  )
}
