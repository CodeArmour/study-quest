interface QuestionAnswerProps {
  question: any
}

export function QuestionAnswer({ question }: QuestionAnswerProps) {
  return (
    <details className="text-sm">
      <summary className="cursor-pointer font-medium text-purple-600 dark:text-purple-400 mb-2">View Answer</summary>
      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
        {question.type === "coding" ? (
          <pre className="whitespace-pre-wrap font-mono text-xs">{question.answer}</pre>
        ) : (
          <p className="whitespace-pre-line">{question.answer}</p>
        )}
      </div>
    </details>
  )
}
