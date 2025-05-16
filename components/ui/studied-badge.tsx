import { CheckCircle } from "lucide-react"

export function StudiedBadge() {
  return (
    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400 flex items-center gap-1">
      <CheckCircle className="h-3 w-3" /> Studied
    </span>
  )
}
