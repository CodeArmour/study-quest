import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { mockQuestions } from "./data"

// Define the Note type
export interface Note {
  id: string
  content: string
  timestamp: string
  updatedAt?: string
}

// Define the Notes structure for each question
export interface QuestionNotes {
  [questionId: number]: Note[]
}

// Filter and sort questions based on all criteria
export const filterAndSortQuestions = (
  questions,
  filters,
  searchQuery,
  selectedTags,
  studiedQuestions,
  type = null,
) => {
  // First filter by type if specified in the tab or filter
  let filteredQuestions = questions

  if (type) {
    // If a specific tab type is provided, use that
    filteredQuestions = questions.filter((q) => q.type === type)
  } else if (filters.questionType !== "all") {
    // Otherwise use the filter type if it's not "all"
    filteredQuestions = questions.filter((q) => q.type === filters.questionType)
  }

  // Filter by search query
  if (searchQuery) {
    filteredQuestions = filteredQuestions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }

  // Filter by tags
  if (selectedTags.length > 0) {
    filteredQuestions = filteredQuestions.filter((q) => selectedTags.some((tag) => q.tags.includes(tag)))
  }

  // Filter by difficulty
  if (filters.difficulty.length > 0) {
    filteredQuestions = filteredQuestions.filter((q) => filters.difficulty.includes(q.difficulty))
  }

  // Filter by study status
  if (filters.studyStatus !== "all") {
    if (filters.studyStatus === "studied") {
      filteredQuestions = filteredQuestions.filter((q) => studiedQuestions.includes(q.id))
    } else if (filters.studyStatus === "not-studied") {
      filteredQuestions = filteredQuestions.filter((q) => !studiedQuestions.includes(q.id))
    }
  }

  // Sort questions
  switch (filters.sortBy) {
    case "newest":
      filteredQuestions.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
      break
    case "oldest":
      filteredQuestions.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
      break
    case "a-z":
      filteredQuestions.sort((a, b) => a.question.localeCompare(b.question))
      break
    case "z-a":
      filteredQuestions.sort((a, b) => b.question.localeCompare(a.question))
      break
    case "difficulty-asc":
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 }
      filteredQuestions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty])
      break
    case "difficulty-desc":
      const difficultyOrderDesc = { easy: 1, medium: 2, hard: 3 }
      filteredQuestions.sort((a, b) => difficultyOrderDesc[b.difficulty] - difficultyOrderDesc[a.difficulty])
      break
    default:
      // Default to newest first if no specific sort is selected
      filteredQuestions.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
  }

  return filteredQuestions
}

// Get active filters count for mobile badge
export const getActiveFiltersCount = (filters, selectedTags) => {
  let count = 0
  if (selectedTags.length > 0) count++
  if (filters.difficulty.length > 0) count++
  if (filters.studyStatus !== "all") count++
  if (filters.sortBy !== "default") count++
  if (filters.questionType !== "all") count++
  return count
}

// Format date for notes
export const formatDate = () => {
  const now = new Date()
  return now.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Format time for quiz timer (milliseconds to mm:ss.xx)
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  const milliseconds = Math.floor((time % 1000) / 10)

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Save a new question to localStorage
export const saveQuestion = (question) => {
  // Get existing questions from localStorage
  const savedQuestions = localStorage.getItem("studyquest-questions")
  const questions = savedQuestions ? JSON.parse(savedQuestions) : []

  // Add the new question with a unique ID and date
  const newQuestion = {
    ...question,
    id: Date.now(), // Use timestamp as ID
    dateAdded: new Date().toISOString(),
  }

  questions.push(newQuestion)

  // Save back to localStorage
  localStorage.setItem("studyquest-questions", JSON.stringify(questions))

  return newQuestion
}

// Get all questions (combining mock data and saved questions)
export const getAllQuestions = () => {
  // Get saved questions from localStorage
  const savedQuestions = localStorage.getItem("studyquest-questions")
  const userQuestions = savedQuestions ? JSON.parse(savedQuestions) : []

  // Combine with mock data
  // Assuming mockQuestions is defined elsewhere and accessible
  // If not, you'll need to import or define it here.
  // For example: import { mockQuestions } from './mock-data';
  return [...mockQuestions, ...userQuestions]
}
