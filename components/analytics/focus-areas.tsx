import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

const focusAreas = [
  { name: "Work Projects", percentage: 45, color: "bg-primary" },
  { name: "Health", percentage: 30, color: "bg-chart-2" },
  { name: "Learning", percentage: 15, color: "bg-chart-4" },
  { name: "Personal", percentage: 10, color: "bg-chart-5" },
]

export function FocusAreas() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Target className="h-5 w-5" />
          Focus Areas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area, index) => (
            <Button key={index} variant="outline" size="sm" className="bg-transparent">
              {area.name}
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          {focusAreas.map((area, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 ${area.color}`} />
                  <span className="text-muted-foreground">{area.name}</span>
                </div>
                <span className="font-medium">{area.percentage}%</span>
              </div>
              <Progress value={area.percentage} className="h-2" />
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Most energy invested in work projects and health habits this month.
        </p>
      </CardContent>
    </Card>
  )
}
