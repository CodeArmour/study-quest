"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { NoteCard } from "@/components/ui/note-card"

interface Note {
  id: string
  content: string
  timestamp: string
  updatedAt?: string
}

interface SortableNoteProps {
  id: string
  note: Note
  onUpdate: (noteId: string, content: string) => void
  onDelete: (noteId: string) => void
  isDragging: boolean
}

export function SortableNote({ id, note, onUpdate, onDelete, isDragging }: SortableNoteProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <NoteCard note={note} onUpdate={onUpdate} onDelete={onDelete} isDraggable={true} />
    </div>
  )
}
