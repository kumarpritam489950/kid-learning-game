import { Link, useLocation } from 'react-router';

/** Placeholder view for routes whose feature has not been rebuilt yet. */
export function ComingSoon() {
  const { pathname } = useLocation();
  return (
    <section className="panel" aria-label="Coming soon">
      <h2>🚧 This island is being built!</h2>
      <p>
        <code>{pathname}</code> is part of the v2 rebuild and will open soon.
      </p>
      <Link className="btn-main" to="/">
        ⬅ Back to Islands
      </Link>
    </section>
  );
}
