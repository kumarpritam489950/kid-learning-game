/**
 * Content batch 2026-07: 9 new lesson modules (+144 questions) and
 * +60 assessment questions (10 per subject), authored for CBSE Class 1.
 *
 * Run once from app/:  node scripts/add-content-2026-07.mjs
 * Idempotent: skips anything whose id already exists.
 * After running: update EXPECTED_* counts in src/content/content.test.ts.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(__dirname, '../src/content');

const mcq = (question, visual, answer, options) => ({ question, visual, answer, options });

// ── New lesson modules ────────────────────────────────────────────────────────

const NEW_MODULES = {
  computer: [
    {
      id: 'comp_uses',
      title: 'What Computers Can Do',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('Which one helps us watch cartoons?', '📺', 'Computer', [
          'Computer',
          'Spoon',
          'Chair',
          'Shoe',
        ]),
        mcq('We can ___ pictures on a computer.', '🎨', 'Draw', ['Draw', 'Eat', 'Smell', 'Wash']),
        mcq('Which helps us talk to grandparents far away?', '📞', 'Video call', [
          'Video call',
          'Pillow',
          'Bucket',
          'Ladder',
        ]),
        mcq('A computer helps us ___ new things.', '📚', 'Learn', [
          'Learn',
          'Sleep',
          'Jump',
          'Cook',
        ]),
        mcq('Which one can play music?', '🎵', 'Computer', ['Computer', 'Stone', 'Leaf', 'Cup']),
        mcq('We can type a ___ on a computer.', '✍️', 'Letter', [
          'Letter',
          'Roti',
          'River',
          'Tree',
        ]),
        mcq('Which machine works with electricity?', '⚡', 'Computer', [
          'Computer',
          'Kite',
          'Ball',
          'Doll',
        ]),
        mcq('Games on a computer are played for ___.', '🎮', 'Fun', [
          'Fun',
          'Bathing',
          'Eating',
          'Sleeping',
        ]),
        mcq('Doctors use computers in the ___.', '🏥', 'Hospital', [
          'Hospital',
          'Jungle',
          'Pond',
          'Nest',
        ]),
        mcq('Tickets at the railway station are printed by a ___.', '🚉', 'Computer', [
          'Computer',
          'Cow',
          'Fan',
          'Broom',
        ]),
        mcq('Which one shows us maps?', '🗺️', 'Computer', ['Computer', 'Plate', 'Sock', 'Brush']),
        mcq('We should sit ___ while using a computer.', '🪑', 'Straight', [
          'Straight',
          'Upside down',
          'On the table',
          'On the floor',
        ]),
        mcq('Too much screen time is ___ for eyes.', '👀', 'Bad', [
          'Bad',
          'Good',
          'Tasty',
          'Funny',
        ]),
        mcq('Teachers use computers to show ___.', '🏫', 'Lessons', [
          'Lessons',
          'Clouds',
          'Rocks',
          'Shoes',
        ]),
        mcq('A computer needs ___ to work.', '🔌', 'Electricity', [
          'Electricity',
          'Milk',
          'Rain',
          'Sand',
        ]),
      ],
    },
    {
      id: 'comp_keyboard_mouse',
      title: 'Keyboard & Mouse Skills',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('Which part has letters A to Z?', '⌨️', 'Keyboard', [
          'Keyboard',
          'Mouse',
          'Screen',
          'Speaker',
        ]),
        mcq('Which part do we click with?', '🖱️', 'Mouse', [
          'Mouse',
          'Keyboard',
          'Monitor',
          'Printer',
        ]),
        mcq('The longest key on the keyboard is the ___.', '⌨️', 'Space bar', [
          'Space bar',
          'Enter key',
          'A key',
          'Shift key',
        ]),
        mcq('Pressing a mouse button once is called a ___.', '🖱️', 'Click', [
          'Click',
          'Clap',
          'Kick',
          'Knock',
        ]),
        mcq('Clicking two times fast is called ___.', '🖱️', 'Double click', [
          'Double click',
          'Double jump',
          'Two taps',
          'Big click',
        ]),
        mcq('The arrow that moves with the mouse is the ___.', '🖥️', 'Cursor', [
          'Cursor',
          'Crayon',
          'Curtain',
          'Carrot',
        ]),
        mcq('To type your name you use the ___.', '⌨️', 'Keyboard', [
          'Keyboard',
          'Mouse',
          'Speaker',
          'Camera',
        ]),
        mcq('Number keys show ___.', '🔢', 'Numbers', ['Numbers', 'Animals', 'Colours', 'Fruits']),
        mcq('The Enter key helps to go to a ___ line.', '↩️', 'New', ['New', 'Old', 'Red', 'Slow']),
        mcq('We hold the mouse with our ___.', '✋', 'Hand', ['Hand', 'Foot', 'Nose', 'Ear']),
        mcq('Arrow keys help us move ___.', '⬆️', 'Up and down', [
          'Up and down',
          'To school',
          'To sleep',
          'To eat',
        ]),
        mcq('Which key erases letters?', '⌨️', 'Backspace', [
          'Backspace',
          'Space bar',
          'Enter',
          'Zero',
        ]),
        mcq('The mouse usually has ___ main buttons.', '🖱️', '2', ['2', '9', '7', '5']),
        mcq('Keyboard and mouse are ___ devices.', '🔌', 'Input', [
          'Input',
          'Output',
          'Eating',
          'Flying',
        ]),
        mcq('We move the mouse on a mouse ___.', '🖱️', 'Pad', ['Pad', 'Pan', 'Pot', 'Pin']),
      ],
    },
  ],

  gk: [
    {
      id: 'gk_animal_homes',
      title: 'Animals & Their Homes',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('Where does a dog live?', '🐶', 'Kennel', ['Kennel', 'Nest', 'Web', 'Stable']),
        mcq('Where does a bird live?', '🐦', 'Nest', ['Nest', 'Den', 'Sty', 'Burrow']),
        mcq('Where does a lion live?', '🦁', 'Den', ['Den', 'Nest', 'Coop', 'Hive']),
        mcq('Where does a horse live?', '🐴', 'Stable', ['Stable', 'Web', 'Nest', 'Pond']),
        mcq('Where does a rabbit live?', '🐰', 'Burrow', ['Burrow', 'Stable', 'Den', 'Coop']),
        mcq('Where do bees live?', '🐝', 'Hive', ['Hive', 'Kennel', 'Nest', 'Cave']),
        mcq('Where does a spider live?', '🕷️', 'Web', ['Web', 'Hive', 'Den', 'Sty']),
        mcq('Where does a hen live?', '🐔', 'Coop', ['Coop', 'Stable', 'Burrow', 'Web']),
        mcq('Where does a cow live?', '🐮', 'Shed', ['Shed', 'Nest', 'Web', 'Hive']),
        mcq('Where does a fish live?', '🐟', 'Water', ['Water', 'Tree', 'Cave', 'Nest']),
        mcq('Where does a monkey live?', '🐵', 'Tree', ['Tree', 'Water', 'Coop', 'Kennel']),
        mcq('Where does a pig live?', '🐷', 'Sty', ['Sty', 'Hive', 'Nest', 'Den']),
        mcq('A baby kangaroo stays in its mother’s ___.', '🦘', 'Pouch', [
          'Pouch',
          'Pocket',
          'Bag',
          'Box',
        ]),
        mcq('Where does an ant live?', '🐜', 'Anthill', ['Anthill', 'Stable', 'Coop', 'Web']),
        mcq('People live in a ___.', '🏠', 'House', ['House', 'Nest', 'Burrow', 'Hive']),
      ],
    },
    {
      id: 'gk_good_habits',
      title: 'Good Habits & Manners',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('We brush our teeth ___ a day.', '🪥', 'Two times', [
          'Two times',
          'Zero times',
          'Only Sunday',
          'Ten times',
        ]),
        mcq('Before eating we must wash our ___.', '🧼', 'Hands', [
          'Hands',
          'Shoes',
          'Bag',
          'Book',
        ]),
        mcq('What do we say after someone helps us?', '😊', 'Thank you', [
          'Thank you',
          'Go away',
          'Nothing',
          'Hurry up',
        ]),
        mcq('What do we say when we ask for something?', '🙏', 'Please', [
          'Please',
          'Now!',
          'Move',
          'Quiet',
        ]),
        mcq('What do we say when we make a mistake?', '😔', 'Sorry', [
          'Sorry',
          'Hooray',
          'Bye',
          'Hello',
        ]),
        mcq('Where should we throw waste paper?', '🗑️', 'Dustbin', [
          'Dustbin',
          'Road',
          'River',
          'Classroom floor',
        ]),
        mcq('We should sleep ___ at night.', '🛏️', 'Early', [
          'Early',
          'Never',
          'At noon',
          'In school',
        ]),
        mcq('Before crossing the road, look ___.', '🚦', 'Both sides', [
          'Both sides',
          'At the sky',
          'At shoes',
          'Nowhere',
        ]),
        mcq('We should cover our mouth when we ___.', '🤧', 'Sneeze', [
          'Sneeze',
          'Read',
          'Walk',
          'Draw',
        ]),
        mcq('Cut your ___ every week to keep clean.', '💅', 'Nails', [
          'Nails',
          'Books',
          'Toys',
          'Clothes',
        ]),
        mcq('We should drink plenty of ___.', '💧', 'Water', [
          'Water',
          'Cold drinks',
          'Oil',
          'Ink',
        ]),
        mcq('Elders should be treated with ___.', '🙏', 'Respect', [
          'Respect',
          'Anger',
          'Noise',
          'Jokes',
        ]),
        mcq('We stand in a ___ to wait for our turn.', '🚶', 'Line', [
          'Line',
          'Circle of mud',
          'Tree',
          'River',
        ]),
        mcq('Eat more ___ to stay healthy.', '🥗', 'Fruits and vegetables', [
          'Fruits and vegetables',
          'Chips only',
          'Candy only',
          'Ice cream only',
        ]),
        mcq('Exercise every day makes the body ___.', '💪', 'Strong', [
          'Strong',
          'Sleepy',
          'Slow',
          'Sticky',
        ]),
      ],
    },
  ],

  science: [
    {
      id: 'sci_my_body',
      title: 'My Body & Senses',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('We see with our ___.', '👀', 'Eyes', ['Eyes', 'Ears', 'Nose', 'Hands']),
        mcq('We hear with our ___.', '👂', 'Ears', ['Ears', 'Eyes', 'Teeth', 'Feet']),
        mcq('We smell with our ___.', '👃', 'Nose', ['Nose', 'Ears', 'Hair', 'Elbow']),
        mcq('We taste with our ___.', '👅', 'Tongue', ['Tongue', 'Nose', 'Fingers', 'Knees']),
        mcq('We touch and feel with our ___.', '✋', 'Skin', ['Skin', 'Teeth', 'Eyes', 'Hair']),
        mcq('How many sense organs do we have?', '🖐️', '5', ['5', '2', '9', '1']),
        mcq('How many eyes do we have?', '👀', '2', ['2', '1', '4', '3']),
        mcq('How many fingers are on one hand?', '✋', '5', ['5', '4', '6', '10']),
        mcq('We walk with our ___.', '🦵', 'Legs', ['Legs', 'Ears', 'Eyes', 'Hair']),
        mcq('We chew food with our ___.', '🦷', 'Teeth', ['Teeth', 'Nose', 'Ears', 'Fingers']),
        mcq('The ___ pumps blood in our body.', '❤️', 'Heart', ['Heart', 'Nose', 'Knee', 'Ear']),
        mcq('We think with our ___.', '🧠', 'Brain', ['Brain', 'Foot', 'Tooth', 'Nail']),
        mcq('Which part helps us smell a flower?', '🌸', 'Nose', ['Nose', 'Ear', 'Knee', 'Elbow']),
        mcq('We clap with our ___.', '👏', 'Hands', ['Hands', 'Ears', 'Eyes', 'Teeth']),
        mcq('Hair grows on our ___.', '💇', 'Head', ['Head', 'Teeth', 'Nails', 'Tongue']),
      ],
    },
  ],

  math: [
    {
      id: 'math_time_days',
      title: 'Time & Days of the Week',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('How many days are in a week?', '📅', '7', ['7', '5', '10', '12']),
        mcq('Which day comes after Monday?', '📅', 'Tuesday', [
          'Tuesday',
          'Sunday',
          'Friday',
          'Saturday',
        ]),
        mcq('Which day comes before Sunday?', '📅', 'Saturday', [
          'Saturday',
          'Monday',
          'Wednesday',
          'Tuesday',
        ]),
        mcq('The sun rises in the ___.', '🌅', 'Morning', [
          'Morning',
          'Night',
          'Evening',
          'Midnight',
        ]),
        mcq('We sleep at ___.', '🌙', 'Night', ['Night', 'Morning', 'Noon', 'Breakfast']),
        mcq('We eat lunch in the ___.', '🍽️', 'Afternoon', [
          'Afternoon',
          'Midnight',
          'Early morning',
          'Late night',
        ]),
        mcq('Which is the first day of the school week?', '🏫', 'Monday', [
          'Monday',
          'Friday',
          'Sunday',
          'Saturday',
        ]),
        mcq('How many hours are in a day?', '🕐', '24', ['24', '7', '12', '60']),
        mcq('The short hand of a clock shows the ___.', '🕐', 'Hour', [
          'Hour',
          'Minute',
          'Second',
          'Day',
        ]),
        mcq('The long hand of a clock shows the ___.', '🕐', 'Minutes', [
          'Minutes',
          'Hours',
          'Days',
          'Months',
        ]),
        mcq('Which comes first: breakfast or dinner?', '🥣', 'Breakfast', [
          'Breakfast',
          'Dinner',
          'Both together',
          'Neither',
        ]),
        mcq('How many months are in a year?', '🗓️', '12', ['12', '7', '24', '10']),
        mcq('Yesterday was Sunday. Today is ___.', '📅', 'Monday', [
          'Monday',
          'Saturday',
          'Friday',
          'Wednesday',
        ]),
        mcq('The moon comes out at ___.', '🌙', 'Night', [
          'Night',
          'Noon',
          'Morning',
          'Lunch time',
        ]),
        mcq('Which day do many schools have a holiday?', '🎈', 'Sunday', [
          'Sunday',
          'Monday',
          'Tuesday',
          'Thursday',
        ]),
      ],
    },
  ],

  mental_math: [
    {
      id: 'mm_number_names',
      title: 'Number Names',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('Which number is "five"?', '🖐️', '5', ['5', '4', '9', '15']),
        mcq('Which number is "ten"?', '🔟', '10', ['10', '1', '100', '11']),
        mcq('"Seven" is written as ___.', '7️⃣', '7', ['7', '17', '2', '11']),
        mcq('Which number is "twelve"?', '🔢', '12', ['12', '2', '21', '20']),
        mcq('"Fifteen" is written as ___.', '🔢', '15', ['15', '5', '50', '51']),
        mcq('Which number is "twenty"?', '🔢', '20', ['20', '2', '12', '22']),
        mcq('3 in words is ___.', '3️⃣', 'Three', ['Three', 'Thirteen', 'Thirty', 'Two']),
        mcq('8 in words is ___.', '8️⃣', 'Eight', ['Eight', 'Eighteen', 'Eighty', 'Nine']),
        mcq('11 in words is ___.', '🔢', 'Eleven', ['Eleven', 'One-one', 'Twelve', 'Twenty']),
        mcq('16 in words is ___.', '🔢', 'Sixteen', ['Sixteen', 'Sixty', 'Six', 'Seventeen']),
        mcq('Which number is "nine"?', '9️⃣', '9', ['9', '6', '19', '90']),
        mcq('14 in words is ___.', '🔢', 'Fourteen', ['Fourteen', 'Forty', 'Four', 'Fifteen']),
        mcq('Which number is "zero"?', '0️⃣', '0', ['0', '10', '8', '1']),
        mcq('18 in words is ___.', '🔢', 'Eighteen', ['Eighteen', 'Eighty', 'Eight', 'Nineteen']),
        mcq('Which number is "thirteen"?', '🔢', '13', ['13', '30', '3', '31']),
      ],
    },
  ],

  english: [
    {
      id: 'eng_opposites',
      title: 'Opposites',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('Opposite of BIG is ___.', '🐘🐭', 'Small', ['Small', 'Tall', 'Fat', 'Long']),
        mcq('Opposite of HOT is ___.', '🔥❄️', 'Cold', ['Cold', 'Warm', 'Wet', 'Soft']),
        mcq('Opposite of UP is ___.', '⬆️⬇️', 'Down', ['Down', 'Top', 'Over', 'High']),
        mcq('Opposite of DAY is ___.', '🌞🌙', 'Night', ['Night', 'Noon', 'Morning', 'Evening']),
        mcq('Opposite of HAPPY is ___.', '😊😢', 'Sad', ['Sad', 'Glad', 'Funny', 'Sleepy']),
        mcq('Opposite of FAST is ___.', '🐇🐢', 'Slow', ['Slow', 'Quick', 'Speedy', 'Soon']),
        mcq('Opposite of OPEN is ___.', '🚪', 'Close', ['Close', 'Wide', 'Enter', 'Push']),
        mcq('Opposite of NEW is ___.', '👟', 'Old', ['Old', 'Fresh', 'Clean', 'Shiny']),
        mcq('Opposite of FULL is ___.', '🥛', 'Empty', ['Empty', 'Half', 'Heavy', 'Round']),
        mcq('Opposite of WET is ___.', '💧', 'Dry', ['Dry', 'Damp', 'Cool', 'Rainy']),
        mcq('Opposite of TALL is ___.', '🦒', 'Short', ['Short', 'Long', 'High', 'Wide']),
        mcq('Opposite of IN is ___.', '📦', 'Out', ['Out', 'On', 'Under', 'Near']),
        mcq('Opposite of LIGHT is ___.', '🪶🪨', 'Heavy', ['Heavy', 'Bright', 'Soft', 'Thin']),
        mcq('Opposite of GOOD is ___.', '👍👎', 'Bad', ['Bad', 'Nice', 'Kind', 'Best']),
        mcq('Opposite of LAUGH is ___.', '😂😭', 'Cry', ['Cry', 'Smile', 'Giggle', 'Sing']),
      ],
    },
  ],

  hindi: [
    {
      id: 'hin_ginti',
      title: 'हिन्दी गिनती (Hindi Counting)',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('"एक" कितना होता है?', '1️⃣', '1', ['1', '2', '11', '10']),
        mcq('"दो" कितना होता है?', '2️⃣', '2', ['2', '12', '4', '20']),
        mcq('"तीन" कितना होता है?', '3️⃣', '3', ['3', '13', '30', '6']),
        mcq('"चार" कितना होता है?', '4️⃣', '4', ['4', '14', '40', '8']),
        mcq('"पाँच" कितना होता है?', '5️⃣', '5', ['5', '15', '50', '2']),
        mcq('"छह" कितना होता है?', '6️⃣', '6', ['6', '16', '60', '9']),
        mcq('"सात" कितना होता है?', '7️⃣', '7', ['7', '17', '70', '4']),
        mcq('"आठ" कितना होता है?', '8️⃣', '8', ['8', '18', '80', '3']),
        mcq('"नौ" कितना होता है?', '9️⃣', '9', ['9', '19', '90', '6']),
        mcq('"दस" कितना होता है?', '🔟', '10', ['10', '1', '100', '5']),
        mcq('5 को हिन्दी में क्या कहते हैं?', '🖐️', 'पाँच', ['पाँच', 'चार', 'सात', 'नौ']),
        mcq('7 को हिन्दी में क्या कहते हैं?', '🔢', 'सात', ['सात', 'साठ', 'तीन', 'आठ']),
      ],
    },
  ],

  kannada: [
    {
      id: 'kan_prani_padagalu',
      title: 'ಪ್ರಾಣಿ ಪದಗಳು (Animal Words)',
      type: 'scienceMcq',
      questions: 10,
      items: [
        mcq('"ಆನೆ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐘', 'Elephant', ['Elephant', 'Lion', 'Dog', 'Cat']),
        mcq('"ಹುಲಿ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐯', 'Tiger', ['Tiger', 'Bear', 'Fox', 'Deer']),
        mcq('"ನಾಯಿ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐶', 'Dog', ['Dog', 'Cat', 'Cow', 'Goat']),
        mcq('"ಬೆಕ್ಕು" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐱', 'Cat', ['Cat', 'Dog', 'Rat', 'Hen']),
        mcq('"ಹಸು" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐮', 'Cow', ['Cow', 'Buffalo', 'Horse', 'Sheep']),
        mcq('"ಸಿಂಹ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🦁', 'Lion', ['Lion', 'Tiger', 'Monkey', 'Elephant']),
        mcq('"ಕೋತಿ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐵', 'Monkey', ['Monkey', 'Donkey', 'Rabbit', 'Pig']),
        mcq('"ಮೊಲ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐰', 'Rabbit', ['Rabbit', 'Rat', 'Deer', 'Squirrel']),
        mcq('"ಕುದುರೆ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐴', 'Horse', ['Horse', 'Camel', 'Zebra', 'Cow']),
        mcq('"ಮೀನು" ಎಂದರೆ ಏನು?', '🐟', 'Fish', ['Fish', 'Frog', 'Snake', 'Crab']),
        mcq('"ಹಕ್ಕಿ" ಎಂದರೆ ಏನು?', '🐦', 'Bird', ['Bird', 'Bee', 'Bat', 'Fly']),
        mcq('"ಕರಡಿ" ಎಂದರೆ ಯಾವ ಪ್ರಾಣಿ?', '🐻', 'Bear', ['Bear', 'Boar', 'Wolf', 'Lion']),
      ],
    },
  ],
};

// ── New assessment questions (10 per subject) ────────────────────────────────

const aq = (question, topic, correct, wrong) => ({
  question,
  topic,
  options: [{ text: correct, correct: true }, ...wrong.map((text) => ({ text, correct: false }))],
});

const NEW_ASSESSMENT = {
  mathematics: [
    aq('10 + 5 = ?', 'Addition Practice', '15', ['5', '105', '50']),
    aq('9 - 4 = ?', 'Subtraction Practice', '5', ['4', '13', '6']),
    aq('Which number comes between 6 and 8?', 'Number Order', '7', ['5', '9', '68']),
    aq('2 + 2 + 2 = ?', 'Adding Three Numbers', '6', ['4', '8', '222']),
    aq('Which is the smallest: 14, 41, 4?', 'Comparing Numbers', '4', ['14', '41', 'All equal']),
    aq('How many sides does a triangle have?', 'Shapes', '3', ['4', '2', '5']),
    aq('One dozen means how many?', 'Numbers in Daily Life', '12', ['10', '6', '20']),
    aq('7 + 0 = ?', 'Adding Zero', '7', ['0', '70', '8']),
    aq('Count by 2s: 2, 4, 6, ___', 'Skip Counting', '8', ['7', '10', '62']),
    aq('Which shape has no corners?', 'Shapes', 'Circle', ['Square', 'Triangle', 'Rectangle']),
  ],
  english: [
    aq('Which word rhymes with CAT?', 'Rhyming Words', 'HAT', ['DOG', 'CAR', 'CUP']),
    aq('The plural of BOOK is ___.', 'Plurals', 'BOOKS', ['BOOKES', 'BOOK', 'BOOKIES']),
    aq('Which letter comes after F?', 'Alphabet Order', 'G', ['E', 'H', 'D']),
    aq('A ___ says "moo".', 'Animal Sounds', 'Cow', ['Dog', 'Cat', 'Hen']),
    aq('Which is a vowel?', 'Vowels', 'E', ['B', 'T', 'R']),
    aq('I ___ a student.', 'Simple Sentences', 'am', ['is', 'are', 'be']),
    aq('Opposite of COME is ___.', 'Opposites', 'GO', ['RUN', 'SIT', 'STAY']),
    aq('C-A-K-E spells ___.', 'Spelling', 'CAKE', ['CAK', 'KAKE', 'SAKE']),
    aq('Which word starts with the same sound as SUN?', 'Beginning Sounds', 'SOCK', [
      'MOON',
      'FAN',
      'TAP',
    ]),
    aq('A baby dog is called a ___.', 'Young Ones', 'Puppy', ['Kitten', 'Calf', 'Chick']),
  ],
  hindi: [
    aq('"अ" से क्या बनता है?', 'Hindi Letters', 'अनार', ['आम', 'इमली', 'ऊन']),
    aq('"आ" से क्या बनता है?', 'Hindi Letters', 'आम', ['अनार', 'ईख', 'उल्लू']),
    aq('हिन्दी में कितने स्वर होते हैं?', 'Hindi Vowels', '11', ['5', '26', '33']),
    aq('"क" से क्या बनता है?', 'Hindi Letters', 'कमल', ['गमला', 'चम्मच', 'तरबूज']),
    aq('पानी को और क्या कहते हैं?', 'Hindi Words', 'जल', ['थल', 'फल', 'बल']),
    aq('"माता" का अर्थ क्या है?', 'Hindi Words', 'Mother', ['Father', 'Brother', 'Sister']),
    aq('सूरज किस दिशा में उगता है?', 'General Hindi', 'पूर्व', ['पश्चिम', 'उत्तर', 'दक्षिण']),
    aq('"पुस्तक" का अर्थ क्या है?', 'Hindi Words', 'Book', ['Pen', 'Bag', 'Chair']),
    aq('रात में क्या चमकता है?', 'General Hindi', 'चाँद', ['सूरज', 'बादल', 'पेड़']),
    aq('"गाय" हमें क्या देती है?', 'General Hindi', 'दूध', ['अंडा', 'ऊन', 'शहद']),
  ],
  computer: [
    aq('Which is the brain of the computer?', 'Computer Parts', 'CPU', [
      'Mouse',
      'Screen',
      'Speaker',
    ]),
    aq('Which part shows pictures and videos?', 'Computer Parts', 'Monitor', [
      'Keyboard',
      'Mouse',
      'CPU',
    ]),
    aq('A computer mouse usually has how many main buttons?', 'Computer Parts', '2', [
      '5',
      '8',
      '1',
    ]),
    aq('Which device prints on paper?', 'Computer Devices', 'Printer', [
      'Speaker',
      'Camera',
      'Mouse',
    ]),
    aq('Which key makes a space between words?', 'Keyboard Skills', 'Space bar', [
      'Enter',
      'Shift',
      'A key',
    ]),
    aq('Computer games should be played ___.', 'Computer Habits', 'For a short time', [
      'All day',
      'All night',
      'During meals',
    ]),
    aq('Which one is NOT a computer part?', 'Computer Parts', 'Spoon', [
      'Monitor',
      'Keyboard',
      'Mouse',
    ]),
    aq('The pictures on the desktop are called ___.', 'Computer Skills', 'Icons', [
      'Eggs',
      'Books',
      'Toys',
    ]),
    aq('Which device helps us hear sound?', 'Computer Devices', 'Speaker', [
      'Printer',
      'Mouse',
      'Keyboard',
    ]),
    aq('We should use a computer with ___ hands.', 'Computer Habits', 'Clean', [
      'Wet',
      'Dirty',
      'Oily',
    ]),
  ],
  kannada: [
    aq('"ಅ" ಇಂದ ಏನು ಬರುತ್ತದೆ?', 'Kannada Letters', 'ಅರಸ', ['ಆನೆ', 'ಇಲಿ', 'ಈಶ']),
    aq('"ಆ" ಇಂದ ಏನು ಬರುತ್ತದೆ?', 'Kannada Letters', 'ಆನೆ', ['ಅರಸ', 'ಉಡ', 'ಎಲೆ']),
    aq('ಕನ್ನಡದಲ್ಲಿ "ನೀರು" ಎಂದರೆ ಏನು?', 'Kannada Words', 'Water', ['Fire', 'Air', 'Land']),
    aq('"ಅಮ್ಮ" ಎಂದರೆ ಯಾರು?', 'Kannada Words', 'Mother', ['Father', 'Uncle', 'Brother']),
    aq('"ಮನೆ" ಎಂದರೆ ಏನು?', 'Kannada Words', 'House', ['School', 'Shop', 'Garden']),
    aq('"ಹೂವು" ಎಂದರೆ ಏನು?', 'Kannada Words', 'Flower', ['Fruit', 'Leaf', 'Root']),
    aq('"ಹಾಲು" ಯಾರು ಕೊಡುತ್ತದೆ?', 'General Kannada', 'ಹಸು', ['ಹುಲಿ', 'ಮೀನು', 'ಹಾವು']),
    aq('"ಶಾಲೆ" ಎಂದರೆ ಏನು?', 'Kannada Words', 'School', ['Home', 'Park', 'Hospital']),
    aq('"ಸೂರ್ಯ" ಎಂದರೆ ಏನು?', 'Kannada Words', 'Sun', ['Moon', 'Star', 'Cloud']),
    aq('"ಪುಸ್ತಕ" ಎಂದರೆ ಏನು?', 'Kannada Words', 'Book', ['Bag', 'Pen', 'Slate']),
  ],
  evs: [
    aq('Which of these gives us light during the day?', 'Nature', 'Sun', ['Moon', 'Lamp', 'Stars']),
    aq('Plants make their food using ___.', 'Plants', 'Sunlight', [
      'Moonlight',
      'Torch light',
      'Fire',
    ]),
    aq('Which season is very cold?', 'Seasons', 'Winter', ['Summer', 'Rainy', 'Spring']),
    aq('We should ___ trees.', 'Environment', 'Plant', ['Cut', 'Burn', 'Break']),
    aq('Which of these is a water animal?', 'Animals', 'Fish', ['Cat', 'Hen', 'Goat']),
    aq('Rain comes from ___.', 'Nature', 'Clouds', ['Trees', 'Roads', 'Mountains']),
    aq('Which vehicle flies in the sky?', 'Transport', 'Aeroplane', ['Bus', 'Train', 'Ship']),
    aq('We get eggs from a ___.', 'Animals', 'Hen', ['Cow', 'Dog', 'Sheep']),
    aq('Vegetables and fruits keep us ___.', 'Food & Health', 'Healthy', [
      'Sick',
      'Angry',
      'Sleepy',
    ]),
    aq('Which festival is called the festival of lights?', 'Festivals', 'Diwali', [
      'Holi',
      'Eid',
      'Christmas',
    ]),
  ],
};

// ── Apply ─────────────────────────────────────────────────────────────────────

let modulesAdded = 0;
let questionsAdded = 0;

for (const [subjectId, modules] of Object.entries(NEW_MODULES)) {
  const filePath = path.join(contentDir, 'subjects', `${subjectId}.json`);
  const subject = JSON.parse(await readFile(filePath, 'utf8'));
  const existing = new Set(subject.modules.map((m) => m.id));
  let changed = false;
  for (const module of modules) {
    if (existing.has(module.id)) continue;
    subject.modules.push(module);
    modulesAdded += 1;
    changed = true;
  }
  if (changed) await writeFile(filePath, `${JSON.stringify(subject, null, 2)}\n`, 'utf8');
}

for (const [subjectId, questions] of Object.entries(NEW_ASSESSMENT)) {
  const filePath = path.join(contentDir, 'assessment', `${subjectId}.json`);
  const subject = JSON.parse(await readFile(filePath, 'utf8'));
  const existingTexts = new Set(subject.questions.map((q) => q.question));
  let nextId = Math.max(...subject.questions.map((q) => q.id)) + 1;
  let changed = false;
  for (const q of questions) {
    if (existingTexts.has(q.question)) continue;
    subject.questions.push({ id: nextId, ...q });
    nextId += 1;
    questionsAdded += 1;
    changed = true;
  }
  if (changed) await writeFile(filePath, `${JSON.stringify(subject, null, 2)}\n`, 'utf8');
}

const moduleQuestionCount = Object.values(NEW_MODULES)
  .flat()
  .reduce((sum, m) => sum + m.items.length, 0);

process.stdout.write(
  `Added ${modulesAdded} modules (${moduleQuestionCount} lesson questions) and ${questionsAdded} assessment questions.\n` +
    'Now update EXPECTED_MODULES / EXPECTED_ASSESSMENT in src/content/content.test.ts.\n',
);
