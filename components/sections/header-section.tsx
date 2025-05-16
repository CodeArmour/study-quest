"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Plus, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface HeaderSectionProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function HeaderSection({ searchQuery, onSearchChange }: HeaderSectionProps) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-0">
              <Image
                src="/navIcon.png"
                alt="Logo"
                width={55}
                height={55}
                />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              StudyQuest
            </span>
          </Link>
        </div>
        <div className="relative w-full max-w-sm mx-4 hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search questions..."
            className="pl-8 bg-background"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="/quiz-mode" className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Quiz Mode
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/add-question" className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              Add Question
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
