"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Code, BookOpen, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { saveQuestion } from "@/lib/utils"

export default function AddQuestionPage() {
  const router = useRouter()

  // Form state
  const [formData, setFormData] = useState({
    type: "coding",
    question: "",
    answer: "",
    difficulty: "medium", // Add default difficulty
    tags: [],
  })

  // UI state
  const [tagInput, setTagInput] = useState("")
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("edit")

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  // Handle radio button change for question type
  const handleTypeChange = (value) => {
    setFormData({
      ...formData,
      type: value,
    })
  }

  // Add a tag to the question
  const handleAddTag = (e) => {
    e.preventDefault()
    const tag = tagInput.trim().toLowerCase()

    if (tag && !formData.tags.includes(tag)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag],
      })
      setTagInput("")

      // Clear tag error if it exists
      if (errors.tags) {
        setErrors({
          ...errors,
          tags: null,
        })
      }
    }
  }

  // Remove a tag from the question
  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  // Validate the form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.question.trim()) {
      newErrors.question = "Question is required"
    }

    if (!formData.answer.trim()) {
      newErrors.answer = "Answer is required"
    }

    if (!formData.difficulty) {
      newErrors.difficulty = "Difficulty is required"
    }

    if (formData.tags.length === 0) {
      newErrors.tags = "At least one tag is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Save the question to localStorage
    try {
      const savedQuestion = saveQuestion(formData)
      console.log("Question saved:", savedQuestion)

      toast({
        title: "Question Added Successfully",
        description: "Your new question has been added to your collection.",
      })

      // Redirect to home page after successful submission
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } catch (error) {
      console.error("Error saving question:", error)
      toast({
        title: "Error",
        description: "There was a problem saving your question. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <Toaster />
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-0">
              <Image
                src="/navIcon.png"
                alt="Logo"
                width={55}
                height={55}
                />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              StudyQuest
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">Cancel</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Add New Question</CardTitle>
            <CardDescription>Add a new question to your study collection</CardDescription>
          </CardHeader>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 px-6">
              <TabsTrigger value="edit">Edit Question</TabsTrigger>
              <TabsTrigger value="preview" disabled={!formData.question && !formData.answer}>
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="edit">
              <CardContent>
                <form id="question-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="question-type">Question Type</Label>
                    <RadioGroup
                      id="question-type"
                      value={formData.type}
                      onValueChange={handleTypeChange}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="coding" id="coding" />
                        <Label htmlFor="coding" className="cursor-pointer flex items-center gap-1.5">
                          <Code className="h-4 w-4 text-purple-500" />
                          Coding Question
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="theory" id="theory" />
                        <Label htmlFor="theory" className="cursor-pointer flex items-center gap-1.5">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          Theoretical Question
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <RadioGroup
                      id="difficulty"
                      value={formData.difficulty}
                      onValueChange={(value) => {
                        setFormData({
                          ...formData,
                          difficulty: value,
                        })

                        // Clear error for this field when user changes selection
                        if (errors.difficulty) {
                          setErrors({
                            ...errors,
                            difficulty: null,
                          })
                        }
                      }}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="easy" id="easy" />
                        <Label htmlFor="easy" className="cursor-pointer flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                          Easy
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="cursor-pointer flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                          Medium
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hard" id="hard" />
                        <Label htmlFor="hard" className="cursor-pointer flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                          Hard
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="question" className={errors.question ? "text-destructive" : ""}>
                      Question {errors.question && <span className="text-destructive">*</span>}
                    </Label>
                    <Textarea
                      id="question"
                      name="question"
                      placeholder="Enter your question here..."
                      className={`min-h-[100px] ${errors.question ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      value={formData.question}
                      onChange={handleChange}
                    />
                    {errors.question && <p className="text-sm text-destructive">{errors.question}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="answer" className={errors.answer ? "text-destructive" : ""}>
                      Answer {errors.answer && <span className="text-destructive">*</span>}
                    </Label>
                    <Textarea
                      id="answer"
                      name="answer"
                      placeholder={
                        formData.type === "coding" ? "// Enter your code solution here..." : "Enter the answer here..."
                      }
                      className={`min-h-[200px] font-mono text-sm ${errors.answer ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      value={formData.answer}
                      onChange={handleChange}
                    />
                    {errors.answer && <p className="text-sm text-destructive">{errors.answer}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags" className={errors.tags ? "text-destructive" : ""}>
                      Tags {errors.tags && <span className="text-destructive">*</span>}
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        placeholder="Add a tag (e.g., algorithms, javascript)"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            handleAddTag(e)
                          }
                        }}
                        className={errors.tags ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      <Button type="button" onClick={handleAddTag}>
                        Add
                      </Button>
                    </div>
                    {errors.tags && <p className="text-sm text-destructive">{errors.tags}</p>}

                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag) => (
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

                    <p className="text-xs text-muted-foreground mt-1">
                      Press Enter or click Add to add a tag. Tags help organize and find questions later.
                    </p>
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>Please fix the errors above before submitting.</AlertDescription>
                    </Alert>
                  )}
                </form>
              </CardContent>
            </TabsContent>

            <TabsContent value="preview">
              <CardContent>
                <div className="mb-4">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Preview Mode</AlertTitle>
                    <AlertDescription>This is how your question will appear in the study collection.</AlertDescription>
                  </Alert>
                </div>

                {formData.question || formData.answer ? (
                  <div
                    className={`bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden border-l-4 ${
                      formData.type === "coding" ? "border-purple-500" : "border-blue-500"
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              formData.type === "coding"
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            }`}
                          >
                            {formData.type === "coding" ? (
                              <span className="flex items-center gap-1">
                                <Code className="h-3 w-3" /> Coding
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-3 w-3" /> Theory
                              </span>
                            )}
                          </span>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              formData.difficulty === "easy"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : formData.difficulty === "medium"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            }`}
                          >
                            {formData.difficulty.charAt(0).toUpperCase() + formData.difficulty.slice(1)}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-medium text-lg mt-2">
                        {formData.question || "Your question will appear here"}
                      </h3>

                      {formData.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {formData.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <details className="mt-3" open>
                        <summary className="cursor-pointer text-sm font-medium text-purple-600 dark:text-purple-400">
                          View Answer
                        </summary>
                        <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md text-sm">
                          {formData.type === "coding" ? (
                            <pre className="whitespace-pre-wrap font-mono text-xs">
                              {formData.answer || "// Your code answer will appear here"}
                            </pre>
                          ) : (
                            <p className="whitespace-pre-line">{formData.answer || "Your answer will appear here"}</p>
                          )}
                        </div>
                      </details>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Fill out the question and answer fields to see a preview
                  </div>
                )}

                <div className="mt-4">
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("edit")}>
                    Back to Editing
                  </Button>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>

          <CardFooter className="flex justify-end gap-3">
            <Button variant="outline" asChild>
              <Link href="/">Cancel</Link>
            </Button>
            <Button
              type="submit"
              form="question-form"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Question"}
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
