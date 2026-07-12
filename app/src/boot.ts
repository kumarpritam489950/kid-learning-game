import { runLegacyImport } from './services/storage/legacyImport';
import type { ImportResult } from './services/storage/legacyImport';

/**
 * Runs once before first render (imported at the top of main.tsx): pulls
 * v1 localStorage profiles into the v2 store, leaving the legacy keys
 * untouched for rollback safety.
 */
export const legacyImportResult: ImportResult = runLegacyImport();
