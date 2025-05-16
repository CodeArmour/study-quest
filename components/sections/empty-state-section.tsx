"use client"

import { Search, Code, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateSectionProps {
  type: string | null
  onClearFilters: () => void
}

export function EmptyStateSection({ type, onClearFilters }: EmptyStateSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
        {type === "coding" ? (
          <Code className="h-6 w-6 text-gray-500" />
        ) : type === "theory" ? (
          <BookOpen className="h-6 w-6 text-gray-500" />
        ) : (
          <Search className="h-6 w-6 text-gray-500" />
        )}
      </div>
      <h3 className="text-lg font-medium mb-2">No questions found</h3>
      <p className="text-muted-foreground max-w-sm">
        {type ? `No ${type} questions match your search criteria.` : "No questions match your search criteria."}
      </p>
      <Button variant="outline" className="mt-4" onClick={onClearFilters}>
        Clear filters
      </Button>
    </div>
  )
}
