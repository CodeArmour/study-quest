"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { QuestionCard } from "@/components/question-card/question-card"

interface SortableQuestionCardProps {
  id: number
  question: any
  isStudied: boolean
  toggleStudied: (id: number) => void
  notes: any[]
  currentNote: string
  onCurrentNoteChange: (value: string) => void
  onSaveNote: (questionId: number) => void
  onUpdateNote: (questionId: number, noteId: string, content: string) => void
  onDeleteNote: (questionId: number, noteId: string) => void
  onReorderNotes: (questionId: number, reorderedNotes: any[]) => void
  showNotes: boolean
  toggleNotes: () => void
  isEditing: boolean
  onEdit: () => void
  onCancelEdit: () => void
  onUpdateQuestion: (updatedQuestion: any) => void
  allTags: string[]
  isDragging: boolean
}

export function SortableQuestionCard({
  id,
  question,
  isStudied,
  toggleStudied,
  notes = [],
  currentNote,
  onCurrentNoteChange,
  onSaveNote,
  onUpdateNote,
  onDeleteNote,
  onReorderNotes,
  showNotes,
  toggleNotes,
  isEditing,
  onEdit,
  onCancelEdit,
  onUpdateQuestion,
  allTags,
  isDragging,
}: SortableQuestionCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
    disabled: showNotes, // Disable dragging when notes are shown
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="touch-none">
      <QuestionCard
        question={question}
        isStudied={isStudied}
        toggleStudied={toggleStudied}
        notes={notes}
        currentNote={currentNote}
        onCurrentNoteChange={onCurrentNoteChange}
        onSaveNote={onSaveNote}
        onUpdateNote={onUpdateNote}
        onDeleteNote={onDeleteNote}
        onReorderNotes={onReorderNotes}
        showNotes={showNotes}
        toggleNotes={toggleNotes}
        isEditing={isEditing}
        onEdit={onEdit}
        onCancelEdit={onCancelEdit}
        onUpdateQuestion={onUpdateQuestion}
        allTags={allTags}
        isDraggable={true}
      />
    </div>
  )
}
