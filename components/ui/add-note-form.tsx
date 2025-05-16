"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface AddNoteFormProps {
  value: string
  onChange: (value: string) => void
  onSave: () => void
  isFirst?: boolean
}

export function AddNoteForm({ value, onChange, onSave, isFirst = false }: AddNoteFormProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">{isFirst ? "Add a Note" : "Add Another Note"}</h3>
      <Textarea
        placeholder="Write your note here..."
        className="min-h-[100px] mb-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="flex justify-end">
        <Button size="sm" onClick={onSave} disabled={!value.trim()}>
          Add Note
        </Button>
      </div>
    </div>
  )
}
