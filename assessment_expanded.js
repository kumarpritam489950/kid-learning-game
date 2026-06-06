// Assessment Questions Database - CBSE Standard 1
const assessmentQuestions = {
  mathematics: [
    {
      id: 1,
      question: "5 + 0 = ?",
      options: [
        { text: "0", correct: false },
        { text: "5", correct: true },
        { text: "50", correct: false },
        { text: "55", correct: false },
      ],
      topic: "Adding Zero"
    },
    {
      id: 2,
      question: "0 + 12 = ?",
      options: [
        { text: "12", correct: true },
        { text: "0", correct: false },
        { text: "2", correct: false },
        { text: "1", correct: false },
      ],
      topic: "Adding Zero"
    },
    {
      id: 3,
      question: "8 + 0 = ?",
      options: [
        { text: "0", correct: false },
        { text: "8", correct: true },
        { text: "80", correct: false },
        { text: "88", correct: false },
      ],
      topic: "Adding Zero"
    },
    {
      id: 4,
      question: "0 + 3 = ?",
      options: [
        { text: "0", correct: false },
        { text: "3", correct: true },
        { text: "30", correct: false },
        { text: "33", correct: false },
      ],
      topic: "Adding Zero"
    },
    {
      id: 5,
      question: "9 + 0 = ?",
      options: [
        { text: "0", correct: false },
        { text: "9", correct: true },
        { text: "90", correct: false },
        { text: "99", correct: false },
      ],
      topic: "Adding Zero"
    },
    {
      id: 6,
      question: "0 + 15 = ?",
      options: [
        { text: "15", correct: true },
        { text: "0", correct: false },
        { text: "5", correct: false },
        { text: "1", correct: false },
      ],
      topic: "Adding Zero"
    },
    {
      id: 7,
      question: "7 + 1 = ?",
      options: [
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "7", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Adding One"
    },
    {
      id: 8,
      question: "1 + 9 = ?",
      options: [
        { text: "10", correct: true },
        { text: "19", correct: false },
        { text: "9", correct: false },
        { text: "11", correct: false },
      ],
      topic: "Adding One"
    },
    {
      id: 9,
      question: "4 + 1 = ?",
      options: [
        { text: "3", correct: false },
        { text: "5", correct: true },
        { text: "4", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Adding One"
    },
    {
      id: 10,
      question: "1 + 6 = ?",
      options: [
        { text: "7", correct: true },
        { text: "16", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: false },
      ],
      topic: "Adding One"
    },
    {
      id: 11,
      question: "10 + 1 = ?",
      options: [
        { text: "9", correct: false },
        { text: "11", correct: true },
        { text: "10", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Adding One"
    },
    {
      id: 12,
      question: "1 + 14 = ?",
      options: [
        { text: "14", correct: false },
        { text: "15", correct: true },
        { text: "1", correct: false },
        { text: "16", correct: false },
      ],
      topic: "Adding One"
    },
    {
      id: 13,
      question: "Using a number line, 3 + 4 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "5", correct: false },
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 14,
      question: "Start at 2 and count 3 more. Where are you?",
      options: [
        { text: "2", correct: false },
        { text: "3", correct: false },
        { text: "5", correct: true },
        { text: "4", correct: false },
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 15,
      question: "2 + 5 on number line = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "5", correct: false },
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 16,
      question: "Start at 1, move 6 forward = ?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 17,
      question: "6 + 2 on number line = ?",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 18,
      question: "From 3, count 4 more = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 19,
      question: "Start at 2 and jump 5 places forward. Where do you land?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 20,
      question: "4 + 3 = ? (Count forward from 4)",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 21,
      question: "6 + 2 = ? (Count forward from 6)",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "10", correct: false },
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 22,
      question: "5 + 3 = ? (Count from 5)",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "10", correct: false },
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 23,
      question: "3 + 4 = ? (Start at 3, count 4)",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 24,
      question: "2 + 6 = ? (Count forward from 2)",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "10", correct: false },
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 25,
      question: "How many ways can we make 5?",
      options: [
        { text: "2", correct: false },
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
      ],
      topic: "Different Ways to Make a Number"
    },
    {
      id: 26,
      question: "1 + 4 = 5 and 2 + 3 = 5. How many more ways?",
      options: [
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "4", correct: false },
      ],
      topic: "Different Ways to Make a Number"
    },
    {
      id: 27,
      question: "Ways to make 6: 1+5, 2+4, 3+3. Total ways = ?",
      options: [
        { text: "3", correct: true },
        { text: "2", correct: false },
        { text: "4", correct: false },
        { text: "5", correct: false },
      ],
      topic: "Different Ways to Make a Number"
    },
    {
      id: 28,
      question: "3 + 3 = 6. What else makes 6?",
      options: [
        { text: "2 + 4", correct: true },
        { text: "1 + 4", correct: false },
        { text: "2 + 3", correct: false },
        { text: "4 + 1", correct: false },
      ],
      topic: "Different Ways to Make a Number"
    },
    {
      id: 29,
      question: "If whole is 8 and one part is 3, what is the other part?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
      ],
      topic: "Whole and Parts"
    },
    {
      id: 30,
      question: "Whole = 9, Part 1 = 2, Part 2 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Whole and Parts"
    },
    {
      id: 31,
      question: "10 = 6 + ?",
      options: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Whole and Parts"
    },
    {
      id: 32,
      question: "Total apples = 7, taken = 2, remaining = ?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
      ],
      topic: "Whole and Parts"
    },
    {
      id: 33,
      question: "1 + 2 + 3 = ?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false },
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 34,
      question: "2 + 3 + 4 = ?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: true },
        { text: "10", correct: false },
        { text: "11", correct: false },
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 35,
      question: "1 + 1 + 3 = ?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 36,
      question: "3 + 2 + 2 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 37,
      question: "2 + 2 + 2 = ?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false },
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 38,
      question: "7 + 5 = ?",
      options: [
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
        { text: "14", correct: false },
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 39,
      question: "8 + 4 = ?",
      options: [
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
        { text: "14", correct: false },
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 40,
      question: "6 + 7 = ?",
      options: [
        { text: "12", correct: false },
        { text: "13", correct: true },
        { text: "14", correct: false },
        { text: "15", correct: false },
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 41,
      question: "9 + 5 = ?",
      options: [
        { text: "13", correct: false },
        { text: "14", correct: true },
        { text: "15", correct: false },
        { text: "16", correct: false },
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 42,
      question: "8 + 6 = ?",
      options: [
        { text: "13", correct: false },
        { text: "14", correct: true },
        { text: "15", correct: false },
        { text: "16", correct: false },
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 43,
      question: "2 + 2 = ?",
      options: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 44,
      question: "3 + 3 = ?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 45,
      question: "4 + 4 = ?",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "10", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 46,
      question: "5 + 5 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 47,
      question: "1 + 8 = ?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: true },
        { text: "10", correct: false },
        { text: "11", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 48,
      question: "3 + 7 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 49,
      question: "4 + 6 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 50,
      question: "If 5 + 3 = 8, then 8 - 3 = ?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 51,
      question: "10 - 5 = ?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 52,
      question: "9 - 2 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 53,
      question: "8 - 1 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 54,
      question: "7 - 3 = ?",
      options: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 55,
      question: "6 - 2 = ?",
      options: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 56,
      question: "12 - 2 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 57,
      question: "15 - 5 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 58,
      question: "Which is bigger: 5 or 8?",
      options: [
        { text: "5", correct: false },
        { text: "8", correct: true },
        { text: "Same", correct: false },
        { text: "Can't say", correct: false },
      ],
      topic: "Number Comparison"
    },
    {
      id: 59,
      question: "Which is smaller: 12 or 7?",
      options: [
        { text: "12", correct: false },
        { text: "7", correct: true },
        { text: "Same", correct: false },
        { text: "Can't say", correct: false },
      ],
      topic: "Number Comparison"
    },
    {
      id: 60,
      question: "15 > 10. Is this true?",
      options: [
        { text: "Yes", correct: true },
        { text: "No", correct: false },
        { text: "Maybe", correct: false },
        { text: "Don't know", correct: false },
      ],
      topic: "Number Comparison"
    },
    {
      id: 61,
      question: "20 < 15. Is this true?",
      options: [
        { text: "Yes", correct: false },
        { text: "No", correct: true },
        { text: "Maybe", correct: false },
        { text: "Don't know", correct: false },
      ],
      topic: "Number Comparison"
    },
    {
      id: 62,
      question: "Compare: 8 and 3",
      options: [
        { text: "8 > 3", correct: true },
        { text: "8 < 3", correct: false },
        { text: "8 = 3", correct: false },
        { text: "Can't compare", correct: false },
      ],
      topic: "Number Comparison"
    },
    {
      id: 63,
      question: "Arrange: 4, 7, 2. Smallest to largest?",
      options: [
        { text: "2, 4, 7", correct: true },
        { text: "7, 4, 2", correct: false },
        { text: "4, 2, 7", correct: false },
        { text: "2, 7, 4", correct: false },
      ],
      topic: "Number Comparison"
    },
    {
      id: 64,
      question: "When we sleep, it is?",
      options: [
        { text: "Morning", correct: false },
        { text: "Afternoon", correct: false },
        { text: "Night", correct: true },
        { text: "Evening", correct: false },
      ],
      topic: "Telling Time"
    },
    {
      id: 65,
      question: "School starts in?",
      options: [
        { text: "Night", correct: false },
        { text: "Morning", correct: true },
        { text: "Evening", correct: false },
        { text: "Midnight", correct: false },
      ],
      topic: "Telling Time"
    },
    {
      id: 66,
      question: "We play in?",
      options: [
        { text: "Early morning", correct: false },
        { text: "Afternoon", correct: true },
        { text: "Midnight", correct: false },
        { text: "Late night", correct: false },
      ],
      topic: "Telling Time"
    },
    {
      id: 67,
      question: "If you have 5 rupees and get 3 more, total?",
      options: [
        { text: "2", correct: false },
        { text: "8", correct: true },
        { text: "7", correct: false },
        { text: "6", correct: false },
      ],
      topic: "Money"
    },
    {
      id: 68,
      question: "One rupee coin is?",
      options: [
        { text: "Very heavy", correct: false },
        { text: "Light", correct: true },
        { text: "Very big", correct: false },
        { text: "Very small", correct: false },
      ],
      topic: "Money"
    },
    {
      id: 69,
      question: "Which is longer?",
      options: [
        { text: "Needle", correct: false },
        { text: "Pen", correct: true },
        { text: "Hair", correct: false },
        { text: "Ant", correct: false },
      ],
      topic: "Measurement"
    },
    {
      id: 70,
      question: "How many cm in 1 meter?",
      options: [
        { text: "10", correct: false },
        { text: "50", correct: false },
        { text: "100", correct: true },
        { text: "1000", correct: false },
      ],
      topic: "Measurement"
    },
    {
      id: 71,
      question: "11 + 2 = ?",
      options: [
        { text: "12", correct: false },
        { text: "13", correct: true },
        { text: "14", correct: false },
        { text: "15", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 72,
      question: "10 + 3 = ?",
      options: [
        { text: "11", correct: false },
        { text: "12", correct: false },
        { text: "13", correct: true },
        { text: "14", correct: false },
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 73,
      question: "14 - 4 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 74,
      question: "16 - 6 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 75,
      question: "18 - 8 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false },
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
  ],

  english: [
    {
      id: 1,
      question: "What animal flies?",
      options: [
        { text: "Dog", correct: false },
        { text: "Bird", correct: true },
        { text: "Fish", correct: false },
        { text: "Cat", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 2,
      question: "How do birds move in the sky?",
      options: [
        { text: "Run", correct: false },
        { text: "Fly", correct: true },
        { text: "Swim", correct: false },
        { text: "Hop", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 3,
      question: "Which animal barks?",
      options: [
        { text: "Dog", correct: true },
        { text: "Cat", correct: false },
        { text: "Bird", correct: false },
        { text: "Fish", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 4,
      question: "The cat can?",
      options: [
        { text: "Fly", correct: false },
        { text: "Swim", correct: false },
        { text: "Meow", correct: true },
        { text: "Bark", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 5,
      question: "Fish live in?",
      options: [
        { text: "Air", correct: false },
        { text: "Water", correct: true },
        { text: "Land", correct: false },
        { text: "Sky", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 6,
      question: "What does a monkey do?",
      options: [
        { text: "Fly", correct: false },
        { text: "Jump", correct: true },
        { text: "Swim", correct: false },
        { text: "Bark", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 7,
      question: "Where do birds make home?",
      options: [
        { text: "Water", correct: false },
        { text: "Ground", correct: false },
        { text: "Trees", correct: true },
        { text: "Sky", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 8,
      question: "What eats grass?",
      options: [
        { text: "Tiger", correct: false },
        { text: "Cow", correct: true },
        { text: "Eagle", correct: false },
        { text: "Shark", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 9,
      question: "Snake is?",
      options: [
        { text: "Mammal", correct: false },
        { text: "Reptile", correct: true },
        { text: "Bird", correct: false },
        { text: "Fish", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 10,
      question: "Elephant has?",
      options: [
        { text: "Wings", correct: false },
        { text: "Trunk", correct: true },
        { text: "Fins", correct: false },
        { text: "Feathers", correct: false },
      ],
      topic: "Prose Comprehension"
    },
    {
      id: 11,
      question: "Which is a noun (naming word)?",
      options: [
        { text: "Run", correct: false },
        { text: "Boy", correct: true },
        { text: "Happy", correct: false },
        { text: "Quickly", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 12,
      question: "Pick the noun:",
      options: [
        { text: "Blue", correct: false },
        { text: "Teacher", correct: true },
        { text: "Fast", correct: false },
        { text: "Nice", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 13,
      question: "A person who teaches is a?",
      options: [
        { text: "Doctor", correct: false },
        { text: "Teacher", correct: true },
        { text: "Engineer", correct: false },
        { text: "Nurse", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 14,
      question: "Which word is a noun?",
      options: [
        { text: "Run", correct: false },
        { text: "Apple", correct: true },
        { text: "Red", correct: false },
        { text: "Jump", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 15,
      question: "A place to live is?",
      options: [
        { text: "School", correct: false },
        { text: "Hospital", correct: false },
        { text: "House", correct: true },
        { text: "Park", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 16,
      question: "Doctor is a?",
      options: [
        { text: "Place", correct: false },
        { text: "Person", correct: true },
        { text: "Thing", correct: false },
        { text: "Animal", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 17,
      question: "Table is a?",
      options: [
        { text: "Verb", correct: false },
        { text: "Noun", correct: true },
        { text: "Adjective", correct: false },
        { text: "Letter", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 18,
      question: "Which is a noun?",
      options: [
        { text: "Happy", correct: false },
        { text: "Pencil", correct: true },
        { text: "Sing", correct: false },
        { text: "Nice", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 19,
      question: "School is a?",
      options: [
        { text: "Noun", correct: true },
        { text: "Verb", correct: false },
        { text: "Adjective", correct: false },
        { text: "Adverb", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 20,
      question: "Which is an action word?",
      options: [
        { text: "Ball", correct: false },
        { text: "Run", correct: true },
        { text: "Red", correct: false },
        { text: "Happy", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 21,
      question: "What does the bird do?",
      options: [
        { text: "Fly", correct: true },
        { text: "Sleep", correct: false },
        { text: "Eat", correct: false },
        { text: "Drink", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 22,
      question: "The cat can?",
      options: [
        { text: "Jump", correct: true },
        { text: "Big", correct: false },
        { text: "Small", correct: false },
        { text: "Cute", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 23,
      question: "We use verb to show?",
      options: [
        { text: "Naming", correct: false },
        { text: "Action", correct: true },
        { text: "Color", correct: false },
        { text: "Number", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 24,
      question: "Jump is a?",
      options: [
        { text: "Noun", correct: false },
        { text: "Verb", correct: true },
        { text: "Adjective", correct: false },
        { text: "Color", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 25,
      question: "I __ my homework",
      options: [
        { text: "do", correct: true },
        { text: "am", correct: false },
        { text: "is", correct: false },
        { text: "are", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 26,
      question: "She __ to school",
      options: [
        { text: "go", correct: false },
        { text: "goes", correct: true },
        { text: "went", correct: false },
        { text: "going", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 27,
      question: "Play is?",
      options: [
        { text: "Noun", correct: false },
        { text: "Verb", correct: true },
        { text: "Adjective", correct: false },
        { text: "Adverb", correct: false },
      ],
      topic: "Grammar: Verbs"
    },
    {
      id: 28,
      question: "Which word describes things?",
      options: [
        { text: "Run", correct: false },
        { text: "Jump", correct: false },
        { text: "Red", correct: true },
        { text: "Sing", correct: false },
      ],
      topic: "Grammar: Adjectives"
    },
    {
      id: 29,
      question: "Big is a?",
      options: [
        { text: "Noun", correct: false },
        { text: "Verb", correct: false },
        { text: "Adjective", correct: true },
        { text: "Adverb", correct: false },
      ],
      topic: "Grammar: Adjectives"
    },
    {
      id: 30,
      question: "The apple is?",
      options: [
        { text: "Sweet", correct: true },
        { text: "Run", correct: false },
        { text: "Jump", correct: false },
        { text: "Sit", correct: false },
      ],
      topic: "Grammar: Adjectives"
    },
    {
      id: 31,
      question: "Small is an?",
      options: [
        { text: "Noun", correct: false },
        { text: "Verb", correct: false },
        { text: "Adjective", correct: true },
        { text: "Action", correct: false },
      ],
      topic: "Grammar: Adjectives"
    },
    {
      id: 32,
      question: "Fast is?",
      options: [
        { text: "Verb", correct: false },
        { text: "Adjective", correct: true },
        { text: "Noun", correct: false },
        { text: "Pronoun", correct: false },
      ],
      topic: "Grammar: Adjectives"
    },
    {
      id: 33,
      question: "Which letter comes after B?",
      options: [
        { text: "A", correct: false },
        { text: "C", correct: true },
        { text: "D", correct: false },
        { text: "E", correct: false },
      ],
      topic: "Alphabet & Phonics"
    },
    {
      id: 34,
      question: "Which letter comes before D?",
      options: [
        { text: "B", correct: false },
        { text: "C", correct: true },
        { text: "E", correct: false },
        { text: "F", correct: false },
      ],
      topic: "Alphabet & Phonics"
    },
    {
      id: 35,
      question: "A, B, C, D, ?",
      options: [
        { text: "E", correct: true },
        { text: "F", correct: false },
        { text: "G", correct: false },
        { text: "H", correct: false },
      ],
      topic: "Alphabet & Phonics"
    },
    {
      id: 36,
      question: "The first letter of the alphabet is?",
      options: [
        { text: "B", correct: false },
        { text: "A", correct: true },
        { text: "C", correct: false },
        { text: "Z", correct: false },
      ],
      topic: "Alphabet & Phonics"
    },
    {
      id: 37,
      question: "Z is the __th letter",
      options: [
        { text: "24", correct: false },
        { text: "25", correct: false },
        { text: "26", correct: true },
        { text: "27", correct: false },
      ],
      topic: "Alphabet & Phonics"
    },
    {
      id: 38,
      question: "M comes after?",
      options: [
        { text: "L", correct: true },
        { text: "N", correct: false },
        { text: "O", correct: false },
        { text: "K", correct: false },
      ],
      topic: "Alphabet & Phonics"
    },
    {
      id: 39,
      question: "What does a dog say?",
      options: [
        { text: "Meow", correct: false },
        { text: "Woof", correct: true },
        { text: "Moo", correct: false },
        { text: "Chirp", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 40,
      question: "What does a cow say?",
      options: [
        { text: "Moo", correct: true },
        { text: "Woof", correct: false },
        { text: "Chirp", correct: false },
        { text: "Meow", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 41,
      question: "What color is the sky?",
      options: [
        { text: "Green", correct: false },
        { text: "Yellow", correct: false },
        { text: "Blue", correct: true },
        { text: "Red", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 42,
      question: "We eat?",
      options: [
        { text: "Clothes", correct: false },
        { text: "Food", correct: true },
        { text: "Books", correct: false },
        { text: "Toys", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 43,
      question: "We drink?",
      options: [
        { text: "Plate", correct: false },
        { text: "Water", correct: true },
        { text: "Chair", correct: false },
        { text: "Table", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 44,
      question: "What does a sheep say?",
      options: [
        { text: "Baa", correct: true },
        { text: "Woof", correct: false },
        { text: "Moo", correct: false },
        { text: "Chirp", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 45,
      question: "Elephant sound is?",
      options: [
        { text: "Roar", correct: false },
        { text: "Trumpet", correct: true },
        { text: "Squeak", correct: false },
        { text: "Chirp", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 46,
      question: "Lion lives in?",
      options: [
        { text: "Forest", correct: true },
        { text: "House", correct: false },
        { text: "Lake", correct: false },
        { text: "Mountain", correct: false },
      ],
      topic: "Reading & Word Recognition"
    },
    {
      id: 47,
      question: "Correct sentence:",
      options: [
        { text: "Dog the barks", correct: false },
        { text: "The dog barks", correct: true },
        { text: "Barks dog the", correct: false },
        { text: "Dog barks the", correct: false },
      ],
      topic: "Sentence Building"
    },
    {
      id: 48,
      question: "Choose correct order:",
      options: [
        { text: "Fly bird can", correct: false },
        { text: "Can bird fly", correct: false },
        { text: "Bird can fly", correct: true },
        { text: "Can fly bird", correct: false },
      ],
      topic: "Sentence Building"
    },
    {
      id: 49,
      question: "Make a sentence:",
      options: [
        { text: "Cat jump can", correct: false },
        { text: "Can jump cat", correct: false },
        { text: "Cat can jump", correct: true },
        { text: "Jump can cat", correct: false },
      ],
      topic: "Sentence Building"
    },
    {
      id: 50,
      question: "__ is my friend",
      options: [
        { text: "She", correct: true },
        { text: "It", correct: false },
        { text: "They", correct: false },
        { text: "Their", correct: false },
      ],
      topic: "Sentence Building"
    },
    {
      id: 51,
      question: "I am a ___",
      options: [
        { text: "student", correct: true },
        { text: "run", correct: false },
        { text: "happy", correct: false },
        { text: "big", correct: false },
      ],
      topic: "Sentence Building"
    },
    {
      id: 52,
      question: "Which is NOT a noun?",
      options: [
        { text: "Book", correct: false },
        { text: "Run", correct: true },
        { text: "Chair", correct: false },
        { text: "Table", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 53,
      question: "Nurse is a?",
      options: [
        { text: "Person", correct: true },
        { text: "Place", correct: false },
        { text: "Thing", correct: false },
        { text: "Animal", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 54,
      question: "Hospital is a?",
      options: [
        { text: "Person", correct: false },
        { text: "Place", correct: true },
        { text: "Thing", correct: false },
        { text: "Animal", correct: false },
      ],
      topic: "Grammar: Nouns"
    },
    {
      id: 55,
      question: "Sentences start with?",
      options: [
        { text: "Small letter", correct: false },
        { text: "Capital letter", correct: true },
        { text: "Number", correct: false },
        { text: "Symbol", correct: false },
      ],
      topic: "Punctuation"
    },
    {
      id: 56,
      question: "What comes at end of sentence?",
      options: [
        { text: "Comma", correct: false },
        { text: "Period", correct: true },
        { text: "Dash", correct: false },
        { text: "Arrow", correct: false },
      ],
      topic: "Punctuation"
    },
    {
      id: 57,
      question: "Primary colors are?",
      options: [
        { text: "Pink, Purple", correct: false },
        { text: "Red, Yellow, Blue", correct: true },
        { text: "Black, White", correct: false },
        { text: "Brown, Gray", correct: false },
      ],
      topic: "Colors"
    },
    {
      id: 58,
      question: "What color is grass?",
      options: [
        { text: "Red", correct: false },
        { text: "Blue", correct: false },
        { text: "Green", correct: true },
        { text: "Yellow", correct: false },
      ],
      topic: "Colors"
    },
    {
      id: 59,
      question: "What color is snow?",
      options: [
        { text: "Black", correct: false },
        { text: "White", correct: true },
        { text: "Gray", correct: false },
        { text: "Blue", correct: false },
      ],
      topic: "Colors"
    },
    {
      id: 60,
      question: "Opposite of big is?",
      options: [
        { text: "Large", correct: false },
        { text: "Small", correct: true },
        { text: "Tall", correct: false },
        { text: "Long", correct: false },
      ],
      topic: "Opposites"
    },
    {
      id: 61,
      question: "Opposite of hot is?",
      options: [
        { text: "Warm", correct: false },
        { text: "Cold", correct: true },
        { text: "Mild", correct: false },
        { text: "Cool", correct: false },
      ],
      topic: "Opposites"
    },
    {
      id: 62,
      question: "Opposite of day is?",
      options: [
        { text: "Evening", correct: false },
        { text: "Morning", correct: false },
        { text: "Night", correct: true },
        { text: "Afternoon", correct: false },
      ],
      topic: "Opposites"
    },
  ],

  hindi: [
    {
      id: 1,
      question: "निम्न में कौन एक जानवर है?",
      options: [
        { text: "किताब", correct: false },
        { text: "कुत्ता", correct: true },
        { text: "कलम", correct: false },
        { text: "मेज", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 2,
      question: "नीचे दिए हुए में से कौन सा रंग है?",
      options: [
        { text: "चलना", correct: false },
        { text: "लाल", correct: true },
        { text: "खेलना", correct: false },
        { text: "बैठना", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 3,
      question: "फल कौन से हैं?",
      options: [
        { text: "सेब", correct: true },
        { text: "कुर्सी", correct: false },
        { text: "कलम", correct: false },
        { text: "कपड़े", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 4,
      question: "'पत्र' का अर्थ है?",
      options: [
        { text: "पेड़", correct: false },
        { text: "चिट्ठी", correct: true },
        { text: "पानी", correct: false },
        { text: "पक्षी", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 5,
      question: "'सूर्य' क्या है?",
      options: [
        { text: "तारा", correct: false },
        { text: "ग्रह", correct: true },
        { text: "पक्षी", correct: false },
        { text: "जानवर", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 6,
      question: "'दिन' के समय कौन निकलता है?",
      options: [
        { text: "चाँद", correct: false },
        { text: "सूर्य", correct: true },
        { text: "तारे", correct: false },
        { text: "बादल", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 7,
      question: "'रात' के समय कौन दिखता है?",
      options: [
        { text: "सूर्य", correct: false },
        { text: "चाँद", correct: true },
        { text: "पक्षी", correct: false },
        { text: "पेड़", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 8,
      question: "'मछली' कहाँ रहती है?",
      options: [
        { text: "पेड़ पर", correct: false },
        { text: "पानी में", correct: true },
        { text: "जमीन पर", correct: false },
        { text: "आसमान में", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 9,
      question: "'गाय' कौन सा जानवर है?",
      options: [
        { text: "शिकारी", correct: false },
        { text: "पालतू", correct: true },
        { text: "जंगली", correct: false },
        { text: "उड़ने वाला", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 10,
      question: "'हरा' क्या है?",
      options: [
        { text: "जानवर", correct: false },
        { text: "रंग", correct: true },
        { text: "फल", correct: false },
        { text: "फूल", correct: false },
      ],
      topic: "Hindi Basic Words"
    },
    {
      id: 11,
      question: "पानी का उपयोग?",
      options: [
        { text: "खेलने के लिए", correct: false },
        { text: "पीने और नहाने के लिए", correct: true },
        { text: "सोने के लिए", correct: false },
        { text: "दौड़ने के लिए", correct: false },
      ],
      topic: "Hindi - Daily Life"
    },
    {
      id: 12,
      question: "स्कूल में हम?",
      options: [
        { text: "सोते हैं", correct: false },
        { text: "पढ़ते हैं", correct: true },
        { text: "खेलते हैं", correct: false },
        { text: "खाते हैं", correct: false },
      ],
      topic: "Hindi - Daily Life"
    },
    {
      id: 13,
      question: "रात में हम?",
      options: [
        { text: "खेलते हैं", correct: false },
        { text: "पढ़ते हैं", correct: false },
        { text: "सोते हैं", correct: true },
        { text: "दौड़ते हैं", correct: false },
      ],
      topic: "Hindi - Daily Life"
    },
    {
      id: 14,
      question: "'माँ' क्या है?",
      options: [
        { text: "शिक्षक", correct: false },
        { text: "डॉक्टर", correct: false },
        { text: "माता-पिता", correct: true },
        { text: "भाई", correct: false },
      ],
      topic: "Hindi - Family"
    },
    {
      id: 15,
      question: "'भाई' का विलोम?",
      options: [
        { text: "पिता", correct: false },
        { text: "बहन", correct: true },
        { text: "माँ", correct: false },
        { text: "चाचा", correct: false },
      ],
      topic: "Hindi - Family"
    },
    {
      id: 16,
      question: "किताब पढ़ने से?",
      options: [
        { text: "नींद आती है", correct: false },
        { text: "ज्ञान मिलता है", correct: true },
        { text: "बीमारी होती है", correct: false },
        { text: "खुशी नहीं होती", correct: false },
      ],
      topic: "Hindi - Learning"
    },
    {
      id: 17,
      question: "सबसे बड़ा ग्रह?",
      options: [
        { text: "बुध", correct: false },
        { text: "गुरु", correct: true },
        { text: "शुक्र", correct: false },
        { text: "मंगल", correct: false },
      ],
      topic: "Hindi - Science"
    },
    {
      id: 18,
      question: "सबसे छोटा ग्रह?",
      options: [
        { text: "बुध", correct: true },
        { text: "शुक्र", correct: false },
        { text: "पृथ्वी", correct: false },
        { text: "मंगल", correct: false },
      ],
      topic: "Hindi - Science"
    },
    {
      id: 19,
      question: "पृथ्वी का उपग्रह?",
      options: [
        { text: "सूर्य", correct: false },
        { text: "चाँद", correct: true },
        { text: "तारा", correct: false },
        { text: "सितारा", correct: false },
      ],
      topic: "Hindi - Science"
    },
    {
      id: 20,
      question: "वर्ष में महीने?",
      options: [
        { text: "10", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
      ],
      topic: "Hindi - General Knowledge"
    },
    {
      id: 21,
      question: "महीने में सप्ताह?",
      options: [
        { text: "2", correct: false },
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
      ],
      topic: "Hindi - General Knowledge"
    },
    {
      id: 22,
      question: "सप्ताह में दिन?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
      topic: "Hindi - General Knowledge"
    },
    {
      id: 23,
      question: "दिन में घंटे?",
      options: [
        { text: "12", correct: false },
        { text: "18", correct: false },
        { text: "24", correct: true },
        { text: "30", correct: false },
      ],
      topic: "Hindi - General Knowledge"
    },
    {
      id: 24,
      question: "रंगों के नाम:",
      options: [
        { text: "लाल", correct: true },
        { text: "दौड़ना", correct: false },
        { text: "खेलना", correct: false },
        { text: "बैठना", correct: false },
      ],
      topic: "Hindi - Colors"
    },
    {
      id: 25,
      question: "काला रंग कहाँ मिलता है?",
      options: [
        { text: "आसमान में", correct: false },
        { text: "रात में", correct: true },
        { text: "दिन में", correct: false },
        { text: "पानी में", correct: false },
      ],
      topic: "Hindi - Colors"
    },
    {
      id: 26,
      question: "पीला रंग किसका है?",
      options: [
        { text: "घास का", correct: false },
        { text: "सूरज का", correct: true },
        { text: "पानी का", correct: false },
        { text: "रात का", correct: false },
      ],
      topic: "Hindi - Colors"
    },
    {
      id: 27,
      question: "संख्याएँ 1 से 10:",
      options: [
        { text: "एक, दो, तीन...", correct: true },
        { text: "दस, नौ, आठ...", correct: false },
        { text: "पाँच, छः, सात...", correct: false },
        { text: "बीस, तीस...", correct: false },
      ],
      topic: "Hindi - Numbers"
    },
    {
      id: 28,
      question: "एक + दो = ?",
      options: [
        { text: "तीन", correct: true },
        { text: "चार", correct: false },
        { text: "दो", correct: false },
        { text: "पाँच", correct: false },
      ],
      topic: "Hindi - Arithmetic"
    },
    {
      id: 29,
      question: "दाँत से हम क्या करते हैं?",
      options: [
        { text: "देखते हैं", correct: false },
        { text: "खाते हैं", correct: true },
        { text: "चलते हैं", correct: false },
        { text: "सुनते हैं", correct: false },
      ],
      topic: "Hindi - Body Parts"
    },
    {
      id: 30,
      question: "आँख से हम क्या करते हैं?",
      options: [
        { text: "खेलते हैं", correct: false },
        { text: "देखते हैं", correct: true },
        { text: "गाते हैं", correct: false },
        { text: "दौड़ते हैं", correct: false },
      ],
      topic: "Hindi - Body Parts"
    },
    {
      id: 31,
      question: "कान से हम क्या करते हैं?",
      options: [
        { text: "देखते हैं", correct: false },
        { text: "सुनते हैं", correct: true },
        { text: "खेलते हैं", correct: false },
        { text: "खाते हैं", correct: false },
      ],
      topic: "Hindi - Body Parts"
    },
    {
      id: 32,
      question: "नाक से हम क्या करते हैं?",
      options: [
        { text: "खाते हैं", correct: false },
        { text: "सूँघते हैं", correct: true },
        { text: "देखते हैं", correct: false },
        { text: "सुनते हैं", correct: false },
      ],
      topic: "Hindi - Body Parts"
    },
  ],

  computer: [
    {
      id: 1,
      question: "Computer का हिंदी नाम क्या है?",
      options: [
        { text: "मशीन", correct: false },
        { text: "संगणक", correct: true },
        { text: "यंत्र", correct: false },
        { text: "डिवाइस", correct: false },
      ],
      topic: "Computer Basics"
    },
    {
      id: 2,
      question: "Keyboard से हम क्या करते हैं?",
      options: [
        { text: "देखते हैं", correct: false },
        { text: "टाइप करते हैं", correct: true },
        { text: "सुनते हैं", correct: false },
        { text: "खेलते हैं", correct: false },
      ],
      topic: "Computer Basics"
    },
    {
      id: 3,
      question: "Mouse से हम क्या करते हैं?",
      options: [
        { text: "लिखते हैं", correct: false },
        { text: "क्लिक करते हैं", correct: true },
        { text: "गाते हैं", correct: false },
        { text: "दौड़ते हैं", correct: false },
      ],
      topic: "Computer Basics"
    },
    {
      id: 4,
      question: "Monitor क्या दिखाता है?",
      options: [
        { text: "आवाज", correct: false },
        { text: "चित्र/टेक्स्ट", correct: true },
        { text: "हवा", correct: false },
        { text: "प्रकाश", correct: false },
      ],
      topic: "Computer Basics"
    },
    {
      id: 5,
      question: "Computer के कितने मुख्य भाग हैं?",
      options: [
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false },
        { text: "5", correct: false },
      ],
      topic: "Computer Basics"
    },
    {
      id: 6,
      question: "Computer के साथ कौन सी चीज़ हटा सकते हैं?",
      options: [
        { text: "CPU", correct: false },
        { text: "Monitor", correct: false },
        { text: "Mouse", correct: true },
        { text: "Keyboard", correct: false },
      ],
      topic: "Computer Parts"
    },
    {
      id: 7,
      question: "Cursor क्या है?",
      options: [
        { text: "एक फाइल", correct: false },
        { text: "एक तीर का निशान", correct: true },
        { text: "एक प्रोग्राम", correct: false },
        { text: "एक खेल", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 8,
      question: "Desktop पर कौन सी चीज़ें होती हैं?",
      options: [
        { text: "फाइलें", correct: false },
        { text: "फोल्डर", correct: false },
        { text: "आइकन", correct: false },
        { text: "सब कुछ", correct: true },
      ],
      topic: "Computer Skills"
    },
    {
      id: 9,
      question: "Double Click करने से क्या होता है?",
      options: [
        { text: "काट जाता है", correct: false },
        { text: "खुल जाता है", correct: true },
        { text: "बंद हो जाता है", correct: false },
        { text: "कोई नहीं", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 10,
      question: "Right Click से क्या मिलता है?",
      options: [
        { text: "File Open", correct: false },
        { text: "Menu", correct: true },
        { text: "Print", correct: false },
        { text: "Copy", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 11,
      question: "CPU का पूरा नाम?",
      options: [
        { text: "Central Power Unit", correct: false },
        { text: "Central Process Unit", correct: true },
        { text: "Central Product Unit", correct: false },
        { text: "Central Person Unit", correct: false },
      ],
      topic: "Computer Hardware"
    },
    {
      id: 12,
      question: "RAM का फुल फॉर्म?",
      options: [
        { text: "Random Assess Memory", correct: false },
        { text: "Random Access Memory", correct: true },
        { text: "Read Assess Memory", correct: false },
        { text: "Random Area Memory", correct: false },
      ],
      topic: "Computer Hardware"
    },
    {
      id: 13,
      question: "Computer को ON करने के लिए क्या दबाते हैं?",
      options: [
        { text: "Mouse", correct: false },
        { text: "Power Button", correct: true },
        { text: "Keyboard", correct: false },
        { text: "Screen", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 14,
      question: "Folder क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "फाइलों को रखने की जगह", correct: true },
        { text: "एक बटन", correct: false },
        { text: "एक प्रोग्राम", correct: false },
      ],
      topic: "Computer Files"
    },
    {
      id: 15,
      question: "File क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "जानकारी को सहेजने की चीज़", correct: true },
        { text: "एक फोल्डर", correct: false },
        { text: "एक आइकन", correct: false },
      ],
      topic: "Computer Files"
    },
    {
      id: 16,
      question: "Internet क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "आपस में जुड़े कंप्यूटर", correct: true },
        { text: "एक प्रोग्राम", correct: false },
        { text: "एक गीत", correct: false },
      ],
      topic: "Computer Networking"
    },
    {
      id: 17,
      question: "Email का उपयोग?",
      options: [
        { text: "खेलने के लिए", correct: false },
        { text: "संदेश भेजने के लिए", correct: true },
        { text: "दौड़ने के लिए", correct: false },
        { text: "गाने के लिए", correct: false },
      ],
      topic: "Computer Networking"
    },
    {
      id: 18,
      question: "Search Engine क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "जानकारी खोजने की चीज़", correct: true },
        { text: "एक बटन", correct: false },
        { text: "एक फाइल", correct: false },
      ],
      topic: "Computer Internet"
    },
    {
      id: 19,
      question: "Printer से हम क्या करते हैं?",
      options: [
        { text: "देखते हैं", correct: false },
        { text: "कागज पर प्रिंट करते हैं", correct: true },
        { text: "गाते हैं", correct: false },
        { text: "खेलते हैं", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 20,
      question: "Speaker से क्या निकलता है?",
      options: [
        { text: "प्रकाश", correct: false },
        { text: "आवाज़", correct: true },
        { text: "पानी", correct: false },
        { text: "धुआं", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 21,
      question: "Microphone में क्या करते हैं?",
      options: [
        { text: "टाइप करते हैं", correct: false },
        { text: "क्लिक करते हैं", correct: false },
        { text: "बोलते हैं", correct: true },
        { text: "लिखते हैं", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 22,
      question: "Webcam क्या देता है?",
      options: [
        { text: "आवाज़", correct: false },
        { text: "वीडियो", correct: true },
        { text: "टेक्स्ट", correct: false },
        { text: "संगीत", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 23,
      question: "CD क्या है?",
      options: [
        { text: "एक कलम", correct: false },
        { text: "डेटा स्टोर करने की डिस्क", correct: true },
        { text: "एक कुर्सी", correct: false },
        { text: "एक खेल", correct: false },
      ],
      topic: "Computer Storage"
    },
    {
      id: 24,
      question: "Memory में क्या स्टोर होता है?",
      options: [
        { text: "किताबें", correct: false },
        { text: "डेटा/जानकारी", correct: true },
        { text: "खिलौने", correct: false },
        { text: "कपड़े", correct: false },
      ],
      topic: "Computer Storage"
    },
    {
      id: 25,
      question: "Screen पर क्या दिखता है?",
      options: [
        { text: "आवाज़", correct: false },
        { text: "चित्र", correct: true },
        { text: "महक", correct: false },
        { text: "स्वाद", correct: false },
      ],
      topic: "Computer Output"
    },
    {
      id: 26,
      question: "USB का उपयोग?",
      options: [
        { text: "खेलने के लिए", correct: false },
        { text: "डेटा ट्रांसफर करने के लिए", correct: true },
        { text: "सोने के लिए", correct: false },
        { text: "गाने के लिए", correct: false },
      ],
      topic: "Computer Connectivity"
    },
    {
      id: 27,
      question: "Password क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "कंप्यूटर की सुरक्षा के लिए कोड", correct: true },
        { text: "एक गीत", correct: false },
        { text: "एक पुस्तक", correct: false },
      ],
      topic: "Computer Security"
    },
    {
      id: 28,
      question: "Virus क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "कंप्यूटर को नुकसान पहुंचाने वाला प्रोग्राम", correct: true },
        { text: "एक फल", correct: false },
        { text: "एक जानवर", correct: false },
      ],
      topic: "Computer Security"
    },
    {
      id: 29,
      question: "Bluetooth क्या है?",
      options: [
        { text: "एक रंग", correct: false },
        { text: "वायरलेस तकनीक", correct: true },
        { text: "एक खेल", correct: false },
        { text: "एक किताब", correct: false },
      ],
      topic: "Computer Connectivity"
    },
    {
      id: 30,
      question: "WiFi क्या है?",
      options: [
        { text: "एक जानवर", correct: false },
        { text: "इंटरनेट कनेक्शन", correct: true },
        { text: "एक खेल", correct: false },
        { text: "एक पक्षी", correct: false },
      ],
      topic: "Computer Connectivity"
    },
    {
      id: 31,
      question: "Database क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "जानकारी को संग्रहित करने की जगह", correct: true },
        { text: "एक गीत", correct: false },
        { text: "एक कलम", correct: false },
      ],
      topic: "Computer Data"
    },
    {
      id: 32,
      question: "Application क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "एक प्रोग्राम या सॉफ्टवेयर", correct: true },
        { text: "एक फल", correct: false },
        { text: "एक कपड़ा", correct: false },
      ],
      topic: "Computer Software"
    },
    {
      id: 33,
      question: "Software क्या है?",
      options: [
        { text: "कठोर चीजें", correct: false },
        { text: "कंप्यूटर प्रोग्राम", correct: true },
        { text: "कंप्यूटर भाग", correct: false },
        { text: "कंप्यूटर तार", correct: false },
      ],
      topic: "Computer Software"
    },
    {
      id: 34,
      question: "Hardware क्या है?",
      options: [
        { text: "कंप्यूटर प्रोग्राम", correct: false },
        { text: "कंप्यूटर के भौतिक भाग", correct: true },
        { text: "डेटा", correct: false },
        { text: "जानकारी", correct: false },
      ],
      topic: "Computer Hardware"
    },
    {
      id: 35,
      question: "Update करने से क्या होता है?",
      options: [
        { text: "कंप्यूटर खराब हो जाता है", correct: false },
        { text: "नई सुविधाएँ आती हैं", correct: true },
        { text: "कंप्यूटर धीमा हो जाता है", correct: false },
        { text: "कोई नहीं", correct: false },
      ],
      topic: "Computer Maintenance"
    },
    {
      id: 36,
      question: "Backup क्या है?",
      options: [
        { text: "आगे की ओर जाना", correct: false },
        { text: "डेटा की प्रति रखना", correct: true },
        { text: "कंप्यूटर शुरू करना", correct: false },
        { text: "कंप्यूटर बंद करना", correct: false },
      ],
      topic: "Computer Data Protection"
    },
    {
      id: 37,
      question: "Restart का अर्थ?",
      options: [
        { text: "बंद करना", correct: false },
        { text: "फिर से शुरू करना", correct: true },
        { text: "हटाना", correct: false },
        { text: "खराब करना", correct: false },
      ],
      topic: "Computer Operations"
    },
    {
      id: 38,
      question: "Shutdown का अर्थ?",
      options: [
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: true },
        { text: "फिर से शुरू करना", correct: false },
        { text: "हटाना", correct: false },
      ],
      topic: "Computer Operations"
    },
    {
      id: 39,
      question: "Save का अर्थ?",
      options: [
        { text: "मिटाना", correct: false },
        { text: "सहेजना", correct: true },
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: false },
      ],
      topic: "Computer File Operations"
    },
    {
      id: 40,
      question: "Delete का अर्थ?",
      options: [
        { text: "सहेजना", correct: false },
        { text: "मिटाना", correct: true },
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: false },
      ],
      topic: "Computer File Operations"
    },
    {
      id: 41,
      question: "Open का अर्थ?",
      options: [
        { text: "मिटाना", correct: false },
        { text: "खोलना", correct: true },
        { text: "सहेजना", correct: false },
        { text: "बंद करना", correct: false },
      ],
      topic: "Computer File Operations"
    },
    {
      id: 42,
      question: "Close का अर्थ?",
      options: [
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: true },
        { text: "मिटाना", correct: false },
        { text: "सहेजना", correct: false },
      ],
      topic: "Computer File Operations"
    },
  ],

  kannada: [
    {
      id: 1,
      question: "ಗುರಿ ಎಂಬುದು ಯಾವುದು?",
      options: [
        { text: "ಪಕ್ಷಿ", correct: true },
        { text: "ಪ್ರಾಣಿ", correct: false },
        { text: "ಫಸಲು", correct: false },
        { text: "ವೃಕ್ಷ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 2,
      question: "ನೀರು ಎಲ್ಲೆ ಸಿಗುತ್ತೆ?",
      options: [
        { text: "ಆಕಾಶದಲ್ಲಿ", correct: false },
        { text: "ಕೊರೆಯಲ್ಲಿ", correct: true },
        { text: "ಮರದ ಮೇಲೆ", correct: false },
        { text: "ಸೂರ್ಯದಲ್ಲಿ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 3,
      question: "ಸೂರ್ಯ ಯಾವಾಗ ಬರುತ್ತೆ?",
      options: [
        { text: "ರಾತ್ರಿಯಲ್ಲಿ", correct: false },
        { text: "ಹಗಲಿನಲ್ಲಿ", correct: true },
        { text: "ಸಂಧ್ಯಾ ವೇಳೆ", correct: false },
        { text: "ಮಧ್ಯರಾತ್ರಿ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 4,
      question: "ಸುಟ್ಟ ಅಪ್ಪ ಮೂಲಕ ನೀವು?",
      options: [
        { text: "ಕೇಳುತ್ತೀರಿ", correct: false },
        { text: "ಹೊಲಕುತ್ತೀರಿ", correct: false },
        { text: "ತಿನ್ನುತ್ತೀರಿ", correct: true },
        { text: "ನಡೆಯುತ್ತೀರಿ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 5,
      question: "ಗಾವುಂಬ ಏನೆ?",
      options: [
        { text: "ಪಕ್ಷಿ", correct: false },
        { text: "ಪ್ರಾಣಿ", correct: true },
        { text: "ಫಸಲು", correct: false },
        { text: "ಜಲಜಂತು", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 6,
      question: "ಪ್ರಾಣಿಗಳ ಮಧ್ಯೆ ಕೂನ್ನ ಬೆದರಿಕೆ?",
      options: [
        { text: "ಮುಲೆ", correct: false },
        { text: "ಸರ್ಪ", correct: true },
        { text: "ಗುರುತೆ", correct: false },
        { text: "ಕುತ್ತರೆ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 7,
      question: "ಪುಸ್ತಕ ಏನು?",
      options: [
        { text: "ಖಾದ್ಯ", correct: false },
        { text: "ಧರಮ", correct: false },
        { text: "ಜ್ಞಾನ", correct: true },
        { text: "ಆಕಾಶ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 8,
      question: "ಛತ್ರ ಏಕೆ ಬೇಕು?",
      options: [
        { text: "ನೀರು ತಿನ್ನಲು", correct: false },
        { text: "ನೀರಿನಿಂದ ರಕ್ಷಣೆ", correct: true },
        { text: "ಸುಟ್ಟಕ್ಕೆ", correct: false },
        { text: "ಸುಸಜ್ಜೆಗೆ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 9,
      question: "ಆನೆ ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತೆ?",
      options: [
        { text: "ಅರೆ", correct: false },
        { text: "ನರೆ", correct: true },
        { text: "ಇರೆ", correct: false },
        { text: "ಒರೆ", correct: false },
      ],
      topic: "Kannada - Animal Sounds"
    },
    {
      id: 10,
      question: "ನಾಯಿ ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತೆ?",
      options: [
        { text: "ಕೂ", correct: false },
        { text: "ವೌ", correct: true },
        { text: "ಚಿಂ", correct: false },
        { text: "ಆ", correct: false },
      ],
      topic: "Kannada - Animal Sounds"
    },
    {
      id: 11,
      question: "ಮೀನು ಎಲ್ಲೆ ವಾಸ ಮಾಡುತ್ತೆ?",
      options: [
        { text: "ಆಕಾಶ", correct: false },
        { text: "ನೀರು", correct: true },
        { text: "ಮರ", correct: false },
        { text: "ಮರುದೆ", correct: false },
      ],
      topic: "Kannada - Animals"
    },
    {
      id: 12,
      question: "ಕುರ್ಚಿ ಏನೆ?",
      options: [
        { text: "ಪ್ರಾಣಿ", correct: false },
        { text: "ವಸ್ತು", correct: true },
        { text: "ಉದ್ಯಾನ", correct: false },
        { text: "ಪುಸ್ತಕ", correct: false },
      ],
      topic: "Kannada - Objects"
    },
    {
      id: 13,
      question: "ಬಿಸಿ ಅರ್ಥ?",
      options: [
        { text: "ಹೆಚ್ಚು ತಾಪಮಾನ", correct: true },
        { text: "ಸ್ವಲ್ಪ", correct: false },
        { text: "ತಂಪು", correct: false },
        { text: "ಮುದ್ದೆ", correct: false },
      ],
      topic: "Kannada - Adjectives"
    },
    {
      id: 14,
      question: "ಚಿಕ್ಕ ಅರ್ಥ?",
      options: [
        { text: "ದೊಡ್ಡ", correct: false },
        { text: "ಕ್ಷುದ್ರ", correct: true },
        { text: "ಬಿಳಿ", correct: false },
        { text: "ಕಪ್ಪು", correct: false },
      ],
      topic: "Kannada - Adjectives"
    },
    {
      id: 15,
      question: "ಹೆಚ್ಚಿ ಅರ್ಥ?",
      options: [
        { text: "ಕಡಿಮೆ", correct: false },
        { text: "ವೃದ್ಧಿ", correct: true },
        { text: "ಪತನ", correct: false },
        { text: "ಸ್ಥಿರ", correct: false },
      ],
      topic: "Kannada - Verbs"
    },
    {
      id: 16,
      question: "ಓಡು ಎಂಬುದು?",
      options: [
        { text: "ವಸ್ತು", correct: false },
        { text: "ಪ್ರಾಣಿ", correct: false },
        { text: "ಕ್ರಿಯೆ", correct: true },
        { text: "ಸ್ಥಾನ", correct: false },
      ],
      topic: "Kannada - Verbs"
    },
    {
      id: 17,
      question: "ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ?",
      options: [
        { text: "48", correct: false },
        { text: "52", correct: true },
        { text: "50", correct: false },
        { text: "60", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 18,
      question: "ವರ್ಷದಲ್ಲಿ ತಿಂಗಳು?",
      options: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "11", correct: false },
        { text: "13", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 19,
      question: "ಸಪ್ತಾಹದಲ್ಲಿ ದಿನ?",
      options: [
        { text: "5", correct: false },
        { text: "7", correct: true },
        { text: "6", correct: false },
        { text: "8", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 20,
      question: "ಸೂರ್ಯೋದಯ ಯಾವ ಸಮಯ?",
      options: [
        { text: "ರಾತ್ರಿ", correct: false },
        { text: "ಉದಯ", correct: true },
        { text: "ಸಂಧ್ಯ", correct: false },
        { text: "ಮಧ್ಯರಾತ್ರಿ", correct: false },
      ],
      topic: "Kannada - Time"
    },
    {
      id: 21,
      question: "ಮಾತೃ ಶಕ್ತಿ ಎಂದರೆ?",
      options: [
        { text: "ಪಿತೃ", correct: false },
        { text: "ತಾಯಿ", correct: true },
        { text: "ಭಾಯಿ", correct: false },
        { text: "ಬಾಬು", correct: false },
      ],
      topic: "Kannada - Family"
    },
    {
      id: 22,
      question: "ಮಾತೆ ನಾವೆ?",
      options: [
        { text: "ಮಂಡಿ", correct: false },
        { text: "ಕುಟುಂಬ", correct: true },
        { text: "ಸ್ಕೂಲು", correct: false },
        { text: "ಗ್ರಾಮ", correct: false },
      ],
      topic: "Kannada - Family"
    },
    {
      id: 23,
      question: "ನಮ್ಮ ದೇಶದ ರಾಜಧಾನಿ?",
      options: [
        { text: "ಬೆಂಗಳೂರು", correct: false },
        { text: "ಬೆಳ್ಳರಿ", correct: false },
        { text: "ಡೆಲ್ಲಿ", correct: true },
        { text: "ಮುಂಬೈ", correct: false },
      ],
      topic: "Kannada - General Knowledge"
    },
    {
      id: 24,
      question: "ಭಾರತದ ರಾಜಧಾನಿ?",
      options: [
        { text: "ಮುಂಬೈ", correct: false },
        { text: "ಕೋಲ್ಕತ್ತ", correct: false },
        { text: "ನವೆ ಡೆಲ್ಲಿ", correct: true },
        { text: "ಚೆನ್ನೈ", correct: false },
      ],
      topic: "Kannada - General Knowledge"
    },
    {
      id: 25,
      question: "ಕನ್ನಡ ರಾಜ್ಯ?",
      options: [
        { text: "ಮಹಾರಾಷ್ಟ್ರ", correct: false },
        { text: "ಕರ್ನಾಟಕ", correct: true },
        { text: "ತಮಿಳುನಾಡು", correct: false },
        { text: "ತೆಲುಗು", correct: false },
      ],
      topic: "Kannada - General Knowledge"
    },
    {
      id: 26,
      question: "ಸಂಖ್ಯೆ 1-10 ಕನ್ನಡದಲ್ಲಿ?",
      options: [
        { text: "ಒಂದು, ಎರಡು, ಮೂರು...", correct: true },
        { text: "ಹತ್ತು, ಒಂಬತ್ತು...", correct: false },
        { text: "ಐದು, ಆರು...", correct: false },
        { text: "ಇಪ್ಪತ್ತು...", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 27,
      question: "ವರ್ಣಮಾಲೆಯಲ್ಲಿ ಅಕ್ಷರ?",
      options: [
        { text: "40", correct: false },
        { text: "48", correct: false },
        { text: "52", correct: true },
        { text: "60", correct: false },
      ],
      topic: "Kannada - Alphabet"
    },
    {
      id: 28,
      question: "ಕ್ರಿಯೆ ಶಬ್ದ?",
      options: [
        { text: "ಪುಸ್ತಕ", correct: false },
        { text: "ಓಡು", correct: true },
        { text: "ಮೇಜು", correct: false },
        { text: "ಕುರ್ಚಿ", correct: false },
      ],
      topic: "Kannada - Verbs"
    },
    {
      id: 29,
      question: "ನಾಮ ಪದ?",
      options: [
        { text: "ಅಪ್ಪ", correct: true },
        { text: "ಓಡು", correct: false },
        { text: "ಚಿಕ್ಕ", correct: false },
        { text: "ದೊಡ್ಡ", correct: false },
      ],
      topic: "Kannada - Nouns"
    },
    {
      id: 30,
      question: "ವಿಶೇಷಣ ಪದ?",
      options: [
        { text: "ಅಪ್ಪ", correct: false },
        { text: "ಓಡು", correct: false },
        { text: "ಬಿಳಿ", correct: true },
        { text: "ಮಾತೆ", correct: false },
      ],
      topic: "Kannada - Adjectives"
    },
    {
      id: 31,
      question: "ಚುನಾಮೀ ವರ್ಷ?",
      options: [
        { text: "2020", correct: false },
        { text: "2025", correct: false },
        { text: "2024", correct: false },
        { text: "2023", correct: true },
      ],
      topic: "Kannada - General Knowledge"
    },
  ],

  evs: [
    {
      id: 1,
      question: "We need air to?",
      options: [
        { text: "Eat", correct: false },
        { text: "Breathe", correct: true },
        { text: "Sleep", correct: false },
        { text: "Play", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 2,
      question: "We need water to?",
      options: [
        { text: "Breathe", correct: false },
        { text: "Drink and wash", correct: true },
        { text: "Run", correct: false },
        { text: "Fly", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 3,
      question: "We need food to?",
      options: [
        { text: "Fly", correct: false },
        { text: "Grow and be strong", correct: true },
        { text: "Run", correct: false },
        { text: "Sing", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 4,
      question: "We need shelter to?",
      options: [
        { text: "Eat", correct: false },
        { text: "Play", correct: false },
        { text: "Live safely", correct: true },
        { text: "Fly", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 5,
      question: "Where do we sleep?",
      options: [
        { text: "School", correct: false },
        { text: "Park", correct: false },
        { text: "Home/House", correct: true },
        { text: "Hospital", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 6,
      question: "Sun gives us?",
      options: [
        { text: "Water", correct: false },
        { text: "Light and heat", correct: true },
        { text: "Food", correct: false },
        { text: "Shade", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 7,
      question: "Rain water is used for?",
      options: [
        { text: "Playing", correct: false },
        { text: "Drinking and plants", correct: true },
        { text: "Flying", correct: false },
        { text: "Running", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 8,
      question: "Trees give us?",
      options: [
        { text: "Water", correct: false },
        { text: "Oxygen and fruit", correct: true },
        { text: "Fire", correct: false },
        { text: "Sand", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 9,
      question: "Soil helps plants to?",
      options: [
        { text: "Fly", correct: false },
        { text: "Grow", correct: true },
        { text: "Sleep", correct: false },
        { text: "Eat", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 10,
      question: "We should drink?",
      options: [
        { text: "Tea", correct: false },
        { text: "Milk", correct: false },
        { text: "Water", correct: true },
        { text: "Juice only", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 11,
      question: "Before eating we should?",
      options: [
        { text: "Sleep", correct: false },
        { text: "Wash hands", correct: true },
        { text: "Play", correct: false },
        { text: "Sing", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 12,
      question: "After using toilet we should?",
      options: [
        { text: "Play", correct: false },
        { text: "Sleep", correct: false },
        { text: "Wash hands", correct: true },
        { text: "Eat", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 13,
      question: "We should brush teeth?",
      options: [
        { text: "Once a year", correct: false },
        { text: "Twice a day", correct: true },
        { text: "Once a week", correct: false },
        { text: "Never", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 14,
      question: "Animals live in?",
      options: [
        { text: "School", correct: false },
        { text: "Hospital", correct: false },
        { text: "Forest and farms", correct: true },
        { text: "Road", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 15,
      question: "Which is a domestic animal?",
      options: [
        { text: "Lion", correct: false },
        { text: "Dog", correct: true },
        { text: "Tiger", correct: false },
        { text: "Bear", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 16,
      question: "Which is a wild animal?",
      options: [
        { text: "Cow", correct: false },
        { text: "Hen", correct: false },
        { text: "Tiger", correct: true },
        { text: "Sheep", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 17,
      question: "Birds have?",
      options: [
        { text: "Fins", correct: false },
        { text: "Feathers", correct: true },
        { text: "Scales", correct: false },
        { text: "Fur", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 18,
      question: "In summer we should wear?",
      options: [
        { text: "Heavy clothes", correct: false },
        { text: "Light clothes", correct: true },
        { text: "Thick coat", correct: false },
        { text: "Blanket", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 19,
      question: "In winter we need?",
      options: [
        { text: "Fan", correct: false },
        { text: "Blanket", correct: true },
        { text: "AC", correct: false },
        { text: "Ice", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 20,
      question: "Rainy season makes ground?",
      options: [
        { text: "Dry", correct: false },
        { text: "Wet", correct: true },
        { text: "Hot", correct: false },
        { text: "Cold", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 21,
      question: "We fly a kite in?",
      options: [
        { text: "Summer", correct: false },
        { text: "Winter", correct: true },
        { text: "Rainy season", correct: false },
        { text: "Spring", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 22,
      question: "Umbrella is used in?",
      options: [
        { text: "Summer", correct: false },
        { text: "Rainy season", correct: true },
        { text: "Winter", correct: false },
        { text: "Spring", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 23,
      question: "Sun is hottest in?",
      options: [
        { text: "Winter", correct: false },
        { text: "Summer", correct: true },
        { text: "Rainy season", correct: false },
        { text: "Spring", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 24,
      question: "Sun and Weather Safety",
      options: [
        { text: "Play in rain", correct: false },
        { text: "Wear sunscreen in sun", correct: true },
        { text: "Sit in sun all day", correct: false },
        { text: "Ignore weather", correct: false },
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 25,
      question: "Too much sun can cause?",
      options: [
        { text: "Catching cold", correct: false },
        { text: "Skin burn", correct: true },
        { text: "Better health", correct: false },
        { text: "Faster running", correct: false },
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 26,
      question: "Good posture means?",
      options: [
        { text: "Slouching", correct: false },
        { text: "Sitting straight", correct: true },
        { text: "Bending forward", correct: false },
        { text: "Lying down", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 27,
      question: "We should stretch?",
      options: [
        { text: "Never", correct: false },
        { text: "Regularly", correct: true },
        { text: "Once a year", correct: false },
        { text: "Only at school", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 28,
      question: "Playing sports is good?",
      options: [
        { text: "It wastes time", correct: false },
        { text: "It keeps us fit", correct: true },
        { text: "It makes weak", correct: false },
        { text: "It's boring", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 29,
      question: "Proper sleep helps?",
      options: [
        { text: "Make sick", correct: false },
        { text: "Have energy", correct: true },
        { text: "Be grumpy", correct: false },
        { text: "Waste time", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 30,
      question: "We should sleep?",
      options: [
        { text: "3 hours", correct: false },
        { text: "8 hours", correct: true },
        { text: "1 hour", correct: false },
        { text: "Never", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 31,
      question: "Fish have?",
      options: [
        { text: "Feathers", correct: false },
        { text: "Fins", correct: true },
        { text: "Wings", correct: false },
        { text: "Legs", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 32,
      question: "Lion is?",
      options: [
        { text: "Vegetarian", correct: false },
        { text: "Carnivore", correct: true },
        { text: "Herbivore", correct: false },
        { text: "Omnivore", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 33,
      question: "Cow eats?",
      options: [
        { text: "Meat", correct: false },
        { text: "Grass and leaves", correct: true },
        { text: "Fish", correct: false },
        { text: "Everything", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 34,
      question: "Animals need:",
      options: [
        { text: "Only food", correct: false },
        { text: "Food, water, shelter", correct: true },
        { text: "Only water", correct: false },
        { text: "Only air", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 35,
      question: "Exercise helps us?",
      options: [
        { text: "Get sick", correct: false },
        { text: "Stay strong", correct: true },
        { text: "Sleep always", correct: false },
        { text: "Get weak", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 36,
      question: "We should take bath?",
      options: [
        { text: "Never", correct: false },
        { text: "Daily", correct: true },
        { text: "Once a month", correct: false },
        { text: "Once a year", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 37,
      question: "Getting vaccinated protects?",
      options: [
        { text: "Never", correct: false },
        { text: "Sometimes", correct: false },
        { text: "From diseases", correct: true },
        { text: "For playing", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 38,
      question: "We wear clothes to?",
      options: [
        { text: "Play", correct: false },
        { text: "Cover and protect body", correct: true },
        { text: "Eat", correct: false },
        { text: "Sleep", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 39,
      question: "Which is a basic need?",
      options: [
        { text: "Toys", correct: false },
        { text: "Food", correct: true },
        { text: "Games", correct: false },
        { text: "Books", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 40,
      question: "We should use water?",
      options: [
        { text: "Wastefully", correct: false },
        { text: "Carefully", correct: true },
        { text: "Carelessly", correct: false },
        { text: "Unlimitedly", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 41,
      question: "Plants need:",
      options: [
        { text: "Only water", correct: false },
        { text: "Water, soil, sunlight", correct: true },
        { text: "Only sunlight", correct: false },
        { text: "Only air", correct: false },
      ],
      topic: "Natural Resources"
    },
  ],

};


    {
      id: 7,
      question: "Cursor क्या है?",
      options: [
        { text: "एक फाइल", correct: false },
        { text: "एक तीर का निशान", correct: true },
        { text: "एक प्रोग्राम", correct: false },
        { text: "एक खेल", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 8,
      question: "Desktop पर कौन सी चीज़ें होती हैं?",
      options: [
        { text: "फाइलें", correct: false },
        { text: "फोल्डर", correct: false },
        { text: "आइकन", correct: false },
        { text: "सब कुछ", correct: true },
      ],
      topic: "Computer Skills"
    },
    {
      id: 9,
      question: "Double Click करने से क्या होता है?",
      options: [
        { text: "काट जाता है", correct: false },
        { text: "खुल जाता है", correct: true },
        { text: "बंद हो जाता है", correct: false },
        { text: "कोई नहीं", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 10,
      question: "Right Click से क्या मिलता है?",
      options: [
        { text: "File Open", correct: false },
        { text: "Menu", correct: true },
        { text: "Print", correct: false },
        { text: "Copy", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 11,
      question: "CPU का पूरा नाम?",
      options: [
        { text: "Central Power Unit", correct: false },
        { text: "Central Process Unit", correct: true },
        { text: "Central Product Unit", correct: false },
        { text: "Central Person Unit", correct: false },
      ],
      topic: "Computer Hardware"
    },
    {
      id: 12,
      question: "RAM का फुल फॉर्म?",
      options: [
        { text: "Random Assess Memory", correct: false },
        { text: "Random Access Memory", correct: true },
        { text: "Read Assess Memory", correct: false },
        { text: "Random Area Memory", correct: false },
      ],
      topic: "Computer Hardware"
    },
    {
      id: 13,
      question: "Computer को ON करने के लिए क्या दबाते हैं?",
      options: [
        { text: "Mouse", correct: false },
        { text: "Power Button", correct: true },
        { text: "Keyboard", correct: false },
        { text: "Screen", correct: false },
      ],
      topic: "Computer Skills"
    },
    {
      id: 14,
      question: "Folder क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "फाइलों को रखने की जगह", correct: true },
        { text: "एक बटन", correct: false },
        { text: "एक प्रोग्राम", correct: false },
      ],
      topic: "Computer Files"
    },
    {
      id: 15,
      question: "File क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "जानकारी को सहेजने की चीज़", correct: true },
        { text: "एक फोल्डर", correct: false },
        { text: "एक आइकन", correct: false },
      ],
      topic: "Computer Files"
    },
    {
      id: 16,
      question: "Internet क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "आपस में जुड़े कंप्यूटर", correct: true },
        { text: "एक प्रोग्राम", correct: false },
        { text: "एक गीत", correct: false },
      ],
      topic: "Computer Networking"
    },
    {
      id: 17,
      question: "Email का उपयोग?",
      options: [
        { text: "खेलने के लिए", correct: false },
        { text: "संदेश भेजने के लिए", correct: true },
        { text: "दौड़ने के लिए", correct: false },
        { text: "गाने के लिए", correct: false },
      ],
      topic: "Computer Networking"
    },
    {
      id: 18,
      question: "Search Engine क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "जानकारी खोजने की चीज़", correct: true },
        { text: "एक बटन", correct: false },
        { text: "एक फाइल", correct: false },
      ],
      topic: "Computer Internet"
    },
    {
      id: 19,
      question: "Printer से हम क्या करते हैं?",
      options: [
        { text: "देखते हैं", correct: false },
        { text: "कागज पर प्रिंट करते हैं", correct: true },
        { text: "गाते हैं", correct: false },
        { text: "खेलते हैं", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 20,
      question: "Speaker से क्या निकलता है?",
      options: [
        { text: "प्रकाश", correct: false },
        { text: "आवाज़", correct: true },
        { text: "पानी", correct: false },
        { text: "धुआं", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 21,
      question: "Microphone में क्या करते हैं?",
      options: [
        { text: "टाइप करते हैं", correct: false },
        { text: "क्लिक करते हैं", correct: false },
        { text: "बोलते हैं", correct: true },
        { text: "लिखते हैं", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 22,
      question: "Webcam क्या देता है?",
      options: [
        { text: "आवाज़", correct: false },
        { text: "वीडियो", correct: true },
        { text: "टेक्स्ट", correct: false },
        { text: "संगीत", correct: false },
      ],
      topic: "Computer Devices"
    },
    {
      id: 23,
      question: "CD क्या है?",
      options: [
        { text: "एक कलम", correct: false },
        { text: "डेटा स्टोर करने की डिस्क", correct: true },
        { text: "एक कुर्सी", correct: false },
        { text: "एक खेल", correct: false },
      ],
      topic: "Computer Storage"
    },
    {
      id: 24,
      question: "Memory में क्या स्टोर होता है?",
      options: [
        { text: "किताबें", correct: false },
        { text: "डेटा/जानकारी", correct: true },
        { text: "खिलौने", correct: false },
        { text: "कपड़े", correct: false },
      ],
      topic: "Computer Storage"
    },
    {
      id: 25,
      question: "Screen पर क्या दिखता है?",
      options: [
        { text: "आवाज़", correct: false },
        { text: "चित्र", correct: true },
        { text: "महक", correct: false },
        { text: "स्वाद", correct: false },
      ],
      topic: "Computer Output"
    },
    {
      id: 26,
      question: "USB का उपयोग?",
      options: [
        { text: "खेलने के लिए", correct: false },
        { text: "डेटा ट्रांसफर करने के लिए", correct: true },
        { text: "सोने के लिए", correct: false },
        { text: "गाने के लिए", correct: false },
      ],
      topic: "Computer Connectivity"
    },
    {
      id: 27,
      question: "Password क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "कंप्यूटर की सुरक्षा के लिए कोड", correct: true },
        { text: "एक गीत", correct: false },
        { text: "एक पुस्तक", correct: false },
      ],
      topic: "Computer Security"
    },
    {
      id: 28,
      question: "Virus क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "कंप्यूटर को नुकसान पहुंचाने वाला प्रोग्राम", correct: true },
        { text: "एक फल", correct: false },
        { text: "एक जानवर", correct: false },
      ],
      topic: "Computer Security"
    },
    {
      id: 29,
      question: "Bluetooth क्या है?",
      options: [
        { text: "एक रंग", correct: false },
        { text: "वायरलेस तकनीक", correct: true },
        { text: "एक खेल", correct: false },
        { text: "एक किताब", correct: false },
      ],
      topic: "Computer Connectivity"
    },
    {
      id: 30,
      question: "WiFi क्या है?",
      options: [
        { text: "एक जानवर", correct: false },
        { text: "इंटरनेट कनेक्शन", correct: true },
        { text: "एक खेल", correct: false },
        { text: "एक पक्षी", correct: false },
      ],
      topic: "Computer Connectivity"
    },
    {
      id: 31,
      question: "Database क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "जानकारी को संग्रहित करने की जगह", correct: true },
        { text: "एक गीत", correct: false },
        { text: "एक कलम", correct: false },
      ],
      topic: "Computer Data"
    },
    {
      id: 32,
      question: "Application क्या है?",
      options: [
        { text: "एक खेल", correct: false },
        { text: "एक प्रोग्राम या सॉफ्टवेयर", correct: true },
        { text: "एक फल", correct: false },
        { text: "एक कपड़ा", correct: false },
      ],
      topic: "Computer Software"
    },
    {
      id: 33,
      question: "Software क्या है?",
      options: [
        { text: "कठोर चीजें", correct: false },
        { text: "कंप्यूटर प्रोग्राम", correct: true },
        { text: "कंप्यूटर भाग", correct: false },
        { text: "कंप्यूटर तार", correct: false },
      ],
      topic: "Computer Software"
    },
    {
      id: 34,
      question: "Hardware क्या है?",
      options: [
        { text: "कंप्यूटर प्रोग्राम", correct: false },
        { text: "कंप्यूटर के भौतिक भाग", correct: true },
        { text: "डेटा", correct: false },
        { text: "जानकारी", correct: false },
      ],
      topic: "Computer Hardware"
    },
    {
      id: 35,
      question: "Update करने से क्या होता है?",
      options: [
        { text: "कंप्यूटर खराब हो जाता है", correct: false },
        { text: "नई सुविधाएँ आती हैं", correct: true },
        { text: "कंप्यूटर धीमा हो जाता है", correct: false },
        { text: "कोई नहीं", correct: false },
      ],
      topic: "Computer Maintenance"
    },
    {
      id: 36,
      question: "Backup क्या है?",
      options: [
        { text: "आगे की ओर जाना", correct: false },
        { text: "डेटा की प्रति रखना", correct: true },
        { text: "कंप्यूटर शुरू करना", correct: false },
        { text: "कंप्यूटर बंद करना", correct: false },
      ],
      topic: "Computer Data Protection"
    },
    {
      id: 37,
      question: "Restart का अर्थ?",
      options: [
        { text: "बंद करना", correct: false },
        { text: "फिर से शुरू करना", correct: true },
        { text: "हटाना", correct: false },
        { text: "खराब करना", correct: false },
      ],
      topic: "Computer Operations"
    },
    {
      id: 38,
      question: "Shutdown का अर्थ?",
      options: [
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: true },
        { text: "फिर से शुरू करना", correct: false },
        { text: "हटाना", correct: false },
      ],
      topic: "Computer Operations"
    },
    {
      id: 39,
      question: "Save का अर्थ?",
      options: [
        { text: "मिटाना", correct: false },
        { text: "सहेजना", correct: true },
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: false },
      ],
      topic: "Computer File Operations"
    },
    {
      id: 40,
      question: "Delete का अर्थ?",
      options: [
        { text: "सहेजना", correct: false },
        { text: "मिटाना", correct: true },
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: false },
      ],
      topic: "Computer File Operations"
    },
    {
      id: 41,
      question: "Open का अर्थ?",
      options: [
        { text: "मिटाना", correct: false },
        { text: "खोलना", correct: true },
        { text: "सहेजना", correct: false },
        { text: "बंद करना", correct: false },
      ],
      topic: "Computer File Operations"
    },
    {
      id: 42,
      question: "Close का अर्थ?",
      options: [
        { text: "खोलना", correct: false },
        { text: "बंद करना", correct: true },
        { text: "मिटाना", correct: false },
        { text: "सहेजना", correct: false },
      ],
      topic: "Computer File Operations"
    },
  ],

  kannada: [
    {
      id: 1,
      question: "ಗುರಿ ಎಂಬುದು ಯಾವುದು?",
      options: [
        { text: "ಪಕ್ಷಿ", correct: true },
        { text: "ಪ್ರಾಣಿ", correct: false },
        { text: "ಫಸಲು", correct: false },
        { text: "ವೃಕ್ಷ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 2,
      question: "ನೀರು ಎಲ್ಲೆ ಸಿಗುತ್ತೆ?",
      options: [
        { text: "ಆಕಾಶದಲ್ಲಿ", correct: false },
        { text: "ಕೊರೆಯಲ್ಲಿ", correct: true },
        { text: "ಮರದ ಮೇಲೆ", correct: false },
        { text: "ಸೂರ್ಯದಲ್ಲಿ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 3,
      question: "ಸೂರ್ಯ ಯಾವಾಗ ಬರುತ್ತೆ?",
      options: [
        { text: "ರಾತ್ರಿಯಲ್ಲಿ", correct: false },
        { text: "ಹಗಲಿನಲ್ಲಿ", correct: true },
        { text: "ಸಂಧ್ಯಾ ವೇಳೆ", correct: false },
        { text: "ಮಧ್ಯರಾತ್ರಿ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 4,
      question: "ಸುಟ್ಟ ಅಪ್ಪ ಮೂಲಕ ನೀವು?",
      options: [
        { text: "ಕೇಳುತ್ತೀರಿ", correct: false },
        { text: "ಹೊಲಕುತ್ತೀರಿ", correct: false },
        { text: "ತಿನ್ನುತ್ತೀರಿ", correct: true },
        { text: "ನಡೆಯುತ್ತೀರಿ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 5,
      question: "ಗಾವುಂಬ ಏನೆ?",
      options: [
        { text: "ಪಕ್ಷಿ", correct: false },
        { text: "ಪ್ರಾಣಿ", correct: true },
        { text: "ಫಸಲು", correct: false },
        { text: "ಜಲಜಂತು", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 6,
      question: "ಪ್ರಾಣಿಗಳ ಮಧ್ಯೆ ಕೂನ್ನ ಬೆದರಿಕೆ?",
      options: [
        { text: "ಮುಲೆ", correct: false },
        { text: "ಸರ್ಪ", correct: true },
        { text: "ಗುರುತೆ", correct: false },
        { text: "ಕುತ್ತರೆ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 7,
      question: "ಪುಸ್ತಕ ಏನು?",
      options: [
        { text: "ಖಾದ್ಯ", correct: false },
        { text: "ಧರಮ", correct: false },
        { text: "ಜ್ಞಾನ", correct: true },
        { text: "ಆಕಾಶ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 8,
      question: "ಛತ್ರ ಏಕೆ ಬೇಕು?",
      options: [
        { text: "ನೀರು ತಿನ್ನಲು", correct: false },
        { text: "ನೀರಿನಿಂದ ರಕ್ಷಣೆ", correct: true },
        { text: "ಸುಟ್ಟಕ್ಕೆ", correct: false },
        { text: "ಸುಸಜ್ಜೆಗೆ", correct: false },
      ],
      topic: "Kannada Basic"
    },
    {
      id: 9,
      question: "ಆನೆ ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತೆ?",
      options: [
        { text: "ಅರೆ", correct: false },
        { text: "ನರೆ", correct: true },
        { text: "ಇರೆ", correct: false },
        { text: "ಒರೆ", correct: false },
      ],
      topic: "Kannada - Animal Sounds"
    },
    {
      id: 10,
      question: "ನಾಯಿ ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತೆ?",
      options: [
        { text: "ಕೂ", correct: false },
        { text: "ವೌ", correct: true },
        { text: "ಚಿಂ", correct: false },
        { text: "ಆ", correct: false },
      ],
      topic: "Kannada - Animal Sounds"
    },
    {
      id: 11,
      question: "ಮೀನು ಎಲ್ಲೆ ವಾಸ ಮಾಡುತ್ತೆ?",
      options: [
        { text: "ಆಕಾಶ", correct: false },
        { text: "ನೀರು", correct: true },
        { text: "ಮರ", correct: false },
        { text: "ಮರುದೆ", correct: false },
      ],
      topic: "Kannada - Animals"
    },
    {
      id: 12,
      question: "ಕುರ್ಚಿ ಏನೆ?",
      options: [
        { text: "ಪ್ರಾಣಿ", correct: false },
        { text: "ವಸ್ತು", correct: true },
        { text: "ಉದ್ಯಾನ", correct: false },
        { text: "ಪುಸ್ತಕ", correct: false },
      ],
      topic: "Kannada - Objects"
    },
    {
      id: 13,
      question: "ಬಿಸಿ ಅರ್ಥ?",
      options: [
        { text: "ಹೆಚ್ಚು ತಾಪಮಾನ", correct: true },
        { text: "ಸ್ವಲ್ಪ", correct: false },
        { text: "ತಂಪು", correct: false },
        { text: "ಮುದ್ದೆ", correct: false },
      ],
      topic: "Kannada - Adjectives"
    },
    {
      id: 14,
      question: "ಚಿಕ್ಕ ಅರ್ಥ?",
      options: [
        { text: "ದೊಡ್ಡ", correct: false },
        { text: "ಕ್ಷುದ್ರ", correct: true },
        { text: "ಬಿಳಿ", correct: false },
        { text: "ಕಪ್ಪು", correct: false },
      ],
      topic: "Kannada - Adjectives"
    },
    {
      id: 15,
      question: "ಹೆಚ್ಚಿ ಅರ್ಥ?",
      options: [
        { text: "ಕಡಿಮೆ", correct: false },
        { text: "ವೃದ್ಧಿ", correct: true },
        { text: "ಪತನ", correct: false },
        { text: "ಸ್ಥಿರ", correct: false },
      ],
      topic: "Kannada - Verbs"
    },
    {
      id: 16,
      question: "ಓಡು ಎಂಬುದು?",
      options: [
        { text: "ವಸ್ತು", correct: false },
        { text: "ಪ್ರಾಣಿ", correct: false },
        { text: "ಕ್ರಿಯೆ", correct: true },
        { text: "ಸ್ಥಾನ", correct: false },
      ],
      topic: "Kannada - Verbs"
    },
    {
      id: 17,
      question: "ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ?",
      options: [
        { text: "48", correct: false },
        { text: "52", correct: true },
        { text: "50", correct: false },
        { text: "60", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 18,
      question: "ವರ್ಷದಲ್ಲಿ ತಿಂಗಳು?",
      options: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "11", correct: false },
        { text: "13", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 19,
      question: "ಸಪ್ತಾಹದಲ್ಲಿ ದಿನ?",
      options: [
        { text: "5", correct: false },
        { text: "7", correct: true },
        { text: "6", correct: false },
        { text: "8", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 20,
      question: "ಸೂರ್ಯೋದಯ ಯಾವ ಸಮಯ?",
      options: [
        { text: "ರಾತ್ರಿ", correct: false },
        { text: "ಉದಯ", correct: true },
        { text: "ಸಂಧ್ಯ", correct: false },
        { text: "ಮಧ್ಯರಾತ್ರಿ", correct: false },
      ],
      topic: "Kannada - Time"
    },
    {
      id: 21,
      question: "ಮಾತೃ ಶಕ್ತಿ ಎಂದರೆ?",
      options: [
        { text: "ಪಿತೃ", correct: false },
        { text: "ತಾಯಿ", correct: true },
        { text: "ಭಾಯಿ", correct: false },
        { text: "ಬಾಬು", correct: false },
      ],
      topic: "Kannada - Family"
    },
    {
      id: 22,
      question: "ಮಾತೆ ನಾವೆ?",
      options: [
        { text: "ಮಂಡಿ", correct: false },
        { text: "ಕುಟುಂಬ", correct: true },
        { text: "ಸ್ಕೂಲು", correct: false },
        { text: "ಗ್ರಾಮ", correct: false },
      ],
      topic: "Kannada - Family"
    },
    {
      id: 23,
      question: "ನಮ್ಮ ದೇಶದ ರಾಜಧಾನಿ?",
      options: [
        { text: "ಬೆಂಗಳೂರು", correct: false },
        { text: "ಬೆಳ್ಳರಿ", correct: false },
        { text: "ಡೆಲ್ಲಿ", correct: true },
        { text: "ಮುಂಬೈ", correct: false },
      ],
      topic: "Kannada - General Knowledge"
    },
    {
      id: 24,
      question: "ಭಾರತದ ರಾಜಧಾನಿ?",
      options: [
        { text: "ಮುಂಬೈ", correct: false },
        { text: "ಕೋಲ್ಕತ್ತ", correct: false },
        { text: "ನವೆ ಡೆಲ್ಲಿ", correct: true },
        { text: "ಚೆನ್ನೈ", correct: false },
      ],
      topic: "Kannada - General Knowledge"
    },
    {
      id: 25,
      question: "ಕನ್ನಡ ರಾಜ್ಯ?",
      options: [
        { text: "ಮಹಾರಾಷ್ಟ್ರ", correct: false },
        { text: "ಕರ್ನಾಟಕ", correct: true },
        { text: "ತಮಿಳುನಾಡು", correct: false },
        { text: "ತೆಲುಗು", correct: false },
      ],
      topic: "Kannada - General Knowledge"
    },
    {
      id: 26,
      question: "ಸಂಖ್ಯೆ 1-10 ಕನ್ನಡದಲ್ಲಿ?",
      options: [
        { text: "ಒಂದು, ಎರಡು, ಮೂರು...", correct: true },
        { text: "ಹತ್ತು, ಒಂಬತ್ತು...", correct: false },
        { text: "ಐದು, ಆರು...", correct: false },
        { text: "ಇಪ್ಪತ್ತು...", correct: false },
      ],
      topic: "Kannada - Numbers"
    },
    {
      id: 27,
      question: "ವರ್ಣಮಾಲೆಯಲ್ಲಿ ಅಕ್ಷರ?",
      options: [
        { text: "40", correct: false },
        { text: "48", correct: false },
        { text: "52", correct: true },
        { text: "60", correct: false },
      ],
      topic: "Kannada - Alphabet"
    },
    {
      id: 28,
      question: "ಕ್ರಿಯೆ ಶಬ್ದ?",
      options: [
        { text: "ಪುಸ್ತಕ", correct: false },
        { text: "ಓಡು", correct: true },
        { text: "ಮೇಜು", correct: false },
        { text: "ಕುರ್ಚಿ", correct: false },
      ],
      topic: "Kannada - Verbs"
    },
    {
      id: 29,
      question: "ನಾಮ ಪದ?",
      options: [
        { text: "ಅಪ್ಪ", correct: true },
        { text: "ಓಡು", correct: false },
        { text: "ಚಿಕ್ಕ", correct: false },
        { text: "ದೊಡ್ಡ", correct: false },
      ],
      topic: "Kannada - Nouns"
    },
    {
      id: 30,
      question: "ವಿಶೇಷಣ ಪದ?",
      options: [
        { text: "ಅಪ್ಪ", correct: false },
        { text: "ಓಡು", correct: false },
        { text: "ಬಿಳಿ", correct: true },
        { text: "ಮಾತೆ", correct: false },
      ],
      topic: "Kannada - Adjectives"
    },
    {
      id: 31,
      question: "ಚುನಾಮೀ ವರ್ಷ?",
      options: [
        { text: "2020", correct: false },
        { text: "2025", correct: false },
        { text: "2024", correct: false },
        { text: "2023", correct: true },
      ],
      topic: "Kannada - General Knowledge"
    },
  ],

  evs: [
    {
      id: 1,
      question: "We need air to?",
      options: [
        { text: "Eat", correct: false },
        { text: "Breathe", correct: true },
        { text: "Sleep", correct: false },
        { text: "Play", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 2,
      question: "We need water to?",
      options: [
        { text: "Breathe", correct: false },
        { text: "Drink and wash", correct: true },
        { text: "Run", correct: false },
        { text: "Fly", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 3,
      question: "We need food to?",
      options: [
        { text: "Fly", correct: false },
        { text: "Grow and be strong", correct: true },
        { text: "Run", correct: false },
        { text: "Sing", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 4,
      question: "We need shelter to?",
      options: [
        { text: "Eat", correct: false },
        { text: "Play", correct: false },
        { text: "Live safely", correct: true },
        { text: "Fly", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 5,
      question: "Where do we sleep?",
      options: [
        { text: "School", correct: false },
        { text: "Park", correct: false },
        { text: "Home/House", correct: true },
        { text: "Hospital", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 6,
      question: "Sun gives us?",
      options: [
        { text: "Water", correct: false },
        { text: "Light and heat", correct: true },
        { text: "Food", correct: false },
        { text: "Shade", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 7,
      question: "Rain water is used for?",
      options: [
        { text: "Playing", correct: false },
        { text: "Drinking and plants", correct: true },
        { text: "Flying", correct: false },
        { text: "Running", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 8,
      question: "Trees give us?",
      options: [
        { text: "Water", correct: false },
        { text: "Oxygen and fruit", correct: true },
        { text: "Fire", correct: false },
        { text: "Sand", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 9,
      question: "Soil helps plants to?",
      options: [
        { text: "Fly", correct: false },
        { text: "Grow", correct: true },
        { text: "Sleep", correct: false },
        { text: "Eat", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 10,
      question: "We should drink?",
      options: [
        { text: "Tea", correct: false },
        { text: "Milk", correct: false },
        { text: "Water", correct: true },
        { text: "Juice only", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 11,
      question: "Before eating we should?",
      options: [
        { text: "Sleep", correct: false },
        { text: "Wash hands", correct: true },
        { text: "Play", correct: false },
        { text: "Sing", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 12,
      question: "After using toilet we should?",
      options: [
        { text: "Play", correct: false },
        { text: "Sleep", correct: false },
        { text: "Wash hands", correct: true },
        { text: "Eat", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 13,
      question: "We should brush teeth?",
      options: [
        { text: "Once a year", correct: false },
        { text: "Twice a day", correct: true },
        { text: "Once a week", correct: false },
        { text: "Never", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 14,
      question: "Animals live in?",
      options: [
        { text: "School", correct: false },
        { text: "Hospital", correct: false },
        { text: "Forest and farms", correct: true },
        { text: "Road", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 15,
      question: "Which is a domestic animal?",
      options: [
        { text: "Lion", correct: false },
        { text: "Dog", correct: true },
        { text: "Tiger", correct: false },
        { text: "Bear", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 16,
      question: "Which is a wild animal?",
      options: [
        { text: "Cow", correct: false },
        { text: "Hen", correct: false },
        { text: "Tiger", correct: true },
        { text: "Sheep", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 17,
      question: "Birds have?",
      options: [
        { text: "Fins", correct: false },
        { text: "Feathers", correct: true },
        { text: "Scales", correct: false },
        { text: "Fur", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 18,
      question: "In summer we should wear?",
      options: [
        { text: "Heavy clothes", correct: false },
        { text: "Light clothes", correct: true },
        { text: "Thick coat", correct: false },
        { text: "Blanket", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 19,
      question: "In winter we need?",
      options: [
        { text: "Fan", correct: false },
        { text: "Blanket", correct: true },
        { text: "AC", correct: false },
        { text: "Ice", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 20,
      question: "Rainy season makes ground?",
      options: [
        { text: "Dry", correct: false },
        { text: "Wet", correct: true },
        { text: "Hot", correct: false },
        { text: "Cold", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 21,
      question: "We fly a kite in?",
      options: [
        { text: "Summer", correct: false },
        { text: "Winter", correct: true },
        { text: "Rainy season", correct: false },
        { text: "Spring", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 22,
      question: "Umbrella is used in?",
      options: [
        { text: "Summer", correct: false },
        { text: "Rainy season", correct: true },
        { text: "Winter", correct: false },
        { text: "Spring", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 23,
      question: "Sun is hottest in?",
      options: [
        { text: "Winter", correct: false },
        { text: "Summer", correct: true },
        { text: "Rainy season", correct: false },
        { text: "Spring", correct: false },
      ],
      topic: "Weather and Seasons"
    },
    {
      id: 24,
      question: "Sun and Weather Safety",
      options: [
        { text: "Play in rain", correct: false },
        { text: "Wear sunscreen in sun", correct: true },
        { text: "Sit in sun all day", correct: false },
        { text: "Ignore weather", correct: false },
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 25,
      question: "Too much sun can cause?",
      options: [
        { text: "Catching cold", correct: false },
        { text: "Skin burn", correct: true },
        { text: "Better health", correct: false },
        { text: "Faster running", correct: false },
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 26,
      question: "Good posture means?",
      options: [
        { text: "Slouching", correct: false },
        { text: "Sitting straight", correct: true },
        { text: "Bending forward", correct: false },
        { text: "Lying down", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 27,
      question: "We should stretch?",
      options: [
        { text: "Never", correct: false },
        { text: "Regularly", correct: true },
        { text: "Once a year", correct: false },
        { text: "Only at school", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 28,
      question: "Playing sports is good?",
      options: [
        { text: "It wastes time", correct: false },
        { text: "It keeps us fit", correct: true },
        { text: "It makes weak", correct: false },
        { text: "It's boring", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 29,
      question: "Proper sleep helps?",
      options: [
        { text: "Make sick", correct: false },
        { text: "Have energy", correct: true },
        { text: "Be grumpy", correct: false },
        { text: "Waste time", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 30,
      question: "We should sleep?",
      options: [
        { text: "3 hours", correct: false },
        { text: "8 hours", correct: true },
        { text: "1 hour", correct: false },
        { text: "Never", correct: false },
      ],
      topic: "Body Awareness"
    },
    {
      id: 31,
      question: "Fish have?",
      options: [
        { text: "Feathers", correct: false },
        { text: "Fins", correct: true },
        { text: "Wings", correct: false },
        { text: "Legs", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 32,
      question: "Lion is?",
      options: [
        { text: "Vegetarian", correct: false },
        { text: "Carnivore", correct: true },
        { text: "Herbivore", correct: false },
        { text: "Omnivore", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 33,
      question: "Cow eats?",
      options: [
        { text: "Meat", correct: false },
        { text: "Grass and leaves", correct: true },
        { text: "Fish", correct: false },
        { text: "Everything", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 34,
      question: "Animals need:",
      options: [
        { text: "Only food", correct: false },
        { text: "Food, water, shelter", correct: true },
        { text: "Only water", correct: false },
        { text: "Only air", correct: false },
      ],
      topic: "Animals"
    },
    {
      id: 35,
      question: "Exercise helps us?",
      options: [
        { text: "Get sick", correct: false },
        { text: "Stay strong", correct: true },
        { text: "Sleep always", correct: false },
        { text: "Get weak", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 36,
      question: "We should take bath?",
      options: [
        { text: "Never", correct: false },
        { text: "Daily", correct: true },
        { text: "Once a month", correct: false },
        { text: "Once a year", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 37,
      question: "Getting vaccinated protects?",
      options: [
        { text: "Never", correct: false },
        { text: "Sometimes", correct: false },
        { text: "From diseases", correct: true },
        { text: "For playing", correct: false },
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 38,
      question: "We wear clothes to?",
      options: [
        { text: "Play", correct: false },
        { text: "Cover and protect body", correct: true },
        { text: "Eat", correct: false },
        { text: "Sleep", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 39,
      question: "Which is a basic need?",
      options: [
        { text: "Toys", correct: false },
        { text: "Food", correct: true },
        { text: "Games", correct: false },
        { text: "Books", correct: false },
      ],
      topic: "Our Basic Needs"
    },
    {
      id: 40,
      question: "We should use water?",
      options: [
        { text: "Wastefully", correct: false },
        { text: "Carefully", correct: true },
        { text: "Carelessly", correct: false },
        { text: "Unlimitedly", correct: false },
      ],
      topic: "Natural Resources"
    },
    {
      id: 41,
      question: "Plants need:",
      options: [
        { text: "Only water", correct: false },
        { text: "Water, soil, sunlight", correct: true },
        { text: "Only sunlight", correct: false },
        { text: "Only air", correct: false },
      ],
      topic: "Natural Resources"
    },
  ],

};
