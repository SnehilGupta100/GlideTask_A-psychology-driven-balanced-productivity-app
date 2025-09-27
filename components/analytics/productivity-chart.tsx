"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const weekData = [
  { name: "Mon", tasks: 12, habits: 4 },
  { name: "Tue", tasks: 8, habits: 3 },
  { name: "Wed", tasks: 15, habits: 5 },
  { name: "Thu", tasks: 10, habits: 4 },
  { name: "Fri", tasks: 14, habits: 3 },
  { name: "Sat", tasks: 6, habits: 5 },
  { name: "Sun", tasks: 4, habits: 4 },
]

const monthData = [
  { name: "Week 1", tasks: 49, habits: 26 },
  { name: "Week 2", tasks: 52, habits: 28 },
  { name: "Week 3", tasks: 45, habits: 24 },
  { name: "Week 4", tasks: 58, habits: 30 },
]

interface ProductivityChartProps {
  timeRange: string
}

export function ProductivityChart({ timeRange }: ProductivityChartProps) {
  const data = timeRange === "week" ? weekData : monthData

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-primary" />
            <span>Tasks Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-chart-2" />
            <span>Habits Maintained</span>
          </div>
        </div>
        <div className="text-sm text-chart-1 font-medium">+12% from last {timeRange}</div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0",
              }}
            />
            <Bar dataKey="tasks" fill="hsl(var(--primary))" />
            <Bar dataKey="habits" fill="hsl(var(--chart-2))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
