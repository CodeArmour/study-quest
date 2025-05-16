"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Clock, Brain, Zap, Code, BookOpen, BarChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizSetupProps {
  totalQuestions: number
  totalCodingQuestions: number
  totalTheoryQuestions: number
  onStartQuiz: (options: QuizOptions) => void
}

export interface QuizOptions {
  numQuestions: number
  questionType: "all" | "coding" | "theory"
  difficultyMode: "easy" | "medium" | "hard"
}

export function QuizSetup({ totalQuestions, totalCodingQuestions, totalTheoryQuestions, onStartQuiz }: QuizSetupProps) {
  const [numQuestions, setNumQuestions] = useState(5)
  const [questionType, setQuestionType] = useState<"all" | "coding" | "theory">("all")
  const [difficultyMode, setDifficultyMode] = useState<"easy" | "medium" | "hard">("medium")

  // Calculate max questions based on selected type
  const getMaxQuestions = () => {
    switch (questionType) {
      case "coding":
        return Math.min(totalCodingQuestions, 20)
      case "theory":
        return Math.min(totalTheoryQuestions, 20)
      default:
        return Math.min(totalQuestions, 20)
    }
  }

  const maxQuestions = getMaxQuestions()

  // Adjust numQuestions if it exceeds the new max
  if (numQuestions > maxQuestions) {
    setNumQuestions(maxQuestions)
  }

  const handleStartQuiz = () => {
    onStartQuiz({
      numQuestions,
      questionType,
      difficultyMode,
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-t-4 border-t-purple-500">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Setup</CardTitle>
          <CardDescription>Configure your quiz settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="questions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="difficulty">Difficulty</TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Number of Questions</h3>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{numQuestions}</span>
                </div>

                <Slider
                  value={[numQuestions]}
                  min={1}
                  max={maxQuestions}
                  step={1}
                  onValueChange={(value) => setNumQuestions(value[0])}
                  className="py-4"
                />

                <div className="text-xs text-muted-foreground flex justify-between">
                  <span>1</span>
                  <span>{maxQuestions}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Question Type</h3>
                <RadioGroup
                  value={questionType}
                  onValueChange={(value: "all" | "coding" | "theory") => setQuestionType(value)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all-questions" />
                    <Label htmlFor="all-questions" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
                        <Brain className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">All Questions</div>
                        <div className="text-xs text-muted-foreground">Mix of coding and theory</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="coding" id="coding-questions" />
                    <Label htmlFor="coding-questions" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                        <Code className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Coding Only</div>
                        <div className="text-xs text-muted-foreground">Programming challenges</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="theory" id="theory-questions" />
                    <Label htmlFor="theory-questions" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Theory Only</div>
                        <div className="text-xs text-muted-foreground">Conceptual questions</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            <TabsContent value="difficulty" className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Difficulty Mode</h3>
                <RadioGroup
                  value={difficultyMode}
                  onValueChange={(value: "easy" | "medium" | "hard") => setDifficultyMode(value)}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="easy" id="easy-mode" />
                    <Label htmlFor="easy-mode" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Easy Mode</div>
                        <div className="text-xs text-muted-foreground">Mostly easy questions</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="h-2 bg-green-500 rounded-full w-[70%]"></div>
                          <span className="text-xs text-green-600 dark:text-green-400">70%</span>
                          <div className="h-2 bg-yellow-500 rounded-full w-[20%]"></div>
                          <span className="text-xs text-yellow-600 dark:text-yellow-400">20%</span>
                          <div className="h-2 bg-red-500 rounded-full w-[10%]"></div>
                          <span className="text-xs text-red-600 dark:text-red-400">10%</span>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium-mode" />
                    <Label htmlFor="medium-mode" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Medium Mode</div>
                        <div className="text-xs text-muted-foreground">Balanced difficulty</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="h-2 bg-green-500 rounded-full w-[33%]"></div>
                          <span className="text-xs text-green-600 dark:text-green-400">33%</span>
                          <div className="h-2 bg-yellow-500 rounded-full w-[33%]"></div>
                          <span className="text-xs text-yellow-600 dark:text-yellow-400">33%</span>
                          <div className="h-2 bg-red-500 rounded-full w-[33%]"></div>
                          <span className="text-xs text-red-600 dark:text-red-400">33%</span>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hard" id="hard-mode" />
                    <Label htmlFor="hard-mode" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Hard Mode</div>
                        <div className="text-xs text-muted-foreground">Mostly hard questions</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="h-2 bg-green-500 rounded-full w-[30%]"></div>
                          <span className="text-xs text-green-600 dark:text-green-400">30%</span>
                          <div className="h-2 bg-yellow-500 rounded-full w-[20%]"></div>
                          <span className="text-xs text-yellow-600 dark:text-yellow-400">20%</span>
                          <div className="h-2 bg-red-500 rounded-full w-[50%]"></div>
                          <span className="text-xs text-red-600 dark:text-red-400">50%</span>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" />
                <h3 className="font-medium">Timed Questions</h3>
                <p className="text-xs text-muted-foreground mt-1">Track how long you spend on each question</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-medium">Active Recall</h3>
                <p className="text-xs text-muted-foreground mt-1">Write answers on paper to reinforce learning</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                <h3 className="font-medium">Random Selection</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Questions are randomly selected from your collection
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={handleStartQuiz}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            size="lg"
          >
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
