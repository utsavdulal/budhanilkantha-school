import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { verifyAdminCredentials } from '../../utils/auth';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await verifyAdminCredentials(username, password);
      if (result.success) {
        navigate('/admin');
      } else {
        setError(result.error || 'Invalid credentials.');
      }
    } catch {
      setError('An authentication error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center p-4 font-body text-on-surface antialiased selection:bg-black selection:text-white">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-sm border border-outline-variant/20 shadow-sm space-y-6">
        {/* Brand Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <img
              src="/images/school-logo.png"
              alt="Budhanilkantha School Logo"
              className="w-11 h-11 rounded-full object-contain bg-white border border-outline-variant/30 p-0.5 shadow-sm"
            />
            <div>
              <h1 className="font-headline font-extrabold text-lg text-primary tracking-tight">
                Budhanilkantha
              </h1>
              <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">
                School Administration Suite
              </p>
            </div>
          </div>
          <div className="pt-4">
            <h2 className="text-xl font-headline font-bold text-on-surface">Sign in to console</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Enter your administrator credentials to manage content and admissions.
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border-l-4 border-error text-xs font-semibold text-red-800 flex items-center gap-2 rounded-sm">
            <span className="material-symbols-outlined text-[18px] text-error">error</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
              Admin Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(''); }}
              placeholder="e.g. admin"
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-sm text-sm text-on-surface focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder:text-outline-variant transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                Password
              </label>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-sm text-sm text-on-surface focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder:text-outline-variant transition-all"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-caps text-xs uppercase tracking-widest font-bold transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">lock_open</span>
                  <span>Sign In to Console</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
          <Link
            to="/"
            className="hover:text-primary font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            <span>Return to public portal</span>
          </Link>
          <span className="text-[10px] text-on-surface-variant/60 font-semibold">🔒 256-Bit Encrypted</span>
        </div>
      </div>
    </div>
  );
}
