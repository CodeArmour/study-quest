"use client"

import { ArrowUpDown, CheckCircle, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DesktopSortSectionProps {
  sortBy: string
  onSortChange: (sort: string) => void
  onSaveCurrentOrder: () => void
}

export function DesktopSortSection({ sortBy, onSortChange, onSaveCurrentOrder }: DesktopSortSectionProps) {
  return (
    <div className="ml-auto flex items-center gap-2">
      {sortBy === "custom" && (
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex items-center gap-1.5"
          onClick={onSaveCurrentOrder}
        >
          <Save className="h-3.5 w-3.5" />
          Save Order
        </Button>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1.5">
            <ArrowUpDown className="h-3.5 w-3.5" />
            Sort
            {sortBy !== "default" && (
              <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-purple-600">1</Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Sort Questions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => onSortChange("custom")}
            className={sortBy === "custom" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            Custom Order
            {sortBy === "custom" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onSortChange("newest")}
            className={sortBy === "newest" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            Newest First
            {sortBy === "newest" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onSortChange("oldest")}
            className={sortBy === "oldest" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            Oldest First
            {sortBy === "oldest" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onSortChange("a-z")}
            className={sortBy === "a-z" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            A to Z{sortBy === "a-z" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onSortChange("z-a")}
            className={sortBy === "z-a" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            Z to A{sortBy === "z-a" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => onSortChange("difficulty-asc")}
            className={sortBy === "difficulty-asc" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            Easiest First
            {sortBy === "difficulty-asc" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onSortChange("difficulty-desc")}
            className={sortBy === "difficulty-desc" ? "bg-purple-50 dark:bg-purple-900/20" : ""}
          >
            Hardest First
            {sortBy === "difficulty-desc" && <CheckCircle className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
