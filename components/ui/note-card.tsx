"use client"

import { useState } from "react"
import { Clock, Edit, X, GripVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Note {
  id: string
  content: string
  timestamp: string
  updatedAt?: string
}

interface NoteCardProps {
  note: Note
  onUpdate: (noteId: string, content: string) => void
  onDelete: (noteId: string) => void
  isDraggable?: boolean
}

export function NoteCard({ note, onUpdate, onDelete, isDraggable = false }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(note.content)

  const startEditing = () => {
    setIsEditing(true)
    setEditedContent(note.content)
  }

  const cancelEditing = () => {
    setIsEditing(false)
    setEditedContent(note.content)
  }

  const saveEdit = () => {
    if (!editedContent.trim()) return
    onUpdate(note.id, editedContent.trim())
    setIsEditing(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md p-3 border text-sm group">
      {isEditing ? (
        // Edit mode
        <div className="space-y-2">
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="min-h-[80px] text-sm"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={cancelEditing}>
              Cancel
            </Button>
            <Button size="sm" onClick={saveEdit} disabled={!editedContent.trim()}>
              Save
            </Button>
          </div>
        </div>
      ) : (
        // View mode
        <>
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center text-xs text-muted-foreground">
              {isDraggable && (
                <span className="mr-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                  <GripVertical className="h-3 w-3 text-muted-foreground" />
                </span>
              )}
              <Clock className="h-3 w-3 mr-1" />
              {note.timestamp}
              {note.updatedAt && <span className="ml-2">• Updated: {note.updatedAt}</span>}
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 -mt-1 text-muted-foreground hover:text-blue-500"
                onClick={startEditing}
              >
                <Edit className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 -mt-1 -mr-1 text-muted-foreground hover:text-destructive"
                onClick={() => onDelete(note.id)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <p className="whitespace-pre-line">{note.content}</p>
        </>
      )}
    </div>
  )
}
