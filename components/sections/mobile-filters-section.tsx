"use client"

import { Filter, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { MobileFilterContent } from "@/components/sections/mobile-filter-content"

interface MobileFiltersSectionProps {
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

export function MobileFiltersSection({
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
}: MobileFiltersSectionProps) {
  return (
    <div className="flex justify-between mb-4 md:hidden">
      {filters.sortBy === "custom" && (
        <Button variant="outline" size="sm" className="flex items-center gap-1.5" onClick={onSaveCurrentOrder}>
          <Save className="h-3.5 w-3.5" />
          Save Order
        </Button>
      )}
      <div className={filters.sortBy === "custom" ? "ml-auto" : ""}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="relative">
              <Filter className="h-4 w-4 mr-1" />
              Advanced Filters
              {activeFiltersCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-purple-600">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Apply filters to find specific questions.</SheetDescription>
            </SheetHeader>

            <MobileFilterContent
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

            <SheetFooter className="flex-row justify-between">
              <Button variant="outline" onClick={onClearFilters}>
                Clear All Filters
              </Button>
              <SheetClose asChild>
                <Button>Apply Filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
