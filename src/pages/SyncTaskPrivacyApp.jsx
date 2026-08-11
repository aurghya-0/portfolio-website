import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Bell, 
  Database, 
  Smartphone, 
  Mail, 
  Globe, 
  ExternalLink,
  Sun,
  Moon,
  Coffee,
  Calendar,
  KeyRound,
  Trash2
} from 'lucide-react';

export default function SyncTaskPrivacyApp() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      root.classList.remove('dark', 'light', 'sepia');
      if (theme === 'sepia') root.classList.add('sepia');
      else if (theme === 'light') root.classList.add('light');
      else if (theme === 'dark') root.classList.add('dark');
      else {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.add(isSystemDark ? 'dark' : 'light');
      }
    };
    applyTheme();
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] font-sans relative selection:bg-purple-500 selection:text-white transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern fixed inset-0 pointer-events-none opacity-60"></div>
      
      {/* Glow Orb */}
      <div className="fixed top-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-header)] border-b border-[var(--border-main)] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a 
              href="/synctask/" 
              className="p-2 rounded-lg hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-title)] transition-all flex items-center gap-1.5 text-xs font-semibold"
              title="Return to SyncTask Landing Page"
            >
              <ArrowLeft className="w-4 h-4" /> Back to SyncTask
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="/" 
              className="hidden sm:inline-block text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-title)] transition-colors"
            >
              Developer Portfolio
            </a>

            {/* Theme Toggle */}
            <div className="flex items-center bg-[var(--bg-card)] border border-[var(--border-main)] rounded-lg p-1 gap-1">
              <button 
                onClick={() => handleThemeChange('light')}
                className={`p-1.5 rounded-md transition-all ${theme === 'light' ? 'bg-purple-600 text-white shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'}`}
                title="Light Mode"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => handleThemeChange('dark')}
                className={`p-1.5 rounded-md transition-all ${theme === 'dark' ? 'bg-purple-600 text-white shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'}`}
                title="Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => handleThemeChange('sepia')}
                className={`p-1.5 rounded-md transition-all ${theme === 'sepia' ? 'bg-amber-600 text-white shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'}`}
                title="Sepia Mode"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Privacy Document Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Title Header */}
        <div className="mb-10 pb-8 border-b border-[var(--border-main)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Google Play Store Compliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold theme-title tracking-tight mb-4">
            Privacy Policy for <span className="text-purple-500">SyncTask</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> Effective Date: August 11, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5 text-purple-400" /> Application: SyncTask (Android)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-purple-400" /> Developer: Aurghyadip Kundu
            </span>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/30 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold theme-title mb-1">Our Privacy Promise</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                SyncTask is built with a strict privacy-first architecture. Your personal tasks, schedules, and notes are your private information. We do not sell, monetize, or share your data with third-party advertisers or data brokers.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[var(--text-body)]">
          {/* Section 1 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">01</span>
              Information We Collect
            </h2>
            <div className="space-y-3 text-[var(--text-muted)]">
              <p>When you use SyncTask on Android, we collect and process minimal data strictly necessary for application functionality:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="theme-title">User Task Data:</strong> Task titles, category tags, due dates, reminder times, and completion statuses created within the app. By default, task data is stored locally on your device via SQLite/Room DB.
                </li>
                <li>
                  <strong className="theme-title">Account & Sync Information:</strong> If you choose to enable cloud synchronization, your account email address and a unique user ID are processed securely via Firebase Authentication to segregate your cloud backups.
                </li>
                <li>
                  <strong className="theme-title">Diagnostic & Performance Metadata:</strong> Anonymous technical logs (such as app crash tracebacks, Android operating system version, and device model) via Firebase Crashlytics to identify software bugs and improve stability.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">02</span>
              How We Use Your Information
            </h2>
            <div className="space-y-3 text-[var(--text-muted)]">
              <p>We process collected data exclusively for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide core task creation, editing, categorization, and completion features.</li>
                <li>To synchronize your task lists across multiple Android devices when Cloud Sync is enabled.</li>
                <li>To schedule and deliver local push notifications and alarms for your scheduled task reminders.</li>
                <li>To detect, diagnose, and resolve technical issues or application crashes.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">03</span>
              Android System Permissions & Purpose
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              To operate effectively on Android devices, SyncTask requests specific runtime permissions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-400 mb-1">
                  <Bell className="w-3.5 h-3.5" /> POST_NOTIFICATIONS
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Required on Android 13 (API 33)+ to display task reminder alerts and deadline notifications.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-400 mb-1">
                  <Calendar className="w-3.5 h-3.5" /> SCHEDULE_EXACT_ALARM
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Used by Android AlarmManager to trigger reminder alarms at precise user-selected times.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-400 mb-1">
                  <Globe className="w-3.5 h-3.5" /> INTERNET
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Enables cloud synchronization with Firebase Cloud Firestore when device has network access.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-400 mb-1">
                  <KeyRound className="w-3.5 h-3.5" /> RECEIVE_BOOT_COMPLETED
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Reschedules pending task reminders automatically after your Android device finishes restarting.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">04</span>
              Data Security & Storage
            </h2>
            <div className="space-y-3 text-[var(--text-muted)]">
              <p>
                We implement robust technical and organizational security measures to protect your information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="theme-title">Local Storage:</strong> Tasks are stored inside an isolated Room SQLite database accessible only by the SyncTask package on your device.</li>
                <li><strong className="theme-title">In-Transit Encryption:</strong> All cloud synchronization requests use secure HTTPS/TLS encryption protocol.</li>
                <li><strong className="theme-title">Cloud Infrastructure:</strong> Cloud backups are hosted on Google Cloud / Firebase infrastructure protected by granular security rules.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">05</span>
              Third-Party Services
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              SyncTask utilizes trusted Google platform services for app distribution, authentication, and diagnostics. Please review their privacy policies:
            </p>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-purple-400 hover:underline flex items-center gap-1.5"
                >
                  Google Play Services & Crashlytics Privacy Policy <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://firebase.google.com/support/privacy" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-purple-400 hover:underline flex items-center gap-1.5"
                >
                  Firebase Privacy & Security Guidelines <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">06</span>
              Data Control & Deletion Rights
            </h2>
            <div className="space-y-3 text-[var(--text-muted)]">
              <p>You maintain full ownership and control over your data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="theme-title">Local Data Deletion:</strong> You can delete any task or clear all application data anytime via Android App Settings → Storage → Clear Data.</li>
                <li><strong className="theme-title">Cloud Data Removal:</strong> You may request complete deletion of your synchronized cloud data by contacting the developer via email.</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-mono font-bold border border-purple-500/20">07</span>
              Children's Privacy
            </h2>
            <p className="text-[var(--text-muted)]">
              SyncTask does not knowingly collect or solicit personal information from children under the age of 13. If you believe a child has provided us with personal information, please contact us immediately so we can remove such data.
            </p>
          </section>

          {/* Section 8 - Contact */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30">
            <h2 className="text-xl font-bold theme-title mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-400" /> Contact Developer
            </h2>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              If you have any questions, suggestions, or data deletion requests regarding this Privacy Policy or SyncTask, please reach out to:
            </p>
            <div className="space-y-2 text-xs sm:text-sm font-mono text-[var(--text-title)]">
              <div><strong className="theme-muted font-sans">Developer:</strong> Aurghyadip Kundu</div>
              <div><strong className="theme-muted font-sans">Email:</strong> <a href="mailto:aurghyadipk@yahoo.com" className="text-purple-400 hover:underline">aurghyadipk@yahoo.com</a></div>
              <div><strong className="theme-muted font-sans">Website:</strong> <a href="https://aurghyadip.in" className="text-purple-400 hover:underline">https://aurghyadip.in</a></div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-main)] bg-[var(--bg-sidebar)] py-8 px-4 mt-16 transition-colors">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} SyncTask Android Application. Privacy Policy for Google Play.
          </div>
          <div className="flex items-center gap-4">
            <a href="/synctask/" className="hover:text-purple-400 transition-colors">SyncTask App</a>
            <a href="/" className="hover:text-purple-400 transition-colors">Developer Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
