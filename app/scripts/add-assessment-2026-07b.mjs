/**
 * Content batch 2026-07b: +90 assessment questions (15 per subject),
 * authored for CBSE Class 1.
 *
 * Run once from app/:  node scripts/add-assessment-2026-07b.mjs
 * Idempotent: skips any question whose text already exists in the bank.
 * After running: update EXPECTED_ASSESSMENT counts in src/content/content.test.ts.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(__dirname, '../src/content');

const aq = (question, topic, correct, wrong) => ({
  question,
  topic,
  options: [{ text: correct, correct: true }, ...wrong.map((text) => ({ text, correct: false }))],
});

const NEW_ASSESSMENT = {
  mathematics: [
    aq('What comes just after 9?', 'Number Order', '10', ['8', '11', '19']),
    aq('What comes just before 15?', 'Number Order', '14', ['16', '13', '5']),
    aq('2 tens make ___.', 'Tens and Ones', '20', ['2', '12', '22']),
    aq('1 ten and 3 ones make ___.', 'Tens and Ones', '13', ['31', '4', '103']),
    aq('How many sides does a square have?', 'Shapes', '4', ['3', '5', '6']),
    aq('A ball looks like which shape?', 'Shapes', 'Circle', ['Square', 'Triangle', 'Rectangle']),
    aq('Count by 10s: 10, 20, 30, ___', 'Skip Counting', '40', ['35', '50', '31']),
    aq('Count by 5s: 5, 10, 15, ___', 'Skip Counting', '20', ['16', '25', '30']),
    aq('There are 4 birds on a tree. 2 fly away. How many are left?', 'Word Problems', '2', [
      '6',
      '4',
      '3',
    ]),
    aq('Ravi has 3 pencils. Mother gives him 2 more. How many now?', 'Word Problems', '5', [
      '4',
      '6',
      '1',
    ]),
    aq('How many days are there in a week?', 'Telling Time', '7', ['5', '6', '10']),
    aq('Which is the biggest: 25, 52, 19?', 'Comparing Numbers', '52', ['25', '19', 'All equal']),
    aq('A 10-rupee note and a 5-rupee coin make ___ rupees.', 'Money', '15', ['10', '5', '50']),
    aq('Which is heavier?', 'Measurement', 'Elephant', ['Balloon', 'Feather', 'Leaf']),
    aq('What comes next: 1, 3, 5, ___?', 'Patterns', '7', ['6', '8', '9']),
  ],
  english: [
    aq('Which word rhymes with SUN?', 'Rhyming Words', 'FUN', ['SIT', 'CAP', 'DOG']),
    aq('The plural of CAT is ___.', 'Plurals', 'CATS', ['CATES', 'CAT', 'CATIES']),
    aq('Which letter comes before B?', 'Alphabet Order', 'A', ['C', 'D', 'Z']),
    aq('Which letter comes between P and R?', 'Alphabet Order', 'Q', ['S', 'O', 'T']),
    aq('A baby cat is called a ___.', 'Young Ones', 'Kitten', ['Puppy', 'Calf', 'Cub']),
    aq('A baby cow is called a ___.', 'Young Ones', 'Calf', ['Puppy', 'Kitten', 'Chick']),
    aq('A hen says ___.', 'Animal Sounds', 'Cluck', ['Moo', 'Roar', 'Bark']),
    aq('How many vowels are there in English?', 'Vowels', '5', ['2', '21', '26']),
    aq('They ___ happy.', 'Simple Sentences', 'are', ['is', 'am', 'be']),
    aq('Opposite of UP is ___.', 'Opposites', 'DOWN', ['TOP', 'HIGH', 'SIDE']),
    aq('B-A-L-L spells ___.', 'Spelling', 'BALL', ['BELL', 'BOLL', 'BALE']),
    aq('Which word starts with the same sound as MOON?', 'Beginning Sounds', 'MANGO', [
      'SUN',
      'TAP',
      'FAN',
    ]),
    aq('Choose the describing word: The ___ elephant.', 'Grammar: Adjectives', 'big', [
      'run',
      'eat',
      'sing',
    ]),
    aq('Find the action word: The boy runs fast.', 'Grammar: Verbs', 'runs', [
      'boy',
      'fast',
      'the',
    ]),
    aq('What color is a ripe banana?', 'Colors', 'Yellow', ['Blue', 'Purple', 'Black']),
  ],
  hindi: [
    aq('"इ" से क्या बनता है?', 'Hindi Letters', 'इमली', ['आम', 'कमल', 'ऊन']),
    aq('"ई" से क्या बनता है?', 'Hindi Letters', 'ईख', ['आम', 'उल्लू', 'अनार']),
    aq('"उ" से क्या बनता है?', 'Hindi Letters', 'उल्लू', ['अनार', 'इमली', 'गमला']),
    aq('"ग" से क्या बनता है?', 'Hindi Letters', 'गमला', ['कमल', 'आम', 'नल']),
    aq('"पिता" का अर्थ क्या है?', 'Hindi Words', 'Father', ['Mother', 'Sister', 'Uncle']),
    aq('सेब किस रंग का होता है?', 'Hindi - Colors', 'लाल', ['नीला', 'काला', 'बैंगनी']),
    aq('आसमान का रंग कैसा होता है?', 'Hindi - Colors', 'नीला', ['हरा', 'पीला', 'लाल']),
    aq('दो + दो = ?', 'Hindi - Arithmetic', 'चार', ['तीन', 'पाँच', 'छह']),
    aq('"पाँच" के बाद क्या आता है?', 'Hindi - Numbers', 'छह', ['चार', 'आठ', 'तीन']),
    aq('मुर्गी हमें क्या देती है?', 'Hindi - General Knowledge', 'अंडा', ['दूध', 'ऊन', 'शहद']),
    aq('"बड़ा" का विलोम क्या है?', 'Hindi - Opposites', 'छोटा', ['लंबा', 'मोटा', 'ऊँचा']),
    aq('"ठंडा" का विलोम क्या है?', 'Hindi - Opposites', 'गरम', ['नरम', 'गीला', 'सूखा']),
    aq('चिड़िया कहाँ रहती है?', 'Hindi - General Knowledge', 'घोंसले में', [
      'पानी में',
      'बिल में',
      'गुफा में',
    ]),
    aq('इंद्रधनुष में कितने रंग होते हैं?', 'Hindi - General Knowledge', 'सात', [
      'पाँच',
      'तीन',
      'दस',
    ]),
    aq('हाथी कैसा जानवर है?', 'Hindi - Animals', 'बड़ा', ['छोटा', 'पतला', 'हल्का']),
  ],
  computer: [
    aq('Which part of the computer is like a TV screen?', 'Computer Parts', 'Monitor', [
      'Mouse',
      'CPU',
      'Printer',
    ]),
    aq('Which device do we use to type letters and numbers?', 'Computer Parts', 'Keyboard', [
      'Speaker',
      'Monitor',
      'Printer',
    ]),
    aq('Which key erases letters?', 'Keyboard Skills', 'Backspace', [
      'Enter',
      'Space bar',
      'Shift',
    ]),
    aq('Which key do we press to go to a new line?', 'Keyboard Skills', 'Enter', [
      'Space bar',
      'Backspace',
      'Shift',
    ]),
    aq('A laptop is a computer we can ___.', 'Computer Devices', 'Carry', ['Eat', 'Drink', 'Wear']),
    aq('Which one is a computer?', 'Computer Devices', 'Laptop', ['Table', 'Chair', 'Cup']),
    aq('Which one has a touch screen?', 'Computer Devices', 'Tablet', ['Keyboard', 'Mouse', 'CPU']),
    aq('Which device takes our photo on a computer?', 'Computer Devices', 'Webcam', [
      'Printer',
      'Speaker',
      'Mouse',
    ]),
    aq('We keep our files inside a ___ on the computer.', 'Computer Files', 'Folder', [
      'Basket',
      'Pocket',
      'Shoe',
    ]),
    aq('The Paint program is used for ___.', 'Computer Skills', 'Drawing', [
      'Sleeping',
      'Cooking',
      'Washing',
    ]),
    aq('We should sit ___ while using a computer.', 'Computer Habits', 'Straight', [
      'Upside down',
      'Lying down',
      'Jumping',
    ]),
    aq('After using the computer we should ___ it.', 'Computer Habits', 'Shut down', [
      'Break',
      'Throw',
      'Hide',
    ]),
    aq('We should not ___ near the computer.', 'Computer Habits', 'Eat food', [
      'Sit',
      'Type',
      'Look',
    ]),
    aq('A computer needs ___ to work.', 'Computer Basics', 'Electricity', ['Water', 'Milk', 'Air']),
    aq('Who fixes computers when they stop working?', 'Computer Basics', 'Engineer', [
      'Doctor',
      'Farmer',
      'Cook',
    ]),
  ],
  kannada: [
    aq('"ಇ" ಇಂದ ಏನು ಬರುತ್ತದೆ?', 'Kannada - Alphabet', 'ಇಲಿ', ['ಆನೆ', 'ಅಳಿಲು', 'ಮನೆ']),
    aq('"ಈ" ಇಂದ ಏನು ಬರುತ್ತದೆ?', 'Kannada - Alphabet', 'ಈರುಳ್ಳಿ', ['ಇಲಿ', 'ಆಮೆ', 'ಉಡ']),
    aq('"ಉ" ಇಂದ ಏನು ಬರುತ್ತದೆ?', 'Kannada - Alphabet', 'ಉಂಗುರ', ['ಎಲೆ', 'ಒಂಟೆ', 'ಆನೆ']),
    aq('"ಅಪ್ಪ" ಎಂದರೆ ಯಾರು?', 'Kannada - Family', 'ತಂದೆ', ['ತಾಯಿ', 'ಅಣ್ಣ', 'ಅಕ್ಕ']),
    aq('ಬೆಕ್ಕು ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತದೆ?', 'Kannada - Animal Sounds', 'ಮಿಯಾಂವ್', [
      'ಬೌ ಬೌ',
      'ಅಂಬಾ',
      'ಕಾ ಕಾ',
    ]),
    aq('ಹಸು ಯಾವ ಶಬ್ದ ಮಾಡುತ್ತದೆ?', 'Kannada - Animal Sounds', 'ಅಂಬಾ', ['ಮಿಯಾಂವ್', 'ಬೌ ಬೌ', 'ಕಾ ಕಾ']),
    aq('"ಒಂದು" ನಂತರ ಯಾವ ಸಂಖ್ಯೆ ಬರುತ್ತದೆ?', 'Kannada - Numbers', 'ಎರಡು', ['ಮೂರು', 'ನಾಲ್ಕು', 'ಐದು']),
    aq('ಎರಡು + ಎರಡು = ?', 'Kannada - Numbers', 'ನಾಲ್ಕು', ['ಮೂರು', 'ಐದು', 'ಆರು']),
    aq('ಸೇಬಿನ ಬಣ್ಣ ಯಾವುದು?', 'Kannada - Colors', 'ಕೆಂಪು', ['ನೀಲಿ', 'ಕಪ್ಪು', 'ಹಸಿರು']),
    aq('ಎಲೆಯ ಬಣ್ಣ ಯಾವುದು?', 'Kannada - Colors', 'ಹಸಿರು', ['ಕೆಂಪು', 'ಹಳದಿ', 'ಬಿಳಿ']),
    aq('"ದೊಡ್ಡ" ವಿರುದ್ಧ ಪದ ಯಾವುದು?', 'Kannada - Opposites', 'ಚಿಕ್ಕ', ['ಉದ್ದ', 'ಎತ್ತರ', 'ಗಟ್ಟಿ']),
    aq('"ಹಗಲು" ವಿರುದ್ಧ ಪದ ಯಾವುದು?', 'Kannada - Opposites', 'ರಾತ್ರಿ', [
      'ಬೆಳಗ್ಗೆ',
      'ಮಧ್ಯಾಹ್ನ',
      'ಸಂಜೆ',
    ]),
    aq('ಮೀನು ಹೇಗೆ ಚಲಿಸುತ್ತದೆ?', 'Kannada - General Knowledge', 'ಈಜುತ್ತದೆ', [
      'ಹಾರುತ್ತದೆ',
      'ಓಡುತ್ತದೆ',
      'ನೆಗೆಯುತ್ತದೆ',
    ]),
    aq('ಹಕ್ಕಿ ಎಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ?', 'Kannada - General Knowledge', 'ಗೂಡಿನಲ್ಲಿ', [
      'ನೀರಿನಲ್ಲಿ',
      'ಬಿಲದಲ್ಲಿ',
      'ಗುಹೆಯಲ್ಲಿ',
    ]),
    aq('"ತಿನ್ನು" ಎಂಬುದು ಯಾವ ಪದ?', 'Kannada - Verbs', 'ಕ್ರಿಯಾ ಪದ', ['ನಾಮ ಪದ', 'ವಿಶೇಷಣ', 'ಸಂಖ್ಯೆ']),
  ],
  evs: [
    aq('How many sense organs do we have?', 'Body Awareness', '5', ['2', '4', '10']),
    aq('We see with our ___.', 'Body Awareness', 'Eyes', ['Ears', 'Nose', 'Hands']),
    aq('We smell with our ___.', 'Body Awareness', 'Nose', ['Eyes', 'Ears', 'Feet']),
    aq('Which part of the plant is under the soil?', 'Plants', 'Root', ['Leaf', 'Flower', 'Fruit']),
    aq('Leaves are usually ___ in color.', 'Plants', 'Green', ['Blue', 'Black', 'Purple']),
    aq('Which of these grows on a tree?', 'Plants', 'Mango', ['Potato', 'Carrot', 'Onion']),
    aq('We get milk from a ___.', 'Animals', 'Cow', ['Hen', 'Fish', 'Crow']),
    aq('Which animal has a long trunk?', 'Animals', 'Elephant', ['Dog', 'Cat', 'Goat']),
    aq('Which animal is called the ship of the desert?', 'Animals', 'Camel', [
      'Horse',
      'Lion',
      'Cow',
    ]),
    aq('A doctor helps us when we are ___.', 'People Who Help Us', 'Sick', [
      'Happy',
      'Playing',
      'Sleeping',
    ]),
    aq('Who teaches us in school?', 'People Who Help Us', 'Teacher', ['Doctor', 'Farmer', 'Pilot']),
    aq('Who grows food for us?', 'People Who Help Us', 'Farmer', ['Teacher', 'Doctor', 'Barber']),
    aq('Which of these runs on rails?', 'Transport', 'Train', ['Bus', 'Car', 'Ship']),
    aq('Before crossing the road, we should look ___.', 'Safety', 'Both ways', [
      'Only up',
      'Only down',
      'Nowhere',
    ]),
    aq('We throw garbage in the ___.', 'Cleanliness', 'Dustbin', ['River', 'Road', 'Garden']),
  ],
};

// ── Apply ─────────────────────────────────────────────────────────────────────

let questionsAdded = 0;

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

process.stdout.write(
  `Added ${questionsAdded} assessment questions.\n` +
    'Now update EXPECTED_ASSESSMENT in src/content/content.test.ts.\n',
);
