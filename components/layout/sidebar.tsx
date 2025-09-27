"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, CheckSquare, Target, BarChart3, Settings, Plus, Upload } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Habits", href: "/habits", icon: Target },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
        <Image src="/logo.png" alt="GlideTask" width={32} height={32} className="flex-shrink-0" />
        <div>
          <h1 className="font-sans font-semibold text-lg text-sidebar-foreground">GlideTask</h1>
          <p className="text-sm text-muted-foreground">Balanced Productivity for You</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Navigation</p>
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-10",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</p>
          <Button className="w-full justify-start gap-3 h-10 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-10 bg-transparent">
            <Target className="h-4 w-4" />
            Add Habit
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-10 bg-transparent">
            <Upload className="h-4 w-4" />
            Import
          </Button>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground text-center">Built for sustainable productivity</p>
      </div>
    </div>
  )
}
