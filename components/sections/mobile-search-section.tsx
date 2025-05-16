"use client"

import { Search, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileSearchSectionProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function MobileSearchSection({ searchQuery, onSearchChange }: MobileSearchSectionProps) {
  return (
    <div className="md:hidden mb-6 space-y-3">
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search questions..."
          className="pl-8 bg-background"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <Button variant="outline" size="sm" asChild className="w-full">
        <Link href="/quiz-mode" className="flex items-center justify-center gap-1.5">
          <Clock className="h-4 w-4" />
          Quiz Mode
        </Link>
      </Button>
    </div>
  )
}
