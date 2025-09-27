"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function AppLogo({
  withText = true,
  className,
}: {
  withText?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image src="/images/glidetask-logo.png" alt="GlideTask logo" width={32} height={32} priority />
      {withText && <span className="font-sans text-sm md:text-base font-semibold text-foreground">GlideTask</span>}
    </div>
  )
}
