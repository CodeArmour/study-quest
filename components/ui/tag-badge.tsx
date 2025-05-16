interface TagBadgeProps {
  tag: string
}

export function TagBadge({ tag }: TagBadgeProps) {
  return <span className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">{tag}</span>
}
