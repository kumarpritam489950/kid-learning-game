globalThis.GAME_DATA = {
  app: {
    classLevel: "Class 1",
    board: "CBSE-style",
    praiseMessages: [
      "Great Job! 🌟",
      "Awesome! 🎉",
      "Super Star! ⭐",
      "You are amazing! 🏆",
      "Fantastic! 🎊",
      "Brilliant! 💡",
      "WOW! Well done! 👏",
      "Keep it up! 🚀",
      "You got it! 🎯",
      "Perfect! 💯"
    ],
    tryMessages: [
      "Try Again! 💪",
      "Almost there! 😊",
      "Good try! One more!",
      "You can do it! 🌈"
    ]
  },
  curriculum: {
    math: {
      name: "Math",
      icon: "➕",
      description: "Numbers 1–20, operations, and basic geometry.",
      modules: [
        {
          id: "math_counting",
          title: "Counting 1 to 20",
          type: "counting",
          questions: 10,
          items: ["🍎", "🧸", "⭐", "🟢", "🦋", "🍌", "🐝", "🌸"]
        },
        {
          id: "math_addition",
          title: "Simple Addition",
          type: "arithmetic",
          questions: 10,
          operation: "add",
          minValue: 0,
          maxValue: 10,
          maxAnswer: 20,
          visualItems: ["🍎", "🍊", "🍋", "🍇", "🍓"]
        },
        {
          id: "math_subtraction",
          title: "Simple Subtraction",
          type: "arithmetic",
          questions: 10,
          operation: "subtract",
          minValue: 0,
          maxValue: 10,
          maxAnswer: 10,
          visualItems: ["🧱", "⭐", "🏀", "🐝", "🌻"]
        },
        {
          id: "math_shapes",
          title: "Basic Shapes",
          type: "shape",
          questions: 10,
          shapes: [
            { name: "Circle",    symbol: "●" },
            { name: "Square",    symbol: "■" },
            { name: "Triangle",  symbol: "▲" },
            { name: "Rectangle", symbol: "▬" },
            { name: "Star",      symbol: "★" },
            { name: "Diamond",   symbol: "◆" },
            { name: "Heart",     symbol: "♥" },
            { name: "Oval",      symbol: "⬭" }
          ]
        },
        {
          id: "math_numbers_big",
          title: "Numbers 21 to 99",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "How many tens are in 30?",            visual: "3️⃣0️⃣",  answer: "3",          options: ["3", "1", "2", "4"]              },
            { question: "What comes after 29?",                visual: "2️⃣9️⃣",  answer: "30",         options: ["30", "28", "31", "20"]          },
            { question: "What comes before 50?",              visual: "5️⃣0️⃣",  answer: "49",         options: ["49", "51", "40", "45"]          },
            { question: "How many tens and ones in 35?",      visual: "🔢",    answer: "3 tens 5 ones", options: ["3 tens 5 ones","5 tens 3 ones","30 ones","35 tens"] },
            { question: "45 means ___ tens and 5 ones.",       visual: "4️⃣5️⃣",  answer: "4",          options: ["4", "5", "3", "6"]              },
            { question: "What is the tens digit in 67?",       visual: "6️⃣7️⃣",  answer: "6",          options: ["6", "7", "60", "70"]            },
            { question: "What is the ones digit in 83?",       visual: "8️⃣3️⃣",  answer: "3",          options: ["3", "8", "0", "1"]              },
            { question: "Which number is between 40 and 42?",  visual: "🔢",    answer: "41",         options: ["41", "39", "43", "44"]          },
            { question: "Count by 10s: 10, 20, 30, ___.",      visual: "🔟",    answer: "40",         options: ["40", "35", "50", "33"]          },
            { question: "Count by 5s: 25, 30, ___.",           visual: "5️⃣",    answer: "35",         options: ["35", "33", "40", "37"]          },
            { question: "Which is the greatest number?",       visual: "🔢",    answer: "99",         options: ["99", "89", "79", "69"]          },
            { question: "Which is the smallest 2-digit number?",visual: "🔢",   answer: "10",         options: ["10", "11", "20", "99"]          },
            { question: "70 written in words is…",             visual: "7️⃣0️⃣",  answer: "Seventy",    options: ["Seventy", "Sixty", "Eighty", "Fifty"]},
            { question: "55 means 5 tens and ___ ones.",       visual: "5️⃣5️⃣",  answer: "5",          options: ["5", "0", "10", "55"]            },
            { question: "What number comes just after 99?",    visual: "9️⃣9️⃣",  answer: "100",        options: ["100", "98", "90", "101"]        },
            { question: "Arrange: Which is smallest? 34, 43, 24, 44", visual: "🔢", answer: "24", options: ["24", "34", "43", "44"]           },
            { question: "What is 40 + 5?",                     visual: "➕",    answer: "45",         options: ["45", "40", "55", "50"]          },
            { question: "30 + 0 = ?",                          visual: "➕",    answer: "30",         options: ["30", "3", "300", "31"]          },
            { question: "How many tens in 90?",                visual: "9️⃣0️⃣",  answer: "9",          options: ["9", "0", "90", "19"]            },
            { question: "Which is even: 21, 22, 23, 25?",      visual: "🔢",    answer: "22",         options: ["22", "21", "23", "25"]          }
          ]
        },
        {
          id: "math_compare",
          title: "Greater, Smaller, Equal",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "5 ___ 3  (Use >, < or =)",           visual: "5 ☐ 3",  answer: ">",  options: [">", "<", "=", "+"]     },
            { question: "2 ___ 8  (Use >, < or =)",           visual: "2 ☐ 8",  answer: "<",  options: ["<", ">", "=", "-"]     },
            { question: "7 ___ 7  (Use >, < or =)",           visual: "7 ☐ 7",  answer: "=",  options: ["=", ">", "<", "≠"]     },
            { question: "10 ___ 9 (Use >, < or =)",           visual: "10 ☐ 9", answer: ">",  options: [">", "<", "=", "≈"]     },
            { question: "4 ___ 6  (Use >, < or =)",           visual: "4 ☐ 6",  answer: "<",  options: ["<", ">", "=", "+"]     },
            { question: "15 ___ 15 (Use >, < or =)",          visual: "15 ☐ 15",answer: "=",  options: ["=", ">", "<", "≠"]     },
            { question: "12 ___ 20 (Use >, < or =)",          visual: "12 ☐ 20",answer: "<",  options: ["<", ">", "=", "-"]     },
            { question: "18 ___ 8 (Use >, < or =)",           visual: "18 ☐ 8", answer: ">",  options: [">", "<", "=", "×"]     },
            { question: "Which is greater: 14 or 41?",        visual: "🔢",      answer: "41", options: ["41", "14", "Both equal","Neither"] },
            { question: "Which is smaller: 9 or 6?",          visual: "🔢",      answer: "6",  options: ["6", "9", "Both equal","Cannot say"] },
            { question: "0 ___ 1  (Use >, < or =)",           visual: "0 ☐ 1",  answer: "<",  options: ["<", ">", "=", "+"]     },
            { question: "20 ___ 20 (Use >, < or =)",          visual: "20 ☐ 20",answer: "=",  options: ["=", ">", "<", "≠"]     },
            { question: "Greatest number from: 7, 3, 9, 5",   visual: "🔢",      answer: "9",  options: ["9", "7", "5", "3"]     },
            { question: "Smallest number from: 8, 2, 6, 4",   visual: "🔢",      answer: "2",  options: ["2", "4", "6", "8"]     },
            { question: "Arrange 5, 2, 8, 1 from smallest. First is…",visual:"🔢",answer:"1",options: ["1", "2", "5", "8"]     }
          ]
        },
        {
          id: "math_patterns",
          title: "Patterns",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Complete: 🔴🔵🔴🔵🔴 ___",         visual: "🔴🔵🔴🔵🔴",  answer: "🔵",   options: ["🔵", "🔴", "🟡", "🟢"]   },
            { question: "Complete: ⭐🌙⭐🌙⭐ ___",           visual: "⭐🌙⭐🌙⭐",   answer: "🌙",   options: ["🌙", "⭐", "☀️", "🌟"]    },
            { question: "Complete: 🐶🐱🐶🐱 ___",            visual: "🐶🐱🐶🐱",    answer: "🐶",   options: ["🐶", "🐱", "🐦", "🐸"]   },
            { question: "Complete: 1, 2, 3, 1, 2, ___",     visual: "1 2 3 1 2",   answer: "3",    options: ["3", "1", "4", "2"]        },
            { question: "Complete: 2, 4, 6, 8, ___",         visual: "2 4 6 8",     answer: "10",   options: ["10", "9", "12", "11"]     },
            { question: "Complete: 5, 10, 15, 20, ___",      visual: "5 10 15 20",  answer: "25",   options: ["25", "22", "30", "21"]    },
            { question: "Complete: 🟠🟠🔵🟠🟠 ___",          visual: "🟠🟠🔵🟠🟠",  answer: "🔵",   options: ["🔵", "🟠", "🔴", "🟡"]   },
            { question: "Complete: A B B A B ___",           visual: "A B B A B",   answer: "B",    options: ["B", "A", "C", "D"]        },
            { question: "Complete: ▲●▲●▲ ___",               visual: "▲●▲●▲",      answer: "●",    options: ["●", "▲", "■", "★"]       },
            { question: "Complete: 10, 20, 30, 40, ___",     visual: "10 20 30 40", answer: "50",   options: ["50", "45", "60", "41"]    },
            { question: "Complete: 🍎🍊🍎🍊 ___",            visual: "🍎🍊🍎🍊",    answer: "🍎",   options: ["🍎", "🍊", "🍋", "🍇"]   },
            { question: "Complete: 1, 3, 5, 7, ___",         visual: "1 3 5 7",     answer: "9",    options: ["9", "8", "11", "10"]      },
            { question: "Which comes next: 🌸🌸🌺🌸🌸 ___",  visual: "🌸🌸🌺🌸🌸",  answer: "🌺",   options: ["🌺", "🌸", "🌻", "🌹"]   },
            { question: "Complete: 100, 90, 80, 70, ___",    visual: "100 90 80 70",answer: "60",   options: ["60", "65", "50", "55"]    },
            { question: "Complete: ■▲■▲■ ___",               visual: "■▲■▲■",      answer: "▲",    options: ["▲", "■", "●", "◆"]       }
          ]
        },
        {
          id: "math_time",
          title: "Time and Calendar",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "How many days are in a week?",        visual: "📅",  answer: "7",           options: ["7", "5", "6", "10"]               },
            { question: "Which day comes after Monday?",       visual: "📅",  answer: "Tuesday",     options: ["Tuesday", "Sunday", "Wednesday", "Thursday"] },
            { question: "Which day comes before Friday?",      visual: "📅",  answer: "Thursday",    options: ["Thursday", "Saturday", "Monday", "Wednesday"] },
            { question: "How many months are in a year?",      visual: "🗓️", answer: "12",           options: ["12", "10", "7", "30"]             },
            { question: "First month of the year is…",        visual: "🗓️", answer: "January",      options: ["January", "March", "April", "June"] },
            { question: "Last month of the year is…",         visual: "🗓️", answer: "December",     options: ["December", "November", "October", "August"] },
            { question: "We sleep at ___.",                    visual: "🌙",  answer: "Night",        options: ["Night", "Morning", "Noon", "Afternoon"] },
            { question: "We go to school in the ___.",         visual: "🏫",  answer: "Morning",      options: ["Morning", "Night", "Evening", "Midnight"] },
            { question: "We eat lunch at ___.",                visual: "🍱",  answer: "Noon",         options: ["Noon", "Night", "Dawn", "Evening"] },
            { question: "How many hours are in a day?",        visual: "⏰",  answer: "24",           options: ["24", "12", "7", "60"]             },
            { question: "How many minutes are in one hour?",   visual: "⏱️", answer: "60",           options: ["60", "30", "100", "24"]           },
            { question: "Which day comes after Saturday?",     visual: "📅",  answer: "Sunday",       options: ["Sunday", "Monday", "Friday", "Thursday"] },
            { question: "February is the ___ month.",          visual: "🗓️", answer: "2nd",          options: ["2nd", "1st", "3rd", "4th"]        },
            { question: "The sun rises in the ___.",           visual: "🌅",  answer: "East",         options: ["East", "West", "North", "South"]  },
            { question: "Which month comes after March?",      visual: "🗓️", answer: "April",        options: ["April", "February", "May", "June"] },
            { question: "Week starts on ___.",                 visual: "📅",  answer: "Monday",       options: ["Monday", "Sunday", "Saturday", "Tuesday"] },
            { question: "Summer is the ___ season.",           visual: "☀️",  answer: "Hot",          options: ["Hot", "Cold", "Rainy", "Windy"]   },
            { question: "Winter is the ___ season.",           visual: "❄️",  answer: "Cold",         options: ["Cold", "Hot", "Rainy", "Sunny"]   },
            { question: "How many seconds in a minute?",       visual: "⏱️", answer: "60",           options: ["60", "30", "100", "120"]          },
            { question: "School holidays are on ___.",         visual: "🎉",  answer: "Sunday",       options: ["Sunday", "Monday", "Tuesday", "Wednesday"] }
          ]
        },
        {
          id: "math_measurement",
          title: "Measurement & Money",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "A giraffe is ___ than a cat.",         visual: "🦒🐱", answer: "Taller",    options: ["Taller", "Shorter", "Same", "Smaller"]   },
            { question: "A feather is ___ than a stone.",       visual: "🪶🪨", answer: "Lighter",   options: ["Lighter", "Heavier", "Same", "Bigger"]   },
            { question: "An elephant is ___ than a rabbit.",    visual: "🐘🐰", answer: "Heavier",   options: ["Heavier", "Lighter", "Same", "Faster"]   },
            { question: "A pencil is ___ than a ruler.",        visual: "✏️📏", answer: "Shorter",   options: ["Shorter", "Longer", "Same", "Taller"]    },
            { question: "A bucket holds ___ water than a cup.", visual: "🪣🥤", answer: "More",      options: ["More", "Less", "Same", "No"]             },
            { question: "A spoon holds ___ water than a pot.",  visual: "🥄🍲", answer: "Less",      options: ["Less", "More", "Same", "Enough"]         },
            { question: "We measure length in ___.",            visual: "📏",   answer: "cm/m",      options: ["cm/m", "kg/g", "litre", "hour"]          },
            { question: "We measure weight in ___.",            visual: "⚖️",   answer: "kg or g",   options: ["kg or g", "cm", "litre", "km"]           },
            { question: "We measure liquid in ___.",            visual: "🥛",   answer: "Litres",    options: ["Litres", "Kilos", "Metres", "Hours"]      },
            { question: "A ₹10 note is ___ than a ₹5 coin.",    visual: "💵",   answer: "More",      options: ["More", "Less", "Same", "Equal"]          },
            { question: "How many ₹1 coins make ₹5?",          visual: "🪙",   answer: "5",         options: ["5", "1", "10", "2"]                      },
            { question: "How many 50p coins make ₹1?",          visual: "🪙",   answer: "2",         options: ["2", "5", "10", "1"]                      },
            { question: "Which is longest: pencil, pen, eraser?",visual:"✏️",  answer: "Pencil",    options: ["Pencil", "Pen", "Eraser", "All same"]    },
            { question: "A tall building is ___ than a house.", visual: "🏢🏠", answer: "Taller",    options: ["Taller", "Shorter", "Same", "Smaller"]   },
            { question: "Price of apple is ₹10, banana ₹5. Which is cheaper?",visual:"🛒",answer:"Banana",options:["Banana","Apple","Same price","Cannot say"]}
          ]
        },
        {
          id: "math_ascending_descending",
          title: "Ascending & Descending Order",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Arrange in ascending order: 5, 2, 8, 3. First is:", visual: "↗️", answer: "2", options: ["2", "3", "5", "8"] },
            { question: "Arrange in ascending order: 9, 4, 6, 1. First is:", visual: "↗️", answer: "1", options: ["1", "4", "6", "9"] },
            { question: "Arrange in ascending order: 7, 3, 5, 9. Last is:", visual: "↗️", answer: "9", options: ["3", "5", "7", "9"] },
            { question: "Arrange in descending order: 4, 8, 2, 6. First is:", visual: "↘️", answer: "8", options: ["2", "4", "6", "8"] },
            { question: "Arrange in descending order: 1, 9, 5, 3. First is:", visual: "↘️", answer: "9", options: ["1", "3", "5", "9"] },
            { question: "Arrange in descending order: 7, 2, 5, 9. Last is:", visual: "↘️", answer: "2", options: ["2", "5", "7", "9"] },
            { question: "Smallest to largest: 10, 20, 5, 15. First is:", visual: "↗️", answer: "5", options: ["5", "10", "15", "20"] },
            { question: "Largest to smallest: 12, 8, 15, 3. First is:", visual: "↘️", answer: "15", options: ["3", "8", "12", "15"] },
            { question: "Arrange ascending: 14, 11, 18, 9. Second is:", visual: "↗️", answer: "11", options: ["9", "11", "14", "18"] },
            { question: "Arrange descending: 6, 10, 3, 8. Third is:", visual: "↘️", answer: "6", options: ["3", "6", "8", "10"] },
            { question: "Which order: 1, 2, 3, 4, 5?", visual: "🔢", answer: "Ascending", options: ["Ascending", "Descending", "Random", "Equal"] },
            { question: "Which order: 10, 8, 6, 4, 2?", visual: "🔢", answer: "Descending", options: ["Ascending", "Descending", "Random", "Equal"] },
            { question: "Next in ascending: 3, 6, 9, ___", visual: "↗️", answer: "12", options: ["10", "11", "12", "15"] },
            { question: "Next in descending: 20, 15, 10, ___", visual: "↘️", answer: "5", options: ["5", "8", "12", "25"] },
            { question: "Arrange 25, 30, 20 in ascending. Middle is:", visual: "↗️", answer: "25", options: ["20", "25", "30", "15"] }
          ]
        },
        {
          id: "math_word_problems",
          title: "Simple Word Problems",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "I have 3 apples. I get 2 more. How many do I have?", visual: "🍎🍎", answer: "5", options: ["5", "4", "3", "6"] },
            { question: "There are 7 birds. 2 fly away. How many are left?", visual: "🐦🐦", answer: "5", options: ["5", "9", "7", "2"] },
            { question: "I have 4 pencils. My friend gives me 3 more. Total?", visual: "✏️✏️", answer: "7", options: ["7", "1", "4", "3"] },
            { question: "5 balloons burst. I had 8. How many are left?", visual: "🎈🎈", answer: "3", options: ["3", "13", "5", "8"] },
            { question: "6 cats and 4 dogs. How many animals in total?", visual: "🐱🐶", answer: "10", options: ["10", "2", "6", "4"] },
            { question: "10 candies. I eat 3. How many left?", visual: "🍬🍬", answer: "7", options: ["7", "13", "10", "3"] },
            { question: "I have 2 toys. My sister has 5. Total?", visual: "🧸🧸", answer: "7", options: ["7", "3", "2", "5"] },
            { question: "8 flowers in vase. 3 wither. How many fresh?", visual: "🌸🌸", answer: "5", options: ["5", "11", "8", "3"] },
            { question: "5 books on table, 5 on shelf. Total?", visual: "📚📚", answer: "10", options: ["10", "0", "5", "15"] },
            { question: "9 stars. 4 hide. How many still shining?", visual: "⭐⭐", answer: "5", options: ["5", "13", "9", "4"] },
            { question: "I have 6 marbles. I lose 2. How many left?", visual: "⚪⚪", answer: "4", options: ["4", "8", "6", "2"] },
            { question: "3 red balls and 4 blue balls. Total?", visual: "🔴🔵", answer: "7", options: ["7", "1", "3", "4"] },
            { question: "12 cookies. I give 5 to friend. How many left?", visual: "🍪🍪", answer: "7", options: ["7", "17", "12", "5"] },
            { question: "7 crayons. I buy 3 more. Total?", visual: "🖍️🖍️", answer: "10", options: ["10", "4", "7", "3"] },
            { question: "15 children. 10 are boys. How many girls?", visual: "👧👦", answer: "5", options: ["5", "25", "15", "10"] }
          ]
        },
        {
          id: "math_even_odd",
          title: "Even & Odd Numbers",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Is 2 even or odd?", visual: "2️⃣", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] },
            { question: "Is 5 even or odd?", visual: "5️⃣", answer: "Odd", options: ["Odd", "Even", "Neither", "Both"] },
            { question: "Is 8 even or odd?", visual: "8️⃣", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] },
            { question: "Is 11 even or odd?", visual: "🔢", answer: "Odd", options: ["Odd", "Even", "Neither", "Both"] },
            { question: "Is 10 even or odd?", visual: "🔟", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] },
            { question: "Which is an even number?", visual: "🔢", answer: "4", options: ["4", "3", "5", "7"] },
            { question: "Which is an odd number?", visual: "🔢", answer: "9", options: ["9", "6", "8", "10"] },
            { question: "Is 14 even or odd?", visual: "🔢", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] },
            { question: "Is 17 even or odd?", visual: "🔢", answer: "Odd", options: ["Odd", "Even", "Neither", "Both"] },
            { question: "Is 20 even or odd?", visual: "2️⃣0️⃣", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] },
            { question: "Which is even: 1, 2, 3, 5?", visual: "🔢", answer: "2", options: ["2", "1", "3", "5"] },
            { question: "Which is odd: 4, 6, 7, 8?", visual: "🔢", answer: "7", options: ["7", "4", "6", "8"] },
            { question: "Is 0 even or odd?", visual: "0️⃣", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] },
            { question: "Is 13 even or odd?", visual: "🔢", answer: "Odd", options: ["Odd", "Even", "Neither", "Both"] },
            { question: "Is 16 even or odd?", visual: "🔢", answer: "Even", options: ["Even", "Odd", "Neither", "Both"] }
          ]
        },
        {
          id: "math_before_after_between",
          title: "Before, After & Between",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Which number comes before 5?", visual: "_️, 5", answer: "4", options: ["4", "6", "5", "3"] },
            { question: "Which number comes after 8?", visual: "8, _️", answer: "9", options: ["9", "7", "8", "10"] },
            { question: "Which number is between 3 and 5?", visual: "3, _, 5", answer: "4", options: ["4", "2", "6", "3"] },
            { question: "Which number comes before 10?", visual: "_️, 10", answer: "9", options: ["9", "11", "10", "8"] },
            { question: "Which number comes after 15?", visual: "15, _️", answer: "16", options: ["16", "14", "15", "17"] },
            { question: "Which number is between 7 and 9?", visual: "7, _, 9", answer: "8", options: ["8", "6", "10", "7"] },
            { question: "Which number comes before 1?", visual: "_️, 1", answer: "0", options: ["0", "2", "1", "-1"] },
            { question: "Which number comes after 19?", visual: "19, _️", answer: "20", options: ["20", "18", "19", "21"] },
            { question: "Which number is between 11 and 13?", visual: "11, _, 13", answer: "12", options: ["12", "10", "14", "11"] },
            { question: "Which number comes before 20?", visual: "_️, 20", answer: "19", options: ["19", "21", "20", "18"] },
            { question: "Which number comes after 12?", visual: "12, _️", answer: "13", options: ["13", "11", "12", "14"] },
            { question: "Which number is between 14 and 16?", visual: "14, _, 16", answer: "15", options: ["15", "13", "17", "14"] },
            { question: "Which number comes before 7?", visual: "_️, 7", answer: "6", options: ["6", "8", "7", "5"] },
            { question: "Which number comes after 9?", visual: "9, _️", answer: "10", options: ["10", "8", "9", "11"] },
            { question: "Which number is between 5 and 7?", visual: "5, _, 7", answer: "6", options: ["6", "4", "8", "5"] }
          ]
        },
        {
          id: "math_place_value",
          title: "Tens & Ones (Place Value)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "In 15, how many tens?", visual: "1️⃣5️⃣", answer: "1", options: ["1", "5", "15", "0"] },
            { question: "In 15, how many ones?", visual: "1️⃣5️⃣", answer: "5", options: ["5", "1", "15", "0"] },
            { question: "In 23, what is the tens digit?", visual: "2️⃣3️⃣", answer: "2", options: ["2", "3", "23", "5"] },
            { question: "In 47, what is the ones digit?", visual: "4️⃣7️⃣", answer: "7", options: ["7", "4", "47", "11"] },
            { question: "3 tens and 2 ones make…", visual: "🔢", answer: "32", options: ["32", "23", "5", "302"] },
            { question: "5 tens and 8 ones make…", visual: "🔢", answer: "58", options: ["58", "85", "13", "508"] },
            { question: "In 60, how many ones?", visual: "6️⃣0️⃣", answer: "0", options: ["0", "6", "60", "10"] },
            { question: "In 89, how many tens?", visual: "8️⃣9️⃣", answer: "8", options: ["8", "9", "89", "17"] },
            { question: "7 tens and 0 ones make…", visual: "🔢", answer: "70", options: ["70", "7", "0", "700"] },
            { question: "In 12, how many tens?", visual: "1️⃣2️⃣", answer: "1", options: ["1", "2", "12", "3"] },
            { question: "9 tens and 4 ones make…", visual: "🔢", answer: "94", options: ["94", "49", "13", "904"] },
            { question: "In 36, what is the tens digit?", visual: "3️⃣6️⃣", answer: "3", options: ["3", "6", "36", "9"] },
            { question: "In 51, what is the ones digit?", visual: "5️⃣1️⃣", answer: "1", options: ["1", "5", "51", "6"] },
            { question: "2 tens and 9 ones make…", visual: "🔢", answer: "29", options: ["29", "92", "11", "209"] },
            { question: "In 78, how many ones?", visual: "7️⃣8️⃣", answer: "8", options: ["8", "7", "78", "15"] }
          ]
        },
        {
          id: "math_number_names_50",
          title: "Number Names up to 50",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "What is the number name for 11?",  visual: "1️⃣1️⃣", answer: "Eleven",       options: ["Eleven", "Twelve", "Thirteen", "Ten"]         },
            { question: "What is the number name for 12?",  visual: "1️⃣2️⃣", answer: "Twelve",       options: ["Twelve", "Eleven", "Twenty", "Thirteen"]       },
            { question: "What is the number name for 13?",  visual: "1️⃣3️⃣", answer: "Thirteen",     options: ["Thirteen", "Thirty", "Fourteen", "Twelve"]     },
            { question: "What is the number name for 14?",  visual: "1️⃣4️⃣", answer: "Fourteen",     options: ["Fourteen", "Forty", "Thirteen", "Fifteen"]     },
            { question: "What is the number name for 15?",  visual: "1️⃣5️⃣", answer: "Fifteen",      options: ["Fifteen", "Fifty", "Fourteen", "Sixteen"]      },
            { question: "What is the number name for 16?",  visual: "1️⃣6️⃣", answer: "Sixteen",      options: ["Sixteen", "Sixty", "Seventeen", "Fifteen"]     },
            { question: "What is the number name for 17?",  visual: "1️⃣7️⃣", answer: "Seventeen",    options: ["Seventeen", "Seventy", "Sixteen", "Eighteen"]  },
            { question: "What is the number name for 18?",  visual: "1️⃣8️⃣", answer: "Eighteen",     options: ["Eighteen", "Eighty", "Seventeen", "Nineteen"]  },
            { question: "What is the number name for 19?",  visual: "1️⃣9️⃣", answer: "Nineteen",     options: ["Nineteen", "Ninety", "Eighteen", "Twenty"]     },
            { question: "What is the number name for 20?",  visual: "2️⃣0️⃣", answer: "Twenty",       options: ["Twenty", "Twelve", "Two", "Nineteen"]          },
            { question: "What is the number name for 21?",  visual: "2️⃣1️⃣", answer: "Twenty-one",   options: ["Twenty-one", "Twenty", "Eleven", "Thirty-one"] },
            { question: "What is the number name for 30?",  visual: "3️⃣0️⃣", answer: "Thirty",       options: ["Thirty", "Thirteen", "Three", "Twenty"]        },
            { question: "What is the number name for 40?",  visual: "4️⃣0️⃣", answer: "Forty",        options: ["Forty", "Fourteen", "Four", "Thirty"]          },
            { question: "What is the number name for 50?",  visual: "5️⃣0️⃣", answer: "Fifty",        options: ["Fifty", "Fifteen", "Five", "Forty"]            },
            { question: "Which number is 'Thirteen'?",      visual: "🔢",    answer: "13",           options: ["13", "30", "3", "31"]                          },
            { question: "Which number is 'Eighteen'?",      visual: "🔢",    answer: "18",           options: ["18", "80", "8", "81"]                          },
            { question: "Which number is 'Forty'?",         visual: "🔢",    answer: "40",           options: ["40", "14", "4", "44"]                          },
            { question: "What is the number name for 35?",  visual: "3️⃣5️⃣", answer: "Thirty-five",  options: ["Thirty-five", "Fifty-three", "Twenty-five", "Forty-five"] },
            { question: "What is the number name for 42?",  visual: "4️⃣2️⃣", answer: "Forty-two",    options: ["Forty-two", "Twenty-four", "Forty", "Thirty-two"]           },
            { question: "Which number is 'Twenty-seven'?",  visual: "🔢",    answer: "27",           options: ["27", "72", "17", "37"]                         }
          ]
        },
        {
          id: "math_counting_tens",
          title: "Counting in Tens",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "1 ten = ?",                                  visual: "🔟",       answer: "10",  options: ["10", "1", "100", "11"]     },
            { question: "2 tens = ?",                                  visual: "🔟🔟",     answer: "20",  options: ["20", "2", "12", "22"]      },
            { question: "3 tens = ?",                                  visual: "🔟🔟🔟",   answer: "30",  options: ["30", "3", "13", "23"]      },
            { question: "4 tens = ?",                                  visual: "🔢",       answer: "40",  options: ["40", "4", "14", "44"]      },
            { question: "5 tens = ?",                                  visual: "🔢",       answer: "50",  options: ["50", "5", "15", "55"]      },
            { question: "10 ones = ?",                                 visual: "🔟",       answer: "1 ten", options: ["1 ten", "10 tens", "100", "10 ones"] },
            { question: "20 ones = ?",                                 visual: "🔢",       answer: "2 tens", options: ["2 tens", "20 tens", "200", "12"] },
            { question: "How many tens are in 30?",                    visual: "3️⃣0️⃣",   answer: "3",   options: ["3", "30", "0", "13"]       },
            { question: "Count by 10s: 10, 20, 30, 40, ___",          visual: "🔢",       answer: "50",  options: ["50", "45", "60", "41"]     },
            { question: "Count by 10s: 10, 20, ___, 40",              visual: "🔢",       answer: "30",  options: ["30", "25", "35", "32"]     },
            { question: "What comes next: 30, 40, ___?",              visual: "🔢",       answer: "50",  options: ["50", "45", "55", "42"]     },
            { question: "30 is the same as ___ tens.",                 visual: "3️⃣0️⃣",   answer: "3",   options: ["3", "30", "13", "0"]       },
            { question: "How many ones are in 2 tens?",               visual: "🔢",       answer: "20",  options: ["20", "2", "12", "22"]      },
            { question: "Which group shows 4 tens?",                   visual: "🔢",       answer: "40",  options: ["40", "4", "14", "400"]     },
            { question: "Count by 10s: ___, 20, 30, 40, 50. First is:", visual: "🔢",    answer: "10",  options: ["10", "5", "0", "15"]       }
          ]
        },
        {
          id: "math_number_combinations",
          title: "Number Combinations (Make 5 & 10)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "0 + ___ = 5",   visual: "⬛⬛⬛⬛⬛", answer: "5",  options: ["5", "4", "3", "0"]  },
            { question: "1 + ___ = 5",   visual: "🟦⬛⬛⬛⬛", answer: "4",  options: ["4", "5", "3", "6"]  },
            { question: "2 + ___ = 5",   visual: "🟦🟦⬛⬛⬛", answer: "3",  options: ["3", "2", "4", "7"]  },
            { question: "3 + ___ = 5",   visual: "🟦🟦🟦⬛⬛", answer: "2",  options: ["2", "3", "1", "5"]  },
            { question: "4 + ___ = 5",   visual: "🟦🟦🟦🟦⬛", answer: "1",  options: ["1", "4", "2", "0"]  },
            { question: "5 + ___ = 5",   visual: "🟦🟦🟦🟦🟦", answer: "0",  options: ["0", "5", "1", "10"] },
            { question: "0 + ___ = 10",  visual: "🔢",        answer: "10", options: ["10", "0", "5", "9"] },
            { question: "1 + ___ = 10",  visual: "🔢",        answer: "9",  options: ["9", "1", "8", "10"] },
            { question: "2 + ___ = 10",  visual: "🔢",        answer: "8",  options: ["8", "2", "7", "10"] },
            { question: "3 + ___ = 10",  visual: "🔢",        answer: "7",  options: ["7", "3", "6", "10"] },
            { question: "4 + ___ = 10",  visual: "🔢",        answer: "6",  options: ["6", "4", "5", "10"] },
            { question: "5 + ___ = 10",  visual: "🔢",        answer: "5",  options: ["5", "4", "6", "10"] },
            { question: "6 + ___ = 10",  visual: "🔢",        answer: "4",  options: ["4", "6", "3", "10"] },
            { question: "7 + ___ = 10",  visual: "🔢",        answer: "3",  options: ["3", "7", "2", "10"] },
            { question: "8 + ___ = 10",  visual: "🔢",        answer: "2",  options: ["2", "8", "1", "10"] },
            { question: "9 + ___ = 10",  visual: "🔢",        answer: "1",  options: ["1", "9", "0", "10"] },
            { question: "Ayush made 7 riddles on animals. He made 3 on fish. Total riddles?", visual: "🔢", answer: "10", options: ["10", "7", "3", "4"] },
            { question: "Which pair makes 10? 4 + ___",    visual: "🔢",  answer: "6",  options: ["6", "5", "4", "7"] },
            { question: "Which pair makes 5? 2 + ___",     visual: "🔢",  answer: "3",  options: ["3", "2", "4", "5"] },
            { question: "How many combinations of 4 are there?", visual: "🔢", answer: "5", options: ["5", "4", "3", "6"] }
          ]
        },
        {
          id: "math_add_three_numbers",
          title: "Adding Three Numbers",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "1 + 2 + 5 = ?",  visual: "➕",  answer: "8",  options: ["8", "7", "9", "6"]   },
            { question: "4 + 1 + 2 = ?",  visual: "➕",  answer: "7",  options: ["7", "6", "8", "5"]   },
            { question: "3 + 2 + 4 = ?",  visual: "➕",  answer: "9",  options: ["9", "8", "10", "7"]  },
            { question: "2 + 5 + 3 = ?",  visual: "➕",  answer: "10", options: ["10", "9", "11", "7"] },
            { question: "1 + 3 + 5 = ?",  visual: "➕",  answer: "9",  options: ["9", "8", "10", "7"]  },
            { question: "2 + 2 + 6 = ?",  visual: "➕",  answer: "10", options: ["10", "8", "9", "6"]  },
            { question: "3 + 3 + 3 = ?",  visual: "➕",  answer: "9",  options: ["9", "6", "12", "8"]  },
            { question: "4 + 4 + 1 = ?",  visual: "➕",  answer: "9",  options: ["9", "8", "10", "7"]  },
            { question: "5 + 3 + 2 = ?",  visual: "➕",  answer: "10", options: ["10", "9", "8", "11"] },
            { question: "1 + 4 + 4 = ?",  visual: "➕",  answer: "9",  options: ["9", "8", "10", "6"]  },
            { question: "2 + 3 + 4 = ?",  visual: "➕",  answer: "9",  options: ["9", "7", "10", "8"]  },
            { question: "3 + 4 + 2 = ?",  visual: "➕",  answer: "9",  options: ["9", "8", "7", "10"]  },
            { question: "4 red tops + 1 blue + 2 green = ? tops total",  visual: "🎯", answer: "7", options: ["7", "5", "6", "8"] },
            { question: "You can add 3 numbers in ___ order and get the same answer.", visual: "🔢", answer: "any", options: ["any", "only one", "big to small", "no"] },
            { question: "1 + 2 + 3 = ?",  visual: "➕",  answer: "6",  options: ["6", "5", "7", "4"]   }
          ]
        },
        {
          id: "math_one_more_less",
          title: "One More & One Less",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "One more than 5 is ___.",   visual: "5️⃣",  answer: "6",  options: ["6", "4", "5", "7"]   },
            { question: "One less than 5 is ___.",   visual: "5️⃣",  answer: "4",  options: ["4", "6", "5", "3"]   },
            { question: "One more than 10 is ___.",  visual: "🔟",   answer: "11", options: ["11", "9", "10", "12"] },
            { question: "One less than 10 is ___.",  visual: "🔟",   answer: "9",  options: ["9", "11", "10", "8"]  },
            { question: "One more than 19 is ___.",  visual: "1️⃣9️⃣", answer: "20", options: ["20", "18", "19", "21"] },
            { question: "One less than 20 is ___.",  visual: "2️⃣0️⃣", answer: "19", options: ["19", "21", "20", "18"] },
            { question: "One more than 23 is ___.",  visual: "🔢",   answer: "24", options: ["24", "22", "23", "25"] },
            { question: "One less than 23 is ___.",  visual: "🔢",   answer: "22", options: ["22", "24", "23", "21"] },
            { question: "One more than 35 is ___.",  visual: "🔢",   answer: "36", options: ["36", "34", "35", "37"] },
            { question: "One less than 35 is ___.",  visual: "🔢",   answer: "34", options: ["34", "36", "35", "33"] },
            { question: "One more than 15 is ___.",  visual: "1️⃣5️⃣", answer: "16", options: ["16", "14", "15", "17"] },
            { question: "One less than 16 is ___.",  visual: "1️⃣6️⃣", answer: "15", options: ["15", "17", "16", "14"] },
            { question: "One more than 28 is ___.",  visual: "🔢",   answer: "29", options: ["29", "27", "28", "30"] },
            { question: "One less than 21 is ___.",  visual: "🔢",   answer: "20", options: ["20", "22", "21", "19"] },
            { question: "'One more' is the same as the number ___.", visual: "🔢", answer: "after", options: ["after", "before", "between", "equal"] }
          ]
        },
        {
          id: "math_count_forward_subtract",
          title: "Count Forward to Subtract",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "7 – 4 = ? (Count from 4 to 7)",   visual: "🔢", answer: "3",  options: ["3", "4", "2", "11"]  },
            { question: "9 – 6 = ? (Count from 6 to 9)",   visual: "🔢", answer: "3",  options: ["3", "6", "2", "15"]  },
            { question: "8 – 5 = ? (Count from 5 to 8)",   visual: "🔢", answer: "3",  options: ["3", "5", "4", "13"]  },
            { question: "10 – 7 = ? (Count from 7 to 10)", visual: "🔢", answer: "3",  options: ["3", "7", "4", "17"]  },
            { question: "6 – 3 = ? (Count from 3 to 6)",   visual: "🔢", answer: "3",  options: ["3", "2", "4", "9"]   },
            { question: "5 – 2 = ? (Count from 2 to 5)",   visual: "🔢", answer: "3",  options: ["3", "2", "5", "7"]   },
            { question: "10 – 3 = ?",                       visual: "🔢", answer: "7",  options: ["7", "3", "13", "6"]  },
            { question: "10 – 2 = ?",                       visual: "🔢", answer: "8",  options: ["8", "2", "12", "9"]  },
            { question: "10 – 4 = ?",                       visual: "🔢", answer: "6",  options: ["6", "4", "14", "5"]  },
            { question: "10 – 1 = ?",                       visual: "🔢", answer: "9",  options: ["9", "1", "11", "8"]  },
            { question: "The baker made 10 pastries. He sold 3. How many left?", visual: "🍰", answer: "7", options: ["7", "3", "13", "10"] },
            { question: "9 boats in the lake. 4 more brought. How many in all?", visual: "⛵", answer: "13", options: ["13", "5", "9", "4"]  },
            { question: "7 children in bus. 5 more join. How many in bus?",      visual: "🚌", answer: "12", options: ["12", "2", "7", "5"]  },
            { question: "9 dogs and 7 cats in playground. Total animals?",       visual: "🐾", answer: "16", options: ["16", "2", "9", "7"]  },
            { question: "8 clowns on stage. 3 more join. How many now?",         visual: "🤡", answer: "11", options: ["11", "5", "8", "3"]  }
          ]
        }
      ]
    },
    english: {
      name: "English",
      icon: "📘",
      description: "CVC words, picture-word matching, and sight words.",
      modules: [
        {
          id: "eng_missing_letters",
          title: "Missing Letters (CVC)",
          type: "missingLetter",
          questions: 10,
          words: [
            { display: "C _ T",  answer: "A", fullWord: "CAT"  },
            { display: "D _ G",  answer: "O", fullWord: "DOG"  },
            { display: "S _ N",  answer: "U", fullWord: "SUN"  },
            { display: "H _ T",  answer: "A", fullWord: "HAT"  },
            { display: "P _ N",  answer: "E", fullWord: "PEN"  },
            { display: "B _ G",  answer: "A", fullWord: "BAG"  },
            { display: "C _ P",  answer: "U", fullWord: "CUP"  },
            { display: "F _ N",  answer: "A", fullWord: "FAN"  },
            { display: "B _ D",  answer: "E", fullWord: "BED"  },
            { display: "H _ N",  answer: "E", fullWord: "HEN"  },
            { display: "P _ G",  answer: "I", fullWord: "PIG"  },
            { display: "P _ T",  answer: "O", fullWord: "POT"  },
            { display: "B _ S",  answer: "U", fullWord: "BUS"  },
            { display: "J _ T",  answer: "E", fullWord: "JET"  },
            { display: "H _ P",  answer: "O", fullWord: "HOP"  },
            { display: "M _ P",  answer: "O", fullWord: "MOP"  },
            { display: "W _ T",  answer: "E", fullWord: "WET"  },
            { display: "S _ T",  answer: "I", fullWord: "SIT"  },
            { display: "J _ M",  answer: "A", fullWord: "JAM"  },
            { display: "M _ N",  answer: "A", fullWord: "MAN"  },
            { display: "T _ N",  answer: "I", fullWord: "TIN"  },
            { display: "P _ N",  answer: "I", fullWord: "PIN"  },
            { display: "G _ M",  answer: "U", fullWord: "GUM"  },
            { display: "N _ T",  answer: "U", fullWord: "NUT"  },
            { display: "B _ G",  answer: "U", fullWord: "BUG"  },
            { display: "J _ G",  answer: "U", fullWord: "JUG"  },
            { display: "R _ G",  answer: "U", fullWord: "RUG"  },
            { display: "T _ B",  answer: "U", fullWord: "TUB"  },
            { display: "M _ G",  answer: "U", fullWord: "MUG"  },
            { display: "L _ G",  answer: "O", fullWord: "LOG"  },
            { display: "D _ T",  answer: "O", fullWord: "DOT"  },
            { display: "H _ T",  answer: "O", fullWord: "HOT"  },
            { display: "T _ P",  answer: "O", fullWord: "TOP"  },
            { display: "D _ D",  answer: "A", fullWord: "DAD"  },
            { display: "D _ P",  answer: "I", fullWord: "DIP"  },
            { display: "R _ P",  answer: "I", fullWord: "RIP"  },
            { display: "S _ P",  answer: "I", fullWord: "SIP"  },
            { display: "C _ P",  answer: "A", fullWord: "CAP"  },
            { display: "T _ P",  answer: "A", fullWord: "TAP"  },
            { display: "N _ P",  answer: "A", fullWord: "NAP"  }
          ]
        },
        {
          id: "eng_picture_word",
          title: "Picture to Word Match",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🐶", word: "DOG"       },
            { picture: "🐱", word: "CAT"       },
            { picture: "☀️", word: "SUN"       },
            { picture: "🍎", word: "APPLE"     },
            { picture: "🚌", word: "BUS"       },
            { picture: "🌳", word: "TREE"      },
            { picture: "🐟", word: "FISH"      },
            { picture: "🏠", word: "HOUSE"     },
            { picture: "🦁", word: "LION"      },
            { picture: "🐘", word: "ELEPHANT"  },
            { picture: "🍌", word: "BANANA"    },
            { picture: "🚗", word: "CAR"       },
            { picture: "🌸", word: "FLOWER"    },
            { picture: "🐦", word: "BIRD"      },
            { picture: "🐸", word: "FROG"      },
            { picture: "🦋", word: "BUTTERFLY" },
            { picture: "🌙", word: "MOON"      },
            { picture: "⭐", word: "STAR"      },
            { picture: "🍊", word: "ORANGE"    },
            { picture: "🍁", word: "LEAF"      },
            { picture: "🚂", word: "TRAIN"     },
            { picture: "✈️", word: "PLANE"     },
            { picture: "📖", word: "BOOK"      },
            { picture: "🖊️", word: "PEN"       },
            { picture: "🎒", word: "BAG"       },
            { picture: "🥛", word: "MILK"      },
            { picture: "🐮", word: "COW"       },
            { picture: "🐔", word: "HEN"       },
            { picture: "🐷", word: "PIG"       },
            { picture: "🦆", word: "DUCK"      },
            { picture: "🐰", word: "RABBIT"    },
            { picture: "🍇", word: "GRAPES"    },
            { picture: "🌊", word: "WAVE"      },
            { picture: "🐍", word: "SNAKE"     },
            { picture: "🦊", word: "FOX"       }
          ]
        },
        {
          id: "eng_sight_words",
          title: "Sight Words",
          type: "sightWord",
          questions: 10,
          words: [
            "THE", "AND", "IS",   "IN",   "IT",
            "TO",  "GO",  "WE",   "YOU",  "COME",
            "SEE", "HERE","MY",   "THIS", "HE",
            "SHE", "WAS", "ARE",  "BUT",  "HAVE",
            "FROM","BY",  "AT",   "AS",   "ALL",
            "AN",  "BE",  "CAN",  "DO",   "FOR",
            "GET", "HIM", "HIS",  "HOW",  "LET",
            "ME",  "NEW", "NO",   "NOT",  "OF",
            "ON",  "ONE", "SO",   "THEY", "UP",
            "US",  "WHO", "WILL", "PLAY", "RUN"
          ]
        },
        {
          id: "eng_alphabets",
          title: "Alphabet Recognition",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🍎 A", word: "A" }, { picture: "🏀 B", word: "B" }, { picture: "🐱 C", word: "C" },
            { picture: "🐶 D", word: "D" }, { picture: "🐘 E", word: "E" }, { picture: "🐟 F", word: "F" },
            { picture: "🍇 G", word: "G" }, { picture: "🏠 H", word: "H" }, { picture: "🍦 I", word: "I" },
            { picture: "🕹️ J", word: "J" }, { picture: "🪁 K", word: "K" }, { picture: "🦁 L", word: "L" },
            { picture: "🌙 M", word: "M" }, { picture: "🔔 N", word: "N" }, { picture: "🍊 O", word: "O" },
            { picture: "🍕 P", word: "P" }, { picture: "👑 Q", word: "Q" }, { picture: "🚀 R", word: "R" },
            { picture: "⭐ S", word: "S" }, { picture: "🎾 T", word: "T" }, { picture: "☂️ U", word: "U" },
            { picture: "🎻 V", word: "V" }, { picture: "🌊 W", word: "W" }, { picture: "📦 X", word: "X" },
            { picture: "🧶 Y", word: "Y" }, { picture: "🦓 Z", word: "Z" }
          ]
        },
        {
          id: "eng_vowels_consonants",
          title: "Vowels & Consonants",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Which is a vowel?",                  visual: "AEIOU",  answer: "A",   options: ["A", "B", "C", "D"] },
            { question: "Which is a vowel?",                  visual: "AEIOU",  answer: "E",   options: ["E", "F", "G", "H"] },
            { question: "Which is a vowel?",                  visual: "AEIOU",  answer: "I",   options: ["I", "J", "K", "L"] },
            { question: "Which is a vowel?",                  visual: "AEIOU",  answer: "O",   options: ["O", "P", "Q", "R"] },
            { question: "Which is a vowel?",                  visual: "AEIOU",  answer: "U",   options: ["U", "V", "W", "X"] },
            { question: "Which is a consonant?",              visual: "BCDFG",  answer: "B",   options: ["A", "B", "E", "I"] },
            { question: "Which is a consonant?",              visual: "JKLMN",  answer: "M",   options: ["M", "A", "O", "U"] },
            { question: "How many vowels in English?",        visual: "A E I O U", answer: "5", options: ["3", "5", "7", "10"] },
            { question: "CAT starts with a…",                 visual: "🐱 CAT", answer: "Consonant", options: ["Vowel", "Consonant", "Number", "Symbol"] },
            { question: "APPLE starts with a…",               visual: "🍎 APPLE", answer: "Vowel", options: ["Vowel", "Consonant", "Number", "Symbol"] }
          ]
        },
        {
          id: "eng_rhyming",
          title: "Rhyming Words",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "CAT rhymes with…",                   visual: "🐱 CAT",    answer: "HAT",    options: ["HAT", "DOG", "SUN", "PIG"] },
            { question: "SUN rhymes with…",                   visual: "☀️ SUN",    answer: "RUN",    options: ["RUN", "CAT", "BIG", "HOT"] },
            { question: "DOG rhymes with…",                   visual: "🐶 DOG",    answer: "LOG",    options: ["LOG", "CAT", "BED", "FAN"] },
            { question: "BED rhymes with…",                   visual: "🛏️ BED",    answer: "RED",    options: ["RED", "BIG", "TOP", "HAT"] },
            { question: "FAN rhymes with…",                   visual: "🪭 FAN",    answer: "MAN",    options: ["MAN", "DOG", "CUP", "PEN"] },
            { question: "PEN rhymes with…",                   visual: "🖊️ PEN",    answer: "HEN",    options: ["HEN", "BAT", "SUN", "BIG"] },
            { question: "BIG rhymes with…",                   visual: "📏 BIG",    answer: "PIG",    options: ["PIG", "CAT", "SUN", "BED"] },
            { question: "TOP rhymes with…",                   visual: "🔝 TOP",    answer: "MOP",    options: ["MOP", "BAT", "PEN", "CUP"] },
            { question: "BAT rhymes with…",                   visual: "🦇 BAT",    answer: "RAT",    options: ["RAT", "BIG", "PEN", "SUN"] },
            { question: "FISH rhymes with…",                  visual: "🐟 FISH",   answer: "DISH",   options: ["DISH", "BOAT", "TREE", "BALL"] }
          ]
        },
        {
          id: "eng_opposites",
          title: "Opposite Words",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Opposite of BIG is…",                visual: "⬆️↔️⬇️",     answer: "SMALL",   options: ["SMALL", "TALL", "LONG", "HIGH"] },
            { question: "Opposite of HOT is…",                visual: "🔥↔️❄️",     answer: "COLD",    options: ["COLD", "WET", "DRY", "WARM"] },
            { question: "Opposite of UP is…",                 visual: "⬆️↔️⬇️",     answer: "DOWN",    options: ["DOWN", "LEFT", "RIGHT", "TOP"] },
            { question: "Opposite of DAY is…",                visual: "☀️↔️🌙",     answer: "NIGHT",   options: ["NIGHT", "MORNING", "NOON", "EVENING"] },
            { question: "Opposite of IN is…",                 visual: "⬅️↔️➡️",     answer: "OUT",     options: ["OUT", "UP", "DOWN", "OVER"] },
            { question: "Opposite of HAPPY is…",              visual: "😊↔️😢",     answer: "SAD",     options: ["SAD", "ANGRY", "TIRED", "HUNGRY"] },
            { question: "Opposite of OLD is…",                visual: "👴↔️👶",     answer: "YOUNG",   options: ["YOUNG", "NEW", "FRESH", "SMALL"] },
            { question: "Opposite of FAST is…",               visual: "🐇↔️🐢",     answer: "SLOW",    options: ["SLOW", "QUICK", "STOP", "GO"] },
            { question: "Opposite of TALL is…",               visual: "🦒↔️🐁",     answer: "SHORT",   options: ["SHORT", "LONG", "THIN", "FAT"] },
            { question: "Opposite of GOOD is…",               visual: "👍↔️👎",     answer: "BAD",     options: ["BAD", "NICE", "KIND", "HAPPY"] }
          ]
        },
        {
          id: "eng_action_words",
          title: "Action Words (Verbs)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We ___ with our legs.",              visual: "🚶 walking", answer: "WALK",    options: ["WALK", "TALK", "SEE", "HEAR"] },
            { question: "We ___ with our mouth.",             visual: "🗣️ speaking", answer: "TALK",    options: ["TALK", "WALK", "JUMP", "WRITE"] },
            { question: "Birds can ___.",                     visual: "🐦 flying",  answer: "FLY",     options: ["FLY", "SWIM", "DRIVE", "COOK"] },
            { question: "Fish can ___.",                      visual: "🐟 swimming", answer: "SWIM",    options: ["SWIM", "FLY", "RUN", "JUMP"] },
            { question: "We ___ food.",                       visual: "🍽️ eating",  answer: "EAT",     options: ["EAT", "DRINK", "SLEEP", "PLAY"] },
            { question: "We ___ with a pen.",                 visual: "✍️ writing", answer: "WRITE",   options: ["WRITE", "READ", "DRAW", "PAINT"] },
            { question: "We ___ books.",                      visual: "📖 reading", answer: "READ",    options: ["READ", "WRITE", "SING", "DANCE"] },
            { question: "We ___ at night.",                   visual: "😴 sleeping", answer: "SLEEP",   options: ["SLEEP", "EAT", "PLAY", "STUDY"] },
            { question: "We ___ songs.",                      visual: "🎤 singing", answer: "SING",    options: ["SING", "DANCE", "EAT", "SLEEP"] },
            { question: "We ___ games.",                      visual: "⚽ playing", answer: "PLAY",    options: ["PLAY", "WORK", "SLEEP", "EAT"] }
          ]
        },
        {
          id: "eng_articles",
          title: "Articles (a, an, the)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Use ___ before APPLE.",              visual: "🍎 APPLE",   answer: "AN",      options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before CAT.",                visual: "🐱 CAT",     answer: "A",       options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before ELEPHANT.",           visual: "🐘 ELEPHANT", answer: "AN",     options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before DOG.",                visual: "🐶 DOG",     answer: "A",       options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before ORANGE.",             visual: "🍊 ORANGE",  answer: "AN",      options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before UMBRELLA.",           visual: "☂️ UMBRELLA", answer: "AN",     options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before BOOK.",               visual: "📖 BOOK",    answer: "A",       options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "Use ___ before ICE CREAM.",          visual: "🍦 ICE CREAM", answer: "AN",    options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "___ sun rises in the east.",         visual: "☀️ SUN",     answer: "THE",     options: ["A", "AN", "THE", "NO ARTICLE"] },
            { question: "___ moon shines at night.",          visual: "🌙 MOON",    answer: "THE",     options: ["A", "AN", "THE", "NO ARTICLE"] }
          ]
        },
        {
          id: "eng_plurals",
          title: "Singular & Plural",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Plural of CAT is…",                  visual: "🐱→🐱🐱",     answer: "CATS",    options: ["CATS", "CAT", "CATSES", "CATIES"] },
            { question: "Plural of DOG is…",                  visual: "🐶→🐶🐶",     answer: "DOGS",    options: ["DOGS", "DOG", "DOGSES", "DOGIES"] },
            { question: "Plural of BOX is…",                  visual: "📦→📦📦",     answer: "BOXES",   options: ["BOXES", "BOXS", "BOX", "BOXIES"] },
            { question: "Plural of BOOK is…",                 visual: "📖→📖📖",     answer: "BOOKS",   options: ["BOOKS", "BOOK", "BOOKES", "BOOKIES"] },
            { question: "Plural of PEN is…",                  visual: "🖊️→🖊️🖊️",   answer: "PENS",    options: ["PENS", "PEN", "PENES", "PENIES"] },
            { question: "Plural of APPLE is…",                visual: "🍎→🍎🍎",     answer: "APPLES",  options: ["APPLES", "APPLE", "APPLESES", "APPLIES"] },
            { question: "Plural of BIRD is…",                 visual: "🐦→🐦🐦",     answer: "BIRDS",   options: ["BIRDS", "BIRD", "BIRDES", "BIRDIES"] },
            { question: "Plural of TREE is…",                 visual: "🌳→🌳🌳",     answer: "TREES",   options: ["TREES", "TREE", "TREESES", "TREIES"] },
            { question: "Plural of STAR is…",                 visual: "⭐→⭐⭐",     answer: "STARS",   options: ["STARS", "STAR", "STARSES", "STARIES"] },
            { question: "Plural of FISH is…",                 visual: "🐟→🐟🐟",     answer: "FISH",    options: ["FISH", "FISHES", "FISHS", "FISHIES"] }
          ]
        },
        {
          id: "eng_animals",
          title: "Animal Names",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🐅", word: "TIGER" }, { picture: "🐻", word: "BEAR" }, { picture: "🐒", word: "MONKEY" },
            { picture: "🦒", word: "GIRAFFE" }, { picture: "🦓", word: "ZEBRA" }, { picture: "🦏", word: "RHINO" },
            { picture: "🦛", word: "HIPPO" }, { picture: "🦘", word: "KANGAROO" }, { picture: "🐼", word: "PANDA" },
            { picture: "🐨", word: "KOALA" }, { picture: "🦁", word: "LION" }, { picture: "🐯", word: "TIGER CUB" },
            { picture: "🐮", word: "COW" }, { picture: "🐄", word: "COW" }, { picture: "🐷", word: "PIG" },
            { picture: "🐖", word: "PIGLET" }, { picture: "🐗", word: "BOAR" }, { picture: "🐪", word: "CAMEL" },
            { picture: "🐫", word: "CAMEL" }, { picture: "🦙", word: "LLAMA" }
          ]
        },
        {
          id: "eng_birds",
          title: "Bird Names",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🦅", word: "EAGLE" }, { picture: "🦉", word: "OWL" }, { picture: "🦜", word: "PARROT" },
            { picture: "🦚", word: "PEACOCK" }, { picture: "🦢", word: "SWAN" }, { picture: "🦩", word: "FLAMINGO" },
            { picture: "🐧", word: "PENGUIN" }, { picture: "🦃", word: "TURKEY" }, { picture: "🐓", word: "ROOSTER" },
            { picture: "🐔", word: "HEN" }, { picture: "🐤", word: "CHICK" }, { picture: "🐥", word: "BABY CHICK" },
            { picture: "🦆", word: "DUCK" }, { picture: "🕊️", word: "DOVE" }, { picture: "🦤", word: "DODO" }
          ]
        },
        {
          id: "eng_fruits",
          title: "Fruit Names",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🍏", word: "GREEN APPLE" }, { picture: "🍎", word: "RED APPLE" }, { picture: "🍐", word: "PEAR" },
            { picture: "🍊", word: "ORANGE" }, { picture: "🍋", word: "LEMON" }, { picture: "🍌", word: "BANANA" },
            { picture: "🍉", word: "WATERMELON" }, { picture: "🍇", word: "GRAPES" }, { picture: "🍓", word: "STRAWBERRY" },
            { picture: "🫐", word: "BLUEBERRY" }, { picture: "🍈", word: "MELON" }, { picture: "🍒", word: "CHERRY" },
            { picture: "🍑", word: "PEACH" }, { picture: "🥭", word: "MANGO" }, { picture: "🍍", word: "PINEAPPLE" },
            { picture: "🥥", word: "COCONUT" }, { picture: "🥝", word: "KIWI" }, { picture: "🍅", word: "TOMATO" }
          ]
        },
        {
          id: "eng_vegetables",
          title: "Vegetable Names",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🥕", word: "CARROT" }, { picture: "🥔", word: "POTATO" }, { picture: "🧅", word: "ONION" },
            { picture: "🌽", word: "CORN" }, { picture: "🥒", word: "CUCUMBER" }, { picture: "🥬", word: "CABBAGE" },
            { picture: "🥦", word: "BROCCOLI" }, { picture: "🫑", word: "PEPPER" }, { picture: "🌶️", word: "CHILI" },
            { picture: "🍆", word: "EGGPLANT" }, { picture: "🍄", word: "MUSHROOM" }, { picture: "🥜", word: "PEANUT" },
            { picture: "🫘", word: "BEANS" }, { picture: "🫛", word: "PEA POD" }, { picture: "🌾", word: "RICE" }
          ]
        },
        {
          id: "eng_colors",
          title: "Color Names",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "The sky is ___.",                    visual: "☁️ Sky",     answer: "BLUE",    options: ["BLUE", "GREEN", "RED", "YELLOW"] },
            { question: "Grass is ___.",                      visual: "🌿 Grass",   answer: "GREEN",   options: ["GREEN", "BLUE", "RED", "BROWN"] },
            { question: "The sun is ___.",                    visual: "☀️ Sun",     answer: "YELLOW",  options: ["YELLOW", "GREEN", "BLUE", "BLACK"] },
            { question: "An apple is ___.",                   visual: "🍎 Apple",   answer: "RED",     options: ["RED", "BLUE", "GREEN", "BROWN"] },
            { question: "Clouds are ___.",                    visual: "☁️ Cloud",   answer: "WHITE",   options: ["WHITE", "BLACK", "BLUE", "GREEN"] },
            { question: "Night sky is ___.",                  visual: "🌃 Night",   answer: "BLACK",   options: ["BLACK", "WHITE", "BLUE", "GREEN"] },
            { question: "An orange is ___.",                  visual: "🍊 Orange",  answer: "ORANGE",  options: ["ORANGE", "RED", "YELLOW", "GREEN"] },
            { question: "Grapes can be ___.",                 visual: "🍇 Grapes",  answer: "PURPLE",  options: ["PURPLE", "BLUE", "RED", "GREEN"] },
            { question: "Chocolate is ___.",                  visual: "🍫 Chocolate", answer: "BROWN", options: ["BROWN", "BLACK", "RED", "BLUE"] },
            { question: "Roses can be ___.",                  visual: "🌹 Rose",    answer: "PINK",    options: ["PINK", "BLUE", "GREEN", "BROWN"] }
          ]
        },
        {
          id: "eng_body_parts",
          title: "Body Parts Names",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "👁️", word: "EYE" }, { picture: "👃", word: "NOSE" }, { picture: "👂", word: "EAR" },
            { picture: "👄", word: "MOUTH" }, { picture: "👅", word: "TONGUE" }, { picture: "🦷", word: "TOOTH" },
            { picture: "🤚", word: "HAND" }, { picture: "🦶", word: "FOOT" }, { picture: "💪", word: "ARM" },
            { picture: "🦵", word: "LEG" }, { picture: "🧠", word: "BRAIN" }, { picture: "❤️", word: "HEART" },
            { picture: "🫁", word: "LUNGS" }, { picture: "🦴", word: "BONE" }, { picture: "💅", word: "NAIL" },
            { picture: "👁️👁️", word: "EYES" }, { picture: "👂👂", word: "EARS" }, { picture: "🤲", word: "HANDS" }
          ]
        },
        {
          id: "eng_family",
          title: "Family Members",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "My father's wife is my ___.",        visual: "👨‍👩‍👧 Family", answer: "MOTHER", options: ["MOTHER", "SISTER", "AUNT", "GRANDMOTHER"] },
            { question: "My mother's husband is my ___.",     visual: "👨‍👩‍👦 Family", answer: "FATHER", options: ["FATHER", "BROTHER", "UNCLE", "GRANDFATHER"] },
            { question: "My father's father is my ___.",      visual: "👴 Old man",  answer: "GRANDFATHER", options: ["GRANDFATHER", "UNCLE", "FATHER", "COUSIN"] },
            { question: "My mother's mother is my ___.",      visual: "👵 Old woman", answer: "GRANDMOTHER", options: ["GRANDMOTHER", "AUNT", "MOTHER", "COUSIN"] },
            { question: "My parents' son is my ___.",         visual: "👦 Boy",      answer: "BROTHER", options: ["BROTHER", "COUSIN", "UNCLE", "NEPHEW"] },
            { question: "My parents' daughter is my ___.",    visual: "👧 Girl",     answer: "SISTER", options: ["SISTER", "COUSIN", "AUNT", "NIECE"] },
            { question: "My father's brother is my ___.",     visual: "👨 Man",      answer: "UNCLE", options: ["UNCLE", "COUSIN", "NEPHEW", "GRANDFATHER"] },
            { question: "My mother's sister is my ___.",      visual: "👩 Woman",    answer: "AUNT", options: ["AUNT", "COUSIN", "NIECE", "GRANDMOTHER"] },
            { question: "My uncle's son is my ___.",          visual: "👦 Boy",      answer: "COUSIN", options: ["COUSIN", "BROTHER", "NEPHEW", "UNCLE"] },
            { question: "My aunt's daughter is my ___.",      visual: "👧 Girl",     answer: "COUSIN", options: ["COUSIN", "SISTER", "NIECE", "AUNT"] }
          ]
        },
        {
          id: "eng_transport",
          title: "Transport Vehicles",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🚗", word: "CAR" }, { picture: "🚌", word: "BUS" }, { picture: "🚂", word: "TRAIN" },
            { picture: "✈️", word: "PLANE" }, { picture: "🚁", word: "HELICOPTER" }, { picture: "🚢", word: "SHIP" },
            { picture: "⛵", word: "BOAT" }, { picture: "🚲", word: "BICYCLE" }, { picture: "🏍️", word: "MOTORCYCLE" },
            { picture: "🚜", word: "TRACTOR" }, { picture: "🚑", word: "AMBULANCE" }, { picture: "🚒", word: "FIRE TRUCK" },
            { picture: "🚓", word: "POLICE CAR" }, { picture: "🚕", word: "TAXI" }, { picture: "🚙", word: "VAN" },
            { picture: "🛵", word: "SCOOTER" }, { picture: "🚠", word: "CABLE CAR" }, { picture: "🚟", word: "METRO" }
          ]
        },
        {
          id: "eng_position_words",
          title: "Position Words",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "The cat is ___ the box.", visual: "📦🐱", answer: "IN", options: ["IN", "ON", "UNDER", "BEHIND"] },
            { question: "The book is ___ the table.", visual: "📖📊", answer: "ON", options: ["ON", "IN", "UNDER", "OVER"] },
            { question: "The ball is ___ the chair.", visual: "⚽🪑", answer: "UNDER", options: ["UNDER", "ON", "IN", "BESIDE"] },
            { question: "The bird is ___ the tree.", visual: "🐦🌳", answer: "ON", options: ["ON", "IN", "UNDER", "BELOW"] },
            { question: "The toy is ___ the bed.", visual: "🧸🛏️", answer: "UNDER", options: ["UNDER", "ON", "IN", "OVER"] },
            { question: "The sun is ___ the clouds.", visual: "☀️☁️", answer: "ABOVE", options: ["ABOVE", "UNDER", "IN", "BELOW"] },
            { question: "The fish is ___ the water.", visual: "🐟💧", answer: "IN", options: ["IN", "ON", "ABOVE", "BESIDE"] },
            { question: "The pen is ___ the bag.", visual: "🖊️🎒", answer: "IN", options: ["IN", "ON", "UNDER", "OVER"] },
            { question: "The dog is ___ the tree.", visual: "🐶🌳", answer: "BEHIND", options: ["BEHIND", "IN", "ON", "ABOVE"] },
            { question: "The lamp is ___ the table.", visual: "🛋️💡", answer: "BESIDE", options: ["BESIDE", "IN", "UNDER", "BELOW"] },
            { question: "The apple is ___ the bowl.", visual: "🍎🥣", answer: "IN", options: ["IN", "ON", "UNDER", "BESIDE"] },
            { question: "The cup is ___ the saucer.", visual: "☕🍽️", answer: "ON", options: ["ON", "IN", "UNDER", "ABOVE"] },
            { question: "The mouse is ___ the hole.", visual: "🐭🕳️", answer: "IN", options: ["IN", "ON", "ABOVE", "BESIDE"] },
            { question: "The kite is ___ the sky.", visual: "🪁☁️", answer: "IN", options: ["IN", "ON", "UNDER", "BELOW"] },
            { question: "The shoes are ___ the bed.", visual: "👟🛏️", answer: "UNDER", options: ["UNDER", "IN", "ON", "ABOVE"] }
          ]
        },
        {
          id: "eng_sentence_building",
          title: "Complete the Sentence",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "I ___ to school.", visual: "🏫", answer: "GO", options: ["GO", "GOES", "GOING", "WENT"] },
            { question: "The cat ___ milk.", visual: "🐱🥛", answer: "DRINKS", options: ["DRINKS", "DRINK", "ATE", "EAT"] },
            { question: "Birds ___ in the sky.", visual: "🐦☁️", answer: "FLY", options: ["FLY", "SWIM", "RUN", "WALK"] },
            { question: "I ___ my hands before eating.", visual: "🧼", answer: "WASH", options: ["WASH", "DIRTY", "CUT", "HIDE"] },
            { question: "The sun ___ in the east.", visual: "🌅", answer: "RISES", options: ["RISES", "SETS", "SLEEPS", "RUNS"] },
            { question: "We ___ water every day.", visual: "💧", answer: "DRINK", options: ["DRINK", "EAT", "THROW", "BURN"] },
            { question: "She ___ a book.", visual: "📖", answer: "READS", options: ["READS", "EATS", "RUNS", "JUMPS"] },
            { question: "Dogs ___ loudly.", visual: "🐶", answer: "BARK", options: ["BARK", "MEOW", "CHIRP", "MOO"] },
            { question: "I ___ my homework.", visual: "✏️", answer: "DO", options: ["DO", "PLAY", "EAT", "SLEEP"] },
            { question: "Fish ___ in water.", visual: "🐟💧", answer: "SWIM", options: ["SWIM", "FLY", "WALK", "JUMP"] },
            { question: "The baby ___ at night.", visual: "👶🌙", answer: "SLEEPS", options: ["SLEEPS", "PLAYS", "RUNS", "READS"] },
            { question: "We ___ food with our teeth.", visual: "🦷🍎", answer: "CHEW", options: ["CHEW", "THROW", "HIT", "BURN"] },
            { question: "My mother ___ food.", visual: "👩‍🍳", answer: "COOKS", options: ["COOKS", "READS", "SLEEPS", "RUNS"] },
            { question: "The moon ___ at night.", visual: "🌙", answer: "SHINES", options: ["SHINES", "HIDES", "EATS", "RUNS"] },
            { question: "Flowers ___ beautifully.", visual: "🌺", answer: "BLOOM", options: ["BLOOM", "RUN", "JUMP", "FLY"] }
          ]
        },
        {
          id: "eng_common_objects",
          title: "Common Objects at Home",
          type: "pictureWord",
          questions: 10,
          items: [
            { picture: "🪑", word: "CHAIR" }, { picture: "🛏️", word: "BED" }, { picture: "🚪", word: "DOOR" },
            { picture: "🪟", word: "WINDOW" }, { picture: "📺", word: "TV" }, { picture: "💡", word: "BULB" },
            { picture: "🪞", word: "MIRROR" }, { picture: "🛋️", word: "SOFA" }, { picture: "🪴", word: "PLANT" },
            { picture: "⏰", word: "CLOCK" }, { picture: "📷", word: "CAMERA" }, { picture: "📞", word: "PHONE" },
            { picture: "🧹", word: "BROOM" }, { picture: "🪥", word: "BRUSH" }, { picture: "🧴", word: "SOAP" },
            { picture: "🛁", word: "BATHTUB" }, { picture: "🚰", word: "TAP" }, { picture: "🧺", word: "BASKET" }
          ]
        }
      ]
    },
    kannada: {
      name: "Kannada",
      icon: "ಅ",
      description: "Swaragalu, Vyanjanagalu, and simple word building.",
      modules: [
        {
          id: "kan_letters",
          title: "Swaragalu and Vyanjanagalu",
          type: "kannadaLetter",
          questions: 10,
          letters: [
            { letter: "ಅ", phonetic: "a" }, { letter: "ಆ", phonetic: "aa" }, { letter: "ಇ", phonetic: "i" }, 
            { letter: "ಈ", phonetic: "ee" }, { letter: "ಉ", phonetic: "u" }, { letter: "ಊ", phonetic: "oo" }, 
            { letter: "ಋ", phonetic: "ru" }, { letter: "ಎ", phonetic: "e" }, { letter: "ಏ", phonetic: "ae" }, { letter: "ಐ", phonetic: "ai" },
            { letter: "ಒ", phonetic: "o" }, { letter: "ಓ", phonetic: "oo" }, { letter: "ಔ", phonetic: "au" },
            { letter: "ಕ", phonetic: "ka" }, { letter: "ಖ", phonetic: "kha" }, { letter: "ಗ", phonetic: "ga" }, { letter: "ಘ", phonetic: "gha" },
            { letter: "ಚ", phonetic: "cha" }, { letter: "ಛ", phonetic: "chha" }, { letter: "ಜ", phonetic: "ja" }, { letter: "ಝ", phonetic: "jha" },
            { letter: "ಟ", phonetic: "ta" }, { letter: "ಠ", phonetic: "tha" }, { letter: "ಡ", phonetic: "da" }, 
            { letter: "ಢ", phonetic: "dha" }, { letter: "ಣ", phonetic: "na" },
            { letter: "ತ", phonetic: "ta" }, { letter: "ಥ", phonetic: "tha" }, { letter: "ದ", phonetic: "da" }, 
            { letter: "ಧ", phonetic: "dha" }, { letter: "ನ", phonetic: "na" },
            { letter: "ಪ", phonetic: "pa" }, { letter: "ಫ", phonetic: "pha" }, { letter: "ಬ", phonetic: "ba" }, 
            { letter: "ಭ", phonetic: "bha" }, { letter: "ಮ", phonetic: "ma" },
            { letter: "ಯ", phonetic: "ya" }, { letter: "ರ", phonetic: "ra" }, { letter: "ಲ", phonetic: "la" }, { letter: "ವ", phonetic: "va" },
            { letter: "ಶ", phonetic: "sha" }, { letter: "ಷ", phonetic: "sha" }, { letter: "ಸ", phonetic: "sa" }, 
            { letter: "ಹ", phonetic: "ha" }, { letter: "ಳ", phonetic: "la" }
          ]
        },
        {
          id: "kan_picture_word",
          title: "Kannada Picture Match",
          type: "kannadaPictureWord",
          questions: 10,
          items: [
            { picture: "🏠",  word: "ಮನೆ", phonetic: "mane" },
            { picture: "🌳",  word: "ಮರ", phonetic: "mara" },
            { picture: "🍎",  word: "ಸೇಬು", phonetic: "sebu" },
            { picture: "🐄",  word: "ಹಸು", phonetic: "hasu" },
            { picture: "🌸",  word: "ಹೂವು", phonetic: "hoovu" },
            { picture: "📚",  word: "ಪುಸ್ತಕ", phonetic: "pustaka" },
            { picture: "🐟",  word: "ಮೀನು", phonetic: "meenu" },
            { picture: "🐦",  word: "ಹಕ್ಕಿ", phonetic: "hakki" },
            { picture: "☀️",  word: "ಸೂರ್ಯ", phonetic: "soorya" },
            { picture: "🌙",  word: "ಚಂದ್ರ", phonetic: "chandra" },
            { picture: "💧",  word: "ನೀರು", phonetic: "neeru" },
            { picture: "🚗",  word: "ಕಾರು", phonetic: "kaaru" },
            { picture: "🐘",  word: "ಆನೆ", phonetic: "aane" },
            { picture: "🦁",  word: "ಸಿಂಹ", phonetic: "simha" },
            { picture: "🥭",  word: "ಮಾವು", phonetic: "maavu" },
            { picture: "🍌",  word: "ಬಾಳೆ", phonetic: "baale" },
            { picture: "🐶",  word: "ನಾಯಿ", phonetic: "naayi" },
            { picture: "🐱",  word: "ಬೆಕ್ಕು", phonetic: "bekku" },
            { picture: "👁️", word: "ಕಣ್ಣು", phonetic: "kannu" },
            { picture: "🤚",  word: "ಕೈ",    phonetic: "kai" },
            { picture: "👃",  word: "ಮೂಗು",  phonetic: "moogu" },
            { picture: "👂",  word: "ಕಿವಿ",  phonetic: "kivi" },
            { picture: "🦶",  word: "ಕಾಲು",  phonetic: "kaalu" },
            { picture: "🐓",  word: "ಕೋಳಿ",  phonetic: "kooli" },
            { picture: "🌾",  word: "ಭತ್ತ",  phonetic: "bhatta" }
          ]
        },
        {
          id: "kan_drag_word",
          title: "Build Kannada Word",
          type: "kannadaDragWord",
          questions: 10,
          words: [
            { clue: "House",  picture: "🏠", letters: ["ಮ",  "ನೆ"],      answerText: "ಮನೆ"    },
            { clue: "Tree",   picture: "🌳", letters: ["ಮ",  "ರ"],       answerText: "ಮರ"     },
            { clue: "Cow",    picture: "🐄", letters: ["ಹ",  "ಸು"],      answerText: "ಹಸು"    },
            { clue: "Flower", picture: "🌸", letters: ["ಹೂ", "ವು"],      answerText: "ಹೂವು"   },
            { clue: "Book",   picture: "📚", letters: ["ಪು", "ಸ್ತ", "ಕ"], answerText: "ಪುಸ್ತಕ" },
            { clue: "Fish",   picture: "🐟", letters: ["ಮೀ", "ನು"],      answerText: "ಮೀನು"   },
            { clue: "Bird",   picture: "🐦", letters: ["ಹ",  "ಕ್ಕಿ"],    answerText: "ಹಕ್ಕಿ"  },
            { clue: "Sun",    picture: "☀️", letters: ["ಸೂ", "ರ್ಯ"],     answerText: "ಸೂರ್ಯ"  },
            { clue: "Moon",   picture: "🌙", letters: ["ಚಂ", "ದ್ರ"],     answerText: "ಚಂದ್ರ"  },
            { clue: "Water",  picture: "💧", letters: ["ನೀ", "ರು"],      answerText: "ನೀರು"   },
            { clue: "Dog",    picture: "🐶", letters: ["ನಾ", "ಯಿ"],      answerText: "ನಾಯಿ"   },
            { clue: "Cat",    picture: "🐱", letters: ["ಬೆ", "ಕ್ಕು"],    answerText: "ಬೆಕ್ಕು" },
            { clue: "Mango",  picture: "🥭", letters: ["ಮಾ", "ವು"],      answerText: "ಮಾವು"   },
            { clue: "Banana", picture: "🍌", letters: ["ಬಾ", "ಳೆ"],      answerText: "ಬಾಳೆ"   },
            { clue: "Car",    picture: "🚗", letters: ["ಕಾ", "ರು"],      answerText: "ಕಾರು"   }
          ]
        },
        {
          id: "kan_swara_practice",
          title: "Swaragalu Practice",
          type: "kannadaLetter",
          questions: 10,
          letters: [
            { letter: "ಅ",  phonetic: "a" },
            { letter: "ಆ",  phonetic: "aa" },
            { letter: "ಇ",  phonetic: "i" },
            { letter: "ಈ",  phonetic: "ee" },
            { letter: "ಉ",  phonetic: "u" },
            { letter: "ಊ",  phonetic: "oo" },
            { letter: "ಋ",  phonetic: "ru" },
            { letter: "ಎ",  phonetic: "e" },
            { letter: "ಏ",  phonetic: "ae" },
            { letter: "ಐ",  phonetic: "ai" },
            { letter: "ಒ",  phonetic: "o" },
            { letter: "ಓ",  phonetic: "oo" },
            { letter: "ಔ",  phonetic: "au" },
            { letter: "ಅಂ", phonetic: "am" },
            { letter: "ಅಃ", phonetic: "aha" }
          ]
        },
        {
          id: "kan_vyanjana_practice",
          title: "Vyanjanagalu Practice",
          type: "kannadaLetter",
          questions: 10,
          letters: [
            { letter: "ಕ", phonetic: "ka" },  { letter: "ಖ", phonetic: "kha" }, { letter: "ಗ", phonetic: "ga" },  { letter: "ಘ", phonetic: "gha" }, { letter: "ಙ", phonetic: "nga" },
            { letter: "ಚ", phonetic: "cha" }, { letter: "ಛ", phonetic: "chha" },{ letter: "ಜ", phonetic: "ja" },  { letter: "ಝ", phonetic: "jha" }, { letter: "ಞ", phonetic: "nya" },
            { letter: "ಟ", phonetic: "ta" },  { letter: "ಠ", phonetic: "tha" }, { letter: "ಡ", phonetic: "da" },  { letter: "ಢ", phonetic: "dha" }, { letter: "ಣ", phonetic: "na" },
            { letter: "ತ", phonetic: "ta" },  { letter: "ಥ", phonetic: "tha" }, { letter: "ದ", phonetic: "da" },  { letter: "ಧ", phonetic: "dha" }, { letter: "ನ", phonetic: "na" },
            { letter: "ಪ", phonetic: "pa" },  { letter: "ಫ", phonetic: "pha" }, { letter: "ಬ", phonetic: "ba" },  { letter: "ಭ", phonetic: "bha" }, { letter: "ಮ", phonetic: "ma" },
            { letter: "ಯ", phonetic: "ya" },  { letter: "ರ", phonetic: "ra" },  { letter: "ಲ", phonetic: "la" },  { letter: "ವ", phonetic: "va" },
            { letter: "ಶ", phonetic: "sha" }, { letter: "ಷ", phonetic: "sha" }, { letter: "ಸ", phonetic: "sa" },  { letter: "ಹ", phonetic: "ha" },
            { letter: "ಳ", phonetic: "la" },  { letter: "ೞ", phonetic: "zha" }, { letter: "ಱ", phonetic: "rra" }
          ]
        },
        {
          id: "kan_guninthakshara",
          title: "Guninthaksharagalu",
          type: "kannadaLetter",
          questions: 10,
          letters: [
            { letter: "ಕಾ", phonetic: "kaa" }, { letter: "ಕಿ", phonetic: "ki" },  { letter: "ಕೀ", phonetic: "kee" }, { letter: "ಕು", phonetic: "ku" },  { letter: "ಕೂ", phonetic: "koo" }, { letter: "ಕೆ", phonetic: "ke" }, { letter: "ಕೇ", phonetic: "kae" }, { letter: "ಕೈ", phonetic: "kai" }, { letter: "ಕೊ", phonetic: "ko" }, { letter: "ಕೋ", phonetic: "koo" }, { letter: "ಕೌ", phonetic: "kau" },
            { letter: "ಗಾ", phonetic: "gaa" }, { letter: "ಗಿ", phonetic: "gi" },  { letter: "ಗೀ", phonetic: "gee" }, { letter: "ಗು", phonetic: "gu" },  { letter: "ಗೂ", phonetic: "goo" }, { letter: "ಗೆ", phonetic: "ge" }, { letter: "ಗೇ", phonetic: "gae" },
            { letter: "ಚಾ", phonetic: "chaa" },{ letter: "ಚಿ", phonetic: "chi" }, { letter: "ಚು", phonetic: "chu" },  { letter: "ಚೆ", phonetic: "che" }, { letter: "ಚೇ", phonetic: "chae" },
            { letter: "ಜಾ", phonetic: "jaa" }, { letter: "ಜಿ", phonetic: "ji" },  { letter: "ಜು", phonetic: "ju" },  { letter: "ಜೆ", phonetic: "je" },  { letter: "ಜೇ", phonetic: "jae" },
            { letter: "ಟಾ", phonetic: "taa" }, { letter: "ಟಿ", phonetic: "ti" },  { letter: "ಟು", phonetic: "tu" },  { letter: "ಟೆ", phonetic: "te" },  { letter: "ಟೇ", phonetic: "tae" },
            { letter: "ಡಾ", phonetic: "daa" }, { letter: "ಡಿ", phonetic: "di" },  { letter: "ಡು", phonetic: "du" },  { letter: "ಡೆ", phonetic: "de" },  { letter: "ಡೇ", phonetic: "dae" },
            { letter: "ತಾ", phonetic: "taa" }, { letter: "ತಿ", phonetic: "ti" },  { letter: "ತೀ", phonetic: "tee" }, { letter: "ತು", phonetic: "tu" },  { letter: "ತೂ", phonetic: "too" }, { letter: "ತೆ", phonetic: "te" }, { letter: "ತೇ", phonetic: "tae" },
            { letter: "ದಾ", phonetic: "daa" }, { letter: "ದಿ", phonetic: "di" },  { letter: "ದು", phonetic: "du" },  { letter: "ದೆ", phonetic: "de" },  { letter: "ದೇ", phonetic: "dae" },
            { letter: "ನಾ", phonetic: "naa" }, { letter: "ನಿ", phonetic: "ni" },  { letter: "ನೀ", phonetic: "nee" }, { letter: "ನು", phonetic: "nu" },  { letter: "ನೂ", phonetic: "noo" }, { letter: "ನೆ", phonetic: "ne" }, { letter: "ನೇ", phonetic: "nae" },
            { letter: "ಪಾ", phonetic: "paa" }, { letter: "ಪಿ", phonetic: "pi" },  { letter: "ಪು", phonetic: "pu" },  { letter: "ಪೆ", phonetic: "pe" },  { letter: "ಪೇ", phonetic: "pae" },
            { letter: "ಬಾ", phonetic: "baa" }, { letter: "ಬಿ", phonetic: "bi" },  { letter: "ಬೀ", phonetic: "bee" }, { letter: "ಬು", phonetic: "bu" },  { letter: "ಬೆ", phonetic: "be" },  { letter: "ಬೇ", phonetic: "bae" },
            { letter: "ಮಾ", phonetic: "maa" }, { letter: "ಮಿ", phonetic: "mi" },  { letter: "ಮೀ", phonetic: "mee" }, { letter: "ಮು", phonetic: "mu" },  { letter: "ಮೂ", phonetic: "moo" }, { letter: "ಮೆ", phonetic: "me" }, { letter: "ಮೇ", phonetic: "mae" },
            { letter: "ಯಾ", phonetic: "yaa" }, { letter: "ಯಿ", phonetic: "yi" },  { letter: "ಯು", phonetic: "yu" },  { letter: "ಯೆ", phonetic: "ye" },  { letter: "ಯೇ", phonetic: "yae" },
            { letter: "ರಾ", phonetic: "raa" }, { letter: "ರಿ", phonetic: "ri" },  { letter: "ರೀ", phonetic: "ree" }, { letter: "ರು", phonetic: "ru" },  { letter: "ರೂ", phonetic: "roo" }, { letter: "ರೆ", phonetic: "re" }, { letter: "ರೇ", phonetic: "rae" },
            { letter: "ಲಾ", phonetic: "laa" }, { letter: "ಲಿ", phonetic: "li" },  { letter: "ಲೀ", phonetic: "lee" }, { letter: "ಲು", phonetic: "lu" },  { letter: "ಲೂ", phonetic: "loo" }, { letter: "ಲೆ", phonetic: "le" }, { letter: "ಲೇ", phonetic: "lae" },
            { letter: "ವಾ", phonetic: "vaa" }, { letter: "ವಿ", phonetic: "vi" },  { letter: "ವೀ", phonetic: "vee" }, { letter: "ವು", phonetic: "vu" },  { letter: "ವೂ", phonetic: "voo" }, { letter: "ವೆ", phonetic: "ve" }, { letter: "ವೇ", phonetic: "vae" },
            { letter: "ಸಾ", phonetic: "saa" }, { letter: "ಸಿ", phonetic: "si" },  { letter: "ಸೀ", phonetic: "see" }, { letter: "ಸು", phonetic: "su" },  { letter: "ಸೂ", phonetic: "soo" }, { letter: "ಸೆ", phonetic: "se" }, { letter: "ಸೇ", phonetic: "sae" },
            { letter: "ಹಾ", phonetic: "haa" }, { letter: "ಹಿ", phonetic: "hi" },  { letter: "ಹೀ", phonetic: "hee" }, { letter: "ಹು", phonetic: "hu" },  { letter: "ಹೂ", phonetic: "hoo" }, { letter: "ಹೆ", phonetic: "he" }, { letter: "ಹೇ", phonetic: "hae" }
          ]
        },
        {
          id: "kan_more_picture_words",
          title: "More Picture Words",
          type: "kannadaPictureWord",
          questions: 10,
          items: [
            { picture: "🦁", word: "ಸಿಂಹ",      phonetic: "simha" },     { picture: "🐯", word: "ಹುಲಿ",      phonetic: "huli" },      { picture: "🐻", word: "ಕರಡಿ",      phonetic: "karadi" },
            { picture: "🐵", word: "ಕೋತಿ",     phonetic: "koti" },      { picture: "🦊", word: "ನರಿ",       phonetic: "nari" },      { picture: "🐺", word: "ತೋಳ",       phonetic: "tola" },
            { picture: "🐸", word: "ಕಪ್ಪೆ",     phonetic: "kappe" },     { picture: "🐢", word: "ಆಮೆ",      phonetic: "aame" },      { picture: "🦎", word: "ಹಲ್ಲಿ",      phonetic: "halli" },
            { picture: "🐍", word: "ಹಾವು",      phonetic: "haavu" },     { picture: "🦋", word: "ಚಿಟ್ಟೆ",    phonetic: "chitte" },    { picture: "🐝", word: "ದುಂಬಿ",     phonetic: "dumbi" },
            { picture: "🍊", word: "ಕಿತ್ತಳೆ",   phonetic: "kittale" },   { picture: "🍇", word: "ದ್ರಾಕ್ಷಿ",   phonetic: "draakshi" },  { picture: "🍈", word: "ಕರ್ಬೂಜ",    phonetic: "karbooja" },
            { picture: "🥕", word: "ಕ್ಯಾರೆಟ್",   phonetic: "kyaaret" },   { picture: "🥔", word: "ಆಲೂಗಡ್ಡೆ",  phonetic: "aaloogadde" }, { picture: "🌽", word: "ಜೋಳ",       phonetic: "jola" },
            { picture: "🚂", word: "ರೈಲು",      phonetic: "railu" },     { picture: "✈️", word: "ವಿಮಾನ",    phonetic: "vimaana" },   { picture: "🚢", word: "ಹಡಗು",      phonetic: "hadagu" },
            { picture: "👁️", word: "ಕಣ್ಣು",     phonetic: "kannu" },     { picture: "🤚", word: "ಕೈ",        phonetic: "kai" },       { picture: "🦵", word: "ಕಾಲು",      phonetic: "kaalu" },
            { picture: "⭐", word: "ನಕ್ಷತ್ರ",   phonetic: "nakshattra" }, { picture: "☁️", word: "ಮೋಡ",      phonetic: "moda" },      { picture: "🌈", word: "ಕಾಮನಬಿಲ್ಲು", phonetic: "kaamanabillu" }
          ]
        },
        {
          id: "kan_numbers",
          title: "Kannada Numbers (0-20)",
          type: "kannadaPictureWord",
          questions: 10,
          items: [
            { picture: "0️⃣", word: "ಸೊನ್ನೆ",       phonetic: "sonne" },    { picture: "1️⃣", word: "ಒಂದು",        phonetic: "ondu" },     { picture: "2️⃣", word: "ಎರಡು",       phonetic: "eradu" },
            { picture: "3️⃣", word: "ಮೂರು",        phonetic: "mooru" },    { picture: "4️⃣", word: "ನಾಲ್ಕು",       phonetic: "naalku" },   { picture: "5️⃣", word: "ಐದು",         phonetic: "aidu" },
            { picture: "6️⃣", word: "ಆರು",         phonetic: "aaru" },     { picture: "7️⃣", word: "ಏಳು",         phonetic: "elu" },      { picture: "8️⃣", word: "ಎಂಟು",        phonetic: "entu" },
            { picture: "9️⃣", word: "ಒಂಬತ್ತು",     phonetic: "ombattu" },  { picture: "🔟", word: "ಹತ್ತು",        phonetic: "hattu" },    { picture: "1️⃣1️⃣", word: "ಹನ್ನೊಂದು",  phonetic: "hannnondu" },
            { picture: "1️⃣2️⃣", word: "ಹನ್ನೆರಡು",  phonetic: "hanneradu" },{ picture: "1️⃣3️⃣", word: "ಹದಿಮೂರು",  phonetic: "hadimooru" },{ picture: "1️⃣4️⃣", word: "ಹದಿನಾಲ್ಕು", phonetic: "hadinaalku" },
            { picture: "1️⃣5️⃣", word: "ಹದಿನೈದು",  phonetic: "hadinaidu" },{ picture: "1️⃣6️⃣", word: "ಹದಿನಾರು",   phonetic: "hadinaaru" },{ picture: "1️⃣7️⃣", word: "ಹದಿನೇಳು",  phonetic: "hadinelu" },
            { picture: "1️⃣8️⃣", word: "ಹದಿನೆಂಟು",  phonetic: "hadinentu" },{ picture: "1️⃣9️⃣", word: "ಹತ್ತೊಂಬತ್ತು", phonetic: "hattombattu" },{ picture: "2️⃣0️⃣", word: "ಇಪ್ಪತ್ತು",  phonetic: "ippattu" }
          ]
        },
        {
          id: "kan_colors",
          title: "Colors in Kannada",
          type: "kannadaPictureWord",
          questions: 10,
          items: [
            { picture: "🔴 Red",     word: "ಕೆಂಪು",  phonetic: "kempu" },
            { picture: "🔵 Blue",    word: "ನೀಲಿ",   phonetic: "neeli" },
            { picture: "🟢 Green",   word: "ಹಸಿರು",  phonetic: "hasiru" },
            { picture: "🟡 Yellow",  word: "ಹಳದಿ",   phonetic: "haladi" },
            { picture: "🟠 Orange",  word: "ಕಿತ್ತಳೆ", phonetic: "kittale" },
            { picture: "⚫ Black",   word: "ಕಪ್ಪು",  phonetic: "kappu" },
            { picture: "⚪ White",   word: "ಬಿಳಿ",   phonetic: "bili" },
            { picture: "🟤 Brown",   word: "ಕಂದು",  phonetic: "kandu" },
            { picture: "🟣 Purple",  word: "ನೇರಳೆ",  phonetic: "nerale" },
            { picture: "🩷 Pink",    word: "ಗುಲಾಬಿ", phonetic: "gulaabi" }
          ]
        },
        {
          id: "kan_body_parts",
          title: "Body Parts in Kannada",
          type: "kannadaPictureWord",
          questions: 10,
          items: [
            { picture: "👁️", word: "ಕಣ್ಣು",   phonetic: "kannu" },    { picture: "👃", word: "ಮೂಗು",   phonetic: "moogu" },    { picture: "👂", word: "ಕಿವಿ",    phonetic: "kivi" },
            { picture: "👄", word: "ಬಾಯಿ",    phonetic: "baayi" },    { picture: "👅", word: "ನಾಲಗೆ",  phonetic: "naalage" },  { picture: "🦷", word: "ಹಲ್ಲು",   phonetic: "hallu" },
            { picture: "🤚", word: "ಕೈ",      phonetic: "kai" },      { picture: "🦶", word: "ಪಾದ",    phonetic: "paada" },    { picture: "💪", word: "ತೋಳು",   phonetic: "toolu" },
            { picture: "🦵", word: "ಕಾಲು",    phonetic: "kaalu" },    { picture: "🧠", word: "ಮೆದುಳು", phonetic: "medulu" },   { picture: "❤️", word: "ಹೃದಯ",  phonetic: "hrudaya" },
            { picture: "👂👂", word: "ಕಿವಿಗಳು", phonetic: "kivigalu" }, { picture: "👁️👁️", word: "ಕಣ್ಣುಗಳು", phonetic: "kannugalu" }, { picture: "🤲", word: "ಕೈಗಳು",  phonetic: "kaigalu" }
          ]
        },
        {
          id: "kan_animals_more",
          title: "More Animals in Kannada",
          type: "kannadaPictureWord",
          questions: 10,
          items: [
            { picture: "🦒", word: "ಜಿರಾಫೆ",  phonetic: "jiraafe" },  { picture: "🦓", word: "ಜೀಬ್ರಾ",  phonetic: "jeebra" },   { picture: "🐪", word: "ಒಂಟೆ",      phonetic: "onte" },
            { picture: "🐼", word: "ಪಾಂಡಾ",   phonetic: "paanda" },   { picture: "🐨", word: "ಕೋಲಾ",    phonetic: "kola" },     { picture: "🦘", word: "ಕ್ಯಾಂಗರೂ",  phonetic: "kyaangaroo" },
            { picture: "🦏", word: "ಖಡ್ಗಮೃಗ", phonetic: "khadgamruga" },{ picture: "🦛", word: "ಹಿಪ್ಪೋ",  phonetic: "hippo" },    { picture: "🐅", word: "ಹುಲಿ",      phonetic: "huli" },
            { picture: "🐆", word: "ಚಿರತೆ",   phonetic: "chirate" },  { picture: "🦅", word: "ಹದ್ದು",   phonetic: "haddu" },    { picture: "🦉", word: "ಗೂಬೆ",      phonetic: "goobe" },
            { picture: "🦜", word: "ಗಿಣಿ",    phonetic: "gini" },     { picture: "🦚", word: "ನವಿಲು",   phonetic: "navilu" },   { picture: "🦢", word: "ಹಂಸ",       phonetic: "hamsa" }
          ]
        },
        {
          id: "kan_more_drag_words",
          title: "Build More Kannada Words",
          type: "kannadaDragWord",
          questions: 10,
          words: [
            { clue: "Lion",       picture: "🦁", letters: ["ಸಿಂ", "ಹ"],        answerText: "ಸಿಂಹ" },
            { clue: "Tiger",      picture: "🐯", letters: ["ಹು",  "ಲಿ"],       answerText: "ಹುಲಿ" },
            { clue: "Monkey",     picture: "🐵", letters: ["ಕೋ",  "ತಿ"],       answerText: "ಕೋತಿ" },
            { clue: "Frog",       picture: "🐸", letters: ["ಕ",   "ಪ್ಪೆ"],     answerText: "ಕಪ್ಪೆ" },
            { clue: "Turtle",     picture: "🐢", letters: ["ಆ",   "ಮೆ"],       answerText: "ಆಮೆ" },
            { clue: "Snake",      picture: "🐍", letters: ["ಹಾ",  "ವು"],       answerText: "ಹಾವು" },
            { clue: "Butterfly",  picture: "🦋", letters: ["ಚಿ",  "ಟ್ಟೆ"],     answerText: "ಚಿಟ್ಟೆ" },
            { clue: "Train",      picture: "🚂", letters: ["ರೈ",  "ಲು"],       answerText: "ರೈಲು" },
            { clue: "Airplane",   picture: "✈️", letters: ["ವಿ",  "ಮಾ", "ನ"],  answerText: "ವಿಮಾನ" },
            { clue: "Ship",       picture: "🚢", letters: ["ಹ",   "ಡ", "ಗು"],  answerText: "ಹಡಗು" },
            { clue: "Star",       picture: "⭐", letters: ["ನ",   "ಕ್ಷ", "ತ್ರ"], answerText: "ನಕ್ಷತ್ರ" },
            { clue: "Cloud",      picture: "☁️", letters: ["ಮೋ",  "ಡ"],        answerText: "ಮೋಡ" },
            { clue: "Grapes",     picture: "🍇", letters: ["ದ್ರಾ", "ಕ್ಷಿ"],    answerText: "ದ್ರಾಕ್ಷಿ" },
            { clue: "Orange",     picture: "🍊", letters: ["ಕಿ",  "ತ್ತ", "ಳೆ"], answerText: "ಕಿತ್ತಳೆ" },
            { clue: "Potato",     picture: "🥔", letters: ["ಆ",   "ಲೂ", "ಗ", "ಡ್ಡೆ"], answerText: "ಆಲೂಗಡ್ಡೆ" }
          ]
        }
      ]
    },
    hindi: {
      name: "हिन्दी",
      icon: "अ",
      description: "स्वर, व्यंजन, चित्र-शब्द मिलान और सरल शब्द।",
      modules: [
        {
          id: "hin_letters",
          title: "स्वर और व्यंजन",
          type: "hindiLetter",
          questions: 10,
          letters: [
            { letter: "अ", phonetic: "a" }, { letter: "आ", phonetic: "aa" }, { letter: "इ", phonetic: "i" }, 
            { letter: "ई", phonetic: "ee" }, { letter: "उ", phonetic: "u" }, { letter: "ऊ", phonetic: "oo" }, 
            { letter: "ऋ", phonetic: "ri" }, { letter: "ए", phonetic: "e" }, { letter: "ऐ", phonetic: "ai" }, 
            { letter: "ओ", phonetic: "o" }, { letter: "औ", phonetic: "au" }, { letter: "अं", phonetic: "an" }, { letter: "अः", phonetic: "ah" },
            { letter: "क", phonetic: "ka" }, { letter: "ख", phonetic: "kha" }, { letter: "ग", phonetic: "ga" }, 
            { letter: "घ", phonetic: "gha" }, { letter: "ङ", phonetic: "nga" },
            { letter: "च", phonetic: "cha" }, { letter: "छ", phonetic: "chha" }, { letter: "ज", phonetic: "ja" }, 
            { letter: "झ", phonetic: "jha" }, { letter: "ञ", phonetic: "nya" },
            { letter: "ट", phonetic: "ta" }, { letter: "ठ", phonetic: "tha" }, { letter: "ड", phonetic: "da" }, 
            { letter: "ढ", phonetic: "dha" }, { letter: "ण", phonetic: "na" },
            { letter: "त", phonetic: "ta" }, { letter: "थ", phonetic: "tha" }, { letter: "द", phonetic: "da" }, 
            { letter: "ध", phonetic: "dha" }, { letter: "न", phonetic: "na" },
            { letter: "प", phonetic: "pa" }, { letter: "फ", phonetic: "pha" }, { letter: "ब", phonetic: "ba" }, 
            { letter: "भ", phonetic: "bha" }, { letter: "म", phonetic: "ma" },
            { letter: "य", phonetic: "ya" }, { letter: "र", phonetic: "ra" }, { letter: "ल", phonetic: "la" }, { letter: "व", phonetic: "va" },
            { letter: "श", phonetic: "sha" }, { letter: "ष", phonetic: "sha" }, { letter: "स", phonetic: "sa" }, { letter: "ह", phonetic: "ha" }
          ]
        },
        {
          id: "hin_picture_word",
          title: "चित्र-शब्द मिलान",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "🏠", word: "घर", phonetic: "ghar" },
            { picture: "🌳", word: "पेड़", phonetic: "ped" },
            { picture: "🍎", word: "सेब", phonetic: "seb" },
            { picture: "🐄", word: "गाय", phonetic: "gaay" },
            { picture: "🌸", word: "फूल", phonetic: "phool" },
            { picture: "📚", word: "किताब", phonetic: "kitaab" },
            { picture: "🐟", word: "मछली", phonetic: "machhli" },
            { picture: "🐦", word: "चिड़िया", phonetic: "chidiya" },
            { picture: "☀️", word: "सूरज", phonetic: "sooraj" },
            { picture: "🌙", word: "चाँद", phonetic: "chaand" },
            { picture: "💧", word: "पानी", phonetic: "paani" },
            { picture: "🚗", word: "गाड़ी", phonetic: "gaadi" },
            { picture: "🐘", word: "हाथी", phonetic: "haathi" },
            { picture: "🦁", word: "शेर"    },
            { picture: "🥭", word: "आम", phonetic: "aam" },
            { picture: "🍌", word: "केला", phonetic: "kela" },
            { picture: "🐶", word: "कुत्ता", phonetic: "kutta" },
            { picture: "🐱", word: "बिल्ली", phonetic: "billi" },
            { picture: "👁️", word: "आँख", phonetic: "aankh" },
            { picture: "🤚", word: "हाथ", phonetic: "haath" },
            { picture: "👃", word: "नाक", phonetic: "naak" },
            { picture: "👂", word: "कान", phonetic: "kaan" },
            { picture: "🦶", word: "पैर", phonetic: "pair" },
            { picture: "🐓", word: "मुर्गा", phonetic: "murga" },
            { picture: "🌾", word: "धान", phonetic: "dhaan" },
            { picture: "🐸", word: "मेंढक", phonetic: "mendhak" },
            { picture: "🐍", word: "साँप", phonetic: "saanp" },
            { picture: "🦋", word: "तितली", phonetic: "titli" },
            { picture: "🐢", word: "कछुआ", phonetic: "kachhua" },
            { picture: "🚂", word: "रेलगाड़ी", phonetic: "relgaadi" }
          ]
        },
        {
          id: "hin_missing_matra",
          title: "सही मात्रा चुनो",
          type: "hindiMissingMatra",
          questions: 10,
          words: [
            { display: "क_ला",  answer: "े",  fullWord: "केला",  hint: "Banana 🍌"   },
            { display: "प_नी",  answer: "ा",  fullWord: "पानी",  hint: "Water 💧"    },
            { display: "ग_य",   answer: "ा",  fullWord: "गाय",   hint: "Cow 🐄"     },
            { display: "फ_ल",   answer: "ू",  fullWord: "फूल",   hint: "Flower 🌸"  },
            { display: "स_ब",   answer: "े",  fullWord: "सेब",   hint: "Apple 🍎"   },
            { display: "क_न",   answer: "ा",  fullWord: "कान",   hint: "Ear 👂"     },
            { display: "न_क",   answer: "ा",  fullWord: "नाक",   hint: "Nose 👃"    },
            { display: "ह_थ",   answer: "ा",  fullWord: "हाथ",   hint: "Hand 🤚"    },
            { display: "प_र",   answer: "ै",  fullWord: "पैर",   hint: "Foot 🦶"    },
            { display: "आ_ख",   answer: "ँ",  fullWord: "आँख",   hint: "Eye 👁️"    },
            { display: "घ_स",   answer: "ा",  fullWord: "घास",   hint: "Grass 🌿"   },
            { display: "द_ध",   answer: "ू",  fullWord: "दूध",   hint: "Milk 🥛"    },
            { display: "र_ट",   answer: "ो",  fullWord: "रोट",   hint: "Bread 🍞"   },
            { display: "म_र",   answer: "ो",  fullWord: "मोर",   hint: "Peacock 🦚" },
            { display: "ब_ल",   answer: "ा",  fullWord: "बाल",   hint: "Hair 💇"    },
            { display: "प_ड",   answer: "े",  fullWord: "पेड़",   hint: "Tree 🌳"    },
            { display: "च_द",   answer: "ाँ", fullWord: "चाँद",  hint: "Moon 🌙"    },
            { display: "स_रज",  answer: "ू",  fullWord: "सूरज",  hint: "Sun ☀️"     },
            { display: "क_ता",  answer: "ु",  fullWord: "कुता",  hint: "Dog 🐶"     },
            { display: "ग_ड़ी", answer: "ा",  fullWord: "गाड़ी", hint: "Car 🚗"     }
          ]
        },
        {
          id: "hin_barakhadi",
          title: "बारहखड़ी — Barakhadi",
          type: "hindiBarakhadi",
          questions: 10,
          combos: [
            { consonant: "क", matra: "ा",  result: "का"  },
            { consonant: "क", matra: "ि",  result: "कि"  },
            { consonant: "क", matra: "ी",  result: "की"  },
            { consonant: "क", matra: "ु",  result: "कु"  },
            { consonant: "क", matra: "ू",  result: "कू"  },
            { consonant: "क", matra: "े",  result: "के"  },
            { consonant: "क", matra: "ो",  result: "को"  },
            { consonant: "ख", matra: "ा",  result: "खा"  },
            { consonant: "ख", matra: "ि",  result: "खि"  },
            { consonant: "ख", matra: "ी",  result: "खी"  },
            { consonant: "ख", matra: "े",  result: "खे"  },
            { consonant: "ग", matra: "ा",  result: "गा"  },
            { consonant: "ग", matra: "ि",  result: "गि"  },
            { consonant: "ग", matra: "ी",  result: "गी"  },
            { consonant: "ग", matra: "ु",  result: "गु"  },
            { consonant: "ग", matra: "े",  result: "गे"  },
            { consonant: "ग", matra: "ो",  result: "गो"  },
            { consonant: "च", matra: "ा",  result: "चा"  },
            { consonant: "च", matra: "ि",  result: "चि"  },
            { consonant: "च", matra: "ी",  result: "ची"  },
            { consonant: "च", matra: "ु",  result: "चु"  },
            { consonant: "च", matra: "े",  result: "चे"  },
            { consonant: "ज", matra: "ा",  result: "जा"  },
            { consonant: "ज", matra: "ि",  result: "जि"  },
            { consonant: "ज", matra: "ी",  result: "जी"  },
            { consonant: "ज", matra: "े",  result: "जे"  },
            { consonant: "ज", matra: "ो",  result: "जो"  },
            { consonant: "त", matra: "ा",  result: "ता"  },
            { consonant: "त", matra: "ि",  result: "ति"  },
            { consonant: "त", matra: "ी",  result: "ती"  },
            { consonant: "त", matra: "े",  result: "ते"  },
            { consonant: "द", matra: "ा",  result: "दा"  },
            { consonant: "द", matra: "ि",  result: "दि"  },
            { consonant: "द", matra: "ी",  result: "दी"  },
            { consonant: "द", matra: "े",  result: "दे"  },
            { consonant: "न", matra: "ा",  result: "ना"  },
            { consonant: "न", matra: "ि",  result: "नि"  },
            { consonant: "न", matra: "ी",  result: "नी"  },
            { consonant: "न", matra: "े",  result: "ने"  },
            { consonant: "न", matra: "ो",  result: "नो"  },
            { consonant: "प", matra: "ा",  result: "पा"  },
            { consonant: "प", matra: "ि",  result: "पि"  },
            { consonant: "प", matra: "ी",  result: "पी"  },
            { consonant: "प", matra: "ु",  result: "पु"  },
            { consonant: "प", matra: "ू",  result: "पू"  },
            { consonant: "ब", matra: "ा",  result: "बा"  },
            { consonant: "ब", matra: "ि",  result: "बि"  },
            { consonant: "ब", matra: "ी",  result: "बी"  },
            { consonant: "ब", matra: "ु",  result: "बु"  },
            { consonant: "ब", matra: "ो",  result: "बो"  },
            { consonant: "म", matra: "ा",  result: "मा"  },
            { consonant: "म", matra: "ि",  result: "मि"  },
            { consonant: "म", matra: "ी",  result: "मी"  },
            { consonant: "म", matra: "ु",  result: "मु"  },
            { consonant: "म", matra: "ू",  result: "मू"  },
            { consonant: "म", matra: "े",  result: "मे"  },
            { consonant: "म", matra: "ो",  result: "मो"  },
            { consonant: "र", matra: "ा",  result: "रा"  },
            { consonant: "र", matra: "ि",  result: "रि"  },
            { consonant: "र", matra: "े",  result: "रे"  },
            { consonant: "ल", matra: "ा",  result: "ला"  },
            { consonant: "ल", matra: "ि",  result: "लि"  },
            { consonant: "ल", matra: "ी",  result: "ली"  },
            { consonant: "ल", matra: "े",  result: "ले"  },
            { consonant: "ल", matra: "ो",  result: "लो"  },
            { consonant: "ह", matra: "ा",  result: "हा"  },
            { consonant: "ह", matra: "ि",  result: "हि"  },
            { consonant: "ह", matra: "ी",  result: "ही"  },
            { consonant: "ह", matra: "े",  result: "हे"  },
            { consonant: "ह", matra: "ो",  result: "हो"  },
            { consonant: "स", matra: "ा",  result: "सा"  },
            { consonant: "स", matra: "ि",  result: "सि"  },
            { consonant: "स", matra: "ी",  result: "सी"  },
            { consonant: "स", matra: "े",  result: "से"  },
            { consonant: "स", matra: "ो",  result: "सो"  },
            { consonant: "श", matra: "ा",  result: "शा"  },
            { consonant: "श", matra: "ि",  result: "शि"  },
            { consonant: "श", matra: "ी",  result: "शी"  },
            { consonant: "श", matra: "े",  result: "शे"  },
            { consonant: "ध", matra: "ा",  result: "धा"  },
            { consonant: "ध", matra: "ी",  result: "धी"  },
            { consonant: "ध", matra: "े",  result: "धे"  }
          ]
        },
        {
          id: "hin_poems",
          title: "हिन्दी कविता",
          type: "hindiPoem",
          completePrompt: "🎵 कविता पूरी करो!",
          questions: 10,
          items: [
            { lines: "मछली जल की ___ है,\nजीवन उसका पानी है।",          answer: "रानी",   options: ["रानी", "माँ", "दासी", "बेटी"],     emoji: "🐟", speakText: "मछली जल की रानी है जीवन उसका पानी है"                  },
            { lines: "लकड़ी की काठी,\nकाठी पे ___।",                      answer: "घोड़ा",   options: ["घोड़ा", "गाय", "हाथी", "बन्दर"],   emoji: "🐎", speakText: "लकड़ी की काठी काठी पे घोड़ा"                          },
            { lines: "चंदा मामा ___ के,\nपुए पकाएं बूर के।",              answer: "दूर",     options: ["दूर", "पास", "ऊपर", "नीचे"],       emoji: "🌙", speakText: "चंदा मामा दूर के पुए पकाएं बूर के"                    },
            { lines: "नानी तेरी ___ को,\nमोर ले गए बन को।",              answer: "मोरनी",   options: ["मोरनी", "बकरी", "गाय", "बिल्ली"], emoji: "🦚", speakText: "नानी तेरी मोरनी को मोर ले गए बन को"                  },
            { lines: "छुक-छुक ___ गाड़ी,\nचलती जाए पटरी पर।",           answer: "रेल",     options: ["रेल", "बस", "कार", "नाव"],         emoji: "🚂", speakText: "छुक छुक रेल गाड़ी चलती जाए पटरी पर"                   },
            { lines: "तितली उड़ी, ___ पर बैठी,\nरंग-बिरंगे पंख लिए।",   answer: "फूल",     options: ["फूल", "पत्थर", "नदी", "घर"],       emoji: "🦋", speakText: "तितली उड़ी फूल पर बैठी रंग बिरंगे पंख लिए"            },
            { lines: "आम की ___ भारी है,\nछोटी-सी मेरी प्यारी है।",     answer: "टोकरी",   options: ["टोकरी", "गाड़ी", "थाली", "बाल्टी"],emoji: "🥭", speakText: "आम की टोकरी भारी है छोटी सी मेरी प्यारी है"          },
            { lines: "बंदर मामा ___ पहनो,\nनाचो-कूदो खूब मनाओ।",        answer: "टोपी",    options: ["टोपी", "साड़ी", "चादर", "कुर्ता"], emoji: "🐒", speakText: "बंदर मामा टोपी पहनो नाचो कूदो खूब मनाओ"              },
            { lines: "पत्ते-पत्ते ___ पत्ते,\nखूब हरे-भरे पत्ते।",      answer: "हरे",     options: ["हरे", "लाल", "पीले", "नीले"],      emoji: "🍃", speakText: "पत्ते पत्ते हरे पत्ते खूब हरे भरे पत्ते"              },
            { lines: "हाथी ___ चलता है,\nधम-धम पैर धरता है।",           answer: "मस्त",    options: ["मस्त", "तेज़", "धीरे", "दौड़"],    emoji: "🐘", speakText: "हाथी मस्त चलता है धम धम पैर धरता है"                  },
            { lines: "ऊपर ___ नीचे पानी,\nबीच में धरती है रानी।",       answer: "आकाश",    options: ["आकाश", "सूरज", "पहाड़", "बादल"],   emoji: "🌍", speakText: "ऊपर आकाश नीचे पानी बीच में धरती है रानी"              },
            { lines: "बरसो रे मेघ, बरसो ___,\nजल से भर दो सागर।",      answer: "जोर",     options: ["जोर", "साथ", "धीरे", "कम"],        emoji: "🌧️", speakText: "बरसो रे मेघ बरसो जोर जल से भर दो सागर"              }
          ]
        },
        {
          id: "hin_more_picture_words",
          title: "और चित्र-शब्द",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "🦁", word: "शेर" },     { picture: "🐯", word: "बाघ" },     { picture: "🐻", word: "भालू" },
            { picture: "🐵", word: "बंदर" },    { picture: "🦊", word: "लोमड़ी" },  { picture: "🐺", word: "भेड़िया" },
            { picture: "🐸", word: "मेंढक" },   { picture: "🐢", word: "कछुआ" },    { picture: "🦎", word: "छिपकली" },
            { picture: "🐍", word: "साँप" },    { picture: "🦋", word: "तितली" },   { picture: "🐝", word: "मधुमक्खी" },
            { picture: "🍊", word: "संतरा" },   { picture: "🍇", word: "अंगूर" },    { picture: "🍉", word: "तरबूज़" },
            { picture: "🥕", word: "गाजर" },    { picture: "🥔", word: "आलू" },     { picture: "🌽", word: "मक्का" },
            { picture: "🚂", word: "रेलगाड़ी" },{ picture: "✈️", word: "हवाईजहाज़" },{ picture: "🚢", word: "जहाज़" },
            { picture: "⭐", word: "तारा" },    { picture: "☁️", word: "बादल" },    { picture: "🌈", word: "इंद्रधनुष" },
            { picture: "🏠", word: "घर" },      { picture: "🏫", word: "स्कूल" },    { picture: "🏥", word: "अस्पताल" },
            { picture: "🌳", word: "पेड़" },     { picture: "🌺", word: "फूल" },     { picture: "🌾", word: "फसल" }
          ]
        },
        {
          id: "hin_numbers",
          title: "हिन्दी में गिनती (0-20)",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "0️⃣", word: "शून्य", phonetic: "shunya" },   { picture: "1️⃣", word: "एक", phonetic: "ek" },      { picture: "2️⃣", word: "दो", phonetic: "do" },
            { picture: "3️⃣", word: "तीन", phonetic: "teen" },     { picture: "4️⃣", word: "चार", phonetic: "chaar" },     { picture: "5️⃣", word: "पाँच", phonetic: "paanch" },
            { picture: "6️⃣", word: "छह", phonetic: "chhah" },      { picture: "7️⃣", word: "सात", phonetic: "saat" },     { picture: "8️⃣", word: "आठ", phonetic: "aath" },
            { picture: "9️⃣", word: "नौ", phonetic: "nau" },      { picture: "🔟", word: "दस", phonetic: "das" },      { picture: "1️⃣1️⃣", word: "ग्यारह", phonetic: "gyaarah" },
            { picture: "1️⃣2️⃣", word: "बारह", phonetic: "baarah" },  { picture: "1️⃣3️⃣", word: "तेरह", phonetic: "terah" },  { picture: "1️⃣4️⃣", word: "चौदह", phonetic: "chaudah" },
            { picture: "1️⃣5️⃣", word: "पंद्रह", phonetic: "pandrah" },{ picture: "1️⃣6️⃣", word: "सोलह", phonetic: "solah" },  { picture: "1️⃣7️⃣", word: "सत्रह", phonetic: "satrah" },
            { picture: "1️⃣8️⃣", word: "अठारह", phonetic: "athaarah" }, { picture: "1️⃣9️⃣", word: "उन्नीस", phonetic: "unnees" },{ picture: "2️⃣0️⃣", word: "बीस", phonetic: "bees" }
          ]
        },
        {
          id: "hin_colors",
          title: "रंगों के नाम",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "🔴 Red",    word: "लाल" },
            { picture: "🔵 Blue",   word: "नीला" },
            { picture: "🟢 Green",  word: "हरा" },
            { picture: "🟡 Yellow", word: "पीला" },
            { picture: "🟠 Orange", word: "नारंगी" },
            { picture: "⚫ Black",  word: "काला" },
            { picture: "⚪ White",  word: "सफ़ेद" },
            { picture: "🟤 Brown",  word: "भूरा" },
            { picture: "🟣 Purple", word: "बैंगनी" },
            { picture: "🩷 Pink",   word: "गुलाबी" }
          ]
        },
        {
          id: "hin_body_parts",
          title: "शरीर के अंग",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "👁️", word: "आँख" },    { picture: "👃", word: "नाक" },     { picture: "👂", word: "कान" },
            { picture: "👄", word: "मुँह" },    { picture: "👅", word: "जीभ" },     { picture: "🦷", word: "दाँत" },
            { picture: "🤚", word: "हाथ" },     { picture: "🦶", word: "पैर" },     { picture: "💪", word: "बाँह" },
            { picture: "🦵", word: "टाँग" },    { picture: "🧠", word: "दिमाग़" },  { picture: "❤️", word: "दिल" },
            { picture: "👁️👁️", word: "आँखें" }, { picture: "👂👂", word: "कान" },    { picture: "🤲", word: "हाथ" }
          ]
        },
        {
          id: "hin_family",
          title: "परिवार के सदस्य",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "👨", word: "पिता" },    { picture: "👩", word: "माता" },
            { picture: "👴", word: "दादा" },    { picture: "👵", word: "दादी" },
            { picture: "👦", word: "भाई" },     { picture: "👧", word: "बहन" },
            { picture: "👨‍👦", word: "पुत्र" },    { picture: "👩‍👧", word: "पुत्री" },
            { picture: "👨‍🦳", word: "चाचा" },   { picture: "👩‍🦰", word: "चाची" }
          ]
        },
        {
          id: "hin_days_months",
          title: "दिन और महीने",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "सप्ताह का पहला दिन कौन सा है?", visual: "📅", answer: "सोमवार", options: ["सोमवार", "रविवार", "शनिवार", "मंगलवार"], speakLang: "hi-IN", speakText: "सप्ताह का पहला दिन कौन सा है" },
            { question: "रविवार के बाद कौन सा दिन आता है?", visual: "📅", answer: "सोमवार", options: ["सोमवार", "मंगलवार", "शनिवार", "बुधवार"], speakLang: "hi-IN", speakText: "रविवार के बाद कौन सा दिन आता है" },
            { question: "शुक्रवार के बाद कौन सा दिन आता है?", visual: "📅", answer: "शनिवार", options: ["शनिवार", "रविवार", "सोमवार", "बुधवार"], speakLang: "hi-IN", speakText: "शुक्रवार के बाद कौन सा दिन आता है" },
            { question: "एक सप्ताह में कितने दिन होते हैं?", visual: "📅", answer: "सात", options: ["सात", "पाँच", "छह", "दस"], speakLang: "hi-IN", speakText: "एक सप्ताह में कितने दिन होते हैं" },
            { question: "एक साल में कितने महीने होते हैं?", visual: "🗓️", answer: "बारह", options: ["बारह", "दस", "सात", "पंद्रह"], speakLang: "hi-IN", speakText: "एक साल में कितने महीने होते हैं" },
            { question: "साल का पहला महीना कौन सा है?", visual: "🗓️", answer: "जनवरी", options: ["जनवरी", "फरवरी", "मार्च", "अप्रैल"], speakLang: "hi-IN", speakText: "साल का पहला महीना कौन सा है" },
            { question: "होली किस महीने में आती है?", visual: "🎨", answer: "मार्च", options: ["मार्च", "जनवरी", "जून", "दिसंबर"], speakLang: "hi-IN", speakText: "होली किस महीने में आती है" },
            { question: "दिवाली किस महीने में आती है?", visual: "🪔", answer: "अक्टूबर-नवंबर", options: ["अक्टूबर-नवंबर", "जनवरी", "मई", "अगस्त"], speakLang: "hi-IN", speakText: "दिवाली किस महीने में आती है" },
            { question: "स्वतंत्रता दिवस किस महीने में है?", visual: "🇮🇳", answer: "अगस्त", options: ["अगस्त", "जनवरी", "मार्च", "जून"], speakLang: "hi-IN", speakText: "स्वतंत्रता दिवस किस महीने में है" },
            { question: "गणतंत्र दिवस किस महीने में है?", visual: "🪖", answer: "जनवरी", options: ["जनवरी", "अगस्त", "मार्च", "अक्टूबर"], speakLang: "hi-IN", speakText: "गणतंत्र दिवस किस महीने में है" },
            { question: "सप्ताह का अंतिम दिन कौन सा है?", visual: "📅", answer: "रविवार", options: ["रविवार", "सोमवार", "शनिवार", "शुक्रवार"], speakLang: "hi-IN", speakText: "सप्ताह का अंतिम दिन कौन सा है" },
            { question: "मंगलवार के बाद कौन सा दिन आता है?", visual: "📅", answer: "बुधवार", options: ["बुधवार", "सोमवार", "गुरुवार", "शुक्रवार"], speakLang: "hi-IN", speakText: "मंगलवार के बाद कौन सा दिन आता है" },
            { question: "फरवरी के बाद कौन सा महीना आता है?", visual: "🗓️", answer: "मार्च", options: ["मार्च", "अप्रैल", "जनवरी", "मई"], speakLang: "hi-IN", speakText: "फरवरी के बाद कौन सा महीना आता है" },
            { question: "दिसंबर के बाद कौन सा महीना आता है?", visual: "🗓️", answer: "जनवरी", options: ["जनवरी", "नवंबर", "फरवरी", "मार्च"], speakLang: "hi-IN", speakText: "दिसंबर के बाद कौन सा महीना आता है" },
            { question: "छुट्टी का दिन कौन सा है?", visual: "🎉", answer: "रविवार", options: ["रविवार", "सोमवार", "मंगलवार", "बुधवार"], speakLang: "hi-IN", speakText: "छुट्टी का दिन कौन सा है" }
          ]
        },
        {
          id: "hin_action_words",
          title: "क्रिया शब्द (काम के शब्द)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "हम पैरों से ___ हैं।", visual: "🚶", answer: "चलते", options: ["चलते", "बोलते", "देखते", "सुनते"], speakLang: "hi-IN", speakText: "हम पैरों से चलते हैं" },
            { question: "हम मुँह से ___ हैं।", visual: "🗣️", answer: "बोलते", options: ["बोलते", "चलते", "उड़ते", "तैरते"], speakLang: "hi-IN", speakText: "हम मुँह से बोलते हैं" },
            { question: "पक्षी ___ हैं।", visual: "🐦", answer: "उड़ते", options: ["उड़ते", "दौड़ते", "तैरते", "बोलते"], speakLang: "hi-IN", speakText: "पक्षी उड़ते हैं" },
            { question: "मछली पानी में ___ है।", visual: "🐟", answer: "तैरती", options: ["तैरती", "उड़ती", "दौड़ती", "चलती"], speakLang: "hi-IN", speakText: "मछली पानी में तैरती है" },
            { question: "हम खाना ___ हैं।", visual: "🍽️", answer: "खाते", options: ["खाते", "पीते", "सोते", "खेलते"], speakLang: "hi-IN", speakText: "हम खाना खाते हैं" },
            { question: "हम कलम से ___ हैं।", visual: "✍️", answer: "लिखते", options: ["लिखते", "पढ़ते", "गाते", "नाचते"], speakLang: "hi-IN", speakText: "हम कलम से लिखते हैं" },
            { question: "हम किताब ___ हैं।", visual: "📖", answer: "पढ़ते", options: ["पढ़ते", "लिखते", "गाते", "खेलते"], speakLang: "hi-IN", speakText: "हम किताब पढ़ते हैं" },
            { question: "हम रात को ___ हैं।", visual: "😴", answer: "सोते", options: ["सोते", "खाते", "खेलते", "पढ़ते"], speakLang: "hi-IN", speakText: "हम रात को सोते हैं" },
            { question: "हम गाना ___ हैं।", visual: "🎤", answer: "गाते", options: ["गाते", "नाचते", "खाते", "सोते"], speakLang: "hi-IN", speakText: "हम गाना गाते हैं" },
            { question: "हम खेल ___ हैं।", visual: "⚽", answer: "खेलते", options: ["खेलते", "सोते", "खाते", "पीते"], speakLang: "hi-IN", speakText: "हम खेल खेलते हैं" },
            { question: "हम पानी ___ हैं।", visual: "🥤", answer: "पीते", options: ["पीते", "खाते", "सोते", "लिखते"], speakLang: "hi-IN", speakText: "हम पानी पीते हैं" },
            { question: "घोड़ा ___ है।", visual: "🐎", answer: "दौड़ता", options: ["दौड़ता", "उड़ता", "तैरता", "सोता"], speakLang: "hi-IN", speakText: "घोड़ा दौड़ता है" },
            { question: "सूरज ___ है।", visual: "☀️", answer: "चमकता", options: ["चमकता", "सोता", "खेलता", "दौड़ता"], speakLang: "hi-IN", speakText: "सूरज चमकता है" },
            { question: "फूल ___ है।", visual: "🌺", answer: "खिलता", options: ["खिलता", "उड़ता", "दौड़ता", "तैरता"], speakLang: "hi-IN", speakText: "फूल खिलता है" },
            { question: "बच्चे ___ हैं।", visual: "😊", answer: "हँसते", options: ["हँसते", "उड़ते", "तैरते", "चमकते"], speakLang: "hi-IN", speakText: "बच्चे हंसते हैं" }
          ]
        },
        {
          id: "hin_opposites",
          title: "विलोम शब्द (उल्टे शब्द)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "बड़ा का विलोम शब्द है:", visual: "⬆️↔️⬇️", answer: "छोटा", options: ["छोटा", "लंबा", "मोटा", "पतला"], speakLang: "hi-IN", speakText: "बड़ा का विलोम शब्द है छोटा" },
            { question: "गरम का विलोम शब्द है:", visual: "🔥↔️❄️", answer: "ठंडा", options: ["ठंडा", "गीला", "सूखा", "नरम"], speakLang: "hi-IN", speakText: "गरम का विलोम शब्द है ठंडा" },
            { question: "ऊपर का विलोम शब्द है:", visual: "⬆️↔️⬇️", answer: "नीचे", options: ["नीचे", "बाएँ", "दाएँ", "आगे"], speakLang: "hi-IN", speakText: "ऊपर का विलोम शब्द है नीचे" },
            { question: "दिन का विलोम शब्द है:", visual: "☀️↔️🌙", answer: "रात", options: ["रात", "सुबह", "दोपहर", "शाम"], speakLang: "hi-IN", speakText: "दिन का विलोम शब्द है रात" },
            { question: "अंदर का विलोम शब्द है:", visual: "⬅️↔️➡️", answer: "बाहर", options: ["बाहर", "ऊपर", "नीचे", "पास"], speakLang: "hi-IN", speakText: "अंदर का विलोम शब्द है बाहर" },
            { question: "खुश का विलोम शब्द है:", visual: "😊↔️😢", answer: "दुखी", options: ["दुखी", "गुस्सा", "थका", "भूखा"], speakLang: "hi-IN", speakText: "खुश का विलोम शब्द है दुखी" },
            { question: "नया का विलोम शब्द है:", visual: "✨↔️🕰️", answer: "पुराना", options: ["पुराना", "ताज़ा", "साफ़", "गंदा"], speakLang: "hi-IN", speakText: "नया का विलोम शब्द है पुराना" },
            { question: "तेज़ का विलोम शब्द है:", visual: "🐇↔️🐢", answer: "धीमा", options: ["धीमा", "रुको", "जाओ", "आओ"], speakLang: "hi-IN", speakText: "तेज़ का विलोम शब्द है धीमा" },
            { question: "लंबा का विलोम शब्द है:", visual: "🦒↔️🐁", answer: "छोटा", options: ["छोटा", "बड़ा", "मोटा", "पतला"], speakLang: "hi-IN", speakText: "लंबा का विलोम शब्द है छोटा" },
            { question: "अच्छा का विलोम शब्द है:", visual: "👍↔️👎", answer: "बुरा", options: ["बुरा", "सुंदर", "प्यारा", "खुश"], speakLang: "hi-IN", speakText: "अच्छा का विलोम शब्द है बुरा" },
            { question: "सूखा का विलोम शब्द है:", visual: "🏜️↔️💧", answer: "गीला", options: ["गीला", "ठंडा", "गरम", "नरम"], speakLang: "hi-IN", speakText: "सूखा का विलोम शब्द है गीला" },
            { question: "मोटा का विलोम शब्द है:", visual: "🐘↔️🦒", answer: "पतला", options: ["पतला", "लंबा", "छोटा", "बड़ा"], speakLang: "hi-IN", speakText: "मोटा का विलोम शब्द है पतला" },
            { question: "आगे का विलोम शब्द है:", visual: "➡️↔️⬅️", answer: "पीछे", options: ["पीछे", "ऊपर", "नीचे", "बाहर"], speakLang: "hi-IN", speakText: "आगे का विलोम शब्द है पीछे" },
            { question: "कड़ा का विलोम शब्द है:", visual: "🪨↔️🧈", answer: "नरम", options: ["नरम", "गरम", "ठंडा", "गीला"], speakLang: "hi-IN", speakText: "कड़ा का विलोम शब्द है नरम" },
            { question: "साफ़ का विलोम शब्द है:", visual: "✨↔️💩", answer: "गंदा", options: ["गंदा", "नया", "पुराना", "बुरा"], speakLang: "hi-IN", speakText: "साफ़ का विलोम शब्द है गंदा" }
          ]
        },
        {
          id: "hin_more_matras",
          title: "और मात्राएँ",
          type: "hindiMissingMatra",
          questions: 10,
          words: [
            { base: "क", display: "क_र", matra: "ा", answer: "ा", fullWord: "कार" },
            { base: "ग", display: "ग_ड़_", matra: "ा", answer: "ा", fullWord: "गाड़ी" },
            { base: "ब", display: "ब_ल", matra: "ा", answer: "ा", fullWord: "बाल" },
            { base: "म", display: "म_त_", matra: "ा", answer: "ा", fullWord: "माता" },
            { base: "प", display: "प_न_", matra: "ा", answer: "ा", fullWord: "पानी" },
            { base: "क", display: "क_व_", matra: "ि", answer: "ि", fullWord: "किवी" },
            { base: "त", display: "त_तल_", matra: "ि", answer: "ि", fullWord: "तितली" },
            { base: "म", display: "म_र्च", matra: "ि", answer: "ि", fullWord: "मिर्च" },
            { base: "ग", display: "ग_लहर_", matra: "ि", answer: "ि", fullWord: "गिलहरी" },
            { base: "च", display: "च_ड़_य_", matra: "ि", answer: "ि", fullWord: "चिड़िया" },
            { base: "म", display: "म_ठ_ई", matra: "ी", answer: "ी", fullWord: "मीठाई" },
            { base: "न", display: "न_ल_", matra: "ी", answer: "ी", fullWord: "नीली" },
            { base: "र", display: "र_त_", matra: "ी", answer: "ी", fullWord: "रीति" },
            { base: "त", display: "त_न", matra: "ी", answer: "ी", fullWord: "तीन" },
            { base: "च", display: "च_ड़_", matra: "ी", answer: "ी", fullWord: "चीड़ी" },
            { base: "म", display: "म_ह_", matra: "ु", answer: "ु", fullWord: "मुहँ" },
            { base: "स", display: "स_बह", matra: "ु", answer: "ु", fullWord: "सुबह" },
            { base: "ख", display: "ख_श_", matra: "ु", answer: "ु", fullWord: "खुशी" },
            { base: "ग", display: "ग_ल_ब", matra: "ु", answer: "ु", fullWord: "गुलाब" },
            { base: "म", display: "म_र्ग_", matra: "ु", answer: "ु", fullWord: "मुर्गी" },
            { base: "फ", display: "फ_ल", matra: "ू", answer: "ू", fullWord: "फूल" },
            { base: "द", display: "द_ध", matra: "ू", answer: "ू", fullWord: "दूध" },
            { base: "स", display: "स_रज", matra: "ू", answer: "ू", fullWord: "सूरज" },
            { base: "ज", display: "ज_त_", matra: "ू", answer: "ू", fullWord: "जूता" },
            { base: "भ", display: "भ_ख", matra: "ू", answer: "ू", fullWord: "भूख" }
          ]
        },
        {
          id: "hin_simple_sentences",
          title: "सरल वाक्य",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "मैं ___ पढ़ता हूँ।", visual: "📖", answer: "किताब", options: ["किताब", "खाना", "पानी", "खेल"], speakLang: "hi-IN", speakText: "मैं किताब पढ़ता हूँ" },
            { question: "गाय ___ देती है।", visual: "🐄", answer: "दूध", options: ["दूध", "अंडा", "शहद", "ऊन"], speakLang: "hi-IN", speakText: "गाय दूध देती है" },
            { question: "मुर्गी ___ देती है।", visual: "🐔", answer: "अंडा", options: ["अंडा", "दूध", "शहद", "ऊन"], speakLang: "hi-IN", speakText: "मुर्गी अंडा देती है" },
            { question: "मछली ___ में रहती है।", visual: "🐟", answer: "पानी", options: ["पानी", "पेड़", "घर", "आकाश"], speakLang: "hi-IN", speakText: "मछली पानी में रहती है" },
            { question: "पक्षी ___ में रहते हैं।", visual: "🐦", answer: "घोंसला", options: ["घोंसला", "पानी", "बिल", "घर"], speakLang: "hi-IN", speakText: "पक्षी घोंसले में रहते हैं" },
            { question: "रात को ___ दिखाई देते हैं।", visual: "🌙", answer: "तारे", options: ["तारे", "सूरज", "बादल", "पक्षी"], speakLang: "hi-IN", speakText: "रात को तारे दिखाई देते हैं" },
            { question: "हम ___ से देखते हैं।", visual: "👁️", answer: "आँखों", options: ["आँखों", "कानों", "नाक", "मुँह"], speakLang: "hi-IN", speakText: "हम आँखों से देखते हैं" },
            { question: "हम ___ से सुनते हैं।", visual: "👂", answer: "कानों", options: ["कानों", "आँखों", "नाक", "हाथों"], speakLang: "hi-IN", speakText: "हम कानों से सुनते हैं" },
            { question: "फूल बहुत ___ होते हैं।", visual: "🌺", answer: "सुंदर", options: ["सुंदर", "बुरे", "गंदे", "कड़े"], speakLang: "hi-IN", speakText: "फूल बहुत सुंदर होते हैं" },
            { question: "शेर ___ में रहता है।", visual: "🦁", answer: "जंगल", options: ["जंगल", "घर", "पानी", "आकाश"], speakLang: "hi-IN", speakText: "शेर जंगल में रहता है" },
            { question: "सूरज ___ में चमकता है।", visual: "☀️", answer: "आकाश", options: ["आकाश", "पानी", "जमीन", "घर"], speakLang: "hi-IN", speakText: "सूरज आकाश में चमकता है" },
            { question: "हम स्कूल में ___ पढ़ते हैं।", visual: "🏫", answer: "पुस्तकें", options: ["पुस्तकें", "खाना", "खेल", "टीवी"], speakLang: "hi-IN", speakText: "हम स्कूल में पुस्तकें पढ़ते हैं" },
            { question: "हाथी का ___ बहुत लंबा है।", visual: "🐘", answer: "सूँड़", options: ["सूँड़", "पूँछ", "कान", "पैर"], speakLang: "hi-IN", speakText: "हाथी का सूँड़ बहुत लंबा है" },
            { question: "बादल ___ लाते हैं।", visual: "☁️", answer: "बारिश", options: ["बारिश", "धूप", "ठंड", "हवा"], speakLang: "hi-IN", speakText: "बादल बारिश लाते हैं" },
            { question: "पेड़ से ___ मिलते हैं।", visual: "🌳", answer: "फल", options: ["फल", "दूध", "अंडे", "मछली"], speakLang: "hi-IN", speakText: "पेड़ से फल मिलते हैं" },
            { question: "हम पैरों में ___ पहनते हैं।", visual: "👟", answer: "जूते", options: ["जूते", "टोपी", "चश्मा", "घड़ी"], speakLang: "hi-IN", speakText: "हम पैरों में जूते पहनते हैं" },
            { question: "बच्चे ___ में खेलते हैं।", visual: "🏃", answer: "मैदान", options: ["मैदान", "रसोई", "बाथरूम", "बिस्तर"], speakLang: "hi-IN", speakText: "बच्चे मैदान में खेलते हैं" },
            { question: "रात को हम ___ करते हैं।", visual: "😴", answer: "सोते", options: ["सोते", "खाते", "दौड़ते", "पढ़ते"], speakLang: "hi-IN", speakText: "रात को हम सोते हैं" },
            { question: "डॉक्टर ___ लोगों का इलाज करता है।", visual: "🩺", answer: "बीमार", options: ["बीमार", "खुश", "दौड़ते", "सोते"], speakLang: "hi-IN", speakText: "डॉक्टर बीमार लोगों का इलाज करता है" },
            { question: "हम ___ में खाना बनाते हैं।", visual: "👨‍🍳", answer: "रसोई", options: ["रसोई", "बाथरूम", "बेडरूम", "मैदान"], speakLang: "hi-IN", speakText: "हम रसोई में खाना बनाते हैं" }
          ]
        },
        {
          id: "hin_gender",
          title: "लिंग (स्त्रीलिंग और पुल्लिंग)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "लड़का ___ है।", visual: "👦", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "लड़का पुल्लिंग है" },
            { question: "लड़की ___ है।", visual: "👧", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "लड़की स्त्रीलिंग है" },
            { question: "बेटा ___ है।", visual: "👦", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "बेटा पुल्लिंग है" },
            { question: "बेटी ___ है।", visual: "👧", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "बेटी स्त्रीलिंग है" },
            { question: "पिता ___ है।", visual: "👨", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "पिता पुल्लिंग है" },
            { question: "माता ___ है।", visual: "👩", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "माता स्त्रीलिंग है" },
            { question: "भाई ___ है।", visual: "👦", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "भाई पुल्लिंग है" },
            { question: "बहन ___ है।", visual: "👧", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "बहन स्त्रीलिंग है" },
            { question: "गाय ___ है।", visual: "🐄", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "गाय स्त्रीलिंग है" },
            { question: "बैल ___ है।", visual: "🐂", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "बैल पुल्लिंग है" },
            { question: "शेर ___ है।", visual: "🦁", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "शेर पुल्लिंग है" },
            { question: "शेरनी ___ है।", visual: "🦁", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "शेरनी स्त्रीलिंग है" },
            { question: "मोर ___ है।", visual: "🦚", answer: "पुल्लिंग", options: ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "मोर पुल्लिंग है" },
            { question: "मोरनी ___ है।", visual: "🦚", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "मोरनी स्त्रीलिंग है" },
            { question: "किताब ___ है।", visual: "📖", answer: "स्त्रीलिंग", options: ["स्त्रीलिंग", "पुल्लिंग", "दोनों", "कोई नहीं"], speakLang: "hi-IN", speakText: "किताब स्त्रीलिंग है" }
          ]
        },
        {
          id: "hin_singular_plural",
          title: "वचन (एकवचन और बहुवचन)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "लड़का का बहुवचन है:", visual: "👦→👦👦", answer: "लड़के", options: ["लड़के", "लड़की", "लड़का", "लड़कियाँ"], speakLang: "hi-IN", speakText: "लड़का का बहुवचन है लड़के" },
            { question: "लड़की का बहुवचन है:", visual: "👧→👧👧", answer: "लड़कियाँ", options: ["लड़कियाँ", "लड़के", "लड़की", "लड़का"], speakLang: "hi-IN", speakText: "लड़की का बहुवचन है लड़कियाँ" },
            { question: "किताब का बहुवचन है:", visual: "📖→📖📖", answer: "किताबें", options: ["किताबें", "किताब", "किताबों", "किताबियाँ"], speakLang: "hi-IN", speakText: "किताब का बहुवचन है किताबें" },
            { question: "गाय का बहुवचन है:", visual: "🐄→🐄🐄", answer: "गायें", options: ["गायें", "गाय", "गायों", "गायियाँ"], speakLang: "hi-IN", speakText: "गाय का बहुवचन है गायें" },
            { question: "फूल का बहुवचन है:", visual: "🌺→🌺🌺", answer: "फूल", options: ["फूल", "फूलों", "फूली", "फूलें"], speakLang: "hi-IN", speakText: "फूल का बहुवचन है फूल" },
            { question: "बच्चा का बहुवचन है:", visual: "👶→👶👶", answer: "बच्चे", options: ["बच्चे", "बच्चा", "बच्चों", "बच्ची"], speakLang: "hi-IN", speakText: "बच्चा का बहुवचन है बच्चे" },
            { question: "पक्षी का बहुवचन है:", visual: "🐦→🐦🐦", answer: "पक्षी", options: ["पक्षी", "पक्षियों", "पक्षीयाँ", "पक्षा"], speakLang: "hi-IN", speakText: "पक्षी का बहुवचन है पक्षी" },
            { question: "कुत्ता का बहुवचन है:", visual: "🐶→🐶🐶", answer: "कुत्ते", options: ["कुत्ते", "कुत्ता", "कुत्तियाँ", "कुत्तों"], speakLang: "hi-IN", speakText: "कुत्ता का बहुवचन है कुत्ते" },
            { question: "बिल्ली का बहुवचन है:", visual: "🐱→🐱🐱", answer: "बिल्लियाँ", options: ["बिल्लियाँ", "बिल्ली", "बिल्ले", "बिल्लों"], speakLang: "hi-IN", speakText: "बिल्ली का बहुवचन है बिल्लियाँ" },
            { question: "घोड़ा का बहुवचन है:", visual: "🐎→🐎🐎", answer: "घोड़े", options: ["घोड़े", "घोड़ा", "घोड़ियाँ", "घोड़ों"], speakLang: "hi-IN", speakText: "घोड़ा का बहुवचन है घोड़े" },
            { question: "माता का बहुवचन है:", visual: "👩→👩👩", answer: "माताएँ", options: ["माताएँ", "माता", "मातों", "मातियाँ"], speakLang: "hi-IN", speakText: "माता का बहुवचन है माताएँ" },
            { question: "पिता का बहुवचन है:", visual: "👨→👨👨", answer: "पिता", options: ["पिता", "पिताओं", "पिताजी", "पितरों"], speakLang: "hi-IN", speakText: "पिता का बहुवचन है पिता" },
            { question: "सेब का बहुवचन है:", visual: "🍎→🍎🍎", answer: "सेब", options: ["सेब", "सेबों", "सेबें", "सेबियाँ"], speakLang: "hi-IN", speakText: "सेब का बहुवचन है सेब" },
            { question: "पेड़ का बहुवचन है:", visual: "🌳→🌳🌳", answer: "पेड़", options: ["पेड़", "पेड़ों", "पेड़े", "पेड़ियाँ"], speakLang: "hi-IN", speakText: "पेड़ का बहुवचन है पेड़" },
            { question: "तारा का बहुवचन है:", visual: "⭐→⭐⭐", answer: "तारे", options: ["तारे", "तारा", "तारों", "तारियाँ"], speakLang: "hi-IN", speakText: "तारा का बहुवचन है तारे" }
          ]
        },
        {
          id: "hin_transport",
          title: "वाहनों के नाम",
          type: "hindiPictureWord",
          questions: 10,
          items: [
            { picture: "🚗", word: "कार" },        { picture: "🚌", word: "बस" },         { picture: "🚂", word: "रेलगाड़ी" },
            { picture: "✈️", word: "हवाईजहाज़" }, { picture: "🚁", word: "हेलीकॉप्टर" },{ picture: "🚢", word: "जहाज़" },
            { picture: "⛵", word: "नाव" },       { picture: "🚲", word: "साइकिल" },    { picture: "🏍️", word: "मोटरसाइकिल" },
            { picture: "🚜", word: "ट्रैक्टर" },  { picture: "🚑", word: "एंबुलेंस" },   { picture: "🚒", word: "दमकल" },
            { picture: "🚓", word: "पुलिस कार" },{ picture: "🚕", word: "टैक्सी" },     { picture: "🚙", word: "जीप" }
          ]
        }
      ]
    },
    science: {
      name: "Science",
      icon: "🔬",
      description: "My body, animals, plants, food, and the world around us (EVS).",
      modules: [
        {
          id: "sci_body",
          title: "My Body",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "How many eyes do we have?",           visual: "👁️👁️",        answer: "2",          options: ["1", "2", "3", "4"]         },
            { question: "We hear with our…",                   visual: "👂",            answer: "Ears",       options: ["Ears", "Eyes", "Nose", "Mouth"]  },
            { question: "We smell with our…",                  visual: "👃",            answer: "Nose",       options: ["Nose", "Ears", "Hands", "Feet"] },
            { question: "How many fingers on one hand?",       visual: "🖐️",           answer: "5",          options: ["4", "5", "6", "10"]        },
            { question: "We breathe through our…",             visual: "🫁",            answer: "Nose",       options: ["Nose", "Ears", "Eyes", "Hair"]  },
            { question: "How many legs do we have?",           visual: "🦵🦵",          answer: "2",          options: ["2", "4", "6", "1"]         },
            { question: "We taste food with our…",             visual: "👅",            answer: "Tongue",     options: ["Tongue", "Nose", "Hand", "Eye"] },
            { question: "What protects our body from outside?",visual: "🧍",            answer: "Skin",       options: ["Skin", "Bones", "Hair", "Nails"] },
            { question: "We use teeth to…",                    visual: "🦷",            answer: "Chew food",  options: ["Chew food", "See", "Hear", "Run"] },
            { question: "How many hands do we have?",          visual: "🤲",            answer: "2",          options: ["1", "2", "3", "4"]         },
            { question: "Which body part helps us walk?",      visual: "🚶",            answer: "Legs",       options: ["Legs", "Arms", "Head", "Ears"]  },
            { question: "We see with our…",                    visual: "👀",            answer: "Eyes",       options: ["Eyes", "Nose", "Mouth", "Ears"] },
            { question: "Our brain is inside our…",            visual: "🧠",            answer: "Head",       options: ["Head", "Stomach", "Hand", "Knee"] },
            { question: "How many toes on one foot?",          visual: "🦶",            answer: "5",          options: ["4", "5", "6", "3"]         },
            { question: "Which part pumps blood?",             visual: "❤️",            answer: "Heart",      options: ["Heart", "Lung", "Stomach", "Brain"] },
            { question: "Hair grows on our…",                  visual: "💇",            answer: "Head",       options: ["Head", "Palm", "Tongue", "Teeth"] },
            { question: "What do we use to hold things?",      visual: "🤲",            answer: "Hands",      options: ["Hands", "Feet", "Ears", "Knees"] },
            { question: "We drink water through our…",        visual: "💧",            answer: "Mouth",      options: ["Mouth", "Ears", "Nose", "Skin"] },
            { question: "Our bones make up the…",              visual: "🦴",            answer: "Skeleton",   options: ["Skeleton", "Muscles", "Skin", "Hair"] },
            { question: "Nails grow on our…",                  visual: "💅",            answer: "Fingers",    options: ["Fingers", "Ears", "Nose", "Teeth"] }
          ]
        },
        {
          id: "sci_animals",
          title: "Animals Around Us",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Which animal gives us milk?",         visual: "🐄",  answer: "Cow",       options: ["Cow", "Dog", "Cat", "Lion"]      },
            { question: "Which animal says 'Meow'?",           visual: "🐱",  answer: "Cat",       options: ["Cat", "Dog", "Cow", "Duck"]      },
            { question: "How many legs does a dog have?",      visual: "🐶",  answer: "4",         options: ["2", "4", "6", "8"]               },
            { question: "Which animal has a trunk?",           visual: "🐘",  answer: "Elephant",  options: ["Elephant", "Tiger", "Horse", "Cow"]},
            { question: "Which animal is the king of jungle?", visual: "🦁",  answer: "Lion",      options: ["Lion", "Monkey", "Deer", "Fox"]  },
            { question: "Hen gives us…",                       visual: "🐔",  answer: "Eggs",      options: ["Eggs", "Milk", "Wool", "Honey"]  },
            { question: "Which animal has feathers?",          visual: "🐦",  answer: "Bird",      options: ["Bird", "Fish", "Dog", "Cat"]     },
            { question: "Fish live in…",                       visual: "🐟",  answer: "Water",     options: ["Water", "Tree", "Sky", "Mud"]    },
            { question: "Which insect makes honey?",           visual: "🐝",  answer: "Bee",       options: ["Bee", "Ant", "Spider", "Fly"]    },
            { question: "A butterfly was once a…",             visual: "🦋",  answer: "Caterpillar",options:["Caterpillar","Bee","Ant","Spider"]},
            { question: "Which animal hops?",                  visual: "🐸",  answer: "Frog",      options: ["Frog", "Fish", "Snake", "Cow"]   },
            { question: "Which animal has a shell?",           visual: "🐢",  answer: "Tortoise",  options: ["Tortoise", "Cat", "Bird", "Ant"] },
            { question: "A baby dog is called…",               visual: "🐕",  answer: "Puppy",     options: ["Puppy", "Kitten", "Calf", "Cub"]},
            { question: "How many legs has a spider?",         visual: "🕷️",  answer: "8",         options: ["6", "8", "4", "10"]              },
            { question: "Which animal gives us wool?",         visual: "🐑",  answer: "Sheep",     options: ["Sheep", "Cow", "Horse", "Dog"]   },
            { question: "Which animal slithers?",              visual: "🐍",  answer: "Snake",     options: ["Snake", "Frog", "Bird", "Cat"]   },
            { question: "A baby cat is called…",               visual: "🐱",  answer: "Kitten",    options: ["Kitten", "Puppy", "Calf", "Foal"]},
            { question: "Which animal lives in water and land?",visual:"🐸", answer: "Frog",      options: ["Frog", "Fish", "Eagle", "Lion"]  },
            { question: "Cows eat…",                           visual: "🐄",  answer: "Grass",     options: ["Grass", "Meat", "Fish", "Eggs"]  },
            { question: "Which animal carries its home?",      visual: "🐌",  answer: "Snail",     options: ["Snail", "Ant", "Bee", "Dog"]     }
          ]
        },
        {
          id: "sci_plants",
          title: "Plants & Flowers",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Plants need ___ to grow.",                visual: "🌱",  answer: "Water",       options: ["Water", "Toys", "Milk", "Sand"]    },
            { question: "What part of a plant is underground?",    visual: "🌿",  answer: "Root",        options: ["Root", "Leaf", "Flower", "Stem"]   },
            { question: "Leaves are usually what color?",          visual: "🍃",  answer: "Green",       options: ["Green", "Red", "Blue", "White"]    },
            { question: "Flowers make…",                           visual: "🌸",  answer: "Seeds",       options: ["Seeds", "Stones", "Paper", "Milk"] },
            { question: "Trees give us…",                          visual: "🌳",  answer: "Oxygen",      options: ["Oxygen", "Salt", "Sugar", "Ink"]   },
            { question: "A big plant with a wooden trunk is…",     visual: "🌲",  answer: "Tree",        options: ["Tree", "Grass", "Bush", "Vine"]    },
            { question: "Which part carries water up a plant?",    visual: "🌿",  answer: "Stem",        options: ["Stem", "Leaf", "Fruit", "Root"]    },
            { question: "Sunflower faces the…",                    visual: "🌻",  answer: "Sun",         options: ["Sun", "Moon", "Stars", "Rain"]     },
            { question: "We get fruits from…",                     visual: "🍎",  answer: "Plants",      options: ["Plants", "Animals", "Rocks", "Water"]},
            { question: "Rose is a type of…",                      visual: "🌹",  answer: "Flower",      options: ["Flower", "Fruit", "Leaf", "Root"]  },
            { question: "Which season do many flowers bloom?",     visual: "🌼",  answer: "Spring",      options: ["Spring", "Winter", "Night", "Rain"]},
            { question: "Seeds need ___ and water to sprout.",     visual: "🌞",  answer: "Sunlight",    options: ["Sunlight", "Darkness", "Ice", "Noise"]},
            { question: "Mango grows on a…",                       visual: "🥭",  answer: "Tree",        options: ["Tree", "Bush", "Creeper", "Grass"] },
            { question: "Cactus grows in…",                        visual: "🌵",  answer: "Desert",      options: ["Desert", "Ocean", "Snow", "River"] },
            { question: "Leaves make food for the plant using…",   visual: "☀️",  answer: "Sunlight",    options: ["Sunlight", "Soil", "Wind", "Rain"] },
            { question: "Carrot is a ___ we eat.",                 visual: "🥕",  answer: "Root",        options: ["Root", "Leaf", "Flower", "Bark"]   },
            { question: "Peas grow inside a…",                     visual: "🫛",  answer: "Pod",         options: ["Pod", "Box", "Shell", "Bag"]       },
            { question: "Lotus grows in…",                         visual: "🪷",  answer: "Water",       options: ["Water", "Sand", "Mountain", "Sky"] },
            { question: "Banana grows on a…",                      visual: "🍌",  answer: "Plant",       options: ["Plant", "Rock", "River", "Cloud"]  },
            { question: "Which part of the plant makes food?",     visual: "🍃",  answer: "Leaf",        options: ["Leaf", "Root", "Trunk", "Seed"]    }
          ]
        },
        {
          id: "sci_food",
          title: "Food & Nutrition",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Milk comes from…",                       visual: "🥛", answer: "Cow",        options: ["Cow", "Hen", "Fish", "Cat"]       },
            { question: "Which food gives us energy?",            visual: "🍚", answer: "Rice",       options: ["Rice", "Stone", "Sand", "Mud"]    },
            { question: "Fruits and vegetables keep us…",         visual: "🥗", answer: "Healthy",    options: ["Healthy", "Sick", "Sleepy", "Sad"]},
            { question: "We should drink ___ glasses of water.",  visual: "💧", answer: "6 to 8",     options: ["6 to 8", "1", "20", "100"]        },
            { question: "Bread is made from…",                    visual: "🍞", answer: "Wheat",      options: ["Wheat", "Sand", "Clay", "Stone"]  },
            { question: "Eggs come from…",                        visual: "🥚", answer: "Hen",        options: ["Hen", "Cow", "Dog", "Tree"]       },
            { question: "Honey is made by…",                      visual: "🍯", answer: "Bees",       options: ["Bees", "Ants", "Cats", "Cows"]    },
            { question: "Which meal do we eat in the morning?",   visual: "🌅", answer: "Breakfast",  options: ["Breakfast","Lunch","Dinner","Snack"]},
            { question: "Carrot is good for our…",                visual: "🥕", answer: "Eyes",       options: ["Eyes", "Ears", "Feet", "Hair"]    },
            { question: "We should wash hands before…",           visual: "🧼", answer: "Eating",     options: ["Eating", "Sleeping", "Playing", "Reading"]},
            { question: "Which is a fruit?",                      visual: "🍎", answer: "Apple",      options: ["Apple", "Bread", "Rice", "Egg"]   },
            { question: "Which is a vegetable?",                  visual: "🥕", answer: "Carrot",     options: ["Carrot", "Mango", "Banana", "Apple"]},
            { question: "Too much sugar is…",                     visual: "🍬", answer: "Unhealthy",  options: ["Unhealthy","Good","Needed","Best"]},
            { question: "We get butter from…",                    visual: "🧈", answer: "Milk",       options: ["Milk", "Eggs", "Fish", "Fruit"]   },
            { question: "Green vegetables give us…",              visual: "🥬", answer: "Vitamins",   options: ["Vitamins","Plastic","Metal","Gas"] },
            { question: "Dal is a source of…",                    visual: "🫘", answer: "Protein",    options: ["Protein","Fat","Sugar","Salt"]     },
            { question: "Drinking milk makes bones…",             visual: "🦴", answer: "Strong",     options: ["Strong","Weak","Soft","Flat"]      },
            { question: "Which is NOT a healthy food?",           visual: "🍕", answer: "Junk food",  options: ["Junk food","Fruit","Vegetable","Dal"]},
            { question: "Fish is good for our…",                  visual: "🐟", answer: "Brain",      options: ["Brain","Nails","Hair","Ears"]      },
            { question: "Banana gives us…",                       visual: "🍌", answer: "Energy",     options: ["Energy","Sleep","Fever","Cold"]    }
          ]
        },
        {
          id: "sci_sense_organs",
          title: "Our Sense Organs",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Eyes help us to ___.",                    visual: "👁️", answer: "See",      options: ["See", "Hear", "Taste", "Smell"]       },
            { question: "Ears help us to ___.",                    visual: "👂",  answer: "Hear",     options: ["Hear", "See", "Taste", "Touch"]       },
            { question: "Nose helps us to ___.",                   visual: "👃",  answer: "Smell",    options: ["Smell", "See", "Hear", "Walk"]        },
            { question: "Tongue helps us to ___.",                 visual: "👅",  answer: "Taste",    options: ["Taste", "See", "Hear", "Smell"]       },
            { question: "Skin helps us to ___.",                   visual: "✋",  answer: "Touch/Feel", options: ["Touch/Feel", "See", "Hear", "Run"]  },
            { question: "How many sense organs do we have?",       visual: "🧍",  answer: "5",        options: ["5", "4", "3", "10"]                   },
            { question: "We see colors with our ___.",             visual: "👁️", answer: "Eyes",     options: ["Eyes", "Ears", "Nose", "Tongue"]      },
            { question: "Sweet taste is sensed by ___.",           visual: "🍭",  answer: "Tongue",   options: ["Tongue", "Nose", "Ears", "Eyes"]      },
            { question: "We can feel hot and cold with our ___.",  visual: "🤚",  answer: "Skin",     options: ["Skin", "Eyes", "Ears", "Nose"]        },
            { question: "Ears can hear ___.",                      visual: "🔔",  answer: "Sounds",   options: ["Sounds", "Colors", "Smells", "Tastes"]},
            { question: "Nose can smell ___.",                     visual: "🌸",  answer: "Fragrances", options: ["Fragrances","Colors","Sounds","Shapes"]},
            { question: "Blind people cannot ___.",                visual: "👁️", answer: "See",      options: ["See", "Hear", "Taste", "Touch"]       },
            { question: "Deaf people cannot ___.",                 visual: "👂",  answer: "Hear",     options: ["Hear", "See", "Smell", "Walk"]        },
            { question: "We close our ___ when we sleep.",         visual: "😴",  answer: "Eyes",     options: ["Eyes", "Ears", "Nose", "Mouth"]       },
            { question: "We smell flowers with our ___.",          visual: "🌹",  answer: "Nose",     options: ["Nose", "Eyes", "Mouth", "Ears"]       }
          ]
        },
        {
          id: "sci_family",
          title: "My Family & Relationships",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "A family lives together in a ___.",       visual: "🏠",    answer: "House",      options: ["House", "School", "Hospital", "Shop"]     },
            { question: "We love and care for our ___.",           visual: "❤️",    answer: "Family",     options: ["Family", "Toys", "Books", "Food"]         },
            { question: "Parents take care of their ___.",         visual: "👨‍👩‍👧",  answer: "Children",   options: ["Children", "Toys", "Cars", "Books"]       },
            { question: "How many parents does a child have?",     visual: "👪",    answer: "2",          options: ["2", "1", "3", "4"]                        },
            { question: "Father's wife is our ___.",               visual: "👩",    answer: "Mother",     options: ["Mother", "Sister", "Aunt", "Grandmother"] },
            { question: "Mother's husband is our ___.",            visual: "👨",    answer: "Father",     options: ["Father", "Brother", "Uncle", "Grandfather"]},
            { question: "Grandparents are our parents' ___.",      visual: "👵👴",  answer: "Parents",    options: ["Parents", "Children", "Friends", "Cousins"]},
            { question: "Brothers and sisters are called ___.",    visual: "👦👧",  answer: "Siblings",   options: ["Siblings", "Cousins", "Friends", "Pets"]  },
            { question: "A baby needs ___ to grow.",               visual: "👶",    answer: "Love & care",options: ["Love & care","Toys only","TV","Games"]    },
            { question: "We should respect our ___.",              visual: "🙏",    answer: "Elders",     options: ["Elders", "Toys", "Books", "Games"]        },
            { question: "Family members help each ___.",           visual: "🤝",    answer: "Other",      options: ["Other", "Never", "Alone", "Sometimes"]    },
            { question: "We celebrate birthdays with our ___.",    visual: "🎂",    answer: "Family",     options: ["Family", "Books", "Toys", "School"]       },
            { question: "Sharing toys with siblings is ___.",      visual: "🤲",    answer: "Good",       options: ["Good", "Bad", "Wrong", "Selfish"]         },
            { question: "We should say ___ and Thank you.",        visual: "🗣️",   answer: "Please",     options: ["Please", "Give me", "I want", "Mine"]     },
            { question: "A happy family shows ___ to each other.", visual: "😊",    answer: "Love",       options: ["Love", "Anger", "Fight", "Hate"]          }
          ]
        },
        {
          id: "sci_school",
          title: "My School",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We go to school to ___.",                 visual: "🏫",  answer: "Learn",      options: ["Learn", "Sleep", "Play only", "Eat only"]    },
            { question: "Our ___ teaches us.",                     visual: "👩‍🏫", answer: "Teacher",    options: ["Teacher", "Student", "Parent", "Doctor"]      },
            { question: "We study in a ___.",                      visual: "🚪",  answer: "Classroom",  options: ["Classroom", "Bedroom", "Kitchen", "Garden"]   },
            { question: "We write on a ___.",                      visual: "📓",  answer: "Notebook",   options: ["Notebook", "Wall", "Table", "Floor"]          },
            { question: "We play in the school ___.",              visual: "🏃",  answer: "Playground", options: ["Playground", "Library", "Office", "Kitchen"]  },
            { question: "The school head is called ___.",          visual: "👨‍💼", answer: "Principal",  options: ["Principal", "Student", "Peon", "Guard"]       },
            { question: "We keep books in a ___.",                 visual: "🎒",  answer: "Bag",        options: ["Bag", "Pocket", "Plate", "Bottle"]            },
            { question: "We read books in the ___.",               visual: "📚",  answer: "Library",    options: ["Library", "Playground", "Toilet", "Kitchen"]  },
            { question: "School friends are our ___.",             visual: "👦👧",answer: "Classmates", options: ["Classmates", "Enemies", "Strangers", "Toys"]  },
            { question: "We should reach school on ___.",          visual: "⏰",  answer: "Time",       options: ["Time", "Night", "Late", "Never"]              },
            { question: "School uniform should be ___.",           visual: "👕",  answer: "Clean",      options: ["Clean", "Dirty", "Torn", "Wet"]               },
            { question: "We should ___ our teachers.",             visual: "🙏",  answer: "Respect",    options: ["Respect", "Disobey", "Ignore", "Fight"]       },
            { question: "School helps us become ___.",             visual: "🎓",  answer: "Smart",      options: ["Smart", "Lazy", "Dull", "Weak"]               },
            { question: "We sit on a ___ in class.",               visual: "🪑",  answer: "Chair",      options: ["Chair", "Floor", "Table", "Bed"]              },
            { question: "School bell rings for ___.",              visual: "🔔",  answer: "Classes",    options: ["Classes", "Eating only", "Sleep", "Fight"]    }
          ]
        },
        {
          id: "sci_weather_seasons",
          title: "Weather & Seasons",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "How many seasons are there?",             visual: "🌦️",  answer: "4",         options: ["4", "2", "3", "7"]                      },
            { question: "It is very hot in ___.",                  visual: "☀️",  answer: "Summer",    options: ["Summer", "Winter", "Rainy", "Spring"]   },
            { question: "It is very cold in ___.",                 visual: "❄️",  answer: "Winter",    options: ["Winter", "Summer", "Rainy", "Autumn"]   },
            { question: "It rains a lot in ___ season.",           visual: "🌧️",  answer: "Monsoon",   options: ["Monsoon", "Summer", "Winter", "Spring"] },
            { question: "Flowers bloom in ___ season.",            visual: "🌸",  answer: "Spring",    options: ["Spring", "Winter", "Rainy", "None"]     },
            { question: "We wear warm clothes in ___.",            visual: "🧥",  answer: "Winter",    options: ["Winter", "Summer", "Rainy", "Spring"]   },
            { question: "We use an umbrella when it ___.",         visual: "☂️",  answer: "Rains",     options: ["Rains", "Shines", "Snows", "Blows"]     },
            { question: "Sun gives us ___ and light.",             visual: "☀️",  answer: "Heat",      options: ["Heat", "Water", "Air", "Food"]          },
            { question: "Rain clouds are ___.",                    visual: "☁️",  answer: "Dark",      options: ["Dark", "White", "Red", "Green"]         },
            { question: "Lightning is seen in ___ weather.",       visual: "⚡",  answer: "Stormy",    options: ["Stormy", "Sunny", "Clear", "Calm"]      },
            { question: "Rainbow appears after ___.",              visual: "🌈",  answer: "Rain",      options: ["Rain", "Snow", "Wind", "Storm"]         },
            { question: "Wind makes trees ___.",                   visual: "🌳",  answer: "Sway",      options: ["Sway", "Grow", "Fall", "Dry"]           },
            { question: "Morning dew is ___.",                     visual: "💧",  answer: "Water drops",options: ["Water drops","Ice","Snow","Steam"]     },
            { question: "We feel cool in ___ season.",             visual: "❄️",  answer: "Winter",    options: ["Winter", "Summer", "Hot days", "Noon"]  },
            { question: "We drink more water in ___.",             visual: "🥤",  answer: "Summer",    options: ["Summer", "Winter", "Spring", "Night"]   }
          ]
        },
        {
          id: "sci_water",
          title: "Water — Our Need",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We drink ___ every day.",                 visual: "💧",  answer: "Water",        options: ["Water", "Oil", "Milk only", "Juice only"]  },
            { question: "Plants need water to ___.",               visual: "🌱",  answer: "Grow",         options: ["Grow", "Die", "Sleep", "Fly"]              },
            { question: "We get water from ___.",                  visual: "🚰",  answer: "Tap/Well/River",options:["Tap/Well/River","Tree","Stone","Fire"]     },
            { question: "Rain fills ___.",                         visual: "🌧️",  answer: "Rivers/Lakes", options: ["Rivers/Lakes","Mountains","Sky","Fire"]    },
            { question: "We should not ___ water.",                visual: "💧",  answer: "Waste",        options: ["Waste", "Drink", "Use", "Save"]            },
            { question: "Dirty water causes ___.",                 visual: "🦠",  answer: "Diseases",     options: ["Diseases", "Health", "Growth", "Strength"] },
            { question: "We use water to ___.",                    visual: "🛁",  answer: "Bathe",        options: ["Bathe", "Sleep", "Read", "Write"]          },
            { question: "Water has no ___.",                       visual: "💧",  answer: "Color/Taste",  options: ["Color/Taste","Use","Need","Life"]          },
            { question: "Boiling makes water ___.",                visual: "♨️",  answer: "Safe to drink",options:["Safe to drink","Dirty","Salty","Cold"]      },
            { question: "Fish live in ___.",                       visual: "🐟",  answer: "Water",        options: ["Water", "Land", "Air", "Trees"]            },
            { question: "Ice is ___ water.",                       visual: "🧊",  answer: "Frozen",       options: ["Frozen", "Hot", "Dirty", "Salty"]          },
            { question: "Steam is ___ water.",                     visual: "♨️",  answer: "Boiling",      options: ["Boiling", "Cold", "Solid", "Frozen"]       },
            { question: "We should save water by ___.",            visual: "🚰",  answer: "Closing taps", options: ["Closing taps","Wasting","Spilling","Throwing"]},
            { question: "Water cycle includes rain, evaporation and ___.",visual:"🌧️",answer:"Clouds",  options:["Clouds","Fire","Ice only","Nothing"]        },
            { question: "Drinking water should be ___.",           visual: "🥛",  answer: "Clean",        options: ["Clean", "Dirty", "Salty", "Hot"]           }
          ]
        },
        {
          id: "sci_air",
          title: "Air Around Us",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We breathe ___.",                         visual: "🫁",  answer: "Air",       options: ["Air", "Water", "Food", "Soil"]           },
            { question: "Air is needed to ___.",                   visual: "🧍",  answer: "Live",      options: ["Live", "Die", "Sleep", "Eat"]            },
            { question: "Moving air is called ___.",               visual: "💨",  answer: "Wind",      options: ["Wind", "Water", "Fire", "Rain"]          },
            { question: "Can we see air?",                         visual: "👀",  answer: "No",        options: ["No", "Yes", "Sometimes", "At night"]     },
            { question: "Can we feel air?",                        visual: "🤚",  answer: "Yes",       options: ["Yes", "No", "Never", "In winter only"]   },
            { question: "Plants give us ___ air.",                 visual: "🌳",  answer: "Fresh",     options: ["Fresh", "Dirty", "Bad", "No"]            },
            { question: "Smoke makes air ___.",                    visual: "🏭",  answer: "Dirty",     options: ["Dirty", "Clean", "Fresh", "Good"]        },
            { question: "Balloons are filled with ___.",           visual: "🎈",  answer: "Air",       options: ["Air", "Water", "Sand", "Stone"]          },
            { question: "A fan makes air ___.",                    visual: "🌀",  answer: "Move",      options: ["Move", "Stop", "Freeze", "Disappear"]    },
            { question: "Kites fly because of ___.",               visual: "🪁",  answer: "Wind",      options: ["Wind", "Water", "Fire", "Soil"]          },
            { question: "Air has ___ weight.",                     visual: "⚖️",  answer: "Some",      options: ["Some", "No", "Very heavy", "Infinite"]   },
            { question: "We should keep air ___.",                 visual: "🌱",  answer: "Clean",     options: ["Clean", "Dirty", "Polluted", "Smoky"]    },
            { question: "Trees help make air ___.",                visual: "🌲",  answer: "Fresh",     options: ["Fresh", "Dirty", "Bad", "Smoky"]         },
            { question: "Air covers the whole ___.",               visual: "🌍",  answer: "Earth",     options: ["Earth", "Moon", "Sun", "Mars"]           },
            { question: "Birds fly in the ___.",                   visual: "🐦",  answer: "Air",       options: ["Air", "Water", "Soil", "Fire"]           }
          ]
        },
        {
          id: "sci_living_nonliving",
          title: "Living & Non-Living Things",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Plants are ___.",                         visual: "🌳",  answer: "Living",    options: ["Living", "Non-living", "Dead", "Stone"]     },
            { question: "Animals are ___.",                        visual: "🐶",  answer: "Living",    options: ["Living", "Non-living", "Rock", "Metal"]     },
            { question: "A stone is ___.",                         visual: "🪨",  answer: "Non-living",options: ["Non-living","Living","Growing","Breathing"] },
            { question: "Living things need ___.",                 visual: "🍎",  answer: "Food",      options: ["Food", "Nothing", "Stone", "Metal"]         },
            { question: "Living things can ___.",                  visual: "👶",  answer: "Grow",      options: ["Grow", "Stay same", "Never change", "Break"]},
            { question: "A chair is ___.",                         visual: "🪑",  answer: "Non-living",options: ["Non-living", "Living", "Growing", "Alive"]  },
            { question: "A tree can ___.",                         visual: "🌲",  answer: "Grow",      options: ["Grow", "Fly", "Swim", "Drive"]              },
            { question: "A car is ___.",                           visual: "🚗",  answer: "Non-living",options: ["Non-living", "Living", "Breathing", "Growing"]},
            { question: "Living things need ___ to breathe.",      visual: "🫁",  answer: "Air",       options: ["Air", "Stone", "Metal", "Plastic"]          },
            { question: "A book is ___.",                          visual: "📖",  answer: "Non-living",options: ["Non-living", "Living", "Growing", "Eating"]  },
            { question: "Living things can ___.",                  visual: "🐾",  answer: "Move",      options: ["Move", "Never move", "Float", "Melt"]       },
            { question: "A dog can ___ baby dogs.",                visual: "🐕",  answer: "Give birth to",options:["Give birth to","Make metal","Create stone","Build house"]},
            { question: "Non-living things ___ grow.",             visual: "🪨",  answer: "Do not",    options: ["Do not", "Always", "Can", "Will"]           },
            { question: "Which is living?",                        visual: "🌻",  answer: "Flower",    options: ["Flower", "Rock", "Table", "Pencil"]         },
            { question: "Which is non-living?",                    visual: "📱",  answer: "Phone",     options: ["Phone", "Cat", "Tree", "Bird"]              }
          ]
        },
        {
          id: "sci_safety",
          title: "Safety Rules & Good Habits",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Before crossing the road, look ___.",     visual: "🚦",  answer: "Both sides",  options: ["Both sides","Down","Up only","Nowhere"]     },
            { question: "We should wash hands before ___.",        visual: "🧼",  answer: "Eating",      options: ["Eating", "Sleeping", "Playing", "Reading"]  },
            { question: "We should brush our teeth ___.",          visual: "🪥",  answer: "Twice a day", options: ["Twice a day","Never","Once a week","Yearly"]},
            { question: "We should not play with ___.",            visual: "🔥",  answer: "Fire",        options: ["Fire", "Toys", "Books", "Friends"]          },
            { question: "We should sleep for ___ hours.",          visual: "😴",  answer: "8 to 10",     options: ["8 to 10","2","24","1"]                      },
            { question: "We should say ___ when we sneeze.",       visual: "🤧",  answer: "Excuse me",   options: ["Excuse me","Nothing","Laugh","Shout"]       },
            { question: "We should not talk to ___.",              visual: "🚫",  answer: "Strangers",   options: ["Strangers","Parents","Teachers","Friends"]  },
            { question: "We should cover mouth when we ___.",      visual: "🤧",  answer: "Cough/Sneeze",options:["Cough/Sneeze","Eat","Walk","Sleep"]          },
            { question: "Green signal means ___.",                 visual: "🟢",  answer: "Go",          options: ["Go", "Stop", "Wait", "Run fast"]            },
            { question: "Red signal means ___.",                   visual: "🔴",  answer: "Stop",        options: ["Stop", "Go", "Speed up", "Jump"]            },
            { question: "We should not lean out of ___.",          visual: "🚂",  answer: "Train/Bus",   options: ["Train/Bus","Bed","Chair","Floor"]           },
            { question: "We wear a helmet while riding a ___.",    visual: "🏍️",  answer: "Bike",        options: ["Bike", "Car", "Bus", "Bed"]                 },
            { question: "Sharp objects like knives are ___.",      visual: "🔪",  answer: "Dangerous",   options: ["Dangerous","Safe","Toys","Books"]           },
            { question: "We should drink ___ water.",              visual: "🥤",  answer: "Clean",       options: ["Clean","Dirty","Muddy","Salty"]             },
            { question: "Medicines should be taken only with ___.",visual: "💊",  answer: "Doctor advice",options:["Doctor advice","Friends","Alone","Never"]   }
          ]
        }
      ]
    },
    gk: {
      name: "General Knowledge",
      icon: "🌍",
      description: "Learn about India, national symbols, helpers, and festivals!",
      modules: [
        {
          id: "gk_india",
          title: "Our Country — India",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Our country's name is ___.",              visual: "🇮🇳",  answer: "India",         options: ["India","America","China","Japan"]           },
            { question: "India is also called ___.",               visual: "🇮🇳",  answer: "Bharat",        options: ["Bharat","Pakistan","Nepal","Russia"]        },
            { question: "Capital of India is ___.",                visual: "🏛️",  answer: "New Delhi",     options: ["New Delhi","Mumbai","Kolkata","Chennai"]    },
            { question: "National anthem is ___.",                 visual: "🎵",  answer: "Jana Gana Mana",options:["Jana Gana Mana","Vande Mataram","Saare Jahan","National Song"]},
            { question: "We sing the national anthem in ___ seconds.",visual:"⏱️",answer: "52",           options: ["52","30","60","100"]                        },
            { question: "India's independence day is ___.",        visual: "🇮🇳",  answer: "15 August",     options: ["15 August","26 January","2 October","25 December"]},
            { question: "India's republic day is ___.",            visual: "🪖",  answer: "26 January",    options: ["26 January","15 August","2 October","14 November"]},
            { question: "Father of the Nation is ___.",            visual: "👓",  answer: "Mahatma Gandhi",options:["Mahatma Gandhi","Nehru","Patel","Tagore"]     },
            { question: "Mahatma Gandhi's birthday is ___.",       visual: "🎂",  answer: "2 October",     options: ["2 October","15 August","26 January","14 Nov"]},
            { question: "First Prime Minister of India was ___.",  visual: "🏛️",  answer: "Jawaharlal Nehru",options:["Jawaharlal Nehru","Gandhi","Patel","Ambedkar"]},
            { question: "How many states does India have?",        visual: "🗺️",  answer: "28",            options: ["28","25","30","50"]                         },
            { question: "Our national language is ___.",           visual: "🗣️",  answer: "Hindi",         options: ["Hindi","English","Tamil","Bengali"]         },
            { question: "India is in the continent of ___.",       visual: "🌏",  answer: "Asia",          options: ["Asia","Europe","Africa","America"]          },
            { question: "India Gate is in ___.",                   visual: "🏛️",  answer: "Delhi",         options: ["Delhi","Mumbai","Kolkata","Chennai"]        },
            { question: "Taj Mahal is in ___.",                    visual: "🕌",  answer: "Agra",          options: ["Agra","Delhi","Mumbai","Jaipur"]            }
          ]
        },
        {
          id: "gk_symbols",
          title: "National Symbols of India",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "National bird of India is ___.",          visual: "🦚",  answer: "Peacock",       options: ["Peacock","Parrot","Eagle","Sparrow"]        },
            { question: "National animal of India is ___.",        visual: "🐅",  answer: "Tiger",         options: ["Tiger","Lion","Elephant","Leopard"]         },
            { question: "National flower of India is ___.",        visual: "🌸",  answer: "Lotus",         options: ["Lotus","Rose","Sunflower","Jasmine"]        },
            { question: "National fruit of India is ___.",         visual: "🥭",  answer: "Mango",         options: ["Mango","Apple","Banana","Orange"]           },
            { question: "National tree of India is ___.",          visual: "🌳",  answer: "Banyan",        options: ["Banyan","Neem","Peepal","Mango"]            },
            { question: "National river of India is ___.",         visual: "🌊",  answer: "Ganga",         options: ["Ganga","Yamuna","Narmada","Godavari"]       },
            { question: "National flag has ___ colors.",           visual: "🇮🇳",  answer: "3",             options: ["3","2","4","5"]                             },
            { question: "Top color of Indian flag is ___.",        visual: "🇮🇳",  answer: "Saffron",       options: ["Saffron","White","Green","Blue"]            },
            { question: "Middle color of Indian flag is ___.",     visual: "🇮🇳",  answer: "White",         options: ["White","Saffron","Green","Red"]             },
            { question: "Bottom color of Indian flag is ___.",     visual: "🇮🇳",  answer: "Green",         options: ["Green","White","Saffron","Yellow"]          },
            { question: "Indian flag has a ___ in the center.",    visual: "🇮🇳",  answer: "Chakra",        options: ["Chakra","Star","Moon","Sun"]                },
            { question: "Chakra in flag has ___ spokes.",          visual: "⚙️",  answer: "24",            options: ["24","20","30","12"]                         },
            { question: "National emblem has ___ lions.",          visual: "🦁",  answer: "4",             options: ["4","3","2","5"]                             },
            { question: "National emblem motto is ___.",           visual: "📜",  answer: "Satyameva Jayate",options:["Satyameva Jayate","Jai Hind","Vande Mataram","Unity in Diversity"]},
            { question: "National currency of India is ___.",      visual: "💰",  answer: "Rupee",         options: ["Rupee","Dollar","Pound","Yen"]              }
          ]
        },
        {
          id: "gk_helpers",
          title: "Community Helpers",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "A ___ treats sick people.",               visual: "🩺",  answer: "Doctor",        options: ["Doctor","Teacher","Farmer","Engineer"]      },
            { question: "A ___ teaches students.",                 visual: "👩‍🏫", answer: "Teacher",       options: ["Teacher","Doctor","Pilot","Chef"]           },
            { question: "A ___ grows crops and food.",             visual: "🌾",  answer: "Farmer",        options: ["Farmer","Doctor","Teacher","Postman"]       },
            { question: "A ___ catches thieves.",                  visual: "👮",  answer: "Police",        options: ["Police","Doctor","Teacher","Pilot"]         },
            { question: "A ___ puts out fires.",                   visual: "🚒",  answer: "Firefighter",   options: ["Firefighter","Police","Doctor","Postman"]   },
            { question: "A ___ delivers letters.",                 visual: "📬",  answer: "Postman",       options: ["Postman","Doctor","Teacher","Pilot"]        },
            { question: "A ___ flies an airplane.",                visual: "✈️",  answer: "Pilot",         options: ["Pilot","Driver","Doctor","Teacher"]         },
            { question: "A ___ drives a bus.",                     visual: "🚌",  answer: "Driver",        options: ["Driver","Pilot","Doctor","Chef"]            },
            { question: "A ___ cooks food.",                       visual: "👨‍🍳", answer: "Chef/Cook",     options: ["Chef/Cook","Doctor","Teacher","Driver"]     },
            { question: "A ___ builds houses.",                    visual: "🏗️",  answer: "Engineer",      options: ["Engineer","Doctor","Teacher","Farmer"]      },
            { question: "A ___ cuts hair.",                        visual: "💇",  answer: "Barber",        options: ["Barber","Doctor","Teacher","Pilot"]         },
            { question: "A ___ repairs shoes.",                    visual: "👞",  answer: "Cobbler",       options: ["Cobbler","Doctor","Teacher","Chef"]         },
            { question: "A ___ cleans streets.",                   visual: "🧹",  answer: "Sweeper",       options: ["Sweeper","Doctor","Teacher","Postman"]      },
            { question: "A ___ sells vegetables.",                 visual: "🥬",  answer: "Vendor",        options: ["Vendor","Doctor","Teacher","Pilot"]         },
            { question: "A ___ helps sick animals.",               visual: "🐕",  answer: "Veterinarian",  options: ["Veterinarian","Doctor","Teacher","Farmer"]  }
          ]
        },
        {
          id: "gk_festivals",
          title: "Festivals of India",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Diwali is the festival of ___.",          visual: "🪔",  answer: "Lights",        options: ["Lights","Colors","Flowers","Books"]         },
            { question: "Holi is the festival of ___.",            visual: "🎨",  answer: "Colors",        options: ["Colors","Lights","Kites","Sweets"]          },
            { question: "We celebrate ___ in January.",            visual: "🪁",  answer: "Makar Sankranti",options:["Makar Sankranti","Diwali","Holi","Eid"]    },
            { question: "We fast on ___ and worship Lord Ganesha.",visual: "🙏",  answer: "Ganesh Chaturthi",options:["Ganesh Chaturthi","Diwali","Holi","Christmas"]},
            { question: "Christmas is celebrated on ___.",         visual: "🎄",  answer: "25 December",   options: ["25 December","1 January","15 August","2 Oct"]},
            { question: "Eid is celebrated by ___.",               visual: "🌙",  answer: "Muslims",       options: ["Muslims","Hindus","Christians","Sikhs"]     },
            { question: "Dussehra celebrates victory of ___.",     visual: "🏹",  answer: "Good over Evil",options:["Good over Evil","War","Peace","Unity"]       },
            { question: "Raksha Bandhan celebrates ___ bond.",     visual: "🎀",  answer: "Brother-Sister",options:["Brother-Sister","Father-Son","Friends","Mother-Daughter"]},
            { question: "We burn crackers on ___.",                visual: "🎆",  answer: "Diwali",        options: ["Diwali","Holi","Eid","Christmas"]           },
            { question: "We fly kites on ___.",                    visual: "🪁",  answer: "Makar Sankranti",options:["Makar Sankranti","Diwali","Holi","Eid"]    },
            { question: "Easter is celebrated by ___.",            visual: "🐣",  answer: "Christians",    options: ["Christians","Hindus","Muslims","Buddhists"] },
            { question: "Guru Nanak Jayanti is celebrated by ___.",visual: "🙏",  answer: "Sikhs",         options: ["Sikhs","Hindus","Muslims","Christians"]     },
            { question: "We play with colors on ___.",             visual: "🎨",  answer: "Holi",          options: ["Holi","Diwali","Eid","Christmas"]           },
            { question: "Independence Day celebrates India's ___.",visual: "🇮🇳",  answer: "Freedom",       options: ["Freedom","Unity","War","Culture"]           },
            { question: "We worship Goddess Durga on ___.",        visual: "🔱",  answer: "Navratri",      options: ["Navratri","Diwali","Holi","Eid"]            }
          ]
        }
      ]
    },
    computer: {
      name: "Computer",
      icon: "💻",
      description: "Parts of a computer, input/output devices and how we use computers every day.",
      modules: [
        {
          id: "comp_parts",
          title: "Parts of a Computer",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We see pictures and videos on a computer's…",    visual: "🖥️", answer: "Monitor",          options: ["Monitor", "Keyboard", "Mouse", "Speaker"]              },
            { question: "We type letters using a…",                       visual: "⌨️", answer: "Keyboard",         options: ["Keyboard", "Mouse", "Monitor", "Printer"]              },
            { question: "We move the cursor on screen using a…",          visual: "🖱️", answer: "Mouse",            options: ["Mouse", "Keyboard", "Speaker", "Camera"]              },
            { question: "The brain of the computer is called the…",       visual: "🧠", answer: "CPU",              options: ["CPU", "Monitor", "Mouse", "Battery"]                  },
            { question: "We hear sound from a computer through…",         visual: "🔊", answer: "Speakers",         options: ["Speakers", "Mouse", "Keyboard", "Camera"]             },
            { question: "A computer needs ___ to work.",                  visual: "🔌", answer: "Electricity",      options: ["Electricity", "Water", "Air", "Fire"]                 },
            { question: "We print documents using a…",                    visual: "🖨️", answer: "Printer",          options: ["Printer", "Scanner", "Monitor", "Camera"]             },
            { question: "Data is stored in the computer's…",              visual: "💾", answer: "Memory",           options: ["Memory", "Monitor", "Screen", "Speaker"]              },
            { question: "To switch on a computer, we press the…",         visual: "🔘", answer: "Power button",     options: ["Power button", "Space bar", "Enter key", "Delete key"]},
            { question: "The keyboard has ___ and numbers.",              visual: "⌨️", answer: "Letters",          options: ["Letters", "Pictures", "Colors", "Shapes"]             },
            { question: "A laptop is a ___ computer.",                    visual: "💻", answer: "Portable",         options: ["Portable", "Heavy", "Broken", "Fixed"]                },
            { question: "We connect to the internet using…",             visual: "🌐", answer: "Wi-Fi or cable",   options: ["Wi-Fi or cable", "Water pipe", "Gas pipe", "Phone cable"]},
            { question: "Monitor, Printer and Speaker are all…",          visual: "🖥️", answer: "Output devices",   options: ["Output devices", "Input devices", "Storage", "Power"]  },
            { question: "Keyboard and Mouse are both…",                   visual: "⌨️", answer: "Input devices",    options: ["Input devices", "Output devices", "Display", "Storage"]},
            { question: "Computer takes instructions through…",           visual: "💻", answer: "Input devices",    options: ["Input devices", "Output devices", "Screen only", "Power"]}
          ]
        },
        {
          id: "comp_devices",
          title: "Input & Output Devices",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Keyboard is an ___ device.",                     visual: "⌨️", answer: "Input",            options: ["Input", "Output", "Storage", "Power"]                  },
            { question: "Mouse is an ___ device.",                        visual: "🖱️", answer: "Input",            options: ["Input", "Output", "Display", "Print"]                  },
            { question: "Monitor is an ___ device.",                      visual: "🖥️", answer: "Output",           options: ["Output", "Input", "Storage", "Scan"]                   },
            { question: "Printer is an ___ device.",                      visual: "🖨️", answer: "Output",           options: ["Output", "Input", "Wireless", "Touch"]                 },
            { question: "Speaker is an ___ device.",                      visual: "🔊", answer: "Output",           options: ["Output", "Input", "Power", "Save"]                     },
            { question: "Microphone is an ___ device.",                   visual: "🎤", answer: "Input",            options: ["Input", "Output", "Print", "Display"]                  },
            { question: "Joystick is used to play…",                      visual: "🕹️", answer: "Games",            options: ["Games", "Music", "Drawing", "Writing"]                 },
            { question: "Scanner copies a ___ into the computer.",        visual: "📄", answer: "Picture or paper",  options: ["Picture or paper", "Sound", "Video", "Button"]         },
            { question: "Headphones are used to…",                        visual: "🎧", answer: "Listen to sound",  options: ["Listen to sound", "Type words", "Print pages", "Store files"]},
            { question: "A pen drive is used to…",                        visual: "🔌", answer: "Store files",      options: ["Store files", "Print", "Display", "Make sound"]         },
            { question: "Touch screen is both…",                          visual: "📱", answer: "Input and output", options: ["Input and output", "Only input", "Only output", "Neither"]},
            { question: "Which is NOT an input device?",                  visual: "🖥️", answer: "Monitor",          options: ["Monitor", "Keyboard", "Mouse", "Joystick"]             },
            { question: "Which is NOT an output device?",                 visual: "⌨️", answer: "Keyboard",         options: ["Keyboard", "Monitor", "Printer", "Speaker"]            },
            { question: "Camera used with a computer is called…",         visual: "📷", answer: "Webcam",           options: ["Webcam", "Scanner", "Printer", "Joystick"]             },
            { question: "We talk online using a microphone and…",         visual: "🎤", answer: "Webcam",           options: ["Webcam", "Printer", "Scanner", "Joystick"]             }
          ]
        },
        {
          id: "comp_uses",
          title: "Uses of Computer",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We can play ___ on a computer.",                  visual: "🎮", answer: "Games",            options: ["Games", "Cricket", "Football", "Swimming"]              },
            { question: "We can watch ___ on a computer.",                 visual: "🎬", answer: "Movies and videos", options: ["Movies and videos", "Clouds only", "Rain", "Nothing"]   },
            { question: "We use computers in school to…",                  visual: "🏫", answer: "Learn and study",  options: ["Learn and study", "Sleep", "Cook", "Play outside"]      },
            { question: "We can listen to ___ on a computer.",             visual: "🎵", answer: "Music",            options: ["Music", "Rain", "Silence", "Wind"]                      },
            { question: "Doctors use computers to…",                       visual: "🏥", answer: "Check patient reports", options: ["Check patient reports", "Cook food", "Grow plants", "Drive cars"]},
            { question: "We can video call family using a…",               visual: "📱", answer: "Computer or phone", options: ["Computer or phone", "Bicycle", "Bus", "Book"]           },
            { question: "We can read ___ on a computer.",                  visual: "📖", answer: "Books and stories", options: ["Books and stories", "Mud", "Wood", "Sand"]              },
            { question: "Artists use computers to…",                       visual: "🎨", answer: "Draw and design",  options: ["Draw and design", "Cook", "Swim", "Sleep"]              },
            { question: "We can send messages to friends using…",          visual: "📧", answer: "Email",            options: ["Email", "Drum", "Fire", "Smoke signals"]                },
            { question: "Internet connects computers all over the…",       visual: "🌍", answer: "World",            options: ["World", "Room", "City only", "School only"]             },
            { question: "We save our work by pressing the…",               visual: "💾", answer: "Save button",      options: ["Save button", "Delete button", "Print button", "Power button"]},
            { question: "Weather scientists use computers to…",            visual: "🌤️", answer: "Predict weather",  options: ["Predict weather", "Make rain", "Stop storms", "Grow clouds"]},
            { question: "Banks use computers to…",                         visual: "🏦", answer: "Manage money",     options: ["Manage money", "Grow crops", "Fly planes", "Bake bread"]},
            { question: "Computers help pilots to…",                       visual: "✈️", answer: "Fly planes safely",options: ["Fly planes safely", "Cook meals", "Drive buses", "Plant trees"]},
            { question: "We can learn new words online using…",            visual: "🌐", answer: "Educational websites", options: ["Educational websites", "Games only", "TV only", "Sleep"]}
          ]
        }
      ]
    },
    rhymes: {
      name: "Rhymes",
      icon: "🎵",
      description: "Fun nursery rhymes and CBSE Marigold Class 1 poems!",
      modules: [
        {
          id: "rhyme_nursery",
          title: "Nursery Rhymes",
          type: "rhymeComplete",
          completePrompt: "🎵 Complete the rhyme!",
          questions: 10,
          items: [
            { lines: "Twinkle, twinkle, little ___,\nHow I wonder what you are!",                                emoji: "⭐", answer: "STAR",    options: ["STAR",    "MOON",   "SUN",     "CLOUD"],  speakText: "Twinkle twinkle little star how I wonder what you are",          speakLang: "en-US" },
            { lines: "Baa, baa, black ___,\nHave you any wool?",                                                emoji: "🐑", answer: "SHEEP",   options: ["SHEEP",   "COW",    "HORSE",   "DUCK"],   speakText: "Baa baa black sheep have you any wool",                          speakLang: "en-US" },
            { lines: "Jack and Jill went up the ___,\nTo fetch a pail of water.",                               emoji: "⛰️", answer: "HILL",    options: ["HILL",    "TREE",   "ROAD",    "WALL"],   speakText: "Jack and Jill went up the hill to fetch a pail of water",        speakLang: "en-US" },
            { lines: "Humpty Dumpty sat on a ___,\nHumpty Dumpty had a great fall.",                            emoji: "🥚", answer: "WALL",    options: ["WALL",    "CHAIR",  "HORSE",   "FENCE"],  speakText: "Humpty Dumpty sat on a wall Humpty Dumpty had a great fall",     speakLang: "en-US" },
            { lines: "Old MacDonald had a ___,\nE-I-E-I-O!",                                                    emoji: "🚜", answer: "FARM",    options: ["FARM",    "SHOP",   "SCHOOL",  "HOUSE"],  speakText: "Old MacDonald had a farm E I E I O",                             speakLang: "en-US" },
            { lines: "Mary had a little ___,\nIts fleece was white as snow.",                                   emoji: "🐑", answer: "LAMB",    options: ["LAMB",    "CAT",    "DOG",     "BIRD"],   speakText: "Mary had a little lamb its fleece was white as snow",            speakLang: "en-US" },
            { lines: "Hickory dickory dock,\nThe ___ ran up the clock.",                                        emoji: "🕐", answer: "MOUSE",   options: ["MOUSE",   "CAT",    "RAT",     "FROG"],   speakText: "Hickory dickory dock the mouse ran up the clock",                speakLang: "en-US" },
            { lines: "Row, row, row your ___,\nGently down the stream.",                                        emoji: "🚣", answer: "BOAT",    options: ["BOAT",    "CAR",    "TRAIN",   "BIKE"],   speakText: "Row row row your boat gently down the stream",                   speakLang: "en-US" },
            { lines: "The wheels on the ___\nGo round and round.",                                              emoji: "🚌", answer: "BUS",     options: ["BUS",     "CAR",    "TRAIN",   "TRUCK"],  speakText: "The wheels on the bus go round and round",                       speakLang: "en-US" },
            { lines: "Incy Wincy Spider\nClimbed up the water ___.",                                            emoji: "🕷️", answer: "SPOUT",   options: ["SPOUT",   "PIPE",   "WALL",    "TREE"],   speakText: "Incy Wincy Spider climbed up the water spout",                   speakLang: "en-US" },
            { lines: "Rain, rain, go ___,\nCome again another day!",                                            emoji: "🌧️", answer: "AWAY",    options: ["AWAY",    "SLOW",   "DOWN",    "NOW"],    speakText: "Rain rain go away come again another day",                       speakLang: "en-US" },
            { lines: "One, two, three, four, ___,\nOnce I caught a fish alive!",                               emoji: "🐟", answer: "FIVE",    options: ["FIVE",    "SIX",    "FOUR",    "TEN"],    speakText: "One two three four five once I caught a fish alive",             speakLang: "en-US" },
            { lines: "If you're happy and you know it,\nClap your ___!",                                        emoji: "👏", answer: "HANDS",   options: ["HANDS",   "FEET",   "LEGS",    "HEAD"],   speakText: "If you're happy and you know it clap your hands",                speakLang: "en-US" },
            { lines: "London Bridge is falling ___,\nFalling down, falling down.",                              emoji: "🌉", answer: "DOWN",    options: ["DOWN",    "UP",     "APART",   "AWAY"],   speakText: "London Bridge is falling down falling down falling down",        speakLang: "en-US" },
            { lines: "Up above the world so ___,\nLike a diamond in the sky.",                                  emoji: "💎", answer: "HIGH",    options: ["HIGH",    "BRIGHT", "FAR",     "WIDE"],   speakText: "Up above the world so high like a diamond in the sky",           speakLang: "en-US" },
            { lines: "Jack be nimble, Jack be ___,\nJack jump over the candlestick!",                           emoji: "🕯️", answer: "QUICK",   options: ["QUICK",   "SLOW",   "TALL",    "SMALL"],  speakText: "Jack be nimble Jack be quick Jack jump over the candlestick",    speakLang: "en-US" },
            { lines: "Hot cross buns, hot cross ___,\nOne a penny, two a penny.",                               emoji: "🍞", answer: "BUNS",    options: ["BUNS",    "CAKE",   "ROLLS",   "BREAD"],  speakText: "Hot cross buns hot cross buns one a penny two a penny",          speakLang: "en-US" },
            { lines: "Little Bo Peep has lost her ___,\nAnd doesn't know where to find them.",                 emoji: "🐑", answer: "SHEEP",   options: ["SHEEP",   "COWS",   "GOATS",   "PIGS"],   speakText: "Little Bo Peep has lost her sheep and doesn't know where to find them", speakLang: "en-US" },
            { lines: "Roses are ___,\nViolets are blue.",                                                       emoji: "🌹", answer: "RED",     options: ["RED",     "PINK",   "ORANGE",  "WHITE"],  speakText: "Roses are red violets are blue",                                speakLang: "en-US" },
            { lines: "Ding dong bell,\nPussy's in the ___!",                                                    emoji: "🐱", answer: "WELL",    options: ["WELL",    "TREE",   "BOWL",    "HOUSE"],  speakText: "Ding dong bell pussy's in the well",                             speakLang: "en-US" }
          ]
        },
        {
          id: "rhyme_marigold",
          title: "CBSE Marigold Poems",
          type: "rhymeComplete",
          completePrompt: "📚 Complete the poem!",
          questions: 10,
          items: [
            { lines: "There was a little ___,\nHe lived in a box.",                                                    emoji: "🐢", answer: "TURTLE",  options: ["TURTLE", "RABBIT", "FROG",   "LIZARD"],  speakText: "There was a little turtle he lived in a box",                              speakLang: "en-US" },
            { lines: "I often sit and wish that I\nCould be a ___ up in the sky.",                                     emoji: "🪁", answer: "KITE",    options: ["KITE",   "BIRD",   "PLANE",  "CLOUD"],   speakText: "I often sit and wish that I could be a kite up in the sky",                speakLang: "en-US" },
            { lines: "Once I saw a little ___,\nCome hop, hop, hop.",                                                  emoji: "🐦", answer: "BIRD",    options: ["BIRD",   "FROG",   "RABBIT", "CAT"],     speakText: "Once I saw a little bird come hop hop hop",                                speakLang: "en-US" },
            { lines: "After a bath I try, try, try,\nTo wipe myself ___, dry, dry.",                                   emoji: "🛁", answer: "DRY",     options: ["DRY",    "WET",    "CLEAN",  "FAST"],    speakText: "After a bath I try try try to wipe myself dry dry dry",                    speakLang: "en-US" },
            { lines: "Round and round the merry-go-___,\nUp and down goes every horse.",                               emoji: "🎠", answer: "ROUND",   options: ["ROUND",  "FAST",   "HIGH",   "SLOW"],    speakText: "Round and round the merry go round up and down goes every horse",          speakLang: "en-US" },
            { lines: "If I were an ___ and grew on a tree,\nI think I'd drop down on a nice child like me.",          emoji: "🍎", answer: "APPLE",   options: ["APPLE",  "ORANGE", "MANGO",  "BANANA"],  speakText: "If I were an apple and grew on a tree",                                    speakLang: "en-US" },
            { lines: "White and fluffy in the ___,\nClouds go drifting, one by one.",                                  emoji: "☁️", answer: "SKY",     options: ["SKY",    "SEA",    "GROUND", "TREE"],    speakText: "White and fluffy in the sky clouds go drifting one by one",                speakLang: "en-US" },
            { lines: "A happy child am I,\nI laugh and ___ the whole day long.",                                       emoji: "😊", answer: "PLAY",    options: ["PLAY",   "SLEEP",  "CRY",    "HIDE"],    speakText: "A happy child am I I laugh and play the whole day long",                    speakLang: "en-US" },
            { lines: "One little kitten, playing in the ___,\nTwo little kittens — look how they run!",               emoji: "🐱", answer: "SUN",     options: ["SUN",    "RAIN",   "DARK",   "SNOW"],    speakText: "One little kitten playing in the sun two little kittens look how they run", speakLang: "en-US" },
            { lines: "Little turtle ___ in a puddle,\nClimbed on the rocks in the sun.",                              emoji: "🐢", answer: "SWAM",    options: ["SWAM",   "SLEPT",  "DANCED", "HID"],     speakText: "Little turtle swam in a puddle climbed on the rocks in the sun",            speakLang: "en-US" },
            { lines: "Sundari went to the ___ to play,\nShe had so much fun that bright summer day.",                  emoji: "🌳", answer: "PARK",    options: ["PARK",   "SCHOOL", "RIVER",  "MARKET"],  speakText: "Sundari went to the park to play she had so much fun",                     speakLang: "en-US" },
            { lines: "A man in the flying ___\nWaved his hands to me below.",                                          emoji: "✈️", answer: "MACHINE", options: ["MACHINE","ROCKET", "PLANE",  "BALLOON"],  speakText: "A man in the flying machine waved his hands to me below",                  speakLang: "en-US" }
          ]
        }
      ]
    },
    mental_math: {
      name: "Mental Math",
      icon: "🧠",
      description: "Quick thinking, mental calculations, and number sense.",
      modules: [
        {
          id: "mental_quick_add",
          title: "Quick Addition (Single Digit)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "3 + 4 = ?", visual: "⚡", answer: "7", options: ["7", "6", "8", "5"] },
            { question: "5 + 2 = ?", visual: "⚡", answer: "7", options: ["7", "8", "6", "9"] },
            { question: "6 + 3 = ?", visual: "⚡", answer: "9", options: ["9", "8", "10", "7"] },
            { question: "4 + 5 = ?", visual: "⚡", answer: "9", options: ["9", "8", "10", "7"] },
            { question: "7 + 2 = ?", visual: "⚡", answer: "9", options: ["9", "8", "10", "6"] },
            { question: "8 + 1 = ?", visual: "⚡", answer: "9", options: ["9", "7", "10", "8"] },
            { question: "2 + 6 = ?", visual: "⚡", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "3 + 3 = ?", visual: "⚡", answer: "6", options: ["6", "5", "7", "9"] },
            { question: "4 + 4 = ?", visual: "⚡", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "5 + 5 = ?", visual: "⚡", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "1 + 9 = ?", visual: "⚡", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "6 + 4 = ?", visual: "⚡", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "7 + 3 = ?", visual: "⚡", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "8 + 2 = ?", visual: "⚡", answer: "10", options: ["10", "9", "11", "12"] },
            { question: "2 + 2 = ?", visual: "⚡", answer: "4", options: ["4", "3", "5", "6"] }
          ]
        },
        {
          id: "mental_quick_subtract",
          title: "Quick Subtraction (Single Digit)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "9 - 3 = ?", visual: "⚡", answer: "6", options: ["6", "7", "5", "8"] },
            { question: "8 - 2 = ?", visual: "⚡", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "7 - 4 = ?", visual: "⚡", answer: "3", options: ["3", "4", "2", "5"] },
            { question: "10 - 5 = ?", visual: "⚡", answer: "5", options: ["5", "4", "6", "3"] },
            { question: "6 - 2 = ?", visual: "⚡", answer: "4", options: ["4", "3", "5", "2"] },
            { question: "9 - 5 = ?", visual: "⚡", answer: "4", options: ["4", "5", "3", "6"] },
            { question: "8 - 3 = ?", visual: "⚡", answer: "5", options: ["5", "4", "6", "3"] },
            { question: "10 - 3 = ?", visual: "⚡", answer: "7", options: ["7", "6", "8", "5"] },
            { question: "7 - 2 = ?", visual: "⚡", answer: "5", options: ["5", "4", "6", "3"] },
            { question: "10 - 7 = ?", visual: "⚡", answer: "3", options: ["3", "4", "2", "5"] },
            { question: "9 - 4 = ?", visual: "⚡", answer: "5", options: ["5", "4", "6", "3"] },
            { question: "6 - 3 = ?", visual: "⚡", answer: "3", options: ["3", "4", "2", "5"] },
            { question: "8 - 5 = ?", visual: "⚡", answer: "3", options: ["3", "4", "2", "5"] },
            { question: "10 - 4 = ?", visual: "⚡", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "5 - 2 = ?", visual: "⚡", answer: "3", options: ["3", "2", "4", "5"] }
          ]
        },
        {
          id: "mental_number_bonds_10",
          title: "Number Bonds to 10",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "7 + ___ = 10", visual: "🔗", answer: "3", options: ["3", "2", "4", "5"] },
            { question: "4 + ___ = 10", visual: "🔗", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "8 + ___ = 10", visual: "🔗", answer: "2", options: ["2", "3", "1", "4"] },
            { question: "5 + ___ = 10", visual: "🔗", answer: "5", options: ["5", "4", "6", "3"] },
            { question: "9 + ___ = 10", visual: "🔗", answer: "1", options: ["1", "2", "0", "3"] },
            { question: "6 + ___ = 10", visual: "🔗", answer: "4", options: ["4", "3", "5", "6"] },
            { question: "3 + ___ = 10", visual: "🔗", answer: "7", options: ["7", "6", "8", "5"] },
            { question: "2 + ___ = 10", visual: "🔗", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "1 + ___ = 10", visual: "🔗", answer: "9", options: ["9", "8", "10", "7"] },
            { question: "10 + ___ = 10", visual: "🔗", answer: "0", options: ["0", "1", "10", "5"] },
            { question: "What makes 10? 6 and ___", visual: "🔗", answer: "4", options: ["4", "3", "5", "2"] },
            { question: "What makes 10? 7 and ___", visual: "🔗", answer: "3", options: ["3", "4", "2", "5"] },
            { question: "What makes 10? 8 and ___", visual: "🔗", answer: "2", options: ["2", "3", "1", "4"] },
            { question: "What makes 10? 5 and ___", visual: "🔗", answer: "5", options: ["5", "4", "6", "3"] },
            { question: "What makes 10? 9 and ___", visual: "🔗", answer: "1", options: ["1", "2", "0", "3"] }
          ]
        },
        {
          id: "mental_doubling",
          title: "Doubling Numbers",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Double of 1 = ?", visual: "✖️2️⃣", answer: "2", options: ["2", "1", "3", "4"] },
            { question: "Double of 2 = ?", visual: "✖️2️⃣", answer: "4", options: ["4", "3", "5", "2"] },
            { question: "Double of 3 = ?", visual: "✖️2️⃣", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "Double of 4 = ?", visual: "✖️2️⃣", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "Double of 5 = ?", visual: "✖️2️⃣", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "Double of 6 = ?", visual: "✖️2️⃣", answer: "12", options: ["12", "11", "13", "10"] },
            { question: "Double of 7 = ?", visual: "✖️2️⃣", answer: "14", options: ["14", "13", "15", "12"] },
            { question: "Double of 8 = ?", visual: "✖️2️⃣", answer: "16", options: ["16", "15", "17", "14"] },
            { question: "Double of 9 = ?", visual: "✖️2️⃣", answer: "18", options: ["18", "17", "19", "16"] },
            { question: "Double of 10 = ?", visual: "✖️2️⃣", answer: "20", options: ["20", "19", "21", "18"] },
            { question: "2 + 2 = ?", visual: "✖️2️⃣", answer: "4", options: ["4", "3", "5", "2"] },
            { question: "3 + 3 = ?", visual: "✖️2️⃣", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "4 + 4 = ?", visual: "✖️2️⃣", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "5 + 5 = ?", visual: "✖️2️⃣", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "6 + 6 = ?", visual: "✖️2️⃣", answer: "12", options: ["12", "11", "13", "10"] }
          ]
        },
        {
          id: "mental_one_more_less",
          title: "One More / One Less",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "One more than 5 = ?", visual: "➕1️⃣", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "One more than 9 = ?", visual: "➕1️⃣", answer: "10", options: ["10", "9", "11", "8"] },
            { question: "One more than 12 = ?", visual: "➕1️⃣", answer: "13", options: ["13", "12", "14", "11"] },
            { question: "One more than 19 = ?", visual: "➕1️⃣", answer: "20", options: ["20", "19", "21", "18"] },
            { question: "One more than 7 = ?", visual: "➕1️⃣", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "One less than 10 = ?", visual: "➖1️⃣", answer: "9", options: ["9", "10", "8", "11"] },
            { question: "One less than 6 = ?", visual: "➖1️⃣", answer: "5", options: ["5", "6", "4", "7"] },
            { question: "One less than 15 = ?", visual: "➖1️⃣", answer: "14", options: ["14", "15", "13", "16"] },
            { question: "One less than 20 = ?", visual: "➖1️⃣", answer: "19", options: ["19", "20", "18", "21"] },
            { question: "One less than 8 = ?", visual: "➖1️⃣", answer: "7", options: ["7", "8", "6", "9"] },
            { question: "What comes after 11?", visual: "➕1️⃣", answer: "12", options: ["12", "10", "13", "11"] },
            { question: "What comes before 16?", visual: "➖1️⃣", answer: "15", options: ["15", "17", "14", "16"] },
            { question: "What comes after 14?", visual: "➕1️⃣", answer: "15", options: ["15", "13", "16", "14"] },
            { question: "What comes before 9?", visual: "➖1️⃣", answer: "8", options: ["8", "10", "7", "9"] },
            { question: "What comes after 18?", visual: "➕1️⃣", answer: "19", options: ["19", "17", "20", "18"] }
          ]
        },
        {
          id: "sci_seasons_weather",
          title: "Seasons & Weather",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "How many seasons are there in a year?", visual: "🌍", answer: "4", options: ["4", "3", "5", "12"] },
            { question: "In which season is it very hot?", visual: "☀️", answer: "Summer", options: ["Summer", "Winter", "Rainy", "Spring"] },
            { question: "In which season do we wear warm clothes?", visual: "🧥", answer: "Winter", options: ["Winter", "Summer", "Rainy", "Autumn"] },
            { question: "In which season does it rain a lot?", visual: "🌧️", answer: "Rainy", options: ["Rainy", "Summer", "Winter", "Spring"] },
            { question: "Which season comes after winter?", visual: "🌸", answer: "Spring", options: ["Spring", "Summer", "Rainy", "Autumn"] },
            { question: "Clouds bring…", visual: "☁️", answer: "Rain", options: ["Rain", "Sun", "Stars", "Moon"] },
            { question: "We see lightning in the sky during…", visual: "⚡", answer: "Storm", options: ["Storm", "Sunny day", "Night", "Winter"] },
            { question: "Rainbow appears after…", visual: "🌈", answer: "Rain", options: ["Rain", "Night", "Winter", "Moon"] },
            { question: "When it is very cold, we see…", visual: "❄️", answer: "Snow", options: ["Snow", "Rain", "Rainbow", "Sun"] },
            { question: "The sun is hottest during…", visual: "☀️", answer: "Summer", options: ["Summer", "Winter", "Night", "Rainy"] },
            { question: "What do we use to protect from rain?", visual: "☂️", answer: "Umbrella", options: ["Umbrella", "Blanket", "Hat", "Shoes"] },
            { question: "Which season do flowers bloom most?", visual: "🌺", answer: "Spring", options: ["Spring", "Winter", "Night", "Rainy"] },
            { question: "When do we see stars and moon?", visual: "🌙", answer: "Night", options: ["Night", "Day", "Noon", "Morning"] },
            { question: "Wind is moving…", visual: "💨", answer: "Air", options: ["Air", "Water", "Fire", "Earth"] },
            { question: "Which is coldest?", visual: "🌡️", answer: "Winter", options: ["Winter", "Summer", "Spring", "Rainy"] }
          ]
        },
        {
          id: "sci_five_senses",
          title: "Our Five Senses",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "How many senses do we have?", visual: "👁️👂👃👅🤚", answer: "5", options: ["5", "3", "4", "6"] },
            { question: "We see with our…", visual: "👁️", answer: "Eyes", options: ["Eyes", "Ears", "Nose", "Tongue"] },
            { question: "We hear with our…", visual: "👂", answer: "Ears", options: ["Ears", "Eyes", "Nose", "Mouth"] },
            { question: "We smell with our…", visual: "👃", answer: "Nose", options: ["Nose", "Eyes", "Ears", "Hands"] },
            { question: "We taste with our…", visual: "👅", answer: "Tongue", options: ["Tongue", "Nose", "Ears", "Eyes"] },
            { question: "We touch with our…", visual: "🤚", answer: "Skin", options: ["Skin", "Eyes", "Nose", "Ears"] },
            { question: "Which sense helps us enjoy music?", visual: "🎵", answer: "Hearing", options: ["Hearing", "Seeing", "Tasting", "Smelling"] },
            { question: "Which sense tells us food is hot?", visual: "🔥", answer: "Touch", options: ["Touch", "Taste", "Smell", "Sight"] },
            { question: "Which sense helps us read books?", visual: "📖", answer: "Sight", options: ["Sight", "Touch", "Smell", "Taste"] },
            { question: "Which sense helps us know flowers smell nice?", visual: "🌸", answer: "Smell", options: ["Smell", "Sight", "Touch", "Hearing"] },
            { question: "Which sense tells if ice cream is sweet?", visual: "🍦", answer: "Taste", options: ["Taste", "Touch", "Sight", "Smell"] },
            { question: "Which sense helps blind people read?", visual: "📚", answer: "Touch", options: ["Touch", "Smell", "Taste", "Hearing"] },
            { question: "Which sense helps us see colors?", visual: "🎨", answer: "Sight", options: ["Sight", "Touch", "Smell", "Hearing"] },
            { question: "Which sense helps us hear our name called?", visual: "🗣️", answer: "Hearing", options: ["Hearing", "Sight", "Touch", "Smell"] },
            { question: "Which sense tells us if something is soft or hard?", visual: "🧸", answer: "Touch", options: ["Touch", "Sight", "Taste", "Smell"] }
          ]
        },
        {
          id: "sci_good_habits",
          title: "Good Habits & Safety",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "We should brush our teeth…", visual: "🪥", answer: "Twice a day", options: ["Twice a day", "Once a week", "Never", "Once a month"] },
            { question: "Before eating, we should…", visual: "🧼", answer: "Wash hands", options: ["Wash hands", "Play", "Sleep", "Run"] },
            { question: "We should drink ___ glasses of water daily.", visual: "💧", answer: "6-8", options: ["6-8", "1", "0", "20"] },
            { question: "We should sleep for ___ hours.", visual: "😴", answer: "8-10", options: ["8-10", "2", "1", "20"] },
            { question: "While crossing the road, we should…", visual: "🚦", answer: "Look both ways", options: ["Look both ways", "Run", "Close eyes", "Jump"] },
            { question: "We should not play with…", visual: "🔥", answer: "Fire", options: ["Fire", "Toys", "Books", "Friends"] },
            { question: "After using the toilet, we should…", visual: "🚽", answer: "Wash hands", options: ["Wash hands", "Run", "Sleep", "Eat"] },
            { question: "We should eat ___ meals a day.", visual: "🍽️", answer: "3", options: ["3", "1", "10", "0"] },
            { question: "We should always wear ___ on a bicycle.", visual: "🚲", answer: "Helmet", options: ["Helmet", "Hat", "Crown", "Cap"] },
            { question: "We should keep our room…", visual: "🧹", answer: "Clean", options: ["Clean", "Dirty", "Messy", "Wet"] },
            { question: "We should exercise to stay…", visual: "🤸", answer: "Fit", options: ["Fit", "Sick", "Lazy", "Sleepy"] },
            { question: "We should not talk to…", visual: "👤", answer: "Strangers", options: ["Strangers", "Parents", "Teachers", "Friends"] },
            { question: "We should cut nails when they are…", visual: "💅", answer: "Long", options: ["Long", "Short", "Clean", "Never"] },
            { question: "We should cover our mouth when we…", visual: "🤧", answer: "Sneeze", options: ["Sneeze", "Eat", "Sleep", "Read"] },
            { question: "We should say ___ when someone helps us.", visual: "🙏", answer: "Thank you", options: ["Thank you", "Go away", "Nothing", "Bad words"] }
          ]
        },
        {
          id: "mental_skip_counting",
          title: "Skip Counting (2s, 5s, 10s)",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Count by 2: 2, 4, 6, ___", visual: "2️⃣➡️", answer: "8", options: ["8", "7", "9", "6"] },
            { question: "Count by 2: 10, 12, 14, ___", visual: "2️⃣➡️", answer: "16", options: ["16", "15", "17", "13"] },
            { question: "Count by 5: 5, 10, 15, ___", visual: "5️⃣➡️", answer: "20", options: ["20", "18", "25", "16"] },
            { question: "Count by 5: 20, 25, 30, ___", visual: "5️⃣➡️", answer: "35", options: ["35", "32", "40", "33"] },
            { question: "Count by 10: 10, 20, 30, ___", visual: "🔟➡️", answer: "40", options: ["40", "35", "50", "31"] },
            { question: "Count by 10: 40, 50, 60, ___", visual: "🔟➡️", answer: "70", options: ["70", "65", "80", "61"] },
            { question: "Count by 2: 8, 10, 12, ___", visual: "2️⃣➡️", answer: "14", options: ["14", "13", "15", "11"] },
            { question: "Count by 5: 10, 15, 20, ___", visual: "5️⃣➡️", answer: "25", options: ["25", "22", "30", "21"] },
            { question: "Count by 10: 20, 30, 40, ___", visual: "🔟➡️", answer: "50", options: ["50", "45", "60", "41"] },
            { question: "Count by 2: 14, 16, 18, ___", visual: "2️⃣➡️", answer: "20", options: ["20", "19", "21", "17"] },
            { question: "Count by 5: 35, 40, 45, ___", visual: "5️⃣➡️", answer: "50", options: ["50", "48", "55", "46"] },
            { question: "Count by 2: 4, 6, 8, ___", visual: "2️⃣➡️", answer: "10", options: ["10", "9", "11", "7"] },
            { question: "Count by 10: 50, 60, 70, ___", visual: "🔟➡️", answer: "80", options: ["80", "75", "90", "71"] },
            { question: "Count by 5: 15, 20, 25, ___", visual: "5️⃣➡️", answer: "30", options: ["30", "28", "35", "26"] },
            { question: "Count by 2: 6, 8, 10, ___", visual: "2️⃣➡️", answer: "12", options: ["12", "11", "13", "9"] }
          ]
        },
        {
          id: "mental_comparison",
          title: "Quick Comparison",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "Which is bigger: 5 or 8?", visual: "⚖️", answer: "8", options: ["8", "5", "Same", "Both"] },
            { question: "Which is smaller: 3 or 7?", visual: "⚖️", answer: "3", options: ["3", "7", "Same", "Both"] },
            { question: "Which is bigger: 12 or 9?", visual: "⚖️", answer: "12", options: ["12", "9", "Same", "Both"] },
            { question: "Which is smaller: 15 or 10?", visual: "⚖️", answer: "10", options: ["10", "15", "Same", "Both"] },
            { question: "Which is bigger: 20 or 18?", visual: "⚖️", answer: "20", options: ["20", "18", "Same", "Both"] },
            { question: "Which is smaller: 6 or 4?", visual: "⚖️", answer: "4", options: ["4", "6", "Same", "Both"] },
            { question: "Which is bigger: 11 or 14?", visual: "⚖️", answer: "14", options: ["14", "11", "Same", "Both"] },
            { question: "Which is smaller: 19 or 16?", visual: "⚖️", answer: "16", options: ["16", "19", "Same", "Both"] },
            { question: "Which is bigger: 7 or 13?", visual: "⚖️", answer: "13", options: ["13", "7", "Same", "Both"] },
            { question: "Which is smaller: 17 or 12?", visual: "⚖️", answer: "12", options: ["12", "17", "Same", "Both"] },
            { question: "5 is ___ than 9", visual: "⚖️", answer: "Smaller", options: ["Smaller", "Bigger", "Equal", "Same"] },
            { question: "15 is ___ than 10", visual: "⚖️", answer: "Bigger", options: ["Bigger", "Smaller", "Equal", "Same"] },
            { question: "8 is ___ than 12", visual: "⚖️", answer: "Smaller", options: ["Smaller", "Bigger", "Equal", "Same"] },
            { question: "20 is ___ than 16", visual: "⚖️", answer: "Bigger", options: ["Bigger", "Smaller", "Equal", "Same"] },
            { question: "10 is ___ to 10", visual: "⚖️", answer: "Equal", options: ["Equal", "Bigger", "Smaller", "Different"] }
          ]
        },
        {
          id: "mental_missing_numbers",
          title: "Missing Numbers in Pattern",
          type: "scienceMcq",
          questions: 10,
          items: [
            { question: "1, 2, 3, ___, 5", visual: "🔢", answer: "4", options: ["4", "3", "5", "6"] },
            { question: "5, 6, ___, 8, 9", visual: "🔢", answer: "7", options: ["7", "6", "8", "5"] },
            { question: "10, 11, 12, ___, 14", visual: "🔢", answer: "13", options: ["13", "12", "14", "11"] },
            { question: "15, 16, ___, 18, 19", visual: "🔢", answer: "17", options: ["17", "16", "18", "15"] },
            { question: "3, 4, 5, ___, 7", visual: "🔢", answer: "6", options: ["6", "5", "7", "4"] },
            { question: "7, 8, ___, 10, 11", visual: "🔢", answer: "9", options: ["9", "8", "10", "7"] },
            { question: "12, 13, 14, ___, 16", visual: "🔢", answer: "15", options: ["15", "14", "16", "13"] },
            { question: "17, 18, ___, 20", visual: "🔢", answer: "19", options: ["19", "18", "20", "17"] },
            { question: "8, 9, 10, ___", visual: "🔢", answer: "11", options: ["11", "10", "12", "9"] },
            { question: "___, 5, 6, 7", visual: "🔢", answer: "4", options: ["4", "5", "3", "6"] },
            { question: "___, 10, 11, 12", visual: "🔢", answer: "9", options: ["9", "10", "8", "11"] },
            { question: "14, ___, 16, 17", visual: "🔢", answer: "15", options: ["15", "14", "16", "13"] },
            { question: "2, 3, ___, 5, 6", visual: "🔢", answer: "4", options: ["4", "3", "5", "2"] },
            { question: "11, 12, ___, 14, 15", visual: "🔢", answer: "13", options: ["13", "12", "14", "11"] },
            { question: "18, 19, ___, 21", visual: "🔢", answer: "20", options: ["20", "19", "21", "18"] }
          ]
        }
      ]
    },
    funGames: {
      name: "🎮 Fun Games",
      icon: "🎮",
      description: "Exciting action games - Snake, Memory Match, Catch & more!",
      modules: [
        {
          id: "snake_game",
          title: "🐍 Snake Game",
          type: "snakeGame",
          description: "Classic snake game! Eat apples 🍎 to grow longer. Don't hit walls or yourself!",
          controls: "Use Arrow Keys ⬆️⬇️⬅️➡️ to move"
        },
        {
          id: "memory_match",
          title: "🧠 Memory Match",
          type: "memoryMatch",
          description: "Find matching pairs! Click cards to flip them.",
          gridSize: 4,
          emojis: ["🐶","🐱","🐸","🦁","🐘","🦋","🐝","🍎"]
        },
        {
          id: "catch_game",
          title: "🎯 Catch the Apples",
          type: "catchGame",
          description: "Move the basket ⬅️➡️ to catch falling apples 🍎. Avoid bombs 💣!",
          duration: 60
        },
        {
          id: "balloon_pop",
          title: "🎈 Balloon Pop",
          type: "balloonPop",
          description: "Pop as many balloons as you can! Click fast!",
          duration: 30
        },
        {
          id: "number_jump",
          title: "🦘 Number Jump",
          type: "numberJump",
          description: "Jump on the correct numbers! Use Space to jump.",
          difficulty: "easy"
        },
        {
          id: "color_match_fast",
          title: "🌈 Color Match Speed",
          type: "colorMatchSpeed",
          description: "Click the color that matches the word. Be fast!",
          duration: 45
        },
        {
          id: "maze_runner",
          title: "🏃 Maze Runner",
          type: "mazeRunner",
          description: "Navigate through the maze to reach the star ⭐",
          mazeSize: 10
        },
        {
          id: "bubble_blast",
          title: "💥 Bubble Blast",
          type: "bubbleBlast",
          description: "Pop bubbles of the same color in groups!",
          gridSize: 8
        },
        {
          id: "snap_game",
          title: "⚡ Snap!",
          type: "snapGame",
          description: "Click SNAP when two cards match! Quick reflexes game.",
          cardTypes: ["🍎","🍊","🍋","🍌","🍉","🍓","🍇","🍑"],
          rounds: 15
        }
      ]
    },
    stories: {
      name: "Stories",
      icon: "📖",
      description: "Fun stories for Class 1 kids — read, listen and enjoy!",
      list: [
        {
          id: "lion_mouse",
          title: "The Lion and the Mouse",
          emoji: "🦁🐭",
          moral: "A small friend can be a great helper!",
          pages: [
            {
              visual: "🦁💤",
              text: "Once upon a time, a big strong lion was sleeping under a tree in the forest.",
              speakText: "Once upon a time, a big strong lion was sleeping under a tree in the forest."
            },
            {
              visual: "🐭🦁",
              text: "A tiny mouse was playing nearby. She ran over the lion's nose by mistake!",
              speakText: "A tiny mouse was playing nearby. She ran over the lion's nose by mistake!"
            },
            {
              visual: "🦁😠🐾",
              text: "The lion woke up very angry! He caught the little mouse in his big paw.",
              speakText: "The lion woke up very angry! He caught the little mouse in his big paw."
            },
            {
              visual: "🙏🐭✨",
              text: "Please let me go! said the mouse. One day I will help you! The lion laughed and set her free.",
              speakText: "Please let me go! said the mouse. One day I will help you! The lion laughed and set her free."
            },
            {
              visual: "🦁🕸️😢",
              text: "A few days later, the lion was caught in a hunter's net. He roared and roared for help!",
              speakText: "A few days later, the lion was caught in a hunter's net. He roared and roared for help!"
            },
            {
              visual: "🐭✂️🦁🎉",
              text: "The little mouse heard the lion and quickly chewed through the ropes. The lion was free! They became best friends. Moral: Even a small friend can be a great helper!",
              speakText: "The little mouse heard the lion and quickly chewed through the ropes. The lion was free! They became best friends. Even a small friend can be a great helper!"
            }
          ]
        },
        {
          id: "tortoise_hare",
          title: "The Tortoise and the Hare",
          emoji: "🐢🐇",
          moral: "Slow and steady wins the race!",
          pages: [
            {
              visual: "🐇😤🐢",
              text: "The hare always made fun of the slow tortoise. I am the fastest animal! the hare would brag.",
              speakText: "The hare always made fun of the slow tortoise. I am the fastest animal! the hare would brag."
            },
            {
              visual: "🐢🤝🐇",
              text: "One day the tortoise said: Let us have a race! The hare laughed, but agreed.",
              speakText: "One day the tortoise said: Let us have a race! The hare laughed, but agreed."
            },
            {
              visual: "🏁🐇💨🐢🚶",
              text: "The race started! The hare zoomed ahead very fast. The tortoise walked slowly but steadily.",
              speakText: "The race started! The hare zoomed ahead very fast. The tortoise walked slowly but steadily."
            },
            {
              visual: "🐇😴🌳",
              text: "The hare was so far ahead that he decided to take a nap under a shady tree.",
              speakText: "The hare was so far ahead that he decided to take a nap under a shady tree."
            },
            {
              visual: "🐢🚶🏁",
              text: "The tortoise kept walking and walking, slowly passing the sleeping hare.",
              speakText: "The tortoise kept walking and walking, slowly passing the sleeping hare."
            },
            {
              visual: "🏆🐢🎉🐇😱",
              text: "The tortoise crossed the finish line first! The hare woke up and ran, but it was too late. Moral: Slow and steady wins the race!",
              speakText: "The tortoise crossed the finish line first! The hare woke up and ran, but it was too late. Slow and steady wins the race!"
            }
          ]
        },
        {
          id: "thirsty_crow",
          title: "The Thirsty Crow",
          emoji: "🐦💧",
          moral: "Use your brain to solve problems!",
          pages: [
            {
              visual: "🐦☀️😮",
              text: "On a hot summer day, a crow was very thirsty. It flew here and there looking for water.",
              speakText: "On a hot summer day, a crow was very thirsty. It flew here and there looking for water."
            },
            {
              visual: "🐦🏺👀",
              text: "At last, the crow found a pot with a little water at the bottom. But the pot was tall and the water was too low to reach!",
              speakText: "At last, the crow found a pot with a little water at the bottom. But the pot was tall and the water was too low to reach!"
            },
            {
              visual: "🐦🤔💡",
              text: "The crow thought and thought. Then it had a clever idea!",
              speakText: "The crow thought and thought. Then it had a clever idea!"
            },
            {
              visual: "🐦🪨🪨🪨🏺",
              text: "The crow picked up small stones one by one and dropped them into the pot.",
              speakText: "The crow picked up small stones one by one and dropped them into the pot."
            },
            {
              visual: "💧⬆️🐦😊",
              text: "The water rose higher and higher. Soon the crow could reach the water and drink! Moral: Use your brain to solve problems!",
              speakText: "The water rose higher and higher. Soon the crow could reach the water and drink! Use your brain to solve problems!"
            }
          ]
        },
        {
          id: "hungry_caterpillar",
          title: "The Very Hungry Caterpillar",
          emoji: "🐛🍎",
          moral: "Eating healthy helps you grow strong!",
          pages: [
            {
              visual: "🥚🍃🌙",
              text: "One moonlit night, a tiny egg lay on a leaf. On Sunday morning, a tiny caterpillar hatched out!",
              speakText: "One moonlit night, a tiny egg lay on a leaf. On Sunday morning, a tiny caterpillar hatched out!"
            },
            {
              visual: "🐛🍎🍐🍊",
              text: "The caterpillar was very hungry! On Monday he ate one apple. On Tuesday he ate two pears. On Wednesday he ate three oranges.",
              speakText: "The caterpillar was very hungry! On Monday he ate one apple. On Tuesday he ate two pears. On Wednesday he ate three oranges."
            },
            {
              visual: "🐛🍓🍫🍰🌭",
              text: "On Thursday, four strawberries. On Friday, five oranges. On Saturday, he ate all kinds of yummy food and had a tummy ache!",
              speakText: "On Thursday, four strawberries. On Friday, five oranges. On Saturday, he ate all kinds of yummy food and had a tummy ache!"
            },
            {
              visual: "🐛🍃😊",
              text: "On Sunday, the caterpillar ate one green leaf and felt much better!",
              speakText: "On Sunday, the caterpillar ate one green leaf and felt much better!"
            },
            {
              visual: "🐛🏠🌳",
              text: "The caterpillar was big and fat. He built a cozy cocoon around himself and stayed inside for two weeks.",
              speakText: "The caterpillar was big and fat. He built a cozy cocoon around himself and stayed inside for two weeks."
            },
            {
              visual: "🦋✨🎉",
              text: "Then he pushed out of the cocoon and he was a beautiful butterfly! Moral: Eating healthy food helps you grow big and beautiful!",
              speakText: "Then he pushed out of the cocoon and he was a beautiful butterfly! Eating healthy food helps you grow big and beautiful!"
            }
          ]
        }
      ]
    }
  }
};

