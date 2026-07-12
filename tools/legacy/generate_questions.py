#!/usr/bin/env python3
"""Generate 300+ CBSE Standard 1 Assessment Questions"""

# Math topics for Standard 1 CBSE
math_questions = [
    # Adding Zero
    {"q": "5 + 0 = ?", "opts": [("0", False), ("5", True), ("50", False), ("55", False)], "topic": "Adding Zero"},
    {"q": "0 + 12 = ?", "opts": [("12", True), ("0", False), ("2", False), ("1", False)], "topic": "Adding Zero"},
    {"q": "8 + 0 = ?", "opts": [("0", False), ("8", True), ("80", False), ("88", False)], "topic": "Adding Zero"},
    {"q": "0 + 3 = ?", "opts": [("0", False), ("3", True), ("30", False), ("33", False)], "topic": "Adding Zero"},
    {"q": "9 + 0 = ?", "opts": [("0", False), ("9", True), ("90", False), ("99", False)], "topic": "Adding Zero"},
    {"q": "0 + 15 = ?", "opts": [("15", True), ("0", False), ("5", False), ("1", False)], "topic": "Adding Zero"},
    
    # Adding One
    {"q": "7 + 1 = ?", "opts": [("6", False), ("8", True), ("7", False), ("9", False)], "topic": "Adding One"},
    {"q": "1 + 9 = ?", "opts": [("10", True), ("19", False), ("9", False), ("11", False)], "topic": "Adding One"},
    {"q": "4 + 1 = ?", "opts": [("3", False), ("5", True), ("4", False), ("6", False)], "topic": "Adding One"},
    {"q": "1 + 6 = ?", "opts": [("7", True), ("16", False), ("6", False), ("8", False)], "topic": "Adding One"},
    {"q": "10 + 1 = ?", "opts": [("9", False), ("11", True), ("10", False), ("12", False)], "topic": "Adding One"},
    {"q": "1 + 14 = ?", "opts": [("14", False), ("15", True), ("1", False), ("16", False)], "topic": "Adding One"},
    
    # Addition on a Number Line
    {"q": "Using a number line, 3 + 4 = ?", "opts": [("6", False), ("7", True), ("8", False), ("5", False)], "topic": "Addition on a Number Line"},
    {"q": "Start at 2 and count 3 more. Where are you?", "opts": [("2", False), ("3", False), ("5", True), ("4", False)], "topic": "Addition on a Number Line"},
    {"q": "2 + 5 on number line = ?", "opts": [("6", False), ("7", True), ("8", False), ("5", False)], "topic": "Addition on a Number Line"},
    {"q": "Start at 1, move 6 forward = ?", "opts": [("5", False), ("6", False), ("7", True), ("8", False)], "topic": "Addition on a Number Line"},
    {"q": "6 + 2 on number line = ?", "opts": [("7", False), ("8", True), ("9", False), ("6", False)], "topic": "Addition on a Number Line"},
    {"q": "From 3, count 4 more = ?", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Addition on a Number Line"},
    
    # Counting Forward to Add
    {"q": "Start at 2 and jump 5 places forward. Where do you land?", "opts": [("5", False), ("6", False), ("7", True), ("8", False)], "topic": "Counting Forward to Add"},
    {"q": "4 + 3 = ? (Count forward from 4)", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Counting Forward to Add"},
    {"q": "6 + 2 = ? (Count forward from 6)", "opts": [("7", False), ("8", True), ("9", False), ("10", False)], "topic": "Counting Forward to Add"},
    {"q": "5 + 3 = ? (Count from 5)", "opts": [("7", False), ("8", True), ("9", False), ("10", False)], "topic": "Counting Forward to Add"},
    {"q": "3 + 4 = ? (Start at 3, count 4)", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Counting Forward to Add"},
    {"q": "2 + 6 = ? (Count forward from 2)", "opts": [("7", False), ("8", True), ("9", False), ("10", False)], "topic": "Counting Forward to Add"},
    
    # Different Ways to Make a Number
    {"q": "How many ways can we make 5?", "opts": [("2", False), ("3", False), ("4", True), ("5", False)], "topic": "Different Ways to Make a Number"},
    {"q": "1 + 4 = 5 and 2 + 3 = 5. How many more ways?", "opts": [("1", False), ("2", True), ("3", False), ("4", False)], "topic": "Different Ways to Make a Number"},
    {"q": "Ways to make 6: 1+5, 2+4, 3+3. Total ways = ?", "opts": [("3", True), ("2", False), ("4", False), ("5", False)], "topic": "Different Ways to Make a Number"},
    {"q": "3 + 3 = 6. What else makes 6?", "opts": [("2 + 4", True), ("1 + 4", False), ("2 + 3", False), ("4 + 1", False)], "topic": "Different Ways to Make a Number"},
    
    # Whole and Parts
    {"q": "If whole is 8 and one part is 3, what is the other part?", "opts": [("4", False), ("5", True), ("6", False), ("7", False)], "topic": "Whole and Parts"},
    {"q": "Whole = 9, Part 1 = 2, Part 2 = ?", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Whole and Parts"},
    {"q": "10 = 6 + ?", "opts": [("3", False), ("4", True), ("5", False), ("6", False)], "topic": "Whole and Parts"},
    {"q": "Total apples = 7, taken = 2, remaining = ?", "opts": [("4", False), ("5", True), ("6", False), ("7", False)], "topic": "Whole and Parts"},
    
    # Adding Three Numbers
    {"q": "1 + 2 + 3 = ?", "opts": [("5", False), ("6", True), ("7", False), ("8", False)], "topic": "Adding Three Numbers"},
    {"q": "2 + 3 + 4 = ?", "opts": [("8", False), ("9", True), ("10", False), ("11", False)], "topic": "Adding Three Numbers"},
    {"q": "1 + 1 + 3 = ?", "opts": [("4", False), ("5", True), ("6", False), ("7", False)], "topic": "Adding Three Numbers"},
    {"q": "3 + 2 + 2 = ?", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Adding Three Numbers"},
    {"q": "2 + 2 + 2 = ?", "opts": [("5", False), ("6", True), ("7", False), ("8", False)], "topic": "Adding Three Numbers"},
    
    # Two Single Digits Giving Double-Digit Answers
    {"q": "7 + 5 = ?", "opts": [("11", False), ("12", True), ("13", False), ("14", False)], "topic": "Two Single Digits Giving Double-Digit Answers"},
    {"q": "8 + 4 = ?", "opts": [("11", False), ("12", True), ("13", False), ("14", False)], "topic": "Two Single Digits Giving Double-Digit Answers"},
    {"q": "6 + 7 = ?", "opts": [("12", False), ("13", True), ("14", False), ("15", False)], "topic": "Two Single Digits Giving Double-Digit Answers"},
    {"q": "9 + 5 = ?", "opts": [("13", False), ("14", True), ("15", False), ("16", False)], "topic": "Two Single Digits Giving Double-Digit Answers"},
    {"q": "8 + 6 = ?", "opts": [("13", False), ("14", True), ("15", False), ("16", False)], "topic": "Two Single Digits Giving Double-Digit Answers"},
    
    # Additional Basic Addition
    {"q": "2 + 2 = ?", "opts": [("3", False), ("4", True), ("5", False), ("6", False)], "topic": "Additional Addition Practice"},
    {"q": "3 + 3 = ?", "opts": [("5", False), ("6", True), ("7", False), ("8", False)], "topic": "Additional Addition Practice"},
    {"q": "4 + 4 = ?", "opts": [("7", False), ("8", True), ("9", False), ("10", False)], "topic": "Additional Addition Practice"},
    {"q": "5 + 5 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Additional Addition Practice"},
    {"q": "1 + 8 = ?", "opts": [("8", False), ("9", True), ("10", False), ("11", False)], "topic": "Additional Addition Practice"},
    {"q": "3 + 7 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Additional Addition Practice"},
    {"q": "4 + 6 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Additional Addition Practice"},
    
    # Subtraction (Inverse of Addition)
    {"q": "If 5 + 3 = 8, then 8 - 3 = ?", "opts": [("4", False), ("5", True), ("6", False), ("7", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "10 - 5 = ?", "opts": [("4", False), ("5", True), ("6", False), ("7", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "9 - 2 = ?", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "8 - 1 = ?", "opts": [("6", False), ("7", True), ("8", False), ("9", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "7 - 3 = ?", "opts": [("3", False), ("4", True), ("5", False), ("6", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "6 - 2 = ?", "opts": [("3", False), ("4", True), ("5", False), ("6", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "12 - 2 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "15 - 5 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Subtraction (Inverse of Addition)"},
    
    # Number Comparison
    {"q": "Which is bigger: 5 or 8?", "opts": [("5", False), ("8", True), ("Same", False), ("Can't say", False)], "topic": "Number Comparison"},
    {"q": "Which is smaller: 12 or 7?", "opts": [("12", False), ("7", True), ("Same", False), ("Can't say", False)], "topic": "Number Comparison"},
    {"q": "15 > 10. Is this true?", "opts": [("Yes", True), ("No", False), ("Maybe", False), ("Don't know", False)], "topic": "Number Comparison"},
    {"q": "20 < 15. Is this true?", "opts": [("Yes", False), ("No", True), ("Maybe", False), ("Don't know", False)], "topic": "Number Comparison"},
    {"q": "Compare: 8 and 3", "opts": [("8 > 3", True), ("8 < 3", False), ("8 = 3", False), ("Can't compare", False)], "topic": "Number Comparison"},
    {"q": "Arrange: 4, 7, 2. Smallest to largest?", "opts": [("2, 4, 7", True), ("7, 4, 2", False), ("4, 2, 7", False), ("2, 7, 4", False)], "topic": "Number Comparison"},
    
    # Telling Time
    {"q": "When we sleep, it is?", "opts": [("Morning", False), ("Afternoon", False), ("Night", True), ("Evening", False)], "topic": "Telling Time"},
    {"q": "School starts in?", "opts": [("Night", False), ("Morning", True), ("Evening", False), ("Midnight", False)], "topic": "Telling Time"},
    {"q": "We play in?", "opts": [("Early morning", False), ("Afternoon", True), ("Midnight", False), ("Late night", False)], "topic": "Telling Time"},
    
    # Money
    {"q": "If you have 5 rupees and get 3 more, total?", "opts": [("2", False), ("8", True), ("7", False), ("6", False)], "topic": "Money"},
    {"q": "One rupee coin is?", "opts": [("Very heavy", False), ("Light", True), ("Very big", False), ("Very small", False)], "topic": "Money"},
    
    # Measurement
    {"q": "Which is longer?", "opts": [("Needle", False), ("Pen", True), ("Hair", False), ("Ant", False)], "topic": "Measurement"},
    {"q": "How many cm in 1 meter?", "opts": [("10", False), ("50", False), ("100", True), ("1000", False)], "topic": "Measurement"},
    
    # More Addition & Subtraction
    {"q": "11 + 2 = ?", "opts": [("12", False), ("13", True), ("14", False), ("15", False)], "topic": "Additional Addition Practice"},
    {"q": "10 + 3 = ?", "opts": [("11", False), ("12", False), ("13", True), ("14", False)], "topic": "Additional Addition Practice"},
    {"q": "14 - 4 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "16 - 6 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Subtraction (Inverse of Addition)"},
    {"q": "18 - 8 = ?", "opts": [("9", False), ("10", True), ("11", False), ("12", False)], "topic": "Subtraction (Inverse of Addition)"},
]

# English questions (Expanded)
english_questions = [
    # Story comprehension
    {"q": "What animal flies?", "opts": [("Dog", False), ("Bird", True), ("Fish", False), ("Cat", False)], "topic": "Prose Comprehension"},
    {"q": "How do birds move in the sky?", "opts": [("Run", False), ("Fly", True), ("Swim", False), ("Hop", False)], "topic": "Prose Comprehension"},
    {"q": "Which animal barks?", "opts": [("Dog", True), ("Cat", False), ("Bird", False), ("Fish", False)], "topic": "Prose Comprehension"},
    {"q": "The cat can?", "opts": [("Fly", False), ("Swim", False), ("Meow", True), ("Bark", False)], "topic": "Prose Comprehension"},
    {"q": "Fish live in?", "opts": [("Air", False), ("Water", True), ("Land", False), ("Sky", False)], "topic": "Prose Comprehension"},
    {"q": "What does a monkey do?", "opts": [("Fly", False), ("Jump", True), ("Swim", False), ("Bark", False)], "topic": "Prose Comprehension"},
    {"q": "Where do birds make home?", "opts": [("Water", False), ("Ground", False), ("Trees", True), ("Sky", False)], "topic": "Prose Comprehension"},
    {"q": "What eats grass?", "opts": [("Tiger", False), ("Cow", True), ("Eagle", False), ("Shark", False)], "topic": "Prose Comprehension"},
    {"q": "Snake is?", "opts": [("Mammal", False), ("Reptile", True), ("Bird", False), ("Fish", False)], "topic": "Prose Comprehension"},
    {"q": "Elephant has?", "opts": [("Wings", False), ("Trunk", True), ("Fins", False), ("Feathers", False)], "topic": "Prose Comprehension"},
    
    # Grammar - Nouns
    {"q": "Which is a noun (naming word)?", "opts": [("Run", False), ("Boy", True), ("Happy", False), ("Quickly", False)], "topic": "Grammar: Nouns"},
    {"q": "Pick the noun:", "opts": [("Blue", False), ("Teacher", True), ("Fast", False), ("Nice", False)], "topic": "Grammar: Nouns"},
    {"q": "A person who teaches is a?", "opts": [("Doctor", False), ("Teacher", True), ("Engineer", False), ("Nurse", False)], "topic": "Grammar: Nouns"},
    {"q": "Which word is a noun?", "opts": [("Run", False), ("Apple", True), ("Red", False), ("Jump", False)], "topic": "Grammar: Nouns"},
    {"q": "A place to live is?", "opts": [("School", False), ("Hospital", False), ("House", True), ("Park", False)], "topic": "Grammar: Nouns"},
    {"q": "Doctor is a?", "opts": [("Place", False), ("Person", True), ("Thing", False), ("Animal", False)], "topic": "Grammar: Nouns"},
    {"q": "Table is a?", "opts": [("Verb", False), ("Noun", True), ("Adjective", False), ("Letter", False)], "topic": "Grammar: Nouns"},
    {"q": "Which is a noun?", "opts": [("Happy", False), ("Pencil", True), ("Sing", False), ("Nice", False)], "topic": "Grammar: Nouns"},
    {"q": "School is a?", "opts": [("Noun", True), ("Verb", False), ("Adjective", False), ("Adverb", False)], "topic": "Grammar: Nouns"},
    
    # Grammar - Verbs
    {"q": "Which is an action word?", "opts": [("Ball", False), ("Run", True), ("Red", False), ("Happy", False)], "topic": "Grammar: Verbs"},
    {"q": "What does the bird do?", "opts": [("Fly", True), ("Sleep", False), ("Eat", False), ("Drink", False)], "topic": "Grammar: Verbs"},
    {"q": "The cat can?", "opts": [("Jump", True), ("Big", False), ("Small", False), ("Cute", False)], "topic": "Grammar: Verbs"},
    {"q": "We use verb to show?", "opts": [("Naming", False), ("Action", True), ("Color", False), ("Number", False)], "topic": "Grammar: Verbs"},
    {"q": "Jump is a?", "opts": [("Noun", False), ("Verb", True), ("Adjective", False), ("Color", False)], "topic": "Grammar: Verbs"},
    {"q": "I __ my homework", "opts": [("do", True), ("am", False), ("is", False), ("are", False)], "topic": "Grammar: Verbs"},
    {"q": "She __ to school", "opts": [("go", False), ("goes", True), ("went", False), ("going", False)], "topic": "Grammar: Verbs"},
    {"q": "Play is?", "opts": [("Noun", False), ("Verb", True), ("Adjective", False), ("Adverb", False)], "topic": "Grammar: Verbs"},
    
    # Grammar - Adjectives
    {"q": "Which word describes things?", "opts": [("Run", False), ("Jump", False), ("Red", True), ("Sing", False)], "topic": "Grammar: Adjectives"},
    {"q": "Big is a?", "opts": [("Noun", False), ("Verb", False), ("Adjective", True), ("Adverb", False)], "topic": "Grammar: Adjectives"},
    {"q": "The apple is?", "opts": [("Sweet", True), ("Run", False), ("Jump", False), ("Sit", False)], "topic": "Grammar: Adjectives"},
    {"q": "Small is an?", "opts": [("Noun", False), ("Verb", False), ("Adjective", True), ("Action", False)], "topic": "Grammar: Adjectives"},
    {"q": "Fast is?", "opts": [("Verb", False), ("Adjective", True), ("Noun", False), ("Pronoun", False)], "topic": "Grammar: Adjectives"},
    
    # Alphabet & Phonics
    {"q": "Which letter comes after B?", "opts": [("A", False), ("C", True), ("D", False), ("E", False)], "topic": "Alphabet & Phonics"},
    {"q": "Which letter comes before D?", "opts": [("B", False), ("C", True), ("E", False), ("F", False)], "topic": "Alphabet & Phonics"},
    {"q": "A, B, C, D, ?", "opts": [("E", True), ("F", False), ("G", False), ("H", False)], "topic": "Alphabet & Phonics"},
    {"q": "The first letter of the alphabet is?", "opts": [("B", False), ("A", True), ("C", False), ("Z", False)], "topic": "Alphabet & Phonics"},
    {"q": "Z is the __th letter", "opts": [("24", False), ("25", False), ("26", True), ("27", False)], "topic": "Alphabet & Phonics"},
    {"q": "M comes after?", "opts": [("L", True), ("N", False), ("O", False), ("K", False)], "topic": "Alphabet & Phonics"},
    
    # Reading & Word Recognition
    {"q": "What does a dog say?", "opts": [("Meow", False), ("Woof", True), ("Moo", False), ("Chirp", False)], "topic": "Reading & Word Recognition"},
    {"q": "What does a cow say?", "opts": [("Moo", True), ("Woof", False), ("Chirp", False), ("Meow", False)], "topic": "Reading & Word Recognition"},
    {"q": "What color is the sky?", "opts": [("Green", False), ("Yellow", False), ("Blue", True), ("Red", False)], "topic": "Reading & Word Recognition"},
    {"q": "We eat?", "opts": [("Clothes", False), ("Food", True), ("Books", False), ("Toys", False)], "topic": "Reading & Word Recognition"},
    {"q": "We drink?", "opts": [("Plate", False), ("Water", True), ("Chair", False), ("Table", False)], "topic": "Reading & Word Recognition"},
    {"q": "What does a sheep say?", "opts": [("Baa", True), ("Woof", False), ("Moo", False), ("Chirp", False)], "topic": "Reading & Word Recognition"},
    {"q": "Elephant sound is?", "opts": [("Roar", False), ("Trumpet", True), ("Squeak", False), ("Chirp", False)], "topic": "Reading & Word Recognition"},
    {"q": "Lion lives in?", "opts": [("Forest", True), ("House", False), ("Lake", False), ("Mountain", False)], "topic": "Reading & Word Recognition"},
    
    # Sentence Building
    {"q": "Correct sentence:", "opts": [("Dog the barks", False), ("The dog barks", True), ("Barks dog the", False), ("Dog barks the", False)], "topic": "Sentence Building"},
    {"q": "Choose correct order:", "opts": [("Fly bird can", False), ("Can bird fly", False), ("Bird can fly", True), ("Can fly bird", False)], "topic": "Sentence Building"},
    {"q": "Make a sentence:", "opts": [("Cat jump can", False), ("Can jump cat", False), ("Cat can jump", True), ("Jump can cat", False)], "topic": "Sentence Building"},
    {"q": "__ is my friend", "opts": [("She", True), ("It", False), ("They", False), ("Their", False)], "topic": "Sentence Building"},
    {"q": "I am a ___", "opts": [("student", True), ("run", False), ("happy", False), ("big", False)], "topic": "Sentence Building"},
    
    # More Nouns
    {"q": "Which is NOT a noun?", "opts": [("Book", False), ("Run", True), ("Chair", False), ("Table", False)], "topic": "Grammar: Nouns"},
    {"q": "Nurse is a?", "opts": [("Person", True), ("Place", False), ("Thing", False), ("Animal", False)], "topic": "Grammar: Nouns"},
    {"q": "Hospital is a?", "opts": [("Person", False), ("Place", True), ("Thing", False), ("Animal", False)], "topic": "Grammar: Nouns"},
    
    # Punctuation & Capitalization
    {"q": "Sentences start with?", "opts": [("Small letter", False), ("Capital letter", True), ("Number", False), ("Symbol", False)], "topic": "Punctuation"},
    {"q": "What comes at end of sentence?", "opts": [("Comma", False), ("Period", True), ("Dash", False), ("Arrow", False)], "topic": "Punctuation"},
    
    # Colors
    {"q": "Primary colors are?", "opts": [("Pink, Purple", False), ("Red, Yellow, Blue", True), ("Black, White", False), ("Brown, Gray", False)], "topic": "Colors"},
    {"q": "What color is grass?", "opts": [("Red", False), ("Blue", False), ("Green", True), ("Yellow", False)], "topic": "Colors"},
    {"q": "What color is snow?", "opts": [("Black", False), ("White", True), ("Gray", False), ("Blue", False)], "topic": "Colors"},
    
    # Opposites
    {"q": "Opposite of big is?", "opts": [("Large", False), ("Small", True), ("Tall", False), ("Long", False)], "topic": "Opposites"},
    {"q": "Opposite of hot is?", "opts": [("Warm", False), ("Cold", True), ("Mild", False), ("Cool", False)], "topic": "Opposites"},
    {"q": "Opposite of day is?", "opts": [("Evening", False), ("Morning", False), ("Night", True), ("Afternoon", False)], "topic": "Opposites"},
]

# Hindi questions (Basic) - Expanded
hindi_questions = [
    {"q": "निम्न में कौन एक जानवर है?", "opts": [("किताब", False), ("कुत्ता", True), ("कलम", False), ("मेज", False)], "topic": "Hindi Basic Words"},
    {"q": "नीचे दिए हुए में से कौन सा रंग है?", "opts": [("चलना", False), ("लाल", True), ("खेलना", False), ("बैठना", False)], "topic": "Hindi Basic Words"},
    {"q": "फल कौन से हैं?", "opts": [("सेब", True), ("कुर्सी", False), ("कलम", False), ("कपड़े", False)], "topic": "Hindi Basic Words"},
    {"q": "'पत्र' का अर्थ है?", "opts": [("पेड़", False), ("चिट्ठी", True), ("पानी", False), ("पक्षी", False)], "topic": "Hindi Basic Words"},
    {"q": "'सूर्य' क्या है?", "opts": [("तारा", False), ("ग्रह", True), ("पक्षी", False), ("जानवर", False)], "topic": "Hindi Basic Words"},
    {"q": "'दिन' के समय कौन निकलता है?", "opts": [("चाँद", False), ("सूर्य", True), ("तारे", False), ("बादल", False)], "topic": "Hindi Basic Words"},
    {"q": "'रात' के समय कौन दिखता है?", "opts": [("सूर्य", False), ("चाँद", True), ("पक्षी", False), ("पेड़", False)], "topic": "Hindi Basic Words"},
    {"q": "'मछली' कहाँ रहती है?", "opts": [("पेड़ पर", False), ("पानी में", True), ("जमीन पर", False), ("आसमान में", False)], "topic": "Hindi Basic Words"},
    {"q": "'गाय' कौन सा जानवर है?", "opts": [("शिकारी", False), ("पालतू", True), ("जंगली", False), ("उड़ने वाला", False)], "topic": "Hindi Basic Words"},
    {"q": "'हरा' क्या है?", "opts": [("जानवर", False), ("रंग", True), ("फल", False), ("फूल", False)], "topic": "Hindi Basic Words"},
    {"q": "पानी का उपयोग?", "opts": [("खेलने के लिए", False), ("पीने और नहाने के लिए", True), ("सोने के लिए", False), ("दौड़ने के लिए", False)], "topic": "Hindi - Daily Life"},
    {"q": "स्कूल में हम?", "opts": [("सोते हैं", False), ("पढ़ते हैं", True), ("खेलते हैं", False), ("खाते हैं", False)], "topic": "Hindi - Daily Life"},
    {"q": "रात में हम?", "opts": [("खेलते हैं", False), ("पढ़ते हैं", False), ("सोते हैं", True), ("दौड़ते हैं", False)], "topic": "Hindi - Daily Life"},
    {"q": "'माँ' क्या है?", "opts": [("शिक्षक", False), ("डॉक्टर", False), ("माता-पिता", True), ("भाई", False)], "topic": "Hindi - Family"},
    {"q": "'भाई' का विलोम?", "opts": [("पिता", False), ("बहन", True), ("माँ", False), ("चाचा", False)], "topic": "Hindi - Family"},
    {"q": "किताब पढ़ने से?", "opts": [("नींद आती है", False), ("ज्ञान मिलता है", True), ("बीमारी होती है", False), ("खुशी नहीं होती", False)], "topic": "Hindi - Learning"},
    {"q": "सबसे बड़ा ग्रह?", "opts": [("बुध", False), ("गुरु", True), ("शुक्र", False), ("मंगल", False)], "topic": "Hindi - Science"},
    {"q": "सबसे छोटा ग्रह?", "opts": [("बुध", True), ("शुक्र", False), ("पृथ्वी", False), ("मंगल", False)], "topic": "Hindi - Science"},
    {"q": "पृथ्वी का उपग्रह?", "opts": [("सूर्य", False), ("चाँद", True), ("तारा", False), ("सितारा", False)], "topic": "Hindi - Science"},
    {"q": "वर्ष में महीने?", "opts": [("10", False), ("11", False), ("12", True), ("13", False)], "topic": "Hindi - General Knowledge"},
    {"q": "महीने में सप्ताह?", "opts": [("2", False), ("3", False), ("4", True), ("5", False)], "topic": "Hindi - General Knowledge"},
    {"q": "सप्ताह में दिन?", "opts": [("5", False), ("6", False), ("7", True), ("8", False)], "topic": "Hindi - General Knowledge"},
    {"q": "दिन में घंटे?", "opts": [("12", False), ("18", False), ("24", True), ("30", False)], "topic": "Hindi - General Knowledge"},
    {"q": "रंगों के नाम:", "opts": [("लाल", True), ("दौड़ना", False), ("खेलना", False), ("बैठना", False)], "topic": "Hindi - Colors"},
    {"q": "काला रंग कहाँ मिलता है?", "opts": [("आसमान में", False), ("रात में", True), ("दिन में", False), ("पानी में", False)], "topic": "Hindi - Colors"},
    {"q": "पीला रंग किसका है?", "opts": [("घास का", False), ("सूरज का", True), ("पानी का", False), ("रात का", False)], "topic": "Hindi - Colors"},
    {"q": "संख्याएँ 1 से 10:", "opts": [("एक, दो, तीन...", True), ("दस, नौ, आठ...", False), ("पाँच, छः, सात...", False), ("बीस, तीस...", False)], "topic": "Hindi - Numbers"},
    {"q": "एक + दो = ?", "opts": [("तीन", True), ("चार", False), ("दो", False), ("पाँच", False)], "topic": "Hindi - Arithmetic"},
    {"q": "दाँत से हम क्या करते हैं?", "opts": [("देखते हैं", False), ("खाते हैं", True), ("चलते हैं", False), ("सुनते हैं", False)], "topic": "Hindi - Body Parts"},
    {"q": "आँख से हम क्या करते हैं?", "opts": [("खेलते हैं", False), ("देखते हैं", True), ("गाते हैं", False), ("दौड़ते हैं", False)], "topic": "Hindi - Body Parts"},
    {"q": "कान से हम क्या करते हैं?", "opts": [("देखते हैं", False), ("सुनते हैं", True), ("खेलते हैं", False), ("खाते हैं", False)], "topic": "Hindi - Body Parts"},
    {"q": "नाक से हम क्या करते हैं?", "opts": [("खाते हैं", False), ("सूँघते हैं", True), ("देखते हैं", False), ("सुनते हैं", False)], "topic": "Hindi - Body Parts"},
]

# Computer Science (Basic) - Expanded
computer_questions = [
    {"q": "Computer का हिंदी नाम क्या है?", "opts": [("मशीन", False), ("संगणक", True), ("यंत्र", False), ("डिवाइस", False)], "topic": "Computer Basics"},
    {"q": "Keyboard से हम क्या करते हैं?", "opts": [("देखते हैं", False), ("टाइप करते हैं", True), ("सुनते हैं", False), ("खेलते हैं", False)], "topic": "Computer Basics"},
    {"q": "Mouse से हम क्या करते हैं?", "opts": [("लिखते हैं", False), ("क्लिक करते हैं", True), ("गाते हैं", False), ("दौड़ते हैं", False)], "topic": "Computer Basics"},
    {"q": "Monitor क्या दिखाता है?", "opts": [("आवाज", False), ("चित्र/टेक्स्ट", True), ("हवा", False), ("प्रकाश", False)], "topic": "Computer Basics"},
    {"q": "Computer के कितने मुख्य भाग हैं?", "opts": [("2", False), ("3", True), ("4", False), ("5", False)], "topic": "Computer Basics"},
    {"q": "Computer के साथ कौन सी चीज़ हटा सकते हैं?", "opts": [("CPU", False), ("Monitor", False), ("Mouse", True), ("Keyboard", False)], "topic": "Computer Parts"},
    {"q": "Cursor क्या है?", "opts": [("एक फाइल", False), ("एक तीर का निशान", True), ("एक प्रोग्राम", False), ("एक खेल", False)], "topic": "Computer Skills"},
    {"q": "Desktop पर कौन सी चीज़ें होती हैं?", "opts": [("फाइलें", False), ("फोल्डर", False), ("आइकन", False), ("सब कुछ", True)], "topic": "Computer Skills"},
    {"q": "Double Click करने से क्या होता है?", "opts": [("काट जाता है", False), ("खुल जाता है", True), ("बंद हो जाता है", False), ("कोई नहीं", False)], "topic": "Computer Skills"},
    {"q": "Right Click से क्या मिलता है?", "opts": [("File Open", False), ("Menu", True), ("Print", False), ("Copy", False)], "topic": "Computer Skills"},
    {"q": "CPU का पूरा नाम?", "opts": [("Central Power Unit", False), ("Central Process Unit", True), ("Central Product Unit", False), ("Central Person Unit", False)], "topic": "Computer Hardware"},
    {"q": "RAM का फुल फॉर्म?", "opts": [("Random Assess Memory", False), ("Random Access Memory", True), ("Read Assess Memory", False), ("Random Area Memory", False)], "topic": "Computer Hardware"},
    {"q": "Computer को ON करने के लिए क्या दबाते हैं?", "opts": [("Mouse", False), ("Power Button", True), ("Keyboard", False), ("Screen", False)], "topic": "Computer Skills"},
    {"q": "Folder क्या है?", "opts": [("एक खेल", False), ("फाइलों को रखने की जगह", True), ("एक बटन", False), ("एक प्रोग्राम", False)], "topic": "Computer Files"},
    {"q": "File क्या है?", "opts": [("एक खेल", False), ("जानकारी को सहेजने की चीज़", True), ("एक फोल्डर", False), ("एक आइकन", False)], "topic": "Computer Files"},
    {"q": "Internet क्या है?", "opts": [("एक खेल", False), ("आपस में जुड़े कंप्यूटर", True), ("एक प्रोग्राम", False), ("एक गीत", False)], "topic": "Computer Networking"},
    {"q": "Email का उपयोग?", "opts": [("खेलने के लिए", False), ("संदेश भेजने के लिए", True), ("दौड़ने के लिए", False), ("गाने के लिए", False)], "topic": "Computer Networking"},
    {"q": "Search Engine क्या है?", "opts": [("एक खेल", False), ("जानकारी खोजने की चीज़", True), ("एक बटन", False), ("एक फाइल", False)], "topic": "Computer Internet"},
    {"q": "Printer से हम क्या करते हैं?", "opts": [("देखते हैं", False), ("कागज पर प्रिंट करते हैं", True), ("गाते हैं", False), ("खेलते हैं", False)], "topic": "Computer Devices"},
    {"q": "Speaker से क्या निकलता है?", "opts": [("प्रकाश", False), ("आवाज़", True), ("पानी", False), ("धुआं", False)], "topic": "Computer Devices"},
    {"q": "Microphone में क्या करते हैं?", "opts": [("टाइप करते हैं", False), ("क्लिक करते हैं", False), ("बोलते हैं", True), ("लिखते हैं", False)], "topic": "Computer Devices"},
    {"q": "Webcam क्या देता है?", "opts": [("आवाज़", False), ("वीडियो", True), ("टेक्स्ट", False), ("संगीत", False)], "topic": "Computer Devices"},
    {"q": "CD क्या है?", "opts": [("एक कलम", False), ("डेटा स्टोर करने की डिस्क", True), ("एक कुर्सी", False), ("एक खेल", False)], "topic": "Computer Storage"},
    {"q": "Memory में क्या स्टोर होता है?", "opts": [("किताबें", False), ("डेटा/जानकारी", True), ("खिलौने", False), ("कपड़े", False)], "topic": "Computer Storage"},
    {"q": "Screen पर क्या दिखता है?", "opts": [("आवाज़", False), ("चित्र", True), ("महक", False), ("स्वाद", False)], "topic": "Computer Output"},
    {"q": "USB का उपयोग?", "opts": [("खेलने के लिए", False), ("डेटा ट्रांसफर करने के लिए", True), ("सोने के लिए", False), ("गाने के लिए", False)], "topic": "Computer Connectivity"},
    {"q": "Password क्या है?", "opts": [("एक खेल", False), ("कंप्यूटर की सुरक्षा के लिए कोड", True), ("एक गीत", False), ("एक पुस्तक", False)], "topic": "Computer Security"},
    {"q": "Virus क्या है?", "opts": [("एक खेल", False), ("कंप्यूटर को नुकसान पहुंचाने वाला प्रोग्राम", True), ("एक फल", False), ("एक जानवर", False)], "topic": "Computer Security"},
    {"q": "Bluetooth क्या है?", "opts": [("एक रंग", False), ("वायरलेस तकनीक", True), ("एक खेल", False), ("एक किताब", False)], "topic": "Computer Connectivity"},
    {"q": "WiFi क्या है?", "opts": [("एक जानवर", False), ("इंटरनेट कनेक्शन", True), ("एक खेल", False), ("एक पक्षी", False)], "topic": "Computer Connectivity"},
    {"q": "Database क्या है?", "opts": [("एक खेल", False), ("जानकारी को संग्रहित करने की जगह", True), ("एक गीत", False), ("एक कलम", False)], "topic": "Computer Data"},
    {"q": "Application क्या है?", "opts": [("एक खेल", False), ("एक प्रोग्राम या सॉफ्टवेयर", True), ("एक फल", False), ("एक कपड़ा", False)], "topic": "Computer Software"},
    {"q": "Software क्या है?", "opts": [("कठोर चीजें", False), ("कंप्यूटर प्रोग्राम", True), ("कंप्यूटर भाग", False), ("कंप्यूटर तार", False)], "topic": "Computer Software"},
    {"q": "Hardware क्या है?", "opts": [("कंप्यूटर प्रोग्राम", False), ("कंप्यूटर के भौतिक भाग", True), ("डेटा", False), ("जानकारी", False)], "topic": "Computer Hardware"},
    {"q": "Update करने से क्या होता है?", "opts": [("कंप्यूटर खराब हो जाता है", False), ("नई सुविधाएँ आती हैं", True), ("कंप्यूटर धीमा हो जाता है", False), ("कोई नहीं", False)], "topic": "Computer Maintenance"},
    {"q": "Backup क्या है?", "opts": [("आगे की ओर जाना", False), ("डेटा की प्रति रखना", True), ("कंप्यूटर शुरू करना", False), ("कंप्यूटर बंद करना", False)], "topic": "Computer Data Protection"},
    {"q": "Restart का अर्थ?", "opts": [("बंद करना", False), ("फिर से शुरू करना", True), ("हटाना", False), ("खराब करना", False)], "topic": "Computer Operations"},
    {"q": "Shutdown का अर्थ?", "opts": [("खोलना", False), ("बंद करना", True), ("फिर से शुरू करना", False), ("हटाना", False)], "topic": "Computer Operations"},
    {"q": "Save का अर्थ?", "opts": [("मिटाना", False), ("सहेजना", True), ("खोलना", False), ("बंद करना", False)], "topic": "Computer File Operations"},
    {"q": "Delete का अर्थ?", "opts": [("सहेजना", False), ("मिटाना", True), ("खोलना", False), ("बंद करना", False)], "topic": "Computer File Operations"},
    {"q": "Open का अर्थ?", "opts": [("मिटाना", False), ("खोलना", True), ("सहेजना", False), ("बंद करना", False)], "topic": "Computer File Operations"},
    {"q": "Close का अर्थ?", "opts": [("खोलना", False), ("बंद करना", True), ("मिटाना", False), ("सहेजना", False)], "topic": "Computer File Operations"},
]

# Kannada questions - Expanded
kannada_questions = [
    {"q": "ಗುರಿ ಎಂಬುದು ಯಾವುದು?", "opts": [("ಪಕ್ಷಿ", True), ("ಪ್ರಾಣಿ", False), ("ಫಸಲು", False), ("ವೃಕ್ಷ", False)], "topic": "Kannada Basic"},
    {"q": "ನೀರು ಎಲ್ಲೆ ಸಿಗುತ್ತೆ?", "opts": [("ಆಕಾಶದಲ್ಲಿ", False), ("ಕೊರೆಯಲ್ಲಿ", True), ("ಮರದ ಮೇಲೆ", False), ("ಸೂರ್ಯದಲ್ಲಿ", False)], "topic": "Kannada Basic"},
    {"q": "ಸೂರ್ಯ ಯಾವಾಗ ಬರುತ್ತೆ?", "opts": [("ರಾತ್ರಿಯಲ್ಲಿ", False), ("ಹಗಲಿನಲ್ಲಿ", True), ("ಸಂಧ್ಯಾ ವೇಳೆ", False), ("ಮಧ್ಯರಾತ್ರಿ", False)], "topic": "Kannada Basic"},
    {"q": "ಸುಟ್ಟ ಅಪ್ಪ ಮೂಲಕ ನೀವು?", "opts": [("ಕೇಳುತ್ತೀರಿ", False), ("ಹೊಲಕುತ್ತೀರಿ", False), ("ತಿನ್ನುತ್ತೀರಿ", True), ("ನಡೆಯುತ್ತೀರಿ", False)], "topic": "Kannada Basic"},
    {"q": "ಗಾವುಂಬ ಏನೆ?", "opts": [("ಪಕ್ಷಿ", False), ("ಪ್ರಾಣಿ", True), ("ಫಸಲು", False), ("ಜಲಜಂತು", False)], "topic": "Kannada Basic"},
    {"q": "ಪ್ರಾಣಿಗಳ ಮಧ್ಯೆ ಕೂನ್ನ ಬೆದರಿಕೆ?", "opts": [("ಮುಲೆ", False), ("ಸರ್ಪ", True), ("ಗುರುತೆ", False), ("ಕುತ್ತರೆ", False)], "topic": "Kannada Basic"},
    {"q": "ಪುಸ್ತಕ ಏನು?", "opts": [("ಖಾದ್ಯ", False), ("ಧರಮ", False), ("ಜ್ಞಾನ", True), ("ಆಕಾಶ", False)], "topic": "Kannada Basic"},
    {"q": "ಛತ್ರ ಏಕೆ ಬೇಕು?", "opts": [("ನೀರು ತಿನ್ನಲು", False), ("ನೀರಿನಿಂದ ರಕ್ಷಣೆ", True), ("ಸುಟ್ಟಕ್ಕೆ", False), ("ಸುಸಜ್ಜೆಗೆ", False)], "topic": "Kannada Basic"},
    {"q": "ಆನೆ ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತೆ?", "opts": [("ಅರೆ", False), ("ನರೆ", True), ("ಇರೆ", False), ("ಒರೆ", False)], "topic": "Kannada - Animal Sounds"},
    {"q": "ನಾಯಿ ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತೆ?", "opts": [("ಕೂ", False), ("ವೌ", True), ("ಚಿಂ", False), ("ಆ", False)], "topic": "Kannada - Animal Sounds"},
    {"q": "ಮೀನು ಎಲ್ಲೆ ವಾಸ ಮಾಡುತ್ತೆ?", "opts": [("ಆಕಾಶ", False), ("ನೀರು", True), ("ಮರ", False), ("ಮರುದೆ", False)], "topic": "Kannada - Animals"},
    {"q": "ಕುರ್ಚಿ ಏನೆ?", "opts": [("ಪ್ರಾಣಿ", False), ("ವಸ್ತು", True), ("ಉದ್ಯಾನ", False), ("ಪುಸ್ತಕ", False)], "topic": "Kannada - Objects"},
    {"q": "ಬಿಸಿ ಅರ್ಥ?", "opts": [("ಹೆಚ್ಚು ತಾಪಮಾನ", True), ("ಸ್ವಲ್ಪ", False), ("ತಂಪು", False), ("ಮುದ್ದೆ", False)], "topic": "Kannada - Adjectives"},
    {"q": "ಚಿಕ್ಕ ಅರ್ಥ?", "opts": [("ದೊಡ್ಡ", False), ("ಕ್ಷುದ್ರ", True), ("ಬಿಳಿ", False), ("ಕಪ್ಪು", False)], "topic": "Kannada - Adjectives"},
    {"q": "ಹೆಚ್ಚಿ ಅರ್ಥ?", "opts": [("ಕಡಿಮೆ", False), ("ವೃದ್ಧಿ", True), ("ಪತನ", False), ("ಸ್ಥಿರ", False)], "topic": "Kannada - Verbs"},
    {"q": "ಓಡು ಎಂಬುದು?", "opts": [("ವಸ್ತು", False), ("ಪ್ರಾಣಿ", False), ("ಕ್ರಿಯೆ", True), ("ಸ್ಥಾನ", False)], "topic": "Kannada - Verbs"},
    {"q": "ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ?", "opts": [("48", False), ("52", True), ("50", False), ("60", False)], "topic": "Kannada - Numbers"},
    {"q": "ವರ್ಷದಲ್ಲಿ ತಿಂಗಳು?", "opts": [("10", False), ("12", True), ("11", False), ("13", False)], "topic": "Kannada - Numbers"},
    {"q": "ಸಪ್ತಾಹದಲ್ಲಿ ದಿನ?", "opts": [("5", False), ("7", True), ("6", False), ("8", False)], "topic": "Kannada - Numbers"},
    {"q": "ಸೂರ್ಯೋದಯ ಯಾವ ಸಮಯ?", "opts": [("ರಾತ್ರಿ", False), ("ಉದಯ", True), ("ಸಂಧ್ಯ", False), ("ಮಧ್ಯರಾತ್ರಿ", False)], "topic": "Kannada - Time"},
    {"q": "ಮಾತೃ ಶಕ್ತಿ ಎಂದರೆ?", "opts": [("ಪಿತೃ", False), ("ತಾಯಿ", True), ("ಭಾಯಿ", False), ("ಬಾಬು", False)], "topic": "Kannada - Family"},
    {"q": "ಮಾತೆ ನಾವೆ?", "opts": [("ಮಂಡಿ", False), ("ಕುಟುಂಬ", True), ("ಸ್ಕೂಲು", False), ("ಗ್ರಾಮ", False)], "topic": "Kannada - Family"},
    {"q": "ನಮ್ಮ ದೇಶದ ರಾಜಧಾನಿ?", "opts": [("ಬೆಂಗಳೂರು", False), ("ಬೆಳ್ಳರಿ", False), ("ಡೆಲ್ಲಿ", True), ("ಮುಂಬೈ", False)], "topic": "Kannada - General Knowledge"},
    {"q": "ಭಾರತದ ರಾಜಧಾನಿ?", "opts": [("ಮುಂಬೈ", False), ("ಕೋಲ್ಕತ್ತ", False), ("ನವೆ ಡೆಲ್ಲಿ", True), ("ಚೆನ್ನೈ", False)], "topic": "Kannada - General Knowledge"},
    {"q": "ಕನ್ನಡ ರಾಜ್ಯ?", "opts": [("ಮಹಾರಾಷ್ಟ್ರ", False), ("ಕರ್ನಾಟಕ", True), ("ತಮಿಳುನಾಡು", False), ("ತೆಲುಗು", False)], "topic": "Kannada - General Knowledge"},
    {"q": "ಸಂಖ್ಯೆ 1-10 ಕನ್ನಡದಲ್ಲಿ?", "opts": [("ಒಂದು, ಎರಡು, ಮೂರು...", True), ("ಹತ್ತು, ಒಂಬತ್ತು...", False), ("ಐದು, ಆರು...", False), ("ಇಪ್ಪತ್ತು...", False)], "topic": "Kannada - Numbers"},
    {"q": "ವರ್ಣಮಾಲೆಯಲ್ಲಿ ಅಕ್ಷರ?", "opts": [("40", False), ("48", False), ("52", True), ("60", False)], "topic": "Kannada - Alphabet"},
    {"q": "ಕ್ರಿಯೆ ಶಬ್ದ?", "opts": [("ಪುಸ್ತಕ", False), ("ಓಡು", True), ("ಮೇಜು", False), ("ಕುರ್ಚಿ", False)], "topic": "Kannada - Verbs"},
    {"q": "ನಾಮ ಪದ?", "opts": [("ಅಪ್ಪ", True), ("ಓಡು", False), ("ಚಿಕ್ಕ", False), ("ದೊಡ್ಡ", False)], "topic": "Kannada - Nouns"},
    {"q": "ವಿಶೇಷಣ ಪದ?", "opts": [("ಅಪ್ಪ", False), ("ಓಡು", False), ("ಬಿಳಿ", True), ("ಮಾತೆ", False)], "topic": "Kannada - Adjectives"},
    {"q": "ಚುನಾಮೀ ವರ್ಷ?", "opts": [("2020", False), ("2025", False), ("2024", False), ("2023", True)], "topic": "Kannada - General Knowledge"},
]

# EVS questions
evs_questions = [
    {"q": "We need air to?", "opts": [("Eat", False), ("Breathe", True), ("Sleep", False), ("Play", False)], "topic": "Our Basic Needs"},
    {"q": "We need water to?", "opts": [("Breathe", False), ("Drink and wash", True), ("Run", False), ("Fly", False)], "topic": "Our Basic Needs"},
    {"q": "We need food to?", "opts": [("Fly", False), ("Grow and be strong", True), ("Run", False), ("Sing", False)], "topic": "Our Basic Needs"},
    {"q": "We need shelter to?", "opts": [("Eat", False), ("Play", False), ("Live safely", True), ("Fly", False)], "topic": "Our Basic Needs"},
    {"q": "Where do we sleep?", "opts": [("School", False), ("Park", False), ("Home/House", True), ("Hospital", False)], "topic": "Our Basic Needs"},
    
    {"q": "Sun gives us?", "opts": [("Water", False), ("Light and heat", True), ("Food", False), ("Shade", False)], "topic": "Natural Resources"},
    {"q": "Rain water is used for?", "opts": [("Playing", False), ("Drinking and plants", True), ("Flying", False), ("Running", False)], "topic": "Natural Resources"},
    {"q": "Trees give us?", "opts": [("Water", False), ("Oxygen and fruit", True), ("Fire", False), ("Sand", False)], "topic": "Natural Resources"},
    {"q": "Soil helps plants to?", "opts": [("Fly", False), ("Grow", True), ("Sleep", False), ("Eat", False)], "topic": "Natural Resources"},
    
    {"q": "We should drink?", "opts": [("Tea", False), ("Milk", False), ("Water", True), ("Juice only", False)], "topic": "Health and Hygiene"},
    {"q": "Before eating we should?", "opts": [("Sleep", False), ("Wash hands", True), ("Play", False), ("Sing", False)], "topic": "Health and Hygiene"},
    {"q": "After using toilet we should?", "opts": [("Play", False), ("Sleep", False), ("Wash hands", True), ("Eat", False)], "topic": "Health and Hygiene"},
    {"q": "We should brush teeth?", "opts": [("Once a year", False), ("Twice a day", True), ("Once a week", False), ("Never", False)], "topic": "Health and Hygiene"},
    
    {"q": "Animals live in?", "opts": [("School", False), ("Hospital", False), ("Forest and farms", True), ("Road", False)], "topic": "Animals"},
    {"q": "Which is a domestic animal?", "opts": [("Lion", False), ("Dog", True), ("Tiger", False), ("Bear", False)], "topic": "Animals"},
    {"q": "Which is a wild animal?", "opts": [("Cow", False), ("Hen", False), ("Tiger", True), ("Sheep", False)], "topic": "Animals"},
    {"q": "Birds have?", "opts": [("Fins", False), ("Feathers", True), ("Scales", False), ("Fur", False)], "topic": "Animals"},
    
    {"q": "In summer we should wear?", "opts": [("Heavy clothes", False), ("Light clothes", True), ("Thick coat", False), ("Blanket", False)], "topic": "Weather and Seasons"},
    {"q": "In winter we need?", "opts": [("Fan", False), ("Blanket", True), ("AC", False), ("Ice", False)], "topic": "Weather and Seasons"},
    {"q": "Rainy season makes ground?", "opts": [("Dry", False), ("Wet", True), ("Hot", False), ("Cold", False)], "topic": "Weather and Seasons"},
    {"q": "We fly a kite in?", "opts": [("Summer", False), ("Winter", True), ("Rainy season", False), ("Spring", False)], "topic": "Weather and Seasons"},
    {"q": "Umbrella is used in?", "opts": [("Summer", False), ("Rainy season", True), ("Winter", False), ("Spring", False)], "topic": "Weather and Seasons"},
    {"q": "Sun is hottest in?", "opts": [("Winter", False), ("Summer", True), ("Rainy season", False), ("Spring", False)], "topic": "Weather and Seasons"},
    
    {"q": "Sun and Weather Safety", "opts": [("Play in rain", False), ("Wear sunscreen in sun", True), ("Sit in sun all day", False), ("Ignore weather", False)], "topic": "Sun and Weather Safety"},
    {"q": "Too much sun can cause?", "opts": [("Catching cold", False), ("Skin burn", True), ("Better health", False), ("Faster running", False)], "topic": "Sun and Weather Safety"},
    
    {"q": "Good posture means?", "opts": [("Slouching", False), ("Sitting straight", True), ("Bending forward", False), ("Lying down", False)], "topic": "Body Awareness"},
    {"q": "We should stretch?", "opts": [("Never", False), ("Regularly", True), ("Once a year", False), ("Only at school", False)], "topic": "Body Awareness"},
    {"q": "Playing sports is good?", "opts": [("It wastes time", False), ("It keeps us fit", True), ("It makes weak", False), ("It's boring", False)], "topic": "Body Awareness"},
    {"q": "Proper sleep helps?", "opts": [("Make sick", False), ("Have energy", True), ("Be grumpy", False), ("Waste time", False)], "topic": "Body Awareness"},
    {"q": "We should sleep?", "opts": [("3 hours", False), ("8 hours", True), ("1 hour", False), ("Never", False)], "topic": "Body Awareness"},
    
    {"q": "Fish have?", "opts": [("Feathers", False), ("Fins", True), ("Wings", False), ("Legs", False)], "topic": "Animals"},
    {"q": "Lion is?", "opts": [("Vegetarian", False), ("Carnivore", True), ("Herbivore", False), ("Omnivore", False)], "topic": "Animals"},
    {"q": "Cow eats?", "opts": [("Meat", False), ("Grass and leaves", True), ("Fish", False), ("Everything", False)], "topic": "Animals"},
    {"q": "Animals need:", "opts": [("Only food", False), ("Food, water, shelter", True), ("Only water", False), ("Only air", False)], "topic": "Animals"},
    
    {"q": "Exercise helps us?", "opts": [("Get sick", False), ("Stay strong", True), ("Sleep always", False), ("Get weak", False)], "topic": "Health and Hygiene"},
    {"q": "We should take bath?", "opts": [("Never", False), ("Daily", True), ("Once a month", False), ("Once a year", False)], "topic": "Health and Hygiene"},
    {"q": "Getting vaccinated protects?", "opts": [("Never", False), ("Sometimes", False), ("From diseases", True), ("For playing", False)], "topic": "Health and Hygiene"},
    
    {"q": "We wear clothes to?", "opts": [("Play", False), ("Cover and protect body", True), ("Eat", False), ("Sleep", False)], "topic": "Our Basic Needs"},
    {"q": "Which is a basic need?", "opts": [("Toys", False), ("Food", True), ("Games", False), ("Books", False)], "topic": "Our Basic Needs"},
    
    {"q": "We should use water?", "opts": [("Wastefully", False), ("Carefully", True), ("Carelessly", False), ("Unlimitedly", False)], "topic": "Natural Resources"},
    {"q": "Plants need:", "opts": [("Only water", False), ("Water, soil, sunlight", True), ("Only sunlight", False), ("Only air", False)], "topic": "Natural Resources"},
]

# Generate JavaScript code
def generate_js():
    output = "// Assessment Questions Database - CBSE Standard 1\nconst assessmentQuestions = {\n"
    
    subjects = {
        "mathematics": math_questions,
        "english": english_questions,
        "hindi": hindi_questions,
        "computer": computer_questions,
        "kannada": kannada_questions,
        "evs": evs_questions
    }
    
    for subject_name, questions in subjects.items():
        output += f"  {subject_name}: [\n"
        for idx, q in enumerate(questions, 1):
            output += "    {\n"
            output += f'      id: {idx},\n'
            output += f'      question: "{q["q"].replace('"', '\\"')}",\n'
            output += '      options: [\n'
            for text, correct in q["opts"]:
                output += f'        {{ text: "{text.replace('"', '\\"')}", correct: {str(correct).lower()} }},\n'
            output += "      ],\n"
            output += f'      topic: "{q["topic"]}"\n'
            output += "    },\n"
        output += "  ],\n\n"
    
    output += "};\n"
    return output

# Print to file
with open("e:\\kid-learning-game\\assessment_expanded.js", "w", encoding="utf-8") as f:
    f.write(generate_js())

# Print summary
total_questions = sum(len(q) for q in [math_questions, english_questions, hindi_questions, computer_questions, kannada_questions, evs_questions])
print(f"✅ Generated {total_questions} questions across 6 subjects")
print(f"Mathematics: {len(math_questions)}")
print(f"English: {len(english_questions)}")
print(f"Hindi: {len(hindi_questions)}")
print(f"Computer: {len(computer_questions)}")
print(f"Kannada: {len(kannada_questions)}")
print(f"EVS: {len(evs_questions)}")
