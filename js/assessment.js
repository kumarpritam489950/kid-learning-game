// Assessment Questions Database
const assessmentQuestions = {
  mathematics: [
    {
      id: 1,
      question: "5 + 0 = ?",
      options: [
        { text: "0", correct: false },
        { text: "5", correct: true },
        { text: "50", correct: false },
        { text: "55", correct: false }
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
        { text: "1", correct: false }
      ],
      topic: "Adding Zero"
    },
    {
      id: 3,
      question: "7 + 1 = ?",
      options: [
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "7", correct: false },
        { text: "9", correct: false }
      ],
      topic: "Adding One"
    },
    {
      id: 4,
      question: "1 + 9 = ?",
      options: [
        { text: "10", correct: true },
        { text: "19", correct: false },
        { text: "9", correct: false },
        { text: "11", correct: false }
      ],
      topic: "Adding One"
    },
    {
      id: 5,
      question: "Using a number line, 3 + 4 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "5", correct: false }
      ],
      topic: "Addition on a Number Line"
    },
    {
      id: 6,
      question: "Start at 2 and jump 5 places forward. Where do you land?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 7,
      question: "4 + 3 = ? (Count forward from 4)",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false }
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 8,
      question: "6 + 2 = ? (Count forward from 6)",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "10", correct: false }
      ],
      topic: "Counting Forward to Add"
    },
    {
      id: 9,
      question: "How many ways can we make 5?",
      options: [
        { text: "2", correct: false },
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false }
      ],
      topic: "Different Ways to Make a Number"
    },
    {
      id: 10,
      question: "Which pair makes 10?",
      options: [
        { text: "4 + 5", correct: false },
        { text: "6 + 4", correct: true },
        { text: "3 + 6", correct: false },
        { text: "2 + 7", correct: false }
      ],
      topic: "Different Ways to Make a Number"
    },
    {
      id: 11,
      question: "If whole = 8 and one part = 3, what is the other part?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false }
      ],
      topic: "Whole and Parts"
    },
    {
      id: 12,
      question: "The whole is 9. One part is 2. Find the other part.",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false }
      ],
      topic: "Whole and Parts"
    },
    {
      id: 13,
      question: "2 + 3 + 1 = ?",
      options: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false }
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 14,
      question: "4 + 2 + 3 = ?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: true },
        { text: "10", correct: false },
        { text: "11", correct: false }
      ],
      topic: "Adding Three Numbers"
    },
    {
      id: 15,
      question: "7 + 5 = ?",
      options: [
        { text: "10", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false }
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 16,
      question: "8 + 6 = ?",
      options: [
        { text: "13", correct: false },
        { text: "14", correct: true },
        { text: "15", correct: false },
        { text: "16", correct: false }
      ],
      topic: "Two Single Digits Giving Double-Digit Answers"
    },
    {
      id: 17,
      question: "What number comes after 35?",
      options: [
        { text: "34", correct: false },
        { text: "36", correct: true },
        { text: "37", correct: false },
        { text: "38", correct: false }
      ],
      topic: "Numbers up to 50"
    },
    {
      id: 18,
      question: "Which number is smaller: 42 or 24?",
      options: [
        { text: "42", correct: false },
        { text: "24", correct: true },
        { text: "Both are same", correct: false },
        { text: "Cannot compare", correct: false }
      ],
      topic: "Numbers up to 50"
    },
    {
      id: 19,
      question: "What comes before 20?",
      options: [
        { text: "19", correct: true },
        { text: "21", correct: false },
        { text: "18", correct: false },
        { text: "22", correct: false }
      ],
      topic: "Numbers up to 50"
    },
    {
      id: 20,
      question: "Count: 10, 11, 12, __, 14",
      options: [
        { text: "11", correct: false },
        { text: "12", correct: false },
        { text: "13", correct: true },
        { text: "15", correct: false }
      ],
      topic: "Numbers up to 50"
    },
    {
      id: 21,
      question: "5 + 5 = ?",
      options: [
        { text: "10", correct: true },
        { text: "9", correct: false },
        { text: "11", correct: false },
        { text: "8", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 22,
      question: "3 + 7 = ?",
      options: [
        { text: "10", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
        { text: "11", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 23,
      question: "4 + 6 = ?",
      options: [
        { text: "9", correct: false },
        { text: "11", correct: false },
        { text: "10", correct: true },
        { text: "12", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 24,
      question: "2 + 8 = ?",
      options: [
        { text: "10", correct: true },
        { text: "9", correct: false },
        { text: "11", correct: false },
        { text: "8", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 25,
      question: "9 + 1 = ?",
      options: [
        { text: "9", correct: false },
        { text: "11", correct: false },
        { text: "10", correct: true },
        { text: "8", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 26,
      question: "6 + 3 = ?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: true },
        { text: "10", correct: false },
        { text: "7", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 27,
      question: "5 + 2 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "5", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 28,
      question: "4 + 4 = ?",
      options: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "6", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 29,
      question: "3 + 6 = ?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: true },
        { text: "10", correct: false },
        { text: "7", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 30,
      question: "7 + 2 = ?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: true },
        { text: "10", correct: false },
        { text: "11", correct: false }
      ],
      topic: "Additional Addition Practice"
    },
    {
      id: 31,
      question: "If 5 + 3 = 8, then 8 - 3 = ?",
      options: [
        { text: "5", correct: true },
        { text: "3", correct: false },
        { text: "8", correct: false },
        { text: "2", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 32,
      question: "10 - 5 = ?",
      options: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "3", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 33,
      question: "9 - 2 = ?",
      options: [
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "5", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 34,
      question: "8 - 1 = ?",
      options: [
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "9", correct: false },
        { text: "6", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 35,
      question: "7 - 3 = ?",
      options: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "2", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 36,
      question: "6 - 2 = ?",
      options: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "2", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 37,
      question: "12 - 2 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 38,
      question: "15 - 5 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 39,
      question: "20 - 10 = ?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    },
    {
      id: 40,
      question: "14 - 3 = ?",
      options: [
        { text: "10", correct: false },
        { text: "11", correct: true },
        { text: "12", correct: false },
        { text: "9", correct: false }
      ],
      topic: "Subtraction (Inverse of Addition)"
    }
  ],

  english: [
    {
      id: 1,
      question: "In the story 'Best Bird', what animal is the main character?",
      options: [
        { text: "A cat", correct: false },
        { text: "A bird", correct: true },
        { text: "A dog", correct: false },
        { text: "A fish", correct: false }
      ],
      topic: "Prose: Best Bird"
    },
    {
      id: 2,
      question: "What makes a bird special according to the story?",
      options: [
        { text: "Its color", correct: false },
        { text: "Its size", correct: false },
        { text: "Its ability to fly", correct: true },
        { text: "Its voice", correct: false }
      ],
      topic: "Prose: Best Bird"
    },
    {
      id: 3,
      question: "In 'Best Bird', which quality is most important?",
      options: [
        { text: "Being the biggest", correct: false },
        { text: "Being the best in what you are", correct: true },
        { text: "Being the fastest", correct: false },
        { text: "Being the loudest", correct: false }
      ],
      topic: "Prose: Best Bird"
    },
    {
      id: 4,
      question: "Which word is a naming word (person)?",
      options: [
        { text: "run", correct: false },
        { text: "teacher", correct: true },
        { text: "happy", correct: false },
        { text: "blue", correct: false }
      ],
      topic: "Grammar: Naming Words (Person)"
    },
    {
      id: 5,
      question: "Pick the naming word for a person:",
      options: [
        { text: "book", correct: false },
        { text: "doctor", correct: true },
        { text: "fly", correct: false },
        { text: "fast", correct: false }
      ],
      topic: "Grammar: Naming Words (Person)"
    },
    {
      id: 6,
      question: "Which is a naming word for an animal?",
      options: [
        { text: "tree", correct: false },
        { text: "lion", correct: true },
        { text: "run", correct: false },
        { text: "yellow", correct: false }
      ],
      topic: "Grammar: Naming Words (Animal)"
    },
    {
      id: 7,
      question: "Pick the naming word for an animal:",
      options: [
        { text: "table", correct: false },
        { text: "elephant", correct: true },
        { text: "sing", correct: false },
        { text: "tall", correct: false }
      ],
      topic: "Grammar: Naming Words (Animal)"
    },
    {
      id: 8,
      question: "Which word is a naming word (place)?",
      options: [
        { text: "ball", correct: false },
        { text: "school", correct: true },
        { text: "jump", correct: false },
        { text: "red", correct: false }
      ],
      topic: "Grammar: Naming Words (Place)"
    },
    {
      id: 9,
      question: "Pick the naming word for a place:",
      options: [
        { text: "pen", correct: false },
        { text: "park", correct: true },
        { text: "eat", correct: false },
        { text: "soft", correct: false }
      ],
      topic: "Grammar: Naming Words (Place)"
    },
    {
      id: 10,
      question: "Which word is a naming word (thing)?",
      options: [
        { text: "run", correct: false },
        { text: "chair", correct: true },
        { text: "happy", correct: false },
        { text: "big", correct: false }
      ],
      topic: "Grammar: Naming Words (Thing)"
    },
    {
      id: 11,
      question: "Pick the naming word for a thing:",
      options: [
        { text: "dance", correct: false },
        { text: "flower", correct: true },
        { text: "fast", correct: false },
        { text: "green", correct: false }
      ],
      topic: "Grammar: Naming Words (Thing)"
    },
    {
      id: 12,
      question: "Which is a common name?",
      options: [
        { text: "Delhi", correct: false },
        { text: "John", correct: false },
        { text: "girl", correct: true },
        { text: "Raj", correct: false }
      ],
      topic: "Common Names vs Special Names"
    },
    {
      id: 13,
      question: "Which is a special name?",
      options: [
        { text: "dog", correct: false },
        { text: "Ramesh", correct: true },
        { text: "boy", correct: false },
        { text: "bird", correct: false }
      ],
      topic: "Common Names vs Special Names"
    },
    {
      id: 14,
      question: "'Priya' is a:",
      options: [
        { text: "common name", correct: false },
        { text: "special name", correct: true },
        { text: "place name", correct: false },
        { text: "animal name", correct: false }
      ],
      topic: "Common Names vs Special Names"
    },
    {
      id: 15,
      question: "'cat' is a:",
      options: [
        { text: "special name", correct: false },
        { text: "common name", correct: true },
        { text: "place name", correct: false },
        { text: "person name", correct: false }
      ],
      topic: "Common Names vs Special Names"
    },
    {
      id: 16,
      question: "The story 'Best Bird' teaches us to:",
      options: [
        { text: "Be the biggest", correct: false },
        { text: "Do our best", correct: true },
        { text: "Fly high", correct: false },
        { text: "Be colorful", correct: false }
      ],
      topic: "More Prose Understanding"
    },
    {
      id: 17,
      question: "Which animal character appeared in 'Best Bird'?",
      options: [
        { text: "Penguin", correct: true },
        { text: "Eagle", correct: false },
        { text: "Parrot", correct: false },
        { text: "Sparrow", correct: false }
      ],
      topic: "More Prose Understanding"
    },
    {
      id: 18,
      question: "Which group has only naming words?",
      options: [
        { text: "run, jump, walk", correct: false },
        { text: "cat, dog, girl", correct: true },
        { text: "red, blue, green", correct: false },
        { text: "big, small, tall", correct: false }
      ],
      topic: "Identifying Naming Words"
    },
    {
      id: 19,
      question: "Pick all naming words: 'The boy plays with a ball'",
      options: [
        { text: "plays, with", correct: false },
        { text: "boy, ball", correct: true },
        { text: "the, with", correct: false },
        { text: "plays, boy", correct: false }
      ],
      topic: "Identifying Naming Words"
    },
    {
      id: 20,
      question: "How many naming words are in: 'Sara has a red pen'?",
      options: [
        { text: "1", correct: false },
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false }
      ],
      topic: "Identifying Naming Words"
    },
    {
      id: 21,
      question: "Which is an action word, not a naming word?",
      options: [
        { text: "tree", correct: false },
        { text: "run", correct: true },
        { text: "book", correct: false },
        { text: "chair", correct: false }
      ],
      topic: "Action Words vs Naming Words"
    },
    {
      id: 22,
      question: "Identify the action word: 'The dog plays in the park'",
      options: [
        { text: "dog", correct: false },
        { text: "park", correct: false },
        { text: "plays", correct: true },
        { text: "the", correct: false }
      ],
      topic: "Action Words vs Naming Words"
    },
    {
      id: 23,
      question: "Which word tells what we do?",
      options: [
        { text: "book", correct: false },
        { text: "jump", correct: true },
        { text: "red", correct: false },
        { text: "big", correct: false }
      ],
      topic: "Action Words vs Naming Words"
    },
    {
      id: 24,
      question: "'Sing' is a:",
      options: [
        { text: "naming word", correct: false },
        { text: "action word", correct: true },
        { text: "color word", correct: false },
        { text: "feeling word", correct: false }
      ],
      topic: "Action Words vs Naming Words"
    },
    {
      id: 25,
      question: "Choose the naming word: 'She walks to school'",
      options: [
        { text: "she", correct: false },
        { text: "walks", correct: false },
        { text: "school", correct: true },
        { text: "to", correct: false }
      ],
      topic: "Action Words vs Naming Words"
    },
    {
      id: 26,
      question: "Which group has only PLACE naming words?",
      options: [
        { text: "cat, dog, lion", correct: false },
        { text: "school, park, home", correct: true },
        { text: "teacher, doctor, nurse", correct: false },
        { text: "pen, book, pencil", correct: false }
      ],
      topic: "Grouping Naming Words"
    },
    {
      id: 27,
      question: "Which group has only ANIMAL naming words?",
      options: [
        { text: "elephant, tiger, zebra", correct: true },
        { text: "mother, father, sister", correct: false },
        { text: "cup, plate, spoon", correct: false },
        { text: "India, Delhi, Bangalore", correct: false }
      ],
      topic: "Grouping Naming Words"
    },
    {
      id: 28,
      question: "Which group has only THING naming words?",
      options: [
        { text: "boy, girl, man", correct: false },
        { text: "flower, tree, leaf", correct: false },
        { text: "table, chair, desk", correct: true },
        { text: "India, Delhi, Bangalore", correct: false }
      ],
      topic: "Grouping Naming Words"
    },
    {
      id: 29,
      question: "Which group has only PERSON naming words?",
      options: [
        { text: "doctor, teacher, nurse", correct: true },
        { text: "book, pen, pencil", correct: false },
        { text: "cat, dog, bird", correct: false },
        { text: "home, school, park", correct: false }
      ],
      topic: "Grouping Naming Words"
    },
    {
      id: 30,
      question: "The word 'TEACHER' is a:",
      options: [
        { text: "place", correct: false },
        { text: "animal", correct: false },
        { text: "thing", correct: false },
        { text: "person", correct: true }
      ],
      topic: "Grouping Naming Words"
    }
  ],

  hindi: [
    {
      id: 1,
      question: "How many Swar letters (vowels) are there in Hindi?",
      options: [
        { text: "10", correct: false },
        { text: "11", correct: true },
        { text: "12", correct: false },
        { text: "13", correct: false }
      ],
      topic: "Swar Letters"
    },
    {
      id: 2,
      question: "Which is the first Swar letter?",
      options: [
        { text: "आ", correct: false },
        { text: "अ", correct: true },
        { text: "इ", correct: false },
        { text: "उ", correct: false }
      ],
      topic: "Swar Letters"
    },
    {
      id: 3,
      question: "Write the sound: अ",
      options: [
        { text: "aa", correct: false },
        { text: "a", correct: true },
        { text: "i", correct: false },
        { text: "u", correct: false }
      ],
      topic: "Swar Letters"
    },
    {
      id: 4,
      question: "The sound 'आ' is:",
      options: [
        { text: "अ", correct: false },
        { text: "इ", correct: false },
        { text: "आ", correct: true },
        { text: "उ", correct: false }
      ],
      topic: "Swar Letters"
    },
    {
      id: 5,
      question: "Which Swar comes after अ?",
      options: [
        { text: "आ", correct: true },
        { text: "इ", correct: false },
        { text: "उ", correct: false },
        { text: "ऋ", correct: false }
      ],
      topic: "Swar Letters"
    },
    {
      id: 6,
      question: "Which letter is a Swar?",
      options: [
        { text: "क", correct: false },
        { text: "अ", correct: true },
        { text: "म", correct: false },
        { text: "त", correct: false }
      ],
      topic: "Identifying Swar Letters"
    },
    {
      id: 7,
      question: "Pick the Swar letter:",
      options: [
        { text: "ग", correct: false },
        { text: "इ", correct: true },
        { text: "द", correct: false },
        { text: "न", correct: false }
      ],
      topic: "Identifying Swar Letters"
    },
    {
      id: 8,
      question: "Which one is NOT a Swar?",
      options: [
        { text: "आ", correct: false },
        { text: "इ", correct: false },
        { text: "क", correct: true },
        { text: "उ", correct: false }
      ],
      topic: "Identifying Swar Letters"
    },
    {
      id: 9,
      question: "The vowel अ sounds like:",
      options: [
        { text: "aa", correct: false },
        { text: "a", correct: true },
        { text: "ee", correct: false },
        { text: "oo", correct: false }
      ],
      topic: "Swar Pronunciation"
    },
    {
      id: 10,
      question: "The vowel इ sounds like:",
      options: [
        { text: "aa", correct: false },
        { text: "a", correct: false },
        { text: "ee", correct: true },
        { text: "oo", correct: false }
      ],
      topic: "Swar Pronunciation"
    },
    {
      id: 11,
      question: "Which Swar is the longest sound?",
      options: [
        { text: "अ", correct: false },
        { text: "आ", correct: true },
        { text: "इ", correct: false },
        { text: "उ", correct: false }
      ],
      topic: "More Swar Recognition"
    },
    {
      id: 12,
      question: "Pick the correct Swar for 'oo' sound:",
      options: [
        { text: "अ", correct: false },
        { text: "आ", correct: false },
        { text: "इ", correct: false },
        { text: "ऊ", correct: true }
      ],
      topic: "More Swar Recognition"
    },
    {
      id: 13,
      question: "The Swar उ sounds like:",
      options: [
        { text: "aa", correct: false },
        { text: "a", correct: false },
        { text: "oo", correct: true },
        { text: "ee", correct: false }
      ],
      topic: "More Swar Recognition"
    },
    {
      id: 14,
      question: "Which Swar comes third in order?",
      options: [
        { text: "आ", correct: false },
        { text: "इ", correct: true },
        { text: "उ", correct: false },
        { text: "ऋ", correct: false }
      ],
      topic: "More Swar Recognition"
    },
    {
      id: 15,
      question: "Write the sound: ई",
      options: [
        { text: "a", correct: false },
        { text: "aa", correct: false },
        { text: "ee", correct: true },
        { text: "oo", correct: false }
      ],
      topic: "More Swar Recognition"
    },
    {
      id: 16,
      question: "Complete the Swar series: अ, आ, इ, ई, __",
      options: [
        { text: "ऋ", correct: false },
        { text: "उ", correct: true },
        { text: "ऊ", correct: false },
        { text: "ए", correct: false }
      ],
      topic: "Swar Series Completion"
    },
    {
      id: 17,
      question: "Which Swar comes after उ?",
      options: [
        { text: "ऊ", correct: true },
        { text: "ऋ", correct: false },
        { text: "ए", correct: false },
        { text: "ओ", correct: false }
      ],
      topic: "Swar Series Completion"
    },
    {
      id: 18,
      question: "The 8th Swar letter is:",
      options: [
        { text: "ई", correct: false },
        { text: "उ", correct: false },
        { text: "ऊ", correct: false },
        { text: "ऐ", correct: true }
      ],
      topic: "Swar Series Completion"
    },
    {
      id: 19,
      question: "Which is the last Swar?",
      options: [
        { text: "ऐ", correct: false },
        { text: "ओ", correct: false },
        { text: "अः", correct: true },
        { text: "ए", correct: false }
      ],
      topic: "Swar Series Completion"
    },
    {
      id: 20,
      question: "Count how many Swar letters: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, अः",
      options: [
        { text: "10", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false }
      ],
      topic: "Swar Series Completion"
    },
    {
      id: 21,
      question: "Which Swar has a dot below?",
      options: [
        { text: "अ", correct: false },
        { text: "ऋ", correct: true },
        { text: "आ", correct: false },
        { text: "इ", correct: false }
      ],
      topic: "Writing Swar Letters"
    },
    {
      id: 22,
      question: "The Swar ए is written as:",
      options: [
        { text: "Three lines", correct: true },
        { text: "Two lines", correct: false },
        { text: "One line", correct: false },
        { text: "One dot", correct: false }
      ],
      topic: "Writing Swar Letters"
    },
    {
      id: 23,
      question: "The Swar ओ looks like:",
      options: [
        { text: "One line", correct: false },
        { text: "A circle", correct: true },
        { text: "Two lines", correct: false },
        { text: "A triangle", correct: false }
      ],
      topic: "Writing Swar Letters"
    },
    {
      id: 24,
      question: "How is आ different from अ?",
      options: [
        { text: "Has a longer mark", correct: true },
        { text: "Has a dot", correct: false },
        { text: "Has a curve", correct: false },
        { text: "Same shape", correct: false }
      ],
      topic: "Writing Swar Letters"
    },
    {
      id: 25,
      question: "The Swar ई has:",
      options: [
        { text: "Two dots", correct: false },
        { text: "One line", correct: true },
        { text: "One dot", correct: false },
        { text: "A curve", correct: false }
      ],
      topic: "Writing Swar Letters"
    },
    {
      id: 26,
      question: "Which word starts with अ Swar?",
      options: [
        { text: "आम", correct: false },
        { text: "अंग", correct: true },
        { text: "इंद्रधनुष", correct: false },
        { text: "उदर", correct: false }
      ],
      topic: "Swar Application"
    },
    {
      id: 27,
      question: "Which word has ई Swar?",
      options: [
        { text: "दल", correct: false },
        { text: "दी", correct: true },
        { text: "दु", correct: false },
        { text: "दे", correct: false }
      ],
      topic: "Swar Application"
    },
    {
      id: 28,
      question: "Find the Swar in the middle of 'सात':",
      options: [
        { text: "स", correct: false },
        { text: "आ", correct: true },
        { text: "त", correct: false },
        { text: "No Swar", correct: false }
      ],
      topic: "Swar Application"
    },
    {
      id: 29,
      question: "'नाम' contains which Swar?",
      options: [
        { text: "अ", correct: false },
        { text: "आ", correct: true },
        { text: "इ", correct: false },
        { text: "उ", correct: false }
      ],
      topic: "Swar Application"
    },
    {
      id: 30,
      question: "'पुस्तक' starts with which Swar?",
      options: [
        { text: "अ", correct: false },
        { text: "आ", correct: false },
        { text: "उ", correct: true },
        { text: "ई", correct: false }
      ],
      topic: "Swar Application"
    }
  ],

  computer: [
    {
      id: 1,
      question: "A computer is a machine that can:",
      options: [
        { text: "Only print papers", correct: false },
        { text: "Process, store, and display information", correct: true },
        { text: "Only draw pictures", correct: false },
        { text: "Only play games", correct: false }
      ],
      topic: "What is a Computer?"
    },
    {
      id: 2,
      question: "What do we use a computer for?",
      options: [
        { text: "Playing games", correct: false },
        { text: "Learning", correct: false },
        { text: "Drawing", correct: false },
        { text: "All of the above", correct: true }
      ],
      topic: "What is a Computer?"
    },
    {
      id: 3,
      question: "Which part of the computer helps us see?",
      options: [
        { text: "Keyboard", correct: false },
        { text: "Monitor", correct: true },
        { text: "Mouse", correct: false },
        { text: "Headphones", correct: false }
      ],
      topic: "Parts of a Computer"
    },
    {
      id: 4,
      question: "Which part helps us type?",
      options: [
        { text: "Monitor", correct: false },
        { text: "Mouse", correct: false },
        { text: "Keyboard", correct: true },
        { text: "Speaker", correct: false }
      ],
      topic: "Parts of a Computer"
    },
    {
      id: 5,
      question: "The device we use to click and move on screen is:",
      options: [
        { text: "Keyboard", correct: false },
        { text: "Mouse", correct: true },
        { text: "Monitor", correct: false },
        { text: "Speaker", correct: false }
      ],
      topic: "Parts of a Computer"
    },
    {
      id: 6,
      question: "Which device helps us hear sound?",
      options: [
        { text: "Monitor", correct: false },
        { text: "Keyboard", correct: false },
        { text: "Speaker", correct: true },
        { text: "Mouse", correct: false }
      ],
      topic: "Parts of a Computer"
    },
    {
      id: 7,
      question: "Before using a computer, we should:",
      options: [
        { text: "Touch the screen", correct: false },
        { text: "Wash our hands", correct: true },
        { text: "Jump on the table", correct: false },
        { text: "Throw things at it", correct: false }
      ],
      topic: "Using a Computer"
    },
    {
      id: 8,
      question: "How should we sit while using a computer?",
      options: [
        { text: "Slouch", correct: false },
        { text: "Lie down", correct: false },
        { text: "Sit properly and straight", correct: true },
        { text: "Stand on one leg", correct: false }
      ],
      topic: "Using a Computer"
    },
    {
      id: 9,
      question: "How long should we look at a computer screen at a time?",
      options: [
        { text: "4 hours", correct: false },
        { text: "30-45 minutes", correct: true },
        { text: "2 hours", correct: false },
        { text: "All day", correct: false }
      ],
      topic: "Computer Safety"
    },
    {
      id: 10,
      question: "What should we do after using a computer?",
      options: [
        { text: "Immediately jump", correct: false },
        { text: "Rest our eyes", correct: true },
        { text: "Hit the keyboard", correct: false },
        { text: "Pull the wires", correct: false }
      ],
      topic: "Computer Safety"
    },
    {
      id: 11,
      question: "What is the CPU?",
      options: [
        { text: "The screen", correct: false },
        { text: "The brain of the computer", correct: true },
        { text: "The mouse", correct: false },
        { text: "The keyboard", correct: false }
      ],
      topic: "More Computer Parts"
    },
    {
      id: 12,
      question: "The keyboard is used to:",
      options: [
        { text: "See pictures", correct: false },
        { text: "Click things", correct: false },
        { text: "Type letters and numbers", correct: true },
        { text: "Hear sounds", correct: false }
      ],
      topic: "More Computer Parts"
    },
    {
      id: 13,
      question: "A printer is used to:",
      options: [
        { text: "Take pictures", correct: false },
        { text: "Make printed copies of documents", correct: true },
        { text: "Play music", correct: false },
        { text: "Store information", correct: false }
      ],
      topic: "More Computer Parts"
    },
    {
      id: 14,
      question: "What does a webcam do?",
      options: [
        { text: "Prints pictures", correct: false },
        { text: "Captures video", correct: true },
        { text: "Types text", correct: false },
        { text: "Stores files", correct: false }
      ],
      topic: "More Computer Parts"
    },
    {
      id: 15,
      question: "The mouse pointer helps us to:",
      options: [
        { text: "Type faster", correct: false },
        { text: "Select and click on items", correct: true },
        { text: "Hear sounds", correct: false },
        { text: "Write letters", correct: false }
      ],
      topic: "More Computer Parts"
    },
    {
      id: 16,
      question: "We should NOT:",
      options: [
        { text: "Use computers for learning", correct: false },
        { text: "Spill water or drink near computers", correct: true },
        { text: "Keep our workspace clean", correct: false },
        { text: "Take breaks", correct: false }
      ],
      topic: "Computer Usage Rules"
    },
    {
      id: 17,
      question: "A healthy computer workspace has:",
      options: [
        { text: "Poor lighting", correct: false },
        { text: "Proper chair and desk height", correct: true },
        { text: "Glare from window", correct: false },
        { text: "Lots of heat", correct: false }
      ],
      topic: "Computer Usage Rules"
    },
    {
      id: 18,
      question: "When using a computer, our eyes should be:",
      options: [
        { text: "Very close to screen", correct: false },
        { text: "At arm's length distance", correct: true },
        { text: "Too far away", correct: false },
        { text: "Touching the screen", correct: false }
      ],
      topic: "Computer Usage Rules"
    },
    {
      id: 19,
      question: "We should turn off computers by:",
      options: [
        { text: "Pulling the plug", correct: false },
        { text: "Pushing the off button", correct: true },
        { text: "Pouring water", correct: false },
        { text: "Hitting it", correct: false }
      ],
      topic: "Computer Usage Rules"
    },
    {
      id: 20,
      question: "A computer needs which to work?",
      options: [
        { text: "Water", correct: false },
        { text: "Electricity", correct: true },
        { text: "Sunlight", correct: false },
        { text: "Wind", correct: false }
      ],
      topic: "Computer Usage Rules"
    }
  ],

  kannada: [
    {
      id: 1,
      question: "How many vowel letters are in Kannada?",
      options: [
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false },
        { text: "12", correct: false }
      ],
      topic: "Kannada Vowels"
    },
    {
      id: 2,
      question: "Which is the first Kannada vowel?",
      options: [
        { text: "ಆ", correct: false },
        { text: "ಅ", correct: true },
        { text: "ಇ", correct: false },
        { text: "ಉ", correct: false }
      ],
      topic: "Kannada Vowels"
    },
    {
      id: 3,
      question: "The sound 'ಅ' is pronounced as:",
      options: [
        { text: "aa", correct: false },
        { text: "a", correct: true },
        { text: "i", correct: false },
        { text: "u", correct: false }
      ],
      topic: "Kannada Vowels"
    },
    {
      id: 4,
      question: "Which vowel comes after ಅ?",
      options: [
        { text: "ಆ", correct: true },
        { text: "ಇ", correct: false },
        { text: "ಉ", correct: false },
        { text: "ಋ", correct: false }
      ],
      topic: "Kannada Vowels"
    },
    {
      id: 5,
      question: "Pick the Kannada vowel:",
      options: [
        { text: "ಕ", correct: false },
        { text: "ಚ", correct: false },
        { text: "ಇ", correct: true },
        { text: "ತ", correct: false }
      ],
      topic: "Kannada Vowels"
    },
    {
      id: 6,
      question: "How many strokes do we write for ಅ?",
      options: [
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "4", correct: false }
      ],
      topic: "Writing Kannada Vowels"
    },
    {
      id: 7,
      question: "Which vowel has a long sound?",
      options: [
        { text: "ಅ", correct: false },
        { text: "ಆ", correct: true },
        { text: "ಇ", correct: false },
        { text: "ಉ", correct: false }
      ],
      topic: "Writing Kannada Vowels"
    },
    {
      id: 8,
      question: "Which is NOT a Kannada vowel?",
      options: [
        { text: "ಆ", correct: false },
        { text: "ಇ", correct: false },
        { text: "ಕ", correct: true },
        { text: "ಉ", correct: false }
      ],
      topic: "Kannada Vowel Recognition"
    },
    {
      id: 9,
      question: "The last vowel in the series is:",
      options: [
        { text: "ಎ", correct: false },
        { text: "ಓ", correct: false },
        { text: "ಅಃ", correct: true },
        { text: "ಋ", correct: false }
      ],
      topic: "Kannada Vowel Recognition"
    },
    {
      id: 10,
      question: "Identify the vowel ಉ sound:",
      options: [
        { text: "aa", correct: false },
        { text: "a", correct: false },
        { text: "oo", correct: true },
        { text: "ee", correct: false }
      ],
      topic: "Kannada Vowel Recognition"
    },
    {
      id: 11,
      question: "The second Kannada vowel is:",
      options: [
        { text: "ಅ", correct: false },
        { text: "ಆ", correct: true },
        { text: "ಇ", correct: false },
        { text: "ಈ", correct: false }
      ],
      topic: "Kannada Vowel Series"
    },
    {
      id: 12,
      question: "Which vowel sounds like 'ee'?",
      options: [
        { text: "ಇ", correct: false },
        { text: "ಈ", correct: true },
        { text: "ಆ", correct: false },
        { text: "ಉ", correct: false }
      ],
      topic: "Kannada Vowel Series"
    },
    {
      id: 13,
      question: "The Kannada vowel ಋ sounds like:",
      options: [
        { text: "ra", correct: false },
        { text: "ri", correct: true },
        { text: "ro", correct: false },
        { text: "ru", correct: false }
      ],
      topic: "Kannada Vowel Series"
    },
    {
      id: 14,
      question: "Complete the series: ಅ, ಆ, ಇ, ಈ, __",
      options: [
        { text: "ಉ", correct: true },
        { text: "ಊ", correct: false },
        { text: "ಋ", correct: false },
        { text: "ಎ", correct: false }
      ],
      topic: "Kannada Vowel Series"
    },
    {
      id: 15,
      question: "Which vowel comes after ಓ?",
      options: [
        { text: "ಔ", correct: true },
        { text: "ಅಃ", correct: false },
        { text: "ಅಂ", correct: false },
        { text: "ಎ", correct: false }
      ],
      topic: "Kannada Vowel Series"
    },
    {
      id: 16,
      question: "Which group has only Kannada vowels?",
      options: [
        { text: "ಕ, ಚ, ಟ", correct: false },
        { text: "ಅ, ಆ, ಇ", correct: true },
        { text: "ಗ, ಸ, ಧ", correct: false },
        { text: "ಚ, ಜ, ಝ", correct: false }
      ],
      topic: "Identifying Kannada Vowels"
    },
    {
      id: 17,
      question: "Pick the vowel from this list: ಠ, ಅ, ಥ, ಣ",
      options: [
        { text: "ಠ", correct: false },
        { text: "ಃ", correct: false },
        { text: "ಅ", correct: true },
        { text: "ಥ", correct: false }
      ],
      topic: "Identifying Kannada Vowels"
    },
    {
      id: 18,
      question: "How many Kannada vowels are there?",
      options: [
        { text: "8", correct: false },
        { text: "9", correct: false },
        { text: "10", correct: true },
        { text: "11", correct: false }
      ],
      topic: "Identifying Kannada Vowels"
    },
    {
      id: 19,
      question: "The Kannada vowel ಎ sounds like:",
      options: [
        { text: "eh", correct: true },
        { text: "oh", correct: false },
        { text: "ah", correct: false },
        { text: "oo", correct: false }
      ],
      topic: "Identifying Kannada Vowels"
    },
    {
      id: 20,
      question: "Which vowel is the longest in sound?",
      options: [
        { text: "ಅ", correct: false },
        { text: "ಆ", correct: true },
        { text: "ಅಂ", correct: false },
        { text: "ಅಃ", correct: false }
      ],
      topic: "Identifying Kannada Vowels"
    }
  ],

  evs: [
    {
      id: 1,
      question: "What should we do if we see a stranger?",
      options: [
        { text: "Go with them", correct: false },
        { text: "Tell an adult", correct: true },
        { text: "Hide", correct: false },
        { text: "Run without direction", correct: false }
      ],
      topic: "Personal Safety"
    },
    {
      id: 2,
      question: "If you are lost in a crowded place, you should:",
      options: [
        { text: "Cry loudly", correct: false },
        { text: "Go with anyone who asks", correct: false },
        { text: "Call your parent or tell a police officer", correct: true },
        { text: "Stay in one place forever", correct: false }
      ],
      topic: "Personal Safety"
    },
    {
      id: 3,
      question: "We should never:",
      options: [
        { text: "Talk to strangers", correct: true },
        { text: "Play with friends", correct: false },
        { text: "Go to school", correct: false },
        { text: "Eat food", correct: false }
      ],
      topic: "Personal Safety"
    },
    {
      id: 4,
      question: "Your body is:",
      options: [
        { text: "Not important", correct: false },
        { text: "Public property", correct: false },
        { text: "Your own and should be kept private", correct: true },
        { text: "For everyone to touch", correct: false }
      ],
      topic: "Personal Safety"
    },
    {
      id: 5,
      question: "If someone touches you inappropriately, you should:",
      options: [
        { text: "Keep quiet", correct: false },
        { text: "Tell a trusted adult", correct: true },
        { text: "Think it's normal", correct: false },
        { text: "Run and hide alone", correct: false }
      ],
      topic: "Personal Safety"
    },
    {
      id: 6,
      question: "If there is a fire, we should:",
      options: [
        { text: "Play with it", correct: false },
        { text: "Immediately run and alert an adult", correct: true },
        { text: "Hide from it", correct: false },
        { text: "Try to put it out alone", correct: false }
      ],
      topic: "Fire Safety"
    },
    {
      id: 7,
      question: "We should never:",
      options: [
        { text: "Eat properly", correct: false },
        { text: "Sleep on time", correct: false },
        { text: "Play with matches and lighters", correct: true },
        { text: "Go to school", correct: false }
      ],
      topic: "Fire Safety"
    },
    {
      id: 8,
      question: "In case of fire, we should:",
      options: [
        { text: "Stay in the room", correct: false },
        { text: "Jump out of the window", correct: false },
        { text: "Crawl low under the smoke", correct: true },
        { text: "Take elevator", correct: false }
      ],
      topic: "Fire Safety"
    },
    {
      id: 9,
      question: "A fire escape route is:",
      options: [
        { text: "A secret path", correct: false },
        { text: "The way out in case of fire", correct: true },
        { text: "A game to play", correct: false },
        { text: "A decoration", correct: false }
      ],
      topic: "Fire Safety"
    },
    {
      id: 10,
      question: "We keep fire extinguishers because:",
      options: [
        { text: "They look nice", correct: false },
        { text: "To help put out small fires", correct: true },
        { text: "To throw at people", correct: false },
        { text: "They are toys", correct: false }
      ],
      topic: "Fire Safety"
    },
    {
      id: 11,
      question: "When should we wash our hands?",
      options: [
        { text: "Only before eating", correct: false },
        { text: "Before eating and after using the toilet", correct: true },
        { text: "Never", correct: false },
        { text: "Only when dirty", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 12,
      question: "What should we use to dry our hands?",
      options: [
        { text: "Our clothes", correct: false },
        { text: "A clean towel", correct: true },
        { text: "The floor", correct: false },
        { text: "Our hair", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 13,
      question: "How often should we brush our teeth?",
      options: [
        { text: "Once a week", correct: false },
        { text: "Only when eating", correct: false },
        { text: "Twice a day", correct: true },
        { text: "Never", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 14,
      question: "To stay healthy, we should:",
      options: [
        { text: "Eat junk food", correct: false },
        { text: "Stay indoors always", correct: false },
        { text: "Exercise and play regularly", correct: true },
        { text: "Sleep all day", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 15,
      question: "Taking a bath regularly helps us to:",
      options: [
        { text: "Become lazy", correct: false },
        { text: "Stay clean and healthy", correct: true },
        { text: "Waste water", correct: false },
        { text: "Get sick", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 16,
      question: "Cutting nails regularly helps us to:",
      options: [
        { text: "Be fancy", correct: false },
        { text: "Prevent infections and keep clean", correct: true },
        { text: "Get pain", correct: false },
        { text: "Look bad", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 17,
      question: "Combing our hair helps to:",
      options: [
        { text: "Make us bald", correct: false },
        { text: "Keep it clean and healthy", correct: true },
        { text: "Waste time", correct: false },
        { text: "Get lice", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 18,
      question: "We should cover our mouth when:",
      options: [
        { text: "Eating sweets", correct: false },
        { text: "Coughing or sneezing", correct: true },
        { text: "Laughing", correct: false },
        { text: "Sleeping", correct: false }
      ],
      topic: "Health and Hygiene"
    },
    {
      id: 19,
      question: "Before eating, we should:",
      options: [
        { text: "Just pick up any food", correct: false },
        { text: "Wash our hands", correct: true },
        { text: "Check if it's dirty", correct: false },
        { text: "Give it to pets first", correct: false }
      ],
      topic: "Food Safety"
    },
    {
      id: 20,
      question: "We should not eat:",
      options: [
        { text: "Fresh fruits", correct: false },
        { text: "Rotten or spoiled food", correct: true },
        { text: "Cooked vegetables", correct: false },
        { text: "Milk", correct: false }
      ],
      topic: "Food Safety"
    },
    {
      id: 21,
      question: "Clean drinking water is:",
      options: [
        { text: "Any water", correct: false },
        { text: "Boiled or purified water", correct: true },
        { text: "Water from puddles", correct: false },
        { text: "Any colored water", correct: false }
      ],
      topic: "Food Safety"
    },
    {
      id: 22,
      question: "We should wash fruits and vegetables before:",
      options: [
        { text: "Throwing away", correct: false },
        { text: "Eating them", correct: true },
        { text: "Playing", correct: false },
        { text: "Selling them", correct: false }
      ],
      topic: "Food Safety"
    },
    {
      id: 23,
      question: "Unwashed food can cause:",
      options: [
        { text: "Happiness", correct: false },
        { text: "Sickness and infections", correct: true },
        { text: "Strength", correct: false },
        { text: "Better health", correct: false }
      ],
      topic: "Food Safety"
    },
    {
      id: 24,
      question: "Expired food should:",
      options: [
        { text: "Be eaten quickly", correct: false },
        { text: "Be thrown away", correct: true },
        { text: "Be given to animals", correct: false },
        { text: "Be kept in sun", correct: false }
      ],
      topic: "Food Safety"
    },
    {
      id: 25,
      question: "We should wear during sunny days:",
      options: [
        { text: "Thick clothes only", correct: false },
        { text: "A hat and sunscreen", correct: true },
        { text: "Nothing", correct: false },
        { text: "Heavy sweaters", correct: false }
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 26,
      question: "During heavy rain, we should:",
      options: [
        { text: "Play outside", correct: false },
        { text: "Stay indoors and avoid going out", correct: true },
        { text: "Run in the rain", correct: false },
        { text: "Play in puddles", correct: false }
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 27,
      question: "Walking in rain without umbrella can cause:",
      options: [
        { text: "Happiness", correct: false },
        { text: "Catching cold or fever", correct: true },
        { text: "Faster running", correct: false },
        { text: "Better health", correct: false }
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 28,
      question: "We should wear light clothes in:",
      options: [
        { text: "Winter", correct: false },
        { text: "Summer", correct: true },
        { text: "Night", correct: false },
        { text: "Rainy season", correct: false }
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 29,
      question: "We should apply sunscreen to protect:",
      options: [
        { text: "Eyes", correct: false },
        { text: "Hair", correct: false },
        { text: "Our skin from sun rays", correct: true },
        { text: "Clothes", correct: false }
      ],
      topic: "Sun and Weather Safety"
    },
    {
      id: 30,
      question: "Good posture means:",
      options: [
        { text: "Slouching", correct: false },
        { text: "Sitting or standing straight", correct: true },
        { text: "Bending forward always", correct: false },
        { text: "Lying down", correct: false }
      ],
      topic: "Body Awareness"
    },
    {
      id: 31,
      question: "We should stretch our body:",
      options: [
        { text: "Never", correct: false },
        { text: "Only when tired", correct: false },
        { text: "Regularly during the day", correct: true },
        { text: "Once a year", correct: false }
      ],
      topic: "Body Awareness"
    },
    {
      id: 32,
      question: "Exercise helps us to:",
      options: [
        { text: "Become weak", correct: false },
        { text: "Stay strong and healthy", correct: true },
        { text: "Get lazy", correct: false },
        { text: "Feel sad", correct: false }
      ],
      topic: "Body Awareness"
    },
    {
      id: 33,
      question: "Playing sports is good because:",
      options: [
        { text: "It makes us weak", correct: false },
        { text: "It keeps us fit and healthy", correct: true },
        { text: "It wastes time", correct: false },
        { text: "It makes us lazy", correct: false }
      ],
      topic: "Body Awareness"
    },
    {
      id: 34,
      question: "Proper sleep helps us to:",
      options: [
        { text: "Be sick", correct: false },
        { text: "Have energy and be healthy", correct: true },
        { text: "Be grumpy", correct: false },
        { text: "Waste time", correct: false }
      ],
      topic: "Body Awareness"
    }
  ]
};

// Global variables
let currentSubject = '';
let currentQuestionIndex = 0;
let userAnswers = {};
let quizStarted = false;

// Start Assessment
function startAssessment(subject) {
  currentSubject = subject;
  currentQuestionIndex = 0;
  userAnswers = {};
  quizStarted = true;

  document.getElementById('subjectSelectionView').style.display = 'none';
  document.getElementById('quizView').style.display = 'block';

  const subjectNames = {
    mathematics: '📐 Mathematics',
    english: '📘 English',
    hindi: '🎤 Hindi',
    computer: '💻 Computer Science',
    kannada: '🔤 Kannada',
    evs: '🌿 EVS'
  };

  const subjectDates = {
    mathematics: '6th July (Monday)',
    english: '7th July (Tuesday)',
    hindi: '8th July (Wednesday)',
    computer: '9th July (Thursday)',
    kannada: '10th July (Friday)',
    evs: '13th July (Monday)'
  };

  document.getElementById('quizTitle').textContent = subjectNames[subject];
  document.getElementById('subjectName').textContent = subjectNames[subject];
  document.getElementById('assessmentDate').textContent = subjectDates[subject];
  document.getElementById('quizDate').textContent = `${subjectNames[subject]} Assessment`;

  displayQuestion();
}

// Display Question
function displayQuestion() {
  const questions = assessmentQuestions[currentSubject];
  const totalQuestions = questions.length;
  const question = questions[currentQuestionIndex];

  // Update progress
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
  document.getElementById('progressText').textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;

  // Build HTML for question
  let html = `
    <div class="question-container">
      <div class="question-number">Question ${currentQuestionIndex + 1} of ${totalQuestions}</div>
      <div class="question-text">${question.question}</div>
      <div class="options">
  `;

  question.options.forEach((option, index) => {
    const isSelected = userAnswers[question.id] === index;
    html += `
      <label class="option ${isSelected ? 'selected' : ''}">
        <input type="radio" name="answer" value="${index}" ${isSelected ? 'checked' : ''} onchange="selectAnswer(${index})">
        ${option.text}
      </label>
    `;
  });

  html += `
      </div>
    </div>
  `;

  document.getElementById('questionsContainer').innerHTML = html;

  // Update button states
  updateNavigationButtons();
}

// Select Answer
function selectAnswer(optionIndex) {
  const question = assessmentQuestions[currentSubject][currentQuestionIndex];
  userAnswers[question.id] = optionIndex;
  displayQuestion();
}

// Update Navigation Buttons
function updateNavigationButtons() {
  const questions = assessmentQuestions[currentSubject];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const submitBtn = document.getElementById('submitBtn');
  if (isLastQuestion) {
    submitBtn.textContent = 'Submit Assessment 🎯';
  } else {
    submitBtn.textContent = 'Next Question →';
  }
}

// Submit Assessment
function submitAssessment() {
  const questions = assessmentQuestions[currentSubject];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  if (!isLastQuestion) {
    currentQuestionIndex++;
    displayQuestion();
    return;
  }

  // Calculate Results
  let correctAnswers = 0;
  questions.forEach((question) => {
    const selectedOptionIndex = userAnswers[question.id];
    if (selectedOptionIndex !== undefined && question.options[selectedOptionIndex].correct) {
      correctAnswers++;
    }
  });

  showResults(correctAnswers, questions.length);
}

// Show Results
function showResults(correct, total) {
  const percentage = Math.round((correct / total) * 100);

  let message = '';
  let emoji = '';

  if (percentage === 100) {
    message = 'Perfect Score! Outstanding! 🌟';
    emoji = '🏆';
  } else if (percentage >= 80) {
    message = 'Excellent Work! Keep it up! 🎉';
    emoji = '🌟';
  } else if (percentage >= 60) {
    message = 'Good Job! You are doing well! 👍';
    emoji = '😊';
  } else {
    message = 'Great Effort! Practice more to improve! 💪';
    emoji = '📚';
  }

  document.getElementById('resultsView').style.display = 'block';
  document.getElementById('quizView').style.display = 'none';
  document.getElementById('resultTitle').textContent = message;
  document.getElementById('scoreDisplay').textContent = `${correct}/${total}`;
  document.getElementById('scorePercentage').textContent = `Accuracy: ${percentage}%`;
  document.getElementById('scoreFeedback').innerHTML = `
    <p>You answered <strong>${correct}</strong> questions correctly out of <strong>${total}</strong>.</p>
    <p>${percentage}% accuracy - ${percentage >= 80 ? 'Excellent performance!' : 'Keep practicing to improve!'}</p>
  `;
}

// Back to Subjects
function backToSubjects() {
  document.getElementById('subjectSelectionView').style.display = 'block';
  document.getElementById('quizView').style.display = 'none';
  document.getElementById('resultsView').style.display = 'none';
  currentSubject = '';
  currentQuestionIndex = 0;
  userAnswers = {};
  quizStarted = false;
}
