"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import { SidebarFilterContent } from "@/components/sections/sidebar-filter-content"

interface SidebarFiltersSectionProps {
  activeFiltersCount: number
  filters: any
  selectedTags: string[]
  allTags: string[]
  onQuestionTypeChange: (type: string) => void
  onDifficultyChange: (difficulty: string) => void
  onStudyStatusChange: (status: string) => void
  onSortChange: (sort: string) => void
  onTagSelect: (tag: string) => void
  onTagRemove: (tag: string) => void
  onClearFilters: () => void
  onSaveCurrentOrder: () => void
}

export function SidebarFiltersSection({
  activeFiltersCount,
  filters,
  selectedTags,
  allTags,
  onQuestionTypeChange,
  onDifficultyChange,
  onStudyStatusChange,
  onSortChange,
  onTagSelect,
  onTagRemove,
  onClearFilters,
  onSaveCurrentOrder,
}: SidebarFiltersSectionProps) {
  return (
    <div className="border-t mt-6 pt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Filters</h2>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="h-8 px-2 text-xs">
            Clear All
          </Button>
        )}
      </div>

      <Accordion type="multiple" className="w-full" defaultValue={["type", "difficulty", "status", "sort"]}>
        <SidebarFilterContent
          filters={filters}
          selectedTags={selectedTags}
          allTags={allTags}
          onQuestionTypeChange={onQuestionTypeChange}
          onDifficultyChange={onDifficultyChange}
          onStudyStatusChange={onStudyStatusChange}
          onSortChange={onSortChange}
          onTagSelect={onTagSelect}
          onTagRemove={onTagRemove}
          onSaveCurrentOrder={onSaveCurrentOrder}
        />
      </Accordion>

      <div className="pt-4">
        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          asChild
        >
          <Link href="/add-question" className="flex items-center gap-1.5">
            <Plus className="h-4 w-4" />
            Add New Question
          </Link>
        </Button>
      </div>
    </div>
  )
}
