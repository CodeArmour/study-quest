"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Edit, GripVertical, BookOpen, Trash2 } from "lucide-react"
import { TypeBadge } from "@/components/ui/type-badge"
import { DifficultyBadge } from "@/components/ui/difficulty-badge"
import { StudiedBadge } from "@/components/ui/studied-badge"
import { TagBadge } from "@/components/ui/tag-badge"
import { QuestionAnswer } from "@/components/question-card/question-answer"
import { QuestionNotes } from "@/components/question-card/question-notes"
import { QuestionEditForm } from "@/components/question-card/question-edit-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface QuestionCardProps {
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
  onDeleteQuestion: (questionId: number) => void
  allTags: string[]
  isDraggable?: boolean
}

export function QuestionCard({
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
  onDeleteQuestion,
  allTags,
  isDraggable = false,
}: QuestionCardProps) {
  // Ensure notes is always an array
  const safeNotes = Array.isArray(notes) ? notes : []

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
      {/* Keep the existing CardHeader and CardContent */}
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

            {/* Add delete button with confirmation dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20"
                  title="Delete Question"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete Question</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete this question and all associated notes. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => onDeleteQuestion(question.id)}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

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
          <Button variant="ghost" size="sm" onClick={toggleNotes} className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            {showNotes ? "Hide Notes" : `Notes ${safeNotes.length > 0 ? `(${safeNotes.length})` : ""}`}
          </Button>
        </div>

        {showNotes && (
          <QuestionNotes
            notes={safeNotes}
            currentNote={currentNote}
            onCurrentNoteChange={onCurrentNoteChange}
            onSaveNote={() => onSaveNote(question.id)}
            onUpdateNote={(noteId, content) => onUpdateNote(question.id, noteId, content)}
            onDeleteNote={(noteId) => onDeleteNote(question.id, noteId)}
            onReorderNotes={(reorderedNotes) => onReorderNotes(question.id, reorderedNotes)}
          />
        )}
      </CardFooter>
    </Card>
  )
}
