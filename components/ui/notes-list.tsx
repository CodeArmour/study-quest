"use client"

import { NoteItem } from "@/components/ui/note-item"

interface Note {
  id: string
  content: string
  timestamp: string
  updatedAt?: string
}

interface NotesListProps {
  notes: Note[]
  onUpdate: (noteId: string, content: string) => void
  onDelete: (noteId: string) => void
  onReorder: (reorderedNotes: Note[]) => void
}

export function NotesList({ notes = [], onUpdate, onDelete, onReorder }: NotesListProps) {
  // Ensure notes is always an array
  const safeNotes = Array.isArray(notes) ? notes : []

  if (safeNotes.length === 0) return null

  // Handle moving a note up in the list
  const moveNoteUp = (index: number) => {
    if (index <= 0) return

    const newNotes = [...safeNotes]
    const temp = newNotes[index]
    newNotes[index] = newNotes[index - 1]
    newNotes[index - 1] = temp

    onReorder(newNotes)
  }

  // Handle moving a note down in the list
  const moveNoteDown = (index: number) => {
    if (index >= safeNotes.length - 1) return

    const newNotes = [...safeNotes]
    const temp = newNotes[index]
    newNotes[index] = newNotes[index + 1]
    newNotes[index + 1] = temp

    onReorder(newNotes)
  }

  return (
    <div className="mb-4 space-y-3">
      <h3 className="text-sm font-medium">Your Notes</h3>
      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
        {safeNotes.map((note, index) => (
          <NoteItem
            key={note.id}
            note={note}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onMoveUp={() => moveNoteUp(index)}
            onMoveDown={() => moveNoteDown(index)}
            isFirst={index === 0}
            isLast={index === safeNotes.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
