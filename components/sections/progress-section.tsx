import { Progress } from "@/components/ui/progress"

interface ProgressSectionProps {
  studiedCoding: number
  totalCoding: number
  studiedTheory: number
  totalTheory: number
  studiedTotal: number
  totalQuestions: number
}

export function ProgressSection({
  studiedCoding,
  totalCoding,
  studiedTheory,
  totalTheory,
  studiedTotal,
  totalQuestions,
}: ProgressSectionProps) {
  const codingProgress = totalCoding > 0 ? (studiedCoding / totalCoding) * 100 : 0
  const theoryProgress = totalTheory > 0 ? (studiedTheory / totalTheory) * 100 : 0
  const overallProgress = totalQuestions > 0 ? (studiedTotal / totalQuestions) * 100 : 0

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 sticky top-20">
      <h2 className="font-semibold text-lg mb-4">Study Progress</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Coding Questions</span>
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              {studiedCoding}/{totalCoding}
            </span>
          </div>
          <Progress value={codingProgress} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Theoretical Questions</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {studiedTheory}/{totalTheory}
            </span>
          </div>
          <Progress value={theoryProgress} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Overall Progress</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              {studiedTotal}/{totalQuestions}
            </span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
      </div>
    </div>
  )
}
