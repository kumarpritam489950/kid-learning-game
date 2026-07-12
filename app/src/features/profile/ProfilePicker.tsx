import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserStore } from '../../stores/userStore';
import styles from './ProfilePicker.module.css';

export function ProfilePicker() {
  const navigate = useNavigate();
  const profiles = useUserStore((s) => s.profiles);
  const createProfile = useUserStore((s) => s.createProfile);
  const selectProfile = useUserStore((s) => s.selectProfile);
  const [name, setName] = useState('');

  const submit = () => {
    const profile = createProfile(name);
    if (profile) navigate('/', { replace: true });
  };

  return (
    <section className="panel" aria-label="Choose your player">
      <h2 className={styles.title}>👋 Who is playing today?</h2>

      {profiles.length > 0 && (
        <div className={styles.profileList} aria-label="Saved players">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              type="button"
              className={styles.profileCard}
              onClick={() => {
                selectProfile(profile.id);
                navigate('/', { replace: true });
              }}
            >
              <span className={styles.avatar} aria-hidden="true">
                {profile.avatarEmoji}
              </span>
              <span className={styles.profileName}>{profile.name}</span>
              <span className={styles.profileScore}>⭐ {profile.totalScore}</span>
            </button>
          ))}
        </div>
      )}

      <form
        className={styles.createRow}
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <label className={styles.label} htmlFor="new-player-name">
          New player — use a fun nickname, not your real name!
        </label>
        <div className={styles.inputRow}>
          <input
            id="new-player-name"
            className={styles.input}
            value={name}
            maxLength={20}
            placeholder="e.g. SuperTiger"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn btn-main" disabled={!name.trim()}>
            Let&apos;s Go! 🚀
          </button>
        </div>
      </form>
    </section>
  );
}
