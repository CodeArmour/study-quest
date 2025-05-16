"use client"

import { Code, BookOpen, Filter, Save } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MobileFilterContentProps {
  filters: any
  selectedTags: string[]
  allTags: string[]
  onQuestionTypeChange: (type: string) => void
  onDifficultyChange: (difficulty: string) => void
  onStudyStatusChange: (status: string) => void
  onSortChange: (sort: string) => void
  onTagSelect: (tag: string) => void
  onTagRemove: (tag: string) => void
  onSaveCurrentOrder: () => void
}

export function MobileFilterContent({
  filters,
  selectedTags,
  allTags,
  onQuestionTypeChange,
  onDifficultyChange,
  onStudyStatusChange,
  onSortChange,
  onTagSelect,
  onTagRemove,
  onSaveCurrentOrder,
}: MobileFilterContentProps) {
  return (
    <div className="py-4 space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Question Type</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="all-type-mobile"
              name="question-type-mobile"
              checked={filters.questionType === "all"}
              onChange={() => onQuestionTypeChange("all")}
              className="h-4 w-4 text-purple-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <Label htmlFor="all-type-mobile" className="flex items-center gap-1.5">
              <Filter className="h-4 w-4 text-gray-500" />
              All Questions
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="coding-type-mobile"
              name="question-type-mobile"
              checked={filters.questionType === "coding"}
              onChange={() => onQuestionTypeChange("coding")}
              className="h-4 w-4 text-purple-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <Label htmlFor="coding-type-mobile" className="flex items-center gap-1.5">
              <Code className="h-4 w-4 text-purple-500" />
              Coding Questions
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="theory-type-mobile"
              name="question-type-mobile"
              checked={filters.questionType === "theory"}
              onChange={() => onQuestionTypeChange("theory")}
              className="h-4 w-4 text-purple-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <Label htmlFor="theory-type-mobile" className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-blue-500" />
              Theory Questions
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Difficulty</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="easy-mobile"
              checked={filters.difficulty.includes("easy")}
              onCheckedChange={() => onDifficultyChange("easy")}
            />
            <Label htmlFor="easy-mobile" className="flex items-center">
              <Badge className="bg-green-500 hover:bg-green-600 mr-2">Easy</Badge>
              Beginner friendly questions
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="medium-mobile"
              checked={filters.difficulty.includes("medium")}
              onCheckedChange={() => onDifficultyChange("medium")}
            />
            <Label htmlFor="medium-mobile" className="flex items-center">
              <Badge className="bg-yellow-500 hover:bg-yellow-600 mr-2">Medium</Badge>
              Intermediate level questions
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hard-mobile"
              checked={filters.difficulty.includes("hard")}
              onCheckedChange={() => onDifficultyChange("hard")}
            />
            <Label htmlFor="hard-mobile" className="flex items-center">
              <Badge className="bg-red-500 hover:bg-red-600 mr-2">Hard</Badge>
              Advanced level questions
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Study Status</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="all-status-mobile"
              name="study-status-mobile"
              checked={filters.studyStatus === "all"}
              onChange={() => onStudyStatusChange("all")}
              className="h-4 w-4 text-purple-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <Label htmlFor="all-status-mobile">All questions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="studied-mobile"
              name="study-status-mobile"
              checked={filters.studyStatus === "studied"}
              onChange={() => onStudyStatusChange("studied")}
              className="h-4 w-4 text-purple-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <Label htmlFor="studied-mobile">Studied only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="not-studied-mobile"
              name="study-status-mobile"
              checked={filters.studyStatus === "not-studied"}
              onChange={() => onStudyStatusChange("not-studied")}
              className="h-4 w-4 text-purple-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <Label htmlFor="not-studied-mobile">Not studied yet</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Sort By</h3>
          {filters.sortBy === "custom" && (
            <Button variant="outline" size="sm" className="flex items-center gap-1.5" onClick={onSaveCurrentOrder}>
              <Save className="h-3.5 w-3.5" />
              Save Order
            </Button>
          )}
        </div>
        <Select value={filters.sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select sort order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="custom">Custom Order</SelectItem>
            <SelectItem value="default">Default Order</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="a-z">A to Z</SelectItem>
            <SelectItem value="z-a">Z to A</SelectItem>
            <SelectItem value="difficulty-asc">Easiest First</SelectItem>
            <SelectItem value="difficulty-desc">Hardest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Tags</h3>
        <Select
          onValueChange={(value) => {
            if (value && !selectedTags.includes(value)) {
              onTagSelect(value)
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a tag" />
          </SelectTrigger>
          <SelectContent>
            {allTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {selectedTags.map((tag) => (
              <div
                key={tag}
                className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded-full flex items-center gap-1"
              >
                {tag}
                <button className="hover:text-purple-900 dark:hover:text-purple-100" onClick={() => onTagRemove(tag)}>
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
