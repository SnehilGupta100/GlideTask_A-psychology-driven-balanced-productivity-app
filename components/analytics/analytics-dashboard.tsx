"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsOverview } from "./analytics-overview"
import { ProductivityChart } from "./productivity-chart"
import { PeakPerformanceTimes } from "./peak-performance-times"
import { MonthlyTrends } from "./monthly-trends"
import { FocusAreas } from "./focus-areas"
import { AIInsights } from "./ai-insights"

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <AnalyticsOverview />

      {/* Main Analytics Content */}
      <Tabs value={timeRange} onValueChange={setTimeRange} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-6 space-y-6">
          {/* Productivity Overview Chart */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Productivity Overview</CardTitle>
              <p className="text-sm text-muted-foreground">Track your progress and identify patterns</p>
            </CardHeader>
            <CardContent>
              <TabsContent value={timeRange} className="mt-0">
                <ProductivityChart timeRange={timeRange} />
              </TabsContent>
            </CardContent>
          </Card>

          {/* Grid Layout for Additional Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Peak Performance Times */}
            <PeakPerformanceTimes />

            {/* Monthly Trends */}
            <MonthlyTrends />
          </div>

          {/* Focus Areas and AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FocusAreas />
            <AIInsights />
          </div>
        </div>
      </Tabs>
    </div>
  )
}
