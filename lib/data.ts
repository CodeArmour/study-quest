// Mock data for questions with added difficulty levels
export const mockQuestions = [
  {
    id: 1,
    type: "coding",
    question: "Implement a function to reverse a linked list in JavaScript.",
    answer: `function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;
  
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}`,
    tags: ["data structures", "linked list", "javascript"],
    difficulty: "medium",
    dateAdded: "2023-05-10T10:30:00Z",
  },
  {
    id: 2,
    type: "theory",
    question: "Explain the difference between call stack and task queue in JavaScript event loop.",
    answer:
      "The call stack is a data structure that records where in the program we are. When we call a function, it's added to the stack. When we return from a function, it's removed from the stack. The task queue (or callback queue) is a list of functions ready to be processed. When the call stack is empty, a function is taken from the task queue and pushed onto the call stack. This is part of the event loop mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded.",
    tags: ["javascript", "event loop", "asynchronous"],
    difficulty: "medium",
    dateAdded: "2023-05-12T14:20:00Z",
  },
  {
    id: 3,
    type: "coding",
    question: "Write a function to find the maximum depth of a binary tree.",
    answer: `function maxDepth(root) {
  if (!root) return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}`,
    tags: ["algorithms", "binary tree", "recursion"],
    difficulty: "hard",
    dateAdded: "2023-05-15T09:45:00Z",
  },
  {
    id: 4,
    type: "theory",
    question: "What is the time complexity of quicksort in best, average, and worst cases?",
    answer:
      "Best case: O(n log n) - This occurs when the pivot chosen divides the array into roughly equal halves each time.\nAverage case: O(n log n) - On average, quicksort performs well with random data.\nWorst case: O(n²) - This happens when the pivot is consistently the smallest or largest element, such as in an already sorted array if always choosing the first or last element as pivot.",
    tags: ["algorithms", "sorting", "time complexity"],
    difficulty: "hard",
    dateAdded: "2023-05-18T16:30:00Z",
  },
  {
    id: 5,
    type: "coding",
    question: "Implement a function that checks if a string is a palindrome.",
    answer: `function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare with reversed string
  return cleanStr === cleanStr.split('').reverse().join('');
}`,
    tags: ["strings", "algorithms", "javascript"],
    difficulty: "easy",
    dateAdded: "2023-05-20T11:15:00Z",
  },
  {
    id: 6,
    type: "theory",
    question: "Explain the concept of closures in JavaScript.",
    answer:
      "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, at function creation time. A closure allows a function to access variables from an outer function even after the outer function has finished execution. This is possible because the inner function maintains a reference to the outer function's scope chain.",
    tags: ["javascript", "functions", "scope"],
    difficulty: "medium",
    dateAdded: "2023-05-22T13:40:00Z",
  },
  {
    id: 7,
    type: "coding",
    question: "Write a function to detect a cycle in a linked list.",
    answer: `function hasCycle(head) {
  if (!head || !head.next) return false;
  
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  
  return false;
}`,
    tags: ["data structures", "linked list", "algorithms"],
    difficulty: "hard",
    dateAdded: "2023-05-25T10:00:00Z",
  },
  {
    id: 8,
    type: "theory",
    question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    answer:
      "var: Function-scoped or globally-scoped variable declaration. Can be redeclared and updated. Hoisted to the top of its scope.\n\nlet: Block-scoped variable declaration. Can be updated but not redeclared within its scope. Not hoisted to the top of its scope.\n\nconst: Block-scoped variable declaration. Cannot be updated or redeclared. Must be initialized at declaration. For objects and arrays, the properties/elements can still be modified.",
    tags: ["javascript", "variables", "scope"],
    difficulty: "easy",
    dateAdded: "2023-05-28T15:20:00Z",
  },
]
