"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Code, BookOpen, X } from "lucide-react"

interface QuestionEditFormProps {
  question: any
  onCancel: () => void
  onUpdate: (updatedQuestion: any) => void
  allTags: string[]
}

export function QuestionEditForm({ question, onCancel, onUpdate, allTags }: QuestionEditFormProps) {
  // Add state for the edit form
  const [editForm, setEditForm] = useState({
    question: question.question,
    answer: question.answer,
    type: question.type,
    difficulty: question.difficulty,
    tags: [...question.tags],
  })

  // Add state for tag input
  const [tagInput, setTagInput] = useState("")

  // Handle form field changes
  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditForm({
      ...editForm,
      [name]: value,
    })
  }

  // Handle type change
  const handleTypeChange = (value) => {
    setEditForm({
      ...editForm,
      type: value,
    })
  }

  // Handle difficulty change
  const handleDifficultyChange = (value) => {
    setEditForm({
      ...editForm,
      difficulty: value,
    })
  }

  // Add a tag
  const handleAddTag = (e) => {
    e.preventDefault()
    const tag = tagInput.trim().toLowerCase()

    if (tag && !editForm.tags.includes(tag)) {
      setEditForm({
        ...editForm,
        tags: [...editForm.tags, tag],
      })
      setTagInput("")
    }
  }

  // Remove a tag
  const handleRemoveTag = (tagToRemove) => {
    setEditForm({
      ...editForm,
      tags: editForm.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(editForm)
  }

  // Reset form when exiting edit mode
  useEffect(() => {
    setEditForm({
      question: question.question,
      answer: question.answer,
      type: question.type,
      difficulty: question.difficulty,
      tags: [...question.tags],
    })
  }, [question])

  return (
    <Card className="overflow-hidden border-l-4 border-purple-500 dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-lg">Edit Question</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question-type">Question Type</Label>
            <RadioGroup value={editForm.type} onValueChange={handleTypeChange} className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="coding" id="edit-coding" />
                <Label htmlFor="edit-coding" className="cursor-pointer flex items-center gap-1.5">
                  <Code className="h-4 w-4 text-purple-500" />
                  Coding Question
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="theory" id="edit-theory" />
                <Label htmlFor="edit-theory" className="cursor-pointer flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  Theoretical Question
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select value={editForm.difficulty} onValueChange={handleDifficultyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Textarea
              id="question"
              name="question"
              value={editForm.question}
              onChange={handleEditChange}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="answer">Answer</Label>
            <Textarea
              id="answer"
              name="answer"
              value={editForm.answer}
              onChange={handleEditChange}
              className={`min-h-[200px] font-mono text-sm`}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2">
              <Input
                id="tags"
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddTag(e)
                  }
                }}
              />
              <Button type="button" onClick={handleAddTag}>
                Add
              </Button>
            </div>

            {editForm.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {editForm.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 hover:text-destructive focus:outline-none"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {tag} tag</span>
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 border-t p-4">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
