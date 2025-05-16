"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { HeaderSection } from "@/components/sections/header-section"
import { QuizSetup, type QuizOptions } from "@/components/quiz/quiz-setup"
import { QuizInProgress } from "@/components/quiz/quiz-in-progress"
import { QuizSummary } from "@/components/quiz/quiz-summary"
import { mockQuestions } from "@/lib/data"

export default function QuizModePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [solvedQuestions, setSolvedQuestions] = useState([])
  const [questionTimes, setQuestionTimes] = useState({})

  // Calculate total questions by type
  const totalQuestions = mockQuestions.length
  const totalCodingQuestions = mockQuestions.filter((q) => q.type === "coding").length
  const totalTheoryQuestions = mockQuestions.filter((q) => q.type === "theory").length

  // Start the quiz with the selected options
  const startQuiz = (options: QuizOptions) => {
    // Filter questions by type
    let filteredQuestions = [...mockQuestions]
    if (options.questionType === "coding") {
      filteredQuestions = filteredQuestions.filter((q) => q.type === "coding")
    } else if (options.questionType === "theory") {
      filteredQuestions = filteredQuestions.filter((q) => q.type === "theory")
    }

    // Group questions by difficulty
    const easyQuestions = filteredQuestions.filter((q) => q.difficulty === "easy")
    const mediumQuestions = filteredQuestions.filter((q) => q.difficulty === "medium")
    const hardQuestions = filteredQuestions.filter((q) => q.difficulty === "hard")

    // Determine how many questions of each difficulty to include
    let easyCount = 0
    let mediumCount = 0
    let hardCount = 0

    switch (options.difficultyMode) {
      case "easy":
        // 70% easy, 20% medium, 10% hard
        easyCount = Math.round(options.numQuestions * 0.7)
        mediumCount = Math.round(options.numQuestions * 0.2)
        hardCount = options.numQuestions - easyCount - mediumCount
        break
      case "medium":
        // 33% easy, 33% medium, 33% hard
        easyCount = Math.round(options.numQuestions / 3)
        mediumCount = Math.round(options.numQuestions / 3)
        hardCount = options.numQuestions - easyCount - mediumCount
        break
      case "hard":
        // 30% easy, 20% medium, 50% hard
        easyCount = Math.round(options.numQuestions * 0.3)
        mediumCount = Math.round(options.numQuestions * 0.2)
        hardCount = options.numQuestions - easyCount - mediumCount
        break
    }

    // Handle cases where we don't have enough questions of a certain difficulty
    if (easyQuestions.length < easyCount) {
      const deficit = easyCount - easyQuestions.length
      easyCount = easyQuestions.length
      // Distribute the deficit to medium and hard proportionally
      const totalRemaining = mediumCount + hardCount
      if (totalRemaining > 0) {
        const mediumProportion = mediumCount / totalRemaining
        const additionalMedium = Math.round(deficit * mediumProportion)
        mediumCount += additionalMedium
        hardCount += deficit - additionalMedium
      }
    }

    if (mediumQuestions.length < mediumCount) {
      const deficit = mediumCount - mediumQuestions.length
      mediumCount = mediumQuestions.length
      // Add the deficit to hard
      hardCount += deficit
    }

    if (hardQuestions.length < hardCount) {
      const deficit = hardCount - hardQuestions.length
      hardCount = hardQuestions.length
      // Add the deficit to medium if possible, otherwise to easy
      if (mediumQuestions.length > mediumCount) {
        mediumCount += deficit
      } else if (easyQuestions.length > easyCount) {
        easyCount += deficit
      }
    }

    // Shuffle and select the required number of questions from each difficulty
    const shuffleArray = (array) => {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    }

    const selectedEasy = shuffleArray(easyQuestions).slice(0, easyCount)
    const selectedMedium = shuffleArray(mediumQuestions).slice(0, mediumCount)
    const selectedHard = shuffleArray(hardQuestions).slice(0, hardCount)

    // Combine and shuffle all selected questions
    const selectedQuestions = shuffleArray([...selectedEasy, ...selectedMedium, ...selectedHard])

    // If we still don't have enough questions, just use what we have
    const finalQuestions = selectedQuestions.slice(0, options.numQuestions)

    setQuizQuestions(finalQuestions)
    setCurrentQuestionIndex(0)
    setSolvedQuestions([])
    setQuestionTimes({})
    setQuizStarted(true)
    setQuizFinished(false)
  }

  // Mark current question as solved
  const markSolved = (time) => {
    const currentQuestionId = quizQuestions[currentQuestionIndex].id

    setSolvedQuestions([...solvedQuestions, currentQuestionId])
    setQuestionTimes({
      ...questionTimes,
      [currentQuestionId]: time,
    })
  }

  // Move to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // End of quiz
      setQuizFinished(true)
    }
  }

  // Restart the quiz setup
  const restartQuiz = () => {
    setQuizStarted(false)
    setQuizFinished(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <HeaderSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Quiz Mode
          </h1>
          <p className="text-muted-foreground mt-2">
            Test your knowledge with timed questions. Write your answers on paper and mark when solved.
          </p>
        </div>

        {!quizStarted && !quizFinished && (
          <QuizSetup
            totalQuestions={totalQuestions}
            totalCodingQuestions={totalCodingQuestions}
            totalTheoryQuestions={totalTheoryQuestions}
            onStartQuiz={startQuiz}
          />
        )}

        {quizStarted && !quizFinished && (
          <QuizInProgress
            question={quizQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
            isSolved={solvedQuestions.includes(quizQuestions[currentQuestionIndex].id)}
            onSolved={markSolved}
            onNext={nextQuestion}
          />
        )}

        {quizFinished && (
          <QuizSummary
            questions={quizQuestions}
            solvedQuestions={solvedQuestions}
            questionTimes={questionTimes}
            onRestart={restartQuiz}
          />
        )}
      </main>
    </div>
  )
}
