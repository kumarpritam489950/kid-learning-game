# PlayLearn Island - Class 1

An offline educational app for Class 1 learners following CBSE syllabus.

## 🎉 New Features

- **📱 Mobile App Ready**: Can be converted to Android & iOS apps! See [MOBILE_APP_ROADMAP.md](MOBILE_APP_ROADMAP.md)
- **👤 User Profiles**: Login system with score tracking and history
- **📊 Progress Dashboard**: View complete learning history by subject
- **🔊 Phonetic Audio**: Toggle-able Hindi & Kannada pronunciation

## What is included now

- Main menu with **10 learning islands**: English, Math, Kannada, Hindi, Science, Computer, Rhymes, GK, Mental Math, and Fun Games.
- **900+ questions** across all subjects with randomization and anti-repeat logic.
- Complete CBSE Class 1 curriculum coverage.
- **Phonetic transcriptions** with audio (TTS) for Hindi and Kannada.
- **User management** with persistent score tracking and history.
- Session score + star rating system.
- Positive reinforcement and playful sound feedback.
- Interactive activities including drag-and-drop, MCQ, counting, and pattern matching.
- **📋 Assessment Questions**: See [ASSESSMENT.md](ASSESSMENT.md) for comprehensive assessment questions by subject (283 questions)

## Current curriculum modules

- **Math** (9 modules, 150+ questions):
  - Counting 1 to 20, Addition, Subtraction, Shapes
  - Numbers 21-99 (Place Value), Comparison (>/</=)
  - Patterns, Time & Calendar, Measurement & Money
  - Ascending & Descending Order

- **English** (17 modules, 200+ questions):
  - Missing Letters (CVC), Picture-Word Matching, Sight Words
  - Alphabets, Vowels & Consonants, Rhyming Words
  - Opposites, Action Words, Articles, Plurals
  - Animals, Birds, Fruits, Vegetables, Colors, Body Parts, Family, Transport

- **Kannada** (11 modules, 200+ questions):
  - Letters (Swara & Vyanjana), Picture Words, Drag Word Builder
  - Numbers 0-20, Colors, Body Parts, Animals

- **Hindi** (18 modules, 394+ questions):
  - Letters (स्वर और व्यंजन), Picture-Word, Missing Matra, Barakhadi
  - Hindi Poems, Numbers 0-20, Colors, Body Parts, Family
  - Days & Months, Action Words, Opposites, Simple Sentences
  - Gender, Singular-Plural, Transport

- **Science/EVS** (11 modules, 180+ questions):
  - Body Parts, Animals, Plants, Food, Sense Organs
  - Family, School, Weather & Seasons, Water, Air
  - Living & Non-Living, Safety

- **Computer** (3 modules, 45 questions):
  - Parts of Computer, Devices, Uses of Computer

- **Rhymes** (2 modules, 32 items):
  - Nursery Rhymes, CBSE Marigold Poems

- **General Knowledge** (4 modules, 60+ questions):
  - India (Facts, Geography), National Symbols
  - Community Helpers, Festivals of India

- **Mental Math** (8 modules, 120+ questions):
  - Quick Addition & Subtraction (Single Digit)
  - Number Bonds to 10, Doubling Numbers
  - One More/One Less, Skip Counting (2s, 5s, 10s)
  - Quick Comparison, Missing Numbers in Pattern

- **Fun Games**:
  - Balloon Pop, Memory Match, Color Tap

## Run locally

1. Open this folder in VS Code.
2. Open `index.html` in browser.
3. Optional: use Live Server extension.

## � Assessment Section

**283 Comprehensive Assessment Questions** for Grade 1 CBSE students (AY 2026-27):
- Open [assessment.html](assessment.html) to take the assessment
- **40 Math questions** - Numbers, Addition, Subtraction
- **30 English questions** - Grammar, Prose, Naming Words
- **30 Hindi questions** - Swar Letters, Pronunciation
- **20 Computer Science questions** - Parts, Safety, Usage
- **20 Kannada questions** - Kannada Vowels
- **34 EVS questions** - Safety, Health, Hygiene

