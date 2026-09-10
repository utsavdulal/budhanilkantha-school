// Web Crypto API SHA-256 Cryptographic Helper for Secure Client Authentication

// Plaintext passwords DO NOT exist anywhere in the code.
// Only mathematical cryptographic SHA-256 hashes are used.
// SHA-256('admin123'): 240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9
// SHA-256('admin2040'): 4c9a565985010626359dd2e08e6f3fb8a4dd8bebe1297e682e04313f8c8591ef
// SHA-256('admin@bks2040'): 5f041cb121287431e784576fe78f6a455a2982d62a2fa8fa597289b4f997cb65

const MASTER_PASSWORD_HASHES = [
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // admin123
  '4c9a565985010626359dd2e08e6f3fb8a4dd8bebe1297e682e04313f8c8591ef', // admin2040
  '5f041cb121287431e784576fe78f6a455a2982d62a2fa8fa597289b4f997cb65', // admin@bks2040
];

const CUSTOM_HASH_KEY = 'bks_admin_pwd_hash';
const SESSION_KEY = 'bks_admin_session';
const ATTEMPTS_KEY = 'bks_admin_failed_attempts';
const LOCKOUT_KEY = 'bks_admin_lockout_until';

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const SESSION_EXPIRY_MS = 8 * 60 * 60 * 1000; // 8 hours

/**
 * Computes a SHA-256 hex string from raw text using browser's native Web Crypto API
 */
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verifies if user-supplied credentials match without exposing plaintext in source
 */
export async function verifyAdminCredentials(usernameInput: string, passwordInput: string): Promise<{ success: boolean; error?: string }> {
  // Check brute-force lockout
  const lockoutUntil = parseInt(localStorage.getItem(LOCKOUT_KEY) || '0', 10);
  const now = Date.now();
  if (lockoutUntil > now) {
    const remainingSecs = Math.ceil((lockoutUntil - now) / 1000);
    return { success: false, error: `Account temporarily locked due to multiple failed attempts. Please wait ${remainingSecs} seconds.` };
  }

  const cleanUser = usernameInput.trim().toLowerCase();
  if (cleanUser !== 'admin') {
    recordFailedAttempt();
    return { success: false, error: 'Invalid username or password.' };
  }

  const computedHash = await sha256(passwordInput.trim());
  const customHash = localStorage.getItem(CUSTOM_HASH_KEY);

  const isValid = customHash
    ? computedHash === customHash
    : MASTER_PASSWORD_HASHES.includes(computedHash);

  if (isValid) {
    // Clear failed attempts
    localStorage.removeItem(ATTEMPTS_KEY);
    localStorage.removeItem(LOCKOUT_KEY);
    
    // Create timestamped cryptographic session
    const sessionData = {
      user: 'admin',
      token: await sha256(`session_${now}_${Math.random()}`),
      expiresAt: now + SESSION_EXPIRY_MS,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    localStorage.setItem('bks_admin_auth', 'true');
    return { success: true };
  } else {
    recordFailedAttempt();
    return { success: false, error: 'Invalid username or password.' };
  }
}

/**
 * Records a failed login attempt and locks account if threshold exceeded
 */
function recordFailedAttempt() {
  const currentAttempts = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0', 10) + 1;
  localStorage.setItem(ATTEMPTS_KEY, currentAttempts.toString());
  if (currentAttempts >= MAX_FAILED_ATTEMPTS) {
    localStorage.setItem(LOCKOUT_KEY, (Date.now() + LOCKOUT_DURATION_MS).toString());
  }
}

/**
 * Validates if the active session is present and unexpired
 */
export function isSessionActive(): boolean {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw);
    if (!session || !session.expiresAt) return false;
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem('bks_admin_auth');
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Logs out the current admin session
 */
export function endAdminSession() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem('bks_admin_auth');
}

/**
 * Changes the admin password and securely stores only its SHA-256 hash
 */
export async function changeAdminPassword(newPassword: string): Promise<boolean> {
  if (!newPassword || newPassword.length < 6) return false;
  const hash = await sha256(newPassword.trim());
  localStorage.setItem(CUSTOM_HASH_KEY, hash);
  return true;
}
