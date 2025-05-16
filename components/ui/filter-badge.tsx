"use client"

import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface FilterBadgeProps {
  label: string
  value: string
  onRemove: () => void
}

export function FilterBadge({ label, value, onRemove }: FilterBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="flex items-center gap-1 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
    >
      {label}: {value}
      <button
        onClick={onRemove}
        className="ml-1 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 h-4 w-4 inline-flex items-center justify-center"
      >
        <X className="h-3 w-3" />
      </button>
    </Badge>
  )
}
