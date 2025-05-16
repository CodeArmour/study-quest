"use client"

import { Button } from "@/components/ui/button"
import { FilterBadge } from "@/components/ui/filter-badge"

interface ActiveFiltersSectionProps {
  filters: any
  selectedTags: string[]
  onQuestionTypeChange: (type: string) => void
  onClearDifficulty: () => void
  onClearStudyStatus: () => void
  onClearSortBy: () => void
  onClearTags: () => void
  onClearAllFilters: () => void
}

export function ActiveFiltersSection({
  filters,
  selectedTags,
  onQuestionTypeChange,
  onClearDifficulty,
  onClearStudyStatus,
  onClearSortBy,
  onClearTags,
  onClearAllFilters,
}: ActiveFiltersSectionProps) {
  return (
    <div className="flex items-center flex-wrap gap-2 mb-4">
      <span className="text-sm text-muted-foreground">Active filters:</span>

      {filters.questionType !== "all" && (
        <FilterBadge
          label="Type"
          value={filters.questionType === "coding" ? "Coding" : "Theory"}
          onRemove={() => onQuestionTypeChange("all")}
        />
      )}

      {selectedTags.length > 0 && (
        <FilterBadge label="Tags" value={selectedTags.length.toString()} onRemove={onClearTags} />
      )}

      {filters.difficulty.length > 0 && (
        <FilterBadge label="Difficulty" value={filters.difficulty.join(", ")} onRemove={onClearDifficulty} />
      )}

      {filters.studyStatus !== "all" && (
        <FilterBadge
          label="Status"
          value={filters.studyStatus === "studied" ? "Studied" : "Not Studied"}
          onRemove={onClearStudyStatus}
        />
      )}

      {filters.sortBy !== "default" && (
        <FilterBadge
          label="Sort"
          value={filters.sortBy.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          onRemove={onClearSortBy}
        />
      )}

      <Button variant="ghost" size="sm" onClick={onClearAllFilters} className="h-7 px-2 text-xs">
        Clear All
      </Button>
    </div>
  )
}
