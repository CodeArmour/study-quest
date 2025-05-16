"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Edit, GripVertical } from "lucide-react"
import { TypeBadge } from "@/components/ui/type-badge"
import { DifficultyBadge } from "@/components/ui/difficulty-badge"
import { StudiedBadge } from "@/components/ui/studied-badge"
import { TagBadge } from "@/components/ui/tag-badge"
import { QuestionAnswer } from "@/components/question-card/question-answer"
import { QuestionNotes } from "@/components/question-card/question-notes"
import { QuestionEditForm } from "@/components/question-card/question-edit-form"

interface QuestionCardProps {
  question: any
  isStudied: boolean
  toggleStudied: (id: number) => void
  notes: any[]
  currentNote: string
  onCurrentNoteChange: (value: string) => void
  onSaveNote: () => void
  onUpdateNote: (noteId: string, content: string) => void
  onDeleteNote: (noteId: string) => void
  onReorderNotes: (questionId: number, reorderedNotes: any[]) => void
  showNotes: boolean
  toggleNotes: () => void
  isEditing: boolean
  onEdit: () => void
  onCancelEdit: () => void
  onUpdateQuestion: (updatedQuestion: any) => void
  allTags: string[]
  isDraggable?: boolean
}

export function QuestionCard({
  question,
  isStudied,
  toggleStudied,
  notes,
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
  isDraggable = false,
}: QuestionCardProps) {
  if (isEditing) {
    return (
      <QuestionEditForm question={question} onCancel={onCancelEdit} onUpdate={onUpdateQuestion} allTags={allTags} />
    )
  }

  return (
    <Card
      className={`overflow-hidden border-l-4 ${
        question.type === "coding" ? "border-purple-500" : "border-blue-500"
      } dark:bg-gray-900 group`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {isDraggable && (
              <span className="cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
              </span>
            )}
            <TypeBadge type={question.type} />
            <DifficultyBadge difficulty={question.difficulty} />
            {isStudied && <StudiedBadge />}
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onEdit} title="Edit Question">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit Question</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${isStudied ? "text-green-600 dark:text-green-400" : ""}`}
              onClick={() => toggleStudied(question.id)}
              title={isStudied ? "Mark as Not Studied" : "Mark as Studied"}
            >
              <CheckCircle className={`h-4 w-4 ${isStudied ? "fill-green-100 dark:fill-green-900/30" : ""}`} />
              <span className="sr-only">{isStudied ? "Mark as Not Studied" : "Mark as Studied"}</span>
            </Button>
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{question.question}</CardTitle>
        <CardDescription className="flex flex-wrap gap-1.5 mt-1">
          {question.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <QuestionAnswer question={question} />
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-800/50 flex flex-col items-stretch p-0">
        <div className="px-4 py-3 flex justify-between">
          <Button
            variant={isStudied ? "outline" : "default"}
            size="sm"
            className={
              isStudied
                ? "text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                : "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white"
            }
            onClick={() => toggleStudied(question.id)}
          >
            {isStudied ? (
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" /> Studied
              </span>
            ) : (
              "Mark as Studied"
            )}
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleNotes}>
            {showNotes ? "Hide Notes" : `Notes ${notes.length > 0 ? `(${notes.length})` : ""}`}
          </Button>
        </div>

        {showNotes && (
          <QuestionNotes
            notes={notes}
            currentNote={currentNote}
            onCurrentNoteChange={onCurrentNoteChange}
            onSaveNote={onSaveNote}
            onUpdateNote={onUpdateNote}
            onDeleteNote={onDeleteNote}
            onReorderNotes={(reorderedNotes) => onReorderNotes(question.id, reorderedNotes)}
          />
        )}
      </CardFooter>
    </Card>
  )
}
