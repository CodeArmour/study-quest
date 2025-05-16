"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TypeBadge } from "@/components/ui/type-badge"
import { DifficultyBadge } from "@/components/ui/difficulty-badge"
import { Clock, RotateCcw, Home, PieChart } from "lucide-react"
import Link from "next/link"
import { formatTime } from "@/lib/utils"

interface QuizSummaryProps {
  questions: any[]
  solvedQuestions: number[]
  questionTimes: Record<number, number>
  onRestart: () => void
}

export function QuizSummary({ questions, solvedQuestions, questionTimes, onRestart }: QuizSummaryProps) {
  // Calculate total time
  const totalTime = Object.values(questionTimes).reduce((sum, time) => sum + time, 0)

  // Calculate average time
  const averageTime = solvedQuestions.length > 0 ? totalTime / solvedQuestions.length : 0

  // Find fastest and slowest questions
  let fastestTime = Number.MAX_SAFE_INTEGER
  let slowestTime = 0
  let fastestQuestion = null
  let slowestQuestion = null

  solvedQuestions.forEach((id) => {
    const time = questionTimes[id]
    const question = questions.find((q) => q.id === id)

    if (time < fastestTime) {
      fastestTime = time
      fastestQuestion = question
    }

    if (time > slowestTime) {
      slowestTime = time
      slowestQuestion = question
    }
  })

  // Calculate difficulty distribution
  const easyCount = questions.filter((q) => q.difficulty === "easy").length
  const mediumCount = questions.filter((q) => q.difficulty === "medium").length
  const hardCount = questions.filter((q) => q.difficulty === "hard").length

  const easyPercentage = Math.round((easyCount / questions.length) * 100) || 0
  const mediumPercentage = Math.round((mediumCount / questions.length) * 100) || 0
  const hardPercentage = Math.round((hardCount / questions.length) * 100) || 0

  // Calculate type distribution
  const codingCount = questions.filter((q) => q.type === "coding").length
  const theoryCount = questions.filter((q) => q.type === "theory").length

  const codingPercentage = Math.round((codingCount / questions.length) * 100) || 0
  const theoryPercentage = Math.round((theoryCount / questions.length) * 100) || 0

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="mb-6 border-t-4 border-t-green-500 dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {solvedQuestions.length}
                </div>
                <div className="text-sm text-muted-foreground">Questions Solved</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{formatTime(totalTime)}</div>
                <div className="text-sm text-muted-foreground">Total Time</div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {formatTime(averageTime)}
                </div>
                <div className="text-sm text-muted-foreground">Average Time per Question</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-purple-500" />
                  Difficulty Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        Easy
                      </span>
                      <span>
                        {easyCount} questions ({easyPercentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${easyPercentage}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        Medium
                      </span>
                      <span>
                        {mediumCount} questions ({mediumPercentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${mediumPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                        Hard
                      </span>
                      <span>
                        {hardCount} questions ({hardPercentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: `${hardPercentage}%` }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-blue-500" />
                  Question Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        Coding
                      </span>
                      <span>
                        {codingCount} questions ({codingPercentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${codingPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                        Theory
                      </span>
                      <span>
                        {theoryCount} questions ({theoryPercentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${theoryPercentage}%` }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {fastestQuestion && (
            <div>
              <h3 className="font-medium mb-2">Fastest Question: {formatTime(fastestTime)}</h3>
              <Card className="bg-gray-50 dark:bg-gray-800/50 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <TypeBadge type={fastestQuestion.type} />
                  <DifficultyBadge difficulty={fastestQuestion.difficulty} />
                </div>
                <div className="text-sm font-medium">{fastestQuestion.question}</div>
              </Card>
            </div>
          )}

          {slowestQuestion && (
            <div>
              <h3 className="font-medium mb-2">Slowest Question: {formatTime(slowestTime)}</h3>
              <Card className="bg-gray-50 dark:bg-gray-800/50 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <TypeBadge type={slowestQuestion.type} />
                  <DifficultyBadge difficulty={slowestQuestion.difficulty} />
                </div>
                <div className="text-sm font-medium">{slowestQuestion.question}</div>
              </Card>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onRestart}>
            <RotateCcw className="h-4 w-4 mr-2" /> New Quiz
          </Button>
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <h3 className="font-medium text-lg mb-3">All Questions</h3>
      <div className="space-y-3">
        {questions.map((question) => (
          <Card key={question.id} className="p-3 dark:bg-gray-900">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TypeBadge type={question.type} />
                  <DifficultyBadge difficulty={question.difficulty} />
                </div>
                <div className="text-sm font-medium">{question.question}</div>
              </div>
              {solvedQuestions.includes(question.id) && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {formatTime(questionTimes[question.id])}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