See [ASSESSMENT.md](ASSESSMENT.md) for all questions and answers.

## �📱 Convert to Mobile App

Want to create Android/iOS apps from this web app?

**Quick Start (Android):**
```powershell
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "PlayLearn Island" "com.playlearn.island" --web-dir="."
npx cap add android
npx cap open android
```

**Complete Guides:**
- 🚀 [Quick Start - Android Emulator](QUICK_START_ANDROID.md) - Get running in 15 minutes
- 📋 [Full Mobile Roadmap](MOBILE_APP_ROADMAP.md) - Complete Android + iOS guide
- 🏗️ [Mobile Architecture](MOBILE_ARCHITECTURE.md) - Technical details

**What You Get:**
- Native Android APK (Google Play Store ready)
- Native iOS IPA (App Store ready)
- Offline functionality (no internet needed)
- Native storage, haptics, notifications
- Test in emulators/simulators before real devices

**Requirements:**
- Android: Android Studio (Windows/Mac/Linux)
- iOS: Xcode (Mac only)
- Both: Node.js (already installed ✓)

## Project map

- `index.html`: UI views (menu, subject hub, lesson, result)
- `styles.css`: playful visual design, responsive layout, animations
- `data/gameData.js`: local curriculum + question pools
- `js/app.js`: game engine, randomization, scoring, stars, navigation

## Architecture

- Presentation layer: HTML/CSS screens and interaction widgets.
- Logic layer: vanilla JS engine for module flow and answer checking.
- Content layer: local static JS object for topics and question pools.

## How to make this full-year complete

1. Add more modules in `data/gameData.js` for each chapter.
2. Increase question pools to 80-120 items per subject.
3. Add chapter unlocks and weekly progress badges in `js/app.js`.
4. Add parent mode to select school term and difficulty.
5. Add printable practice worksheet export (optional).

The app stays safe and lightweight because everything runs locally with no AI models and no backend.

## Troubleshooting Sound/Audio Issues

The app uses Web Speech API for text-to-speech pronunciation in Hindi and Kannada.

### If you don't hear any sound:

1. **Check Browser Support**
   - Open the browser's Developer Console (F12)
   - Look for the "🔊 Speech Synthesis Check" message on page load
   - It should say "✓ Speech Synthesis API is available"
   - If not, try a different browser (Chrome, Edge, Safari work best)

2. **Check Available Voices**
   - The console will show how many Hindi and Kannada voices are available
   - If it says "0 voices", your browser may not have language packs installed
   - Windows: Hindi/Kannada voices should be available by default in recent versions
   - Mac: Go to System Preferences → Accessibility → Spoken Content → System Voices to download

3. **User Interaction Required**
   - Some browsers block auto-play audio until the user interacts with the page
   - Click any button or the 🔊 speaker icon to activate audio
   - The first sound may be delayed - subsequent sounds should work immediately

4. **Check Browser Permissions**
   - Ensure your browser isn't muted
   - Check that the site has permission to play audio
   - Some browsers have site-specific audio permissions in settings

5. **Test the Audio**
   - Start any Kannada or Hindi lesson
   - Enable phonetics using the toggle switch (top-right)
   - Click the 🔊 speaker icon next to the phonetic text
   - Check the browser console for "🗣️ Speaking:" messages

6. **Browser Compatibility**
   - ✅ Best: Chrome 33+, Edge 79+, Safari 7+
   - ⚠️ Limited: Firefox (may not have Indic language voices)
   - ❌ Not supported: IE11 and older browsers

### Debug Console Output

When you click the speaker button, you should see these console messages:
```
🔊 Speaker clicked
🗣️ Speaking: [word] in [language-code]
```

If you see "⚠️ No speakText or speakLang on question", it means the question data is missing audio properties.

### Fallback Options

If TTS doesn't work in your browser:
- The phonetic transcriptions (romanized text) are still visible for pronunciation help
- Use a different browser that supports Web Speech API better
- Consider installing language packs for your operating system
