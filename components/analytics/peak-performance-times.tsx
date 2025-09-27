import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const performanceTimes = [
  {
    time: "9:00 AM - 11:00 AM",
    level: "Peak",
    description: "Most productive time for deep work",
    color: "bg-chart-1 text-white",
  },
  {
    time: "2:00 PM - 4:00 PM",
    level: "Good",
    description: "Ideal for collaborative tasks",
    color: "bg-chart-2 text-white",
  },
  {
    time: "7:00 PM - 9:00 PM",
    level: "Moderate",
    description: "Good for routine tasks and planning",
    color: "bg-muted text-muted-foreground",
  },
]

export function PeakPerformanceTimes() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Peak Performance Times
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {performanceTimes.map((period, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-border">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-foreground">{period.time}</p>
                <Badge className={`text-xs ${period.color}`}>{period.level}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{period.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
