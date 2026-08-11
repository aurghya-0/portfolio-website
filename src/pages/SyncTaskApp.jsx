import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Smartphone, 
  Cloud, 
  RefreshCw,
  ShieldCheck, 
  Bell, 
  Tag, 
  BarChart3, 
  Download, 
  ArrowLeft, 
  Lock, 
  Zap, 
  Sparkles, 
  Check, 
  Plus, 
  Sun, 
  Moon, 
  Coffee, 
  ExternalLink
} from 'lucide-react';

export default function SyncTaskApp() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');
  const [filter, setFilter] = useState('all');
  const [sampleTasks, setSampleTasks] = useState([
    { id: 1, title: 'Finalize Mobile App Architecture', category: 'Work', priority: 'High', completed: true, time: '09:30 AM' },
    { id: 2, title: 'Review Android Jetpack Compose Docs', category: 'Learning', priority: 'Medium', completed: false, time: '02:00 PM' },
    { id: 3, title: 'Sync local Room DB with Firebase Cloud', category: 'SyncTask', priority: 'High', completed: false, time: '04:15 PM' },
    { id: 4, title: 'Configure Google Play Store Release Notes', category: 'Release', priority: 'Low', completed: true, time: '06:00 PM' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  // Theme application
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

  const toggleTask = (id) => {
    setSampleTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setSampleTasks(prev => [
      ...prev,
      { id: Date.now(), title: newTaskText.trim(), category: 'Personal', priority: 'Medium', completed: false, time: 'Just now' }
    ]);
    setNewTaskText('');
  };

  const filteredTasks = sampleTasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  const completedCount = sampleTasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / sampleTasks.length) * 100) || 0;

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] font-sans relative selection:bg-purple-500 selection:text-white transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern fixed inset-0 pointer-events-none opacity-60"></div>
      
      {/* Glow Orbs */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      {/* Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-header)] border-b border-[var(--border-main)] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              className="p-2 rounded-lg hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-title)] transition-all"
              title="Return to Main Portfolio"
            >
              <ArrowLeft className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight theme-title">
                Sync<span className="text-purple-500">Task</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 ml-1">
                Android App
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a 
              href="#features" 
              className="hidden md:inline-block text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-title)] transition-colors px-3 py-1.5"
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="hidden md:inline-block text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-title)] transition-colors px-3 py-1.5"
            >
              Interactive Demo
            </a>
            <a 
              href="/synctask/privacy/" 
              className="text-sm font-medium text-[var(--text-muted)] hover:text-purple-400 transition-colors px-3 py-1.5 flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Privacy Policy
            </a>

            {/* Theme Toggle Buttons */}
            <div className="flex items-center bg-[var(--bg-card)] border border-[var(--border-main)] rounded-lg p-1 gap-1 ml-2">
              <button 
                onClick={() => handleThemeChange('light')}
                className={`p-1.5 rounded-md transition-all ${theme === 'light' ? 'bg-purple-600 text-white shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'}`}
                title="Light Mode"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleThemeChange('dark')}
                className={`p-1.5 rounded-md transition-all ${theme === 'dark' ? 'bg-purple-600 text-white shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'}`}
                title="Dark Mode"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleThemeChange('sepia')}
                className={`p-1.5 rounded-md transition-all ${theme === 'sepia' ? 'bg-amber-600 text-white shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'}`}
                title="Sepia Mode"
              >
                <Coffee className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" /> Native Android Task Management
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight theme-title max-w-4xl mx-auto leading-tight mb-6">
          Stay Organized. <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
            Sync Seamlessly Across Devices.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-8">
          SyncTask is an offline-first Android task management application built with Kotlin & Jetpack Compose. Enjoy instantaneous cloud backup, smart reminders, and focus analytics.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#demo"
            className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-500/40 transition-all flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" /> Try Live Demo
          </a>
          <a
            href="/synctask/privacy/"
            className="px-6 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-main)] hover:border-purple-500/50 theme-title font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Lock className="w-4 h-4 text-purple-400" /> Play Store Privacy Policy
          </a>
          <a
            href="/"
            className="px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] hover:bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-title)] font-semibold text-sm transition-all flex items-center gap-2"
          >
            Developer Portfolio <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-20">
          <div className="glass-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-title mb-2">Offline-First Engine</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Powered by Android Room SQLite database. Create, edit, and reorganize tasks instantly without waiting for network connectivity.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-title mb-2">Cloud Synchronization</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Automatic background sync via Firebase Cloud Services ensures your task lists are backed up and consistent across all your Android devices.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 border border-sky-500/20">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-title mb-2">Smart Alarms & Notifications</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Leveraging Android AlarmManager & Notification channels for pinpoint accurate task reminders and snooze management.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-title mb-2">Custom Categories & Tags</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Organize tasks with vibrant custom color tags, priority matrix (High/Medium/Low), and project filters.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-title mb-2">Productivity Analytics</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Track daily completion velocity, weekly streaks, and focus metrics with clean charts designed right into the app.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4 border border-pink-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-title mb-2">Privacy Protected</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Your personal data and tasks belong solely to you. Zero data selling, local encryption, and full compliance with Play Store standards.
            </p>
          </div>
        </div>

        {/* Interactive Mockup / Android App Simulator */}
        <div id="demo" className="max-w-xl mx-auto mb-20 text-left">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold theme-title mb-2">Experience SyncTask Interface</h2>
            <p className="text-sm text-[var(--text-muted)]">Try adding, completing, or filtering tasks below in this live interactive view.</p>
          </div>

          <div className="rounded-3xl border-2 border-purple-500/30 bg-[var(--bg-card)] shadow-2xl p-5 sm:p-6 backdrop-blur-xl relative overflow-hidden">
            {/* Simulated Phone Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="font-bold text-sm tracking-wide theme-title">SyncTask Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Synced</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-5 bg-[var(--bg-input)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="theme-muted">Daily Completion</span>
                <span className="text-purple-400 font-mono">{completedCount} of {sampleTasks.length} ({progressPercent}%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-purple-950/40 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-500 rounded-full" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Task Add Form */}
            <form onSubmit={handleAddTask} className="flex gap-2 mb-5">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)] text-sm theme-title focus:outline-none focus:border-purple-500 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm flex items-center gap-1 transition-all"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            </form>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4 text-xs font-medium border-b border-[var(--border-subtle)] pb-3">
              {['all', 'active', 'completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                    filter === tab 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Task List */}
            <div className="space-y-2.5 min-h-[220px]">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    task.completed
                      ? 'bg-purple-950/10 border-[var(--border-subtle)] opacity-70'
                      : 'bg-[var(--bg-input)] border-[var(--border-main)] hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button className="text-purple-400 shrink-0">
                      {task.completed ? <CheckCircle2 className="w-5 h-5 fill-purple-500/20" /> : <Circle className="w-5 h-5" />}
                    </button>
                    <span className={`text-sm truncate ${task.completed ? 'line-through text-[var(--text-muted)]' : 'theme-title'}`}>
                      {task.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {task.category}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {task.time}
                    </span>
                  </div>
                </div>
              ))}
              {filteredTasks.length === 0 && (
                <div className="text-center py-10 text-sm text-[var(--text-muted)] font-medium">
                  No tasks found in this view.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="glass-card p-8 rounded-3xl text-left mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold theme-title mb-6 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-purple-400" /> Technical Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-purple-400 block mb-1">LANGUAGE</span>
              <span className="font-bold text-base theme-title">Kotlin</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-purple-400 block mb-1">UI FRAMEWORK</span>
              <span className="font-bold text-base theme-title">Jetpack Compose</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-purple-400 block mb-1">LOCAL DB</span>
              <span className="font-bold text-base theme-title">Room SQLite</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-purple-400 block mb-1">CLOUD BACKEND</span>
              <span className="font-bold text-base theme-title">Firebase Sync</span>
            </div>
          </div>
        </div>

        {/* Play Store Link Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-purple-900/30 border border-purple-500/30 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold theme-title mb-3">Google Play Store & Compliance</h3>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-6">
            SyncTask adheres strictly to Google Play Developer Policies. Review our comprehensive Privacy Policy detailing data collection, cloud sync security, and user rights.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/synctask/privacy/"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
            >
              <Lock className="w-4 h-4" /> View Full Privacy Policy
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-main)] bg-[var(--bg-sidebar)] py-10 px-4 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} SyncTask Android App by <a href="/" className="underline text-purple-400 hover:text-purple-300">Aurghyadip Kundu</a>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/synctask/privacy/" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-purple-400 transition-colors">Developer Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
