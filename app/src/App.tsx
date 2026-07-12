import { Route, Routes } from 'react-router';
import { ComingSoon } from './components/ComingSoon';
import { HomeIslands } from './features/home/HomeIslands';

export default function App() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1>🏝️ PlayLearn Island</h1>
        <p>Pick an island and start your adventure!</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeIslands />} />
          <Route path="/subject/:subjectId" element={<ComingSoon />} />
          <Route path="/stories" element={<ComingSoon />} />
          <Route path="/fun" element={<ComingSoon />} />
          <Route path="/assessment" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
    </div>
  );
}
