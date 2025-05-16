import { BookOpen, Code } from "lucide-react"

interface TypeBadgeProps {
  type: string
}

export function TypeBadge({ type }: TypeBadgeProps) {
  const isCoding = type === "coding"

  return (
    <span
      className={`text-xs font-medium px-2 py-1 rounded-full ${
        isCoding
          ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      }`}
    >
      {isCoding ? (
        <span className="flex items-center gap-1">
          <Code className="h-3 w-3" /> Coding
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <BookOpen className="h-3 w-3" /> Theory
        </span>
      )}
    </span>
  )
}
