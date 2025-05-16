"use client"

import { Code, BookOpen, Filter, Save } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface SidebarFilterContentProps {
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

export function SidebarFilterContent({
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
}: SidebarFilterContentProps) {
  return (
    <>
      <AccordionItem value="type">
        <AccordionTrigger className="text-sm font-medium py-2">
          Question Type
          {filters.questionType !== "all" && <Badge className="ml-2 bg-purple-600">1</Badge>}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="all-type"
                name="question-type"
                checked={filters.questionType === "all"}
                onChange={() => onQuestionTypeChange("all")}
                className="h-4 w-4 text-purple-600"
              />
              <Label htmlFor="all-type" className="flex items-center gap-1.5">
                <Filter className="h-4 w-4 text-gray-500" />
                All Questions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="coding-type"
                name="question-type"
                checked={filters.questionType === "coding"}
                onChange={() => onQuestionTypeChange("coding")}
                className="h-4 w-4 text-purple-600"
              />
              <Label htmlFor="coding-type" className="flex items-center gap-1.5">
                <Code className="h-4 w-4 text-purple-500" />
                Coding Questions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="theory-type"
                name="question-type"
                checked={filters.questionType === "theory"}
                onChange={() => onQuestionTypeChange("theory")}
                className="h-4 w-4 text-purple-600"
              />
              <Label htmlFor="theory-type" className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-blue-500" />
                Theory Questions
              </Label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="difficulty">
        <AccordionTrigger className="text-sm font-medium py-2">
          Difficulty
          {filters.difficulty.length > 0 && <Badge className="ml-2 bg-purple-600">{filters.difficulty.length}</Badge>}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="easy"
                checked={filters.difficulty.includes("easy")}
                onCheckedChange={() => onDifficultyChange("easy")}
              />
              <Label htmlFor="easy" className="flex items-center">
                <Badge className="bg-green-500 hover:bg-green-600 mr-2">Easy</Badge>
                Beginner friendly
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="medium"
                checked={filters.difficulty.includes("medium")}
                onCheckedChange={() => onDifficultyChange("medium")}
              />
              <Label htmlFor="medium" className="flex items-center">
                <Badge className="bg-yellow-500 hover:bg-yellow-600 mr-2">Medium</Badge>
                Intermediate
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hard"
                checked={filters.difficulty.includes("hard")}
                onCheckedChange={() => onDifficultyChange("hard")}
              />
              <Label htmlFor="hard" className="flex items-center">
                <Badge className="bg-red-500 hover:bg-red-600 mr-2">Hard</Badge>
                Advanced
              </Label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="status">
        <AccordionTrigger className="text-sm font-medium py-2">
          Study Status
          {filters.studyStatus !== "all" && <Badge className="ml-2 bg-purple-600">1</Badge>}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="all-status"
                name="study-status"
                checked={filters.studyStatus === "all"}
                onChange={() => onStudyStatusChange("all")}
                className="h-4 w-4 text-purple-600"
              />
              <Label htmlFor="all-status">All questions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="studied"
                name="study-status"
                checked={filters.studyStatus === "studied"}
                onChange={() => onStudyStatusChange("studied")}
                className="h-4 w-4 text-purple-600"
              />
              <Label htmlFor="studied">Studied only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="not-studied"
                name="study-status"
                checked={filters.studyStatus === "not-studied"}
                onChange={() => onStudyStatusChange("not-studied")}
                className="h-4 w-4 text-purple-600"
              />
              <Label htmlFor="not-studied">Not studied yet</Label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sort">
        <AccordionTrigger className="text-sm font-medium py-2">
          Sort By
          {filters.sortBy !== "newest" && <Badge className="ml-2 bg-purple-600">1</Badge>}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            {filters.sortBy === "custom" && (
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-1.5"
                onClick={onSaveCurrentOrder}
              >
                <Save className="h-3.5 w-3.5" />
                Save Current Order
              </Button>
            )}
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
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="tags">
        <AccordionTrigger className="text-sm font-medium py-2">
          Tags
          {selectedTags.length > 0 && <Badge className="ml-2 bg-purple-600">{selectedTags.length}</Badge>}
        </AccordionTrigger>
        <AccordionContent>
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
              {selectedTags.length > 1 && (
                <button
                  className="text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => onTagRemove(null)}
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
