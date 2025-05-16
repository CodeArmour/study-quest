"use client"

import { Button } from "@/components/ui/button"
import { Filter, Code, BookOpen } from "lucide-react"

interface FilterTabsSectionProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function FilterTabsSection({ activeTab, onTabChange }: FilterTabsSectionProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex items-center bg-white dark:bg-gray-900 rounded-lg shadow-sm p-1.5 gap-1 w-full max-w-md">
        <Button
          variant={activeTab === "all" ? "default" : "ghost"}
          size="sm"
          className={`flex items-center gap-1.5 flex-1 ${
            activeTab === "all"
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              : "text-gray-600 dark:text-gray-300"
          }`}
          onClick={() => onTabChange("all")}
        >
          <Filter className="h-4 w-4" />
          All
        </Button>
        <Button
          variant={activeTab === "coding" ? "default" : "ghost"}
          size="sm"
          className={`flex items-center gap-1.5 flex-1 ${
            activeTab === "coding" ? "bg-purple-600 text-white" : "text-purple-600 dark:text-purple-400"
          }`}
          onClick={() => onTabChange("coding")}
        >
          <Code className="h-4 w-4" />
          Coding
        </Button>
        <Button
          variant={activeTab === "theory" ? "default" : "ghost"}
          size="sm"
          className={`flex items-center gap-1.5 flex-1 ${
            activeTab === "theory" ? "bg-blue-600 text-white" : "text-blue-600 dark:text-blue-400"
          }`}
          onClick={() => onTabChange("theory")}
        >
          <BookOpen className="h-4 w-4" />
          Theory
        </Button>
      </div>
    </div>
  )
}
