"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Monitor, Smartphone } from "lucide-react"

export function AppearanceSettings() {
  const [appearance, setAppearance] = useState({
    theme: "light",
    interfaceDensity: "comfortable",
    microInteractions: true,
    animations: true,
    colorScheme: "default",
  })

  const themes = [
    { value: "light", label: "Light", icon: "☀️" },
    { value: "dark", label: "Dark", icon: "🌙" },
    { value: "system", label: "System", icon: "💻" },
  ]

  const densityOptions = [
    { value: "compact", label: "Compact", description: "More content, less spacing" },
    { value: "comfortable", label: "Comfortable", description: "Balanced spacing" },
    { value: "spacious", label: "Spacious", description: "More spacing, easier reading" },
  ]

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Appearance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Selection */}
        <div className="space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Theme
          </h3>
          <p className="text-sm text-muted-foreground">Choose your preferred color scheme</p>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((theme) => (
              <Button
                key={theme.value}
                variant={appearance.theme === theme.value ? "default" : "outline"}
                className="h-16 flex-col gap-2 bg-transparent"
                onClick={() => setAppearance({ ...appearance, theme: theme.value })}
              >
                <span className="text-lg">{theme.icon}</span>
                <span className="text-sm">{theme.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Interface Density */}
        <div className="space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            Interface Density
          </h3>
          <Select
            value={appearance.interfaceDensity}
            onValueChange={(value) => setAppearance({ ...appearance, interfaceDensity: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {densityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground">{option.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Micro-interactions */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            Interactions
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border">
              <div>
                <h4 className="font-medium text-foreground">Micro-interactions</h4>
                <p className="text-sm text-muted-foreground">Psychology-driven animations and feedback</p>
              </div>
              <Switch
                checked={appearance.microInteractions}
                onCheckedChange={(checked) => setAppearance({ ...appearance, microInteractions: checked })}
              />
            </div>

            <div className="flex items-center justify-between p-4 border border-border">
              <div>
                <h4 className="font-medium text-foreground">Smooth Animations</h4>
                <p className="text-sm text-muted-foreground">Enable smooth transitions and animations</p>
              </div>
              <Switch
                checked={appearance.animations}
                onCheckedChange={(checked) => setAppearance({ ...appearance, animations: checked })}
              />
            </div>
          </div>
        </div>

        {/* Color Customization */}
        <div className="space-y-3">
          <h3 className="font-medium text-foreground">Color Scheme</h3>
          <p className="text-sm text-muted-foreground">Customize the primary color accent</p>
          <div className="grid grid-cols-6 gap-2">
            {["bg-primary", "bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"].map(
              (color, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-12 w-12 p-0 ${color} ${
                    appearance.colorScheme === color ? "ring-2 ring-foreground" : ""
                  }`}
                  onClick={() => setAppearance({ ...appearance, colorScheme: color })}
                />
              ),
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
