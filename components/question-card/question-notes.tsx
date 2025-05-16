"use client"

import { NotesList } from "@/components/ui/notes-list"
import { AddNoteForm } from "@/components/ui/add-note-form"

interface QuestionNotesProps {
  notes: any[]
  currentNote: string
  onCurrentNoteChange: (value: string) => void
  onSaveNote: () => void
  onUpdateNote: (noteId: string, content: string) => void
  onDeleteNote: (noteId: string) => void
  onReorderNotes: (reorderedNotes: any[]) => void
}

export function QuestionNotes({
  notes,
  currentNote,
  onCurrentNoteChange,
  onSaveNote,
  onUpdateNote,
  onDeleteNote,
  onReorderNotes,
}: QuestionNotesProps) {
  return (
    <div className="p-4 border-t">
      <NotesList notes={notes} onUpdate={onUpdateNote} onDelete={onDeleteNote} onReorder={onReorderNotes} />
      <AddNoteForm
        value={currentNote}
        onChange={onCurrentNoteChange}
        onSave={onSaveNote}
        isFirst={notes.length === 0}
      />
    </div>
  )
}
