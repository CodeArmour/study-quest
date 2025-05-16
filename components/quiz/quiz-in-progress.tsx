"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TypeBadge } from "@/components/ui/type-badge"
import { DifficultyBadge } from "@/components/ui/difficulty-badge"
import { TagBadge } from "@/components/ui/tag-badge"
import { Clock, CheckCircle, ArrowRight } from "lucide-react"
import { formatTime } from "@/lib/utils"

interface QuizInProgressProps {
  question: any
  questionNumber: number
  totalQuestions: number
  isSolved: boolean
  onSolved: (time: number) => void
  onNext: () => void
}

export function QuizInProgress({
  question,
  questionNumber,
  totalQuestions,
  isSolved,
  onSolved,
  onNext,
}: QuizInProgressProps) {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timerRunning, setTimerRunning] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)

  // Start timer when component mounts
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (timerRunning) {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 10) // Update every 10ms
      }, 10)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [timerRunning])

  // Reset timer when question changes
  useEffect(() => {
    setElapsedTime(0)
    setTimerRunning(true)
    setShowAnswer(false)
  }, [question])

  const handleSolved = () => {
    setTimerRunning(false)
    onSolved(elapsedTime)
  }

  const progress = (questionNumber / totalQuestions) * 100

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium">
            Question {questionNumber} of {totalQuestions}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div className="font-mono text-sm">{formatTime(elapsedTime)}</div>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card
        className={`overflow-hidden border-l-4 ${
          question.type === "coding" ? "border-purple-500" : "border-blue-500"
        } dark:bg-gray-900`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <TypeBadge type={question.type} />
            <DifficultyBadge difficulty={question.difficulty} />
          </div>
          <CardTitle className="text-xl mt-2">{question.question}</CardTitle>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {question.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </CardHeader>

        <CardContent>
          {showAnswer && (
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
              {question.type === "coding" ? (
                <pre className="whitespace-pre-wrap font-mono text-xs">{question.answer}</pre>
              ) : (
                <p className="whitespace-pre-line">{question.answer}</p>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t p-4 bg-gray-50 dark:bg-gray-800/50">
          {!isSolved ? (
            <Button
              onClick={handleSolved}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
            >
              <CheckCircle className="h-4 w-4 mr-2" /> Mark as Solved
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => setShowAnswer(!showAnswer)}
              className="border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
          )}

          <Button
            onClick={onNext}
            disabled={!isSolved}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            {questionNumber === totalQuestions ? "Finish Quiz" : "Next Question"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
