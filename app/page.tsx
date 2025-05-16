"use client"

import { useState, useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/components/ui/use-toast"
import { HeaderSection } from "@/components/sections/header-section"
import { MobileSearchSection } from "@/components/sections/mobile-search-section"
import { MobileFiltersSection } from "@/components/sections/mobile-filters-section"
import { FilterTabsSection } from "@/components/sections/filter-tabs-section"
import { ProgressSection } from "@/components/sections/progress-section"
import { SidebarFiltersSection } from "@/components/sections/sidebar-filters-section"
import { ActiveFiltersSection } from "@/components/sections/active-filters-section"
import { DesktopSortSection } from "@/components/sections/desktop-sort-section"
import { EmptyStateSection } from "@/components/sections/empty-state-section"
import { SortableQuestionCard } from "@/components/question-card/sortable-question-card"
import { mockQuestions } from "@/lib/data"
import { type QuestionNotes, filterAndSortQuestions, getActiveFiltersCount, formatDate } from "@/lib/utils"
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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const [notes, setNotes] = useState<QuestionNotes>({})
  const [currentNote, setCurrentNote] = useState("")
  const [studiedQuestions, setStudiedQuestions] = useState([])
  const [showNotesMap, setShowNotesMap] = useState({})
  const [activeTab, setActiveTab] = useState("all")
  const [customQuestionOrder, setCustomQuestionOrder] = useState([])
  const [defaultQuestionOrder, setDefaultQuestionOrder] = useState([])
  const [activeId, setActiveId] = useState<number | null>(null)

  // New filter states
  const [filters, setFilters] = useState({
    difficulty: [],
    studyStatus: "all", // "all", "studied", "not-studied"
    sortBy: "default", // "default", "custom", "newest", "oldest", "a-z", "z-a", "difficulty-asc", "difficulty-desc"
    questionType: "all", // "all", "coding", "theory"
  })

  // Add a new state variable for tracking which question is being edited
  const [editingQuestionId, setEditingQuestionId] = useState(null)

  // Set up sensors for drag and drop
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

  // Load saved data from localStorage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem("studyquest-notes")
    const savedStudied = localStorage.getItem("studyquest-studied")
    const savedFilters = localStorage.getItem("studyquest-filters")
    const savedQuestionOrder = localStorage.getItem("studyquest-question-order")
    const savedDefaultOrder = localStorage.getItem("studyquest-default-order")

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }

    if (savedStudied) {
      setStudiedQuestions(JSON.parse(savedStudied))
    }

    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters)
      setFilters(parsedFilters)
      if (parsedFilters.questionType) {
        setActiveTab(parsedFilters.questionType)
      }
      if (parsedFilters.tags) {
        setSelectedTags(parsedFilters.tags)
      }
    }

    if (savedQuestionOrder) {
      setCustomQuestionOrder(JSON.parse(savedQuestionOrder))
    } else {
      // Initialize with default order based on mockQuestions
      setCustomQuestionOrder(mockQuestions.map((q) => q.id))
    }

    if (savedDefaultOrder) {
      setDefaultQuestionOrder(JSON.parse(savedDefaultOrder))
    } else {
      // Initialize with default order based on mockQuestions
      setDefaultQuestionOrder(mockQuestions.map((q) => q.id))
    }
  }, [])

  // Save to localStorage whenever notes, studied questions, or filters change
  useEffect(() => {
    localStorage.setItem("studyquest-notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem("studyquest-studied", JSON.stringify(studiedQuestions))
  }, [studiedQuestions])

  useEffect(() => {
    localStorage.setItem(
      "studyquest-filters",
      JSON.stringify({
        ...filters,
        tags: selectedTags,
      }),
    )
  }, [filters, selectedTags])

  useEffect(() => {
    localStorage.setItem("studyquest-question-order", JSON.stringify(customQuestionOrder))
  }, [customQuestionOrder])

  useEffect(() => {
    localStorage.setItem("studyquest-default-order", JSON.stringify(defaultQuestionOrder))
  }, [defaultQuestionOrder])

  // Extract all unique tags from questions
  const allTags = [...new Set(mockQuestions.flatMap((q) => q.tags))].sort()

  // Calculate progress statistics
  const totalQuestions = mockQuestions.length
  const totalCodingQuestions = mockQuestions.filter((q) => q.type === "coding").length
  const totalTheoryQuestions = mockQuestions.filter((q) => q.type === "theory").length

  const studiedCodingQuestions = studiedQuestions.filter(
    (id) => mockQuestions.find((q) => q.id === id)?.type === "coding",
  ).length

  const studiedTheoryQuestions = studiedQuestions.filter(
    (id) => mockQuestions.find((q) => q.id === id)?.type === "theory",
  ).length

  // Handle current note change
  const handleCurrentNoteChange = (value) => {
    setCurrentNote(value)
  }

  // Handle saving notes
  const handleSaveNote = (questionId) => {
    if (!currentNote.trim()) return

    const newNote = {
      id: Date.now().toString(),
      content: currentNote.trim(),
      timestamp: formatDate(),
      // No updatedAt initially
    }

    setNotes((prev) => {
      const questionNotes = prev[questionId] || []
      return {
        ...prev,
        [questionId]: [...questionNotes, newNote],
      }
    })

    setCurrentNote("")

    toast({
      title: "Note Added",
      description: "Your note has been saved.",
    })
  }

  // Edit a note
  const handleUpdateNote = (questionId, noteId, updatedContent) => {
    setNotes((prev) => {
      const questionNotes = prev[questionId] || []
      return {
        ...prev,
        [questionId]: questionNotes.map((note) =>
          note.id === noteId ? { ...note, content: updatedContent, updatedAt: formatDate() } : note,
        ),
      }
    })

    toast({
      title: "Note Updated",
      description: "Your note has been updated.",
    })
  }

  // Delete a note
  const handleDeleteNote = (questionId, noteId) => {
    setNotes((prev) => {
      const questionNotes = prev[questionId] || []
      return {
        ...prev,
        [questionId]: questionNotes.filter((note) => note.id !== noteId),
      }
    })

    toast({
      title: "Note Deleted",
      description: "Your note has been removed.",
    })
  }

  // Reorder notes
  const handleReorderNotes = (questionId, reorderedNotes) => {
    setNotes((prev) => ({
      ...prev,
      [questionId]: reorderedNotes,
    }))
  }

  // Toggle studied status
  const toggleStudied = (questionId) => {
    setStudiedQuestions((prev) => {
      if (prev.includes(questionId)) {
        return prev.filter((id) => id !== questionId)
      } else {
        toast({
          title: "Question Marked as Studied",
          description: "Your progress has been updated.",
        })
        return [...prev, questionId]
      }
    })
  }

  // Toggle notes visibility
  const toggleNotes = (questionId) => {
    setShowNotesMap((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }

  // Handle difficulty filter changes
  const handleDifficultyChange = (difficulty) => {
    setFilters((prev) => {
      const newDifficulties = prev.difficulty.includes(difficulty)
        ? prev.difficulty.filter((d) => d !== difficulty)
        : [...prev.difficulty, difficulty]

      return {
        ...prev,
        difficulty: newDifficulties,
      }
    })
  }

  // Handle study status filter changes
  const handleStudyStatusChange = (status) => {
    setFilters((prev) => ({
      ...prev,
      studyStatus: status,
    }))
  }

  // Handle sort option changes
  const handleSortChange = (sortOption) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: sortOption,
    }))
  }

  // Handle question type filter changes
  const handleQuestionTypeChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      questionType: type,
    }))
    setActiveTab(type)
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
    setFilters({
      difficulty: [],
      studyStatus: "all",
      sortBy: "default",
      questionType: "all",
    })
    setActiveTab("all")
    toast({
      title: "Filters Cleared",
      description: "All filters have been reset.",
    })
  }

  // Handle updating a question after editing
  const handleUpdateQuestion = (questionId, updatedQuestion) => {
    // In a real app, this would update the database
    // For now, we'll update the mock data in memory
    const updatedQuestions = mockQuestions.map((q) => (q.id === questionId ? { ...q, ...updatedQuestion } : q))

    // Update the mockQuestions array
    // Note: In a real app, this would be handled differently with a proper backend
    mockQuestions.splice(0, mockQuestions.length, ...updatedQuestions)

    // Exit edit mode
    setEditingQuestionId(null)

    toast({
      title: "Question Updated",
      description: "Your question has been successfully updated.",
    })
  }

  // Handle tag selection
  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Handle tag removal
  const handleTagRemove = (tag) => {
    if (tag === null) {
      setSelectedTags([])
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    }
  }

  // Clear specific filters
  const clearDifficultyFilter = () => {
    setFilters((prev) => ({ ...prev, difficulty: [] }))
  }

  const clearStudyStatusFilter = () => {
    setFilters((prev) => ({ ...prev, studyStatus: "all" }))
  }

  const clearSortByFilter = () => {
    setFilters((prev) => ({ ...prev, sortBy: "default" }))
  }

  // Save current order as default
  const saveCurrentOrderAsDefault = () => {
    // Get the current filtered and sorted questions
    const currentOrder = filteredQuestions.map((q) => q.id)

    // Save this order as the default
    setDefaultQuestionOrder(currentOrder)

    // Update the custom order to match
    setCustomQuestionOrder(currentOrder)

    // Switch to a different sort option to show it's no longer in custom mode
    setFilters((prev) => ({
      ...prev,
      sortBy: "default",
    }))

    toast({
      title: "Order Saved",
      description: "The current order has been saved as your default order.",
    })
  }

  // Get filtered questions
  let filteredQuestions = filterAndSortQuestions(mockQuestions, filters, searchQuery, selectedTags, studiedQuestions)

  // Apply custom order if custom sort is selected
  if (filters.sortBy === "custom" && customQuestionOrder.length > 0) {
    filteredQuestions = [...filteredQuestions].sort((a, b) => {
      const indexA = customQuestionOrder.indexOf(a.id)
      const indexB = customQuestionOrder.indexOf(b.id)
      return indexA - indexB
    })
  }

  // Apply default order if default sort is selected
  if (filters.sortBy === "default" && defaultQuestionOrder.length > 0) {
    filteredQuestions = [...filteredQuestions].sort((a, b) => {
      const indexA = defaultQuestionOrder.indexOf(a.id)
      const indexB = defaultQuestionOrder.indexOf(b.id)
      return indexA - indexB
    })
  }

  // Handle drag start
  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  // Handle drag end
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    setActiveId(null)

    if (over && active.id !== over.id) {
      // Find the indices of the dragged and target questions
      const oldIndex = filteredQuestions.findIndex((q) => q.id === active.id)
      const newIndex = filteredQuestions.findIndex((q) => q.id === over.id)

      // Reorder the filtered questions
      const reorderedQuestions = arrayMove(filteredQuestions, oldIndex, newIndex)

      // Update the custom order based on the reordered questions
      const newOrder = reorderedQuestions.map((q) => q.id)

      // Update the custom order state
      setCustomQuestionOrder(newOrder)

      // Set the sort option to custom
      setFilters((prev) => ({
        ...prev,
        sortBy: "custom",
      }))

      toast({
        title: "Questions Reordered",
        description: "Your custom question order has been updated.",
        duration: 2000,
      })
    }
  }

  const codingProgress = totalCodingQuestions > 0 ? (studiedCodingQuestions / totalCodingQuestions) * 100 : 0
  const theoryProgress = totalTheoryQuestions > 0 ? (studiedTheoryQuestions / totalTheoryQuestions) * 100 : 0
  const overallProgress = totalQuestions > 0 ? (studiedQuestions.length / totalQuestions) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <Toaster />

      <HeaderSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container px-4 py-8">
        <MobileSearchSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <MobileFiltersSection
          activeFiltersCount={getActiveFiltersCount(filters, selectedTags)}
          filters={filters}
          selectedTags={selectedTags}
          allTags={allTags}
          onQuestionTypeChange={handleQuestionTypeChange}
          onDifficultyChange={handleDifficultyChange}
          onStudyStatusChange={handleStudyStatusChange}
          onSortChange={handleSortChange}
          onTagSelect={handleTagSelect}
          onTagRemove={handleTagRemove}
          onClearFilters={clearAllFilters}
          onSaveCurrentOrder={saveCurrentOrderAsDefault}
        />

        <FilterTabsSection activeTab={activeTab} onTabChange={handleQuestionTypeChange} />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <ProgressSection
              studiedCoding={studiedCodingQuestions}
              totalCoding={totalCodingQuestions}
              studiedTheory={studiedTheoryQuestions}
              totalTheory={totalTheoryQuestions}
              studiedTotal={studiedQuestions.length}
              totalQuestions={totalQuestions}
            />

            <SidebarFiltersSection
              activeFiltersCount={getActiveFiltersCount(filters, selectedTags)}
              filters={filters}
              selectedTags={selectedTags}
              allTags={allTags}
              onQuestionTypeChange={handleQuestionTypeChange}
              onDifficultyChange={handleDifficultyChange}
              onStudyStatusChange={handleStudyStatusChange}
              onSortChange={handleSortChange}
              onTagSelect={handleTagSelect}
              onTagRemove={handleTagRemove}
              onClearFilters={clearAllFilters}
              onSaveCurrentOrder={saveCurrentOrderAsDefault}
            />
          </div>

          <div className="md:w-3/4">
            <div className="flex items-center justify-between mb-4">
              {/* Active filters display */}
              {getActiveFiltersCount(filters, selectedTags) > 0 && (
                <ActiveFiltersSection
                  filters={filters}
                  selectedTags={selectedTags}
                  onQuestionTypeChange={handleQuestionTypeChange}
                  onClearDifficulty={clearDifficultyFilter}
                  onClearStudyStatus={clearStudyStatusFilter}
                  onClearSortBy={clearSortByFilter}
                  onClearTags={() => setSelectedTags([])}
                  onClearAllFilters={clearAllFilters}
                />
              )}

              <DesktopSortSection
                sortBy={filters.sortBy}
                onSortChange={handleSortChange}
                onSaveCurrentOrder={saveCurrentOrderAsDefault}
              />
            </div>

            {/* Question list */}
            <div className="space-y-4">
              {filteredQuestions.length > 0 ? (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext items={filteredQuestions.map((q) => q.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-4">
                      {filteredQuestions.map((question) => (
                        <SortableQuestionCard
                          key={question.id}
                          id={question.id}
                          question={question}
                          isStudied={studiedQuestions.includes(question.id)}
                          toggleStudied={toggleStudied}
                          notes={notes[question.id] || []}
                          currentNote={currentNote}
                          onCurrentNoteChange={handleCurrentNoteChange}
                          onSaveNote={() => handleSaveNote(question.id)}
                          onUpdateNote={(noteId, content) => handleUpdateNote(question.id, noteId, content)}
                          onDeleteNote={(noteId) => handleDeleteNote(question.id, noteId)}
                          onReorderNotes={handleReorderNotes}
                          showNotes={showNotesMap[question.id] || false}
                          toggleNotes={() => toggleNotes(question.id)}
                          isEditing={editingQuestionId === question.id}
                          onEdit={() => setEditingQuestionId(question.id)}
                          onCancelEdit={() => setEditingQuestionId(null)}
                          onUpdateQuestion={(updatedQuestion) => handleUpdateQuestion(question.id, updatedQuestion)}
                          allTags={allTags}
                          isDragging={activeId === question.id}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              ) : (
                <EmptyStateSection
                  type={filters.questionType !== "all" ? filters.questionType : null}
                  onClearFilters={clearAllFilters}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
