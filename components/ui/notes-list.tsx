"use client"

import { useState } from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableNote } from "@/components/ui/sortable-note"

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

export function NotesList({ notes, onUpdate, onDelete, onReorder }: NotesListProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    setActiveId(null)

    if (over && active.id !== over.id) {
      const oldIndex = notes.findIndex((note) => note.id === active.id)
      const newIndex = notes.findIndex((note) => note.id === over.id)

      const reorderedNotes = arrayMove(notes, oldIndex, newIndex)
      onReorder(reorderedNotes)
    }
  }

  if (notes.length === 0) return null

  return (
    <div className="mb-4 space-y-3">
      <h3 className="text-sm font-medium">Your Notes</h3>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={notes.map((note) => note.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {notes.map((note) => (
              <SortableNote
                key={note.id}
                id={note.id}
                note={note}
                onUpdate={onUpdate}
                onDelete={onDelete}
                isDragging={activeId === note.id}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}
