import { useState, type ReactNode } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import { legacyImportResult } from './boot.ts';
import { ComingSoon } from './components/ComingSoon';
import { HomeIslands } from './features/home/HomeIslands';
import { LessonView } from './features/lesson/LessonView';
import { ResultView } from './features/lesson/ResultView';
import { SubjectHub } from './features/lesson/SubjectHub';
import { HistoryScreen } from './features/profile/HistoryScreen';
import { ProfilePicker } from './features/profile/ProfilePicker';
import { StoryList } from './features/stories/StoryList';
import { StoryReader } from './features/stories/StoryReader';
import { useCurrentProfile, useUserStore } from './stores/userStore';

function RequireProfile({ children }: { children: ReactNode }) {
  const hasProfile = useUserStore((s) => s.currentProfileId !== null);
  return hasProfile ? children : <Navigate to="/profiles" replace />;
}

function ProfileBar() {
  const navigate = useNavigate();
  const profile = useCurrentProfile();
  const logout = useUserStore((s) => s.logout);

  if (!profile) return null;

  return (
    <div className="profile-bar">
      <span className="profile-bar-greeting">
        {profile.avatarEmoji} Hi, <strong>{profile.name}</strong>! ⭐ {profile.totalScore}
      </span>
      <span className="profile-bar-actions">
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/history')}>
          📊 History
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            logout();
            navigate('/profiles');
          }}
        >
          Logout
        </button>
      </span>
    </div>
  );
}

function MigrationBanner() {
  const [visible, setVisible] = useState(legacyImportResult === 'imported');
  if (!visible) return null;
  return (
    <output className="migration-banner">
      🎉 Welcome back — your stars are safe! All your old progress has been imported.
      <button type="button" aria-label="Dismiss" onClick={() => setVisible(false)}>
        ✕
      </button>
    </output>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1>🏝️ PlayLearn Island</h1>
        <p>Pick an island and start your adventure!</p>
      </header>
      <MigrationBanner />
      <ProfileBar />
      <main>
        <Routes>
          <Route path="/profiles" element={<ProfilePicker />} />
          <Route
            path="/"
            element={
              <RequireProfile>
                <HomeIslands />
              </RequireProfile>
            }
          />
          <Route
            path="/subject/:subjectId"
            element={
              <RequireProfile>
                <SubjectHub />
              </RequireProfile>
            }
          />
          <Route
            path="/lesson/:subjectId/:moduleId"
            element={
              <RequireProfile>
                <LessonView />
              </RequireProfile>
            }
          />
          <Route
            path="/result"
            element={
              <RequireProfile>
                <ResultView />
              </RequireProfile>
            }
          />
          <Route
            path="/history"
            element={
              <RequireProfile>
                <HistoryScreen />
              </RequireProfile>
            }
          />
          <Route
            path="/stories"
            element={
              <RequireProfile>
                <StoryList />
              </RequireProfile>
            }
          />
          <Route
            path="/stories/:storyId"
            element={
              <RequireProfile>
                <StoryReader />
              </RequireProfile>
            }
          />
          <Route
            path="/fun"
            element={
              <RequireProfile>
                <ComingSoon />
              </RequireProfile>
            }
          />
          <Route
            path="/assessment"
            element={
              <RequireProfile>
                <ComingSoon />
              </RequireProfile>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
