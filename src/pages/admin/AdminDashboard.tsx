import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useData, type AdmissionInquiry, type ContactMessage } from '../../context/DataContext';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const {
    gallery,
    news,
    inquiries,
    messages,
    addGalleryItem,
    deleteGalleryItem,
    addNewsArticle,
    deleteNewsArticle,
    updateInquiryStatus,
    deleteInquiry,
    updateMessageStatus,
    deleteMessage,
    resetToDefaults,
  } = useData();

  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'news' | 'inquiries' | 'messages' | 'settings'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');

  // Selected item modals / notes
  const [activeNotesInquiry, setActiveNotesInquiry] = useState<AdmissionInquiry | null>(null);
  const [inquiryNoteInput, setInquiryNoteInput] = useState('');
  const [activeViewMessage, setActiveViewMessage] = useState<ContactMessage | null>(null);

  // Authentication check
  useEffect(() => {
    const auth = localStorage.getItem('bks_admin_auth');
    if (!auth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('bks_admin_auth');
    navigate('/admin/login');
  };

  // --- Gallery Form State ---
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    category: 'sports',
    tag: 'Cricket & Sports',
    description: '',
    image: '',
    images: [] as string[],
    mediaType: 'photo' as 'photo' | 'video',
    videoUrl: '',
    date: 'Shankarpur Campus',
  });
  const [singleImageUrlInput, setSingleImageUrlInput] = useState('');
  const [gallerySuccess, setGallerySuccess] = useState('');
  const [galleryFilter, setGalleryFilter] = useState('all');

  const handleGallerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allImages =
      galleryForm.images.length > 0
        ? galleryForm.images
        : galleryForm.image.trim()
        ? [galleryForm.image.trim()]
        : [];

    if (!galleryForm.title.trim() || allImages.length === 0) {
      alert('Please provide at least a Title and at least one Image URL or file upload.');
      return;
    }

    addGalleryItem({
      title: galleryForm.title,
      category: galleryForm.category,
      tag: galleryForm.tag || 'Campus Life',
      description: galleryForm.description || galleryForm.title,
      image: allImages[0],
      images: allImages,
      mediaType: galleryForm.mediaType,
      videoUrl: galleryForm.videoUrl,
      date: galleryForm.date,
    });

    setGallerySuccess(`Event with ${allImages.length} photo(s) successfully added to the Student Life gallery!`);
    setGalleryForm({
      title: '',
      category: 'sports',
      tag: 'Cricket & Sports',
      description: '',
      image: '',
      images: [],
      mediaType: 'photo',
      videoUrl: '',
      date: 'Shankarpur Campus',
    });
    setSingleImageUrlInput('');
    setTimeout(() => setGallerySuccess(''), 4000);
  };

  const handleGalleryMultiFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            const resultStr = reader.result;
            setGalleryForm((prev) => {
              const updatedImages = [...prev.images, resultStr];
              return {
                ...prev,
                images: updatedImages,
                image: prev.image || updatedImages[0],
              };
            });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleAddImageUrl = () => {
    if (singleImageUrlInput.trim()) {
      const url = singleImageUrlInput.trim();
      setGalleryForm((prev) => {
        const updatedImages = [...prev.images, url];
        return {
          ...prev,
          images: updatedImages,
          image: prev.image || updatedImages[0],
        };
      });
      setSingleImageUrlInput('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryForm((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== index);
      return {
        ...prev,
        images: updatedImages,
        image: updatedImages.length > 0 ? updatedImages[0] : '',
      };
    });
  };

  const handleSetCoverImage = (index: number) => {
    setGalleryForm((prev) => {
      const selected = prev.images[index];
      const rest = prev.images.filter((_, i) => i !== index);
      const reordered = [selected, ...rest];
      return {
        ...prev,
        images: reordered,
        image: selected,
      };
    });
  };

  // --- News Form State ---
  const [newsForm, setNewsForm] = useState({
    title: '',
    category: 'notices',
    date: 'Baisakh 2081',
    tag: 'Admissions Desk',
    summary: '',
    image: '',
    badge: 'Official Notice',
  });
  const [newsSuccess, setNewsSuccess] = useState('');

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title.trim() || !newsForm.summary.trim()) {
      alert('Please fill in Title and Summary for the news post.');
      return;
    }

    addNewsArticle({
      title: newsForm.title,
      category: newsForm.category,
      date: newsForm.date || new Date().toLocaleDateString(),
      tag: newsForm.tag || 'School Notice',
      summary: newsForm.summary,
      image: newsForm.image || '/images/enrollment-students.jpg',
      badge: newsForm.badge || 'Notice',
    });

    setNewsSuccess('News & Event dispatch successfully published!');
    setNewsForm({
      title: '',
      category: 'notices',
      date: 'Baisakh 2081',
      tag: 'Admissions Desk',
      summary: '',
      image: '',
      badge: 'Official Notice',
    });
    setTimeout(() => setNewsSuccess(''), 4000);
  };

  const handleNewsFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewsForm((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Filters & Searches ---
  const [inquiryFilter, setInquiryFilter] = useState('all');
  const [inquirySearch, setInquirySearch] = useState('');

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesFilter = inquiryFilter === 'all' || inq.status === inquiryFilter;
    const q = (inquirySearch || globalSearch).toLowerCase();
    const matchesSearch =
      !q ||
      inq.parentName.toLowerCase().includes(q) ||
      (inq.studentName && inq.studentName.toLowerCase().includes(q)) ||
      inq.phone.includes(q) ||
      inq.grade.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const [messageFilter, setMessageFilter] = useState('all');
  const [messageSearch, setMessageSearch] = useState('');

  const filteredMessages = messages.filter((msg) => {
    const matchesFilter = messageFilter === 'all' || msg.status === messageFilter;
    const q = (messageSearch || globalSearch).toLowerCase();
    const matchesSearch =
      !q ||
      msg.name.toLowerCase().includes(q) ||
      msg.ticketId.toLowerCase().includes(q) ||
      msg.topic.toLowerCase().includes(q) ||
      msg.phone.includes(q);
    return matchesFilter && matchesSearch;
  });

  const filteredGallery = gallery.filter((item) => {
    const matchesCategory = galleryFilter === 'all' || item.category === galleryFilter;
    const q = globalSearch.toLowerCase();
    const matchesSearch = !q || item.title.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const unreadMessagesCount = messages.filter((m) => m.status === 'Unread').length;
  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex font-body text-on-surface antialiased selection:bg-black selection:text-white">
      {/* Mobile Sidebar Backdrop Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs lg:hidden animate-fadeIn"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 1. SIDEBAR (Architectural Ledger / Minimalist) */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#eff4ff] border-r border-outline-variant/20 flex flex-col justify-between shrink-0 transition-transform duration-200 select-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Logo & School Header */}
          <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white font-headline font-extrabold text-base flex items-center justify-center rounded-sm">
                B
              </div>
              <div className="flex flex-col">
                <h1 className="font-headline font-extrabold text-sm tracking-tight text-primary leading-tight">
                  Budhanilkantha
                </h1>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">
                  Admin Console
                </p>
              </div>
            </div>
            <button
              type="button"
              className="lg:hidden text-on-surface-variant hover:text-black p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {[
              { key: 'overview', label: 'Dashboard Overview', icon: 'dashboard', badge: null },
              { key: 'inquiries', label: 'Admission Inquiries', icon: 'how_to_reg', badge: newInquiriesCount ? `${newInquiriesCount} new` : null, alert: Boolean(newInquiriesCount) },
              { key: 'messages', label: 'Contact Messages', icon: 'mail', badge: unreadMessagesCount ? `${unreadMessagesCount} unread` : null, alert: Boolean(unreadMessagesCount) },
              { key: 'gallery', label: 'Gallery Manager', icon: 'photo_library', badge: gallery.length, alert: false },
              { key: 'news', label: 'News & Notices', icon: 'newspaper', badge: news.length, alert: false },
              { key: 'settings', label: 'System Settings', icon: 'settings', badge: null, alert: false },
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.key as any);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'text-on-surface-variant hover:bg-[#dce9ff]/60 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                    <span className="font-body text-xs font-medium">{tab.label}</span>
                  </div>
                  {tab.badge !== null && tab.badge !== undefined && (
                    <span
                      className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-sm ${
                        tab.alert
                          ? isActive
                            ? 'bg-red-500 text-white'
                            : 'bg-red-100 text-red-700'
                          : isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-surface-container-high text-on-surface-variant'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Admin User / Logout */}
        <div className="p-4 border-t border-outline-variant/20 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-sm bg-white/70 border border-outline-variant/10">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-sm bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                AD
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-on-surface truncate">Admin</span>
                <span className="text-[10px] text-on-surface-variant truncate">Estd. 2040 B.S.</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              title="Sign Out"
              className="p-1 text-on-surface-variant hover:text-red-600 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
            </button>
          </div>
          <Link
            to="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-sm bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-[11px] font-bold transition-all"
          >
            <span>Public Website</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </Link>
        </div>
      </aside>

      {/* 2. MAIN CANVAS */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-outline-variant/20 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className="lg:hidden p-1.5 text-on-surface hover:bg-surface-container-low rounded-sm"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
            <div className="relative w-64 sm:w-80 md:w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                search
              </span>
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder="Search inquiries, messages, gallery..."
                className="w-full bg-surface-container-low border-none rounded-sm py-1.5 pl-9 pr-3 text-xs focus:ring-1 focus:ring-black placeholder:text-outline font-body text-on-surface"
              />
              {globalSearch && (
                <button
                  type="button"
                  onClick={() => setGlobalSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/50 rounded-sm text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Live Console</span>
            </div>
            <Link
              to="/"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-on-surface-variant hover:text-black transition-colors"
            >
              <span>View Portal</span>
              <span className="material-symbols-outlined text-[14px]">launch</span>
            </Link>
          </div>
        </header>

        {/* Dynamic Main Workspace */}
        <main className="p-6 sm:p-8 space-y-8 max-w-[1600px] w-full mx-auto">
          {/* ========================================================================= */}
          {/* TAB 1: OVERVIEW */}
          {/* ========================================================================= */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Header Title */}
              <div>
                <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                  Executive Dashboard
                </h2>
                <p className="text-xs text-on-surface-variant mt-0.5 font-medium">
                  Budhanilkantha Secondary English School • Shankarpur, Biratnagar
                </p>
              </div>

              {/* 4 Metric Cards (Architectural Ledger Left Accents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metric 1 */}
                <div
                  onClick={() => setActiveTab('inquiries')}
                  className="bg-white p-5 rounded-sm border border-outline-variant/20 shadow-xs flex flex-col justify-between border-l-4 border-black hover:border-l-black hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                      Admission Inquiries
                    </span>
                    {newInquiriesCount > 0 && (
                      <span className="text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded-sm">
                        {newInquiriesCount} new
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface">
                      {inquiries.length}
                    </span>
                    <span className="text-xs text-on-surface-variant font-semibold">
                      PG to Grade 10
                    </span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-outline-variant/10 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Manage registrations</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div
                  onClick={() => setActiveTab('messages')}
                  className="bg-white p-5 rounded-sm border border-outline-variant/20 shadow-xs flex flex-col justify-between border-l-4 border-[#006d35] hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                      Contact Messages
                    </span>
                    {unreadMessagesCount > 0 && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded-sm">
                        {unreadMessagesCount} unread
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface">
                      {messages.length}
                    </span>
                    <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                      Active Desk
                    </span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-outline-variant/10 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Open message inbox</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div
                  onClick={() => setActiveTab('gallery')}
                  className="bg-white p-5 rounded-sm border border-outline-variant/20 shadow-xs flex flex-col justify-between border-l-4 border-[#c76c00] hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                      Student Life Gallery
                    </span>
                    <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-1.5 py-0.5 rounded-sm">
                      Live
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface">
                      {gallery.length}
                    </span>
                    <span className="text-xs text-on-surface-variant font-semibold">
                      Events &amp; Media
                    </span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-outline-variant/10 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Manage photo albums</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>

                {/* Metric 4 */}
                <div
                  onClick={() => setActiveTab('news')}
                  className="bg-white p-5 rounded-sm border border-outline-variant/20 shadow-xs flex flex-col justify-between border-l-4 border-outline hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                      Published Notices
                    </span>
                    <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-1.5 py-0.5 rounded-sm">
                      Newsfeed
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface">
                      {news.length}
                    </span>
                    <span className="text-xs text-on-surface-variant font-semibold">
                      Live Articles
                    </span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-outline-variant/10 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Publish announcements</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Action Hub Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('gallery')}
                  className="p-3 bg-white hover:bg-surface-container-low border border-outline-variant/20 rounded-sm text-left transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-[20px] text-black group-hover:scale-110 transition-transform">
                    add_photo_alternate
                  </span>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Post Event Photos</p>
                    <p className="text-[10px] text-on-surface-variant">Multi-image upload</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('news')}
                  className="p-3 bg-white hover:bg-surface-container-low border border-outline-variant/20 rounded-sm text-left transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-[20px] text-black group-hover:scale-110 transition-transform">
                    post_add
                  </span>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Publish Notice</p>
                    <p className="text-[10px] text-on-surface-variant">SEE, admissions &amp; awards</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('inquiries')}
                  className="p-3 bg-white hover:bg-surface-container-low border border-outline-variant/20 rounded-sm text-left transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-[20px] text-black group-hover:scale-110 transition-transform">
                    assignment_ind
                  </span>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Process Inquiries</p>
                    <p className="text-[10px] text-on-surface-variant">Update applicant status</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('messages')}
                  className="p-3 bg-white hover:bg-surface-container-low border border-outline-variant/20 rounded-sm text-left transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-[20px] text-black group-hover:scale-110 transition-transform">
                    mark_email_read
                  </span>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Message Inbox</p>
                    <p className="text-[10px] text-on-surface-variant">Parent queries</p>
                  </div>
                </button>
              </div>

              {/* Two Column Split: Recent Applications & Messages */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Inquiries Card */}
                <div className="bg-white rounded-sm border border-outline-variant/20 shadow-xs overflow-hidden">
                  <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low/30">
                    <div>
                      <h3 className="font-headline font-bold text-sm text-on-surface">
                        Latest Admission Applications
                      </h3>
                      <p className="text-[10px] text-on-surface-variant">
                        Recent submissions from the online inquiry desk
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('inquiries')}
                      className="text-xs font-bold text-black hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>View All ({inquiries.length})</span>
                      <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                    </button>
                  </div>

                  <div className="divide-y divide-outline-variant/10">
                    {inquiries.slice(0, 5).map((inq) => (
                      <div key={inq.id} className="p-4 hover:bg-surface-container-low/40 transition-colors flex items-center justify-between">
                        <div className="min-w-0 pr-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-on-surface truncate">{inq.parentName}</span>
                            <span className="text-[10px] font-semibold text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded-sm">
                              {inq.grade}
                            </span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant truncate mt-0.5">
                            Tel: <strong className="text-on-surface">{inq.phone}</strong> {inq.studentName ? `• Student: ${inq.studentName}` : ''}
                          </p>
                        </div>
                        <select
                          value={inq.status}
                          onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                          className="text-[11px] font-bold px-2 py-1 rounded-sm border border-outline-variant/30 bg-surface-container-low cursor-pointer"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Interview Scheduled">Interview</option>
                          <option value="Enrolled">Enrolled</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Messages Card */}
                <div className="bg-white rounded-sm border border-outline-variant/20 shadow-xs overflow-hidden">
                  <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low/30">
                    <div>
                      <h3 className="font-headline font-bold text-sm text-on-surface">
                        Recent Contact Messages
                      </h3>
                      <p className="text-[10px] text-on-surface-variant">
                        Inquiries from Contact Us page
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('messages')}
                      className="text-xs font-bold text-black hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>View All ({messages.length})</span>
                      <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                    </button>
                  </div>

                  <div className="divide-y divide-outline-variant/10">
                    {messages.slice(0, 5).map((msg) => (
                      <div key={msg.id} className="p-4 hover:bg-surface-container-low/40 transition-colors flex items-center justify-between">
                        <div className="min-w-0 pr-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-on-surface truncate">{msg.name}</span>
                            <span className="text-[9px] font-mono bg-black text-white px-1.5 py-0.2 rounded-sm">
                              {msg.ticketId}
                            </span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant truncate mt-0.5">
                            {msg.topic} • {msg.phone}
                          </p>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-sm shrink-0 ${
                            msg.status === 'Unread'
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-surface-container text-on-surface-variant'
                          }`}
                        >
                          {msg.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: GALLERY MANAGER */}
          {/* ========================================================================= */}
          {activeTab === 'gallery' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Header Title */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                    Student Life Gallery Manager
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Upload and manage multiple photos, videos, and event albums for the public gallery.
                  </p>
                </div>
                <Link
                  to="/student-life"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-sm border border-outline-variant/20 transition-all"
                >
                  <span>Open Live Gallery</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </Link>
              </div>

              {gallerySuccess && (
                <div className="p-3.5 bg-emerald-50 border-l-4 border-emerald-600 text-xs font-bold text-emerald-900 flex items-center gap-2 rounded-sm">
                  <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                  <span>{gallerySuccess}</span>
                </div>
              )}

              {/* Upload Card */}
              <div className="bg-white p-6 rounded-sm border border-outline-variant/20 shadow-xs space-y-5">
                <div className="border-b border-outline-variant/15 pb-3">
                  <h3 className="font-headline font-bold text-base text-on-surface">
                    Create New Gallery Event
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Attach multiple photos or video stream link for this campus event.
                  </p>
                </div>

                <form onSubmit={handleGallerySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Media Type */}
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Media Format
                      </label>
                      <select
                        value={galleryForm.mediaType}
                        onChange={(e) => setGalleryForm({ ...galleryForm, mediaType: e.target.value as any })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs font-medium text-on-surface focus:ring-1 focus:ring-black"
                      >
                        <option value="photo">Photographs (Multi-Image)</option>
                        <option value="video">Video Recording</option>
                      </select>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Category
                      </label>
                      <select
                        value={galleryForm.category}
                        onChange={(e) => {
                          const cat = e.target.value;
                          const tagMap: Record<string, string> = {
                            sports: 'Cricket & Sports',
                            stem: 'STEM & Robotics',
                            arts: 'Oratory & Arts',
                            community: 'Campus Community',
                          };
                          setGalleryForm({ ...galleryForm, category: cat, tag: tagMap[cat] || 'Campus Life' });
                        }}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs font-medium text-on-surface focus:ring-1 focus:ring-black"
                      >
                        <option value="sports">Sports &amp; Athletics</option>
                        <option value="stem">STEM &amp; Robotics</option>
                        <option value="arts">Oratory &amp; Arts</option>
                        <option value="community">Campus &amp; Houses</option>
                      </select>
                    </div>

                    {/* Tag */}
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Tag Badge
                      </label>
                      <input
                        type="text"
                        value={galleryForm.tag}
                        onChange={(e) => setGalleryForm({ ...galleryForm, tag: e.target.value })}
                        placeholder="e.g. Cricket & Sports"
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Event Title / Headline *
                    </label>
                    <input
                      type="text"
                      required
                      value={galleryForm.title}
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                      placeholder="e.g. Inter-House Cricket Championship Trophy Celebration"
                      className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                    />
                  </div>

                  {/* Multi-Photo Upload Area */}
                  <div className="space-y-3 p-4 bg-surface-container-low/60 rounded-sm border border-outline-variant/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label className="block text-[11px] font-bold text-on-surface uppercase tracking-wider">
                        Upload Event Images (Multiple Files Supported) *
                      </label>
                      {galleryForm.images.length > 0 && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-black text-white flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">photo_library</span>
                          <span>{galleryForm.images.length} Photos Selected</span>
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <div className="sm:col-span-8 flex gap-2">
                        <input
                          type="text"
                          value={singleImageUrlInput}
                          onChange={(e) => setSingleImageUrlInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddImageUrl();
                            }
                          }}
                          placeholder="Paste image URL (https://...) and click Add"
                          className="flex-1 px-3 py-2 bg-white border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                        />
                        <button
                          type="button"
                          onClick={handleAddImageUrl}
                          className="px-3.5 py-2 bg-black hover:bg-neutral-800 text-white rounded-sm text-xs font-bold transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[15px]">add</span>
                          <span>Add URL</span>
                        </button>
                      </div>

                      <div className="sm:col-span-4">
                        <label className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-sm text-xs font-bold cursor-pointer transition-colors border border-outline-variant/30 shadow-xs">
                          <span className="material-symbols-outlined text-[16px]">upload_file</span>
                          <span>Select Multiple Files</span>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleGalleryMultiFileUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Uploaded Thumbnails Preview */}
                    {galleryForm.images.length > 0 ? (
                      <div className="pt-2">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
                          {galleryForm.images.map((imgUrl, idx) => (
                            <div
                              key={idx}
                              className={`relative group rounded-sm overflow-hidden border bg-black h-20 ${
                                idx === 0 ? 'border-2 border-black ring-2 ring-black/10' : 'border-outline-variant/40'
                              }`}
                            >
                              <img
                                src={imgUrl}
                                alt={`Event photo ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                              {idx === 0 && (
                                <span className="absolute top-1 left-1 bg-black text-white text-[8px] uppercase font-bold px-1 py-0.2 rounded-sm shadow">
                                  Cover
                                </span>
                              )}
                              <span className="absolute bottom-1 left-1 bg-black/70 text-white text-[9px] px-1 rounded-sm">
                                #{idx + 1}
                              </span>
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                                {idx !== 0 && (
                                  <button
                                    type="button"
                                    onClick={() => handleSetCoverImage(idx)}
                                    title="Make this photo the Cover"
                                    className="p-1 bg-white hover:bg-gray-100 text-black rounded-sm text-[10px] font-bold shadow cursor-pointer"
                                  >
                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveGalleryImage(idx)}
                                  title="Remove photo"
                                  className="p-1 bg-red-600 hover:bg-red-700 text-white rounded-sm text-[10px] font-bold shadow cursor-pointer"
                                >
                                  <span className="material-symbols-outlined text-[14px]">delete</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-[11px] text-on-surface-variant text-center py-2">
                        No photos added yet. Use file selector to choose multiple photos or paste image URLs.
                      </p>
                    )}
                  </div>

                  {/* Video URL if video */}
                  {galleryForm.mediaType === 'video' && (
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Video Stream / YouTube URL
                      </label>
                      <input
                        type="text"
                        value={galleryForm.videoUrl}
                        onChange={(e) => setGalleryForm({ ...galleryForm, videoUrl: e.target.value })}
                        placeholder="e.g. https://www.youtube.com/watch?v=..."
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>
                  )}

                  {/* Date & Description */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Event Venue / Date
                      </label>
                      <input
                        type="text"
                        value={galleryForm.date}
                        onChange={(e) => setGalleryForm({ ...galleryForm, date: e.target.value })}
                        placeholder="e.g. Biratnagar Interschool Finals"
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Event Description
                      </label>
                      <input
                        type="text"
                        value={galleryForm.description}
                        onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                        placeholder="Details displayed in modal popup..."
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black hover:bg-neutral-800 text-white rounded-sm font-label text-xs uppercase tracking-widest font-bold transition-all shadow-sm cursor-pointer"
                    >
                      Publish to Gallery
                    </button>
                  </div>
                </form>
              </div>

              {/* Gallery Items Grid */}
              <div className="bg-white rounded-sm border border-outline-variant/20 shadow-xs overflow-hidden">
                <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-4 bg-surface-container-low/30">
                  <div>
                    <h3 className="font-headline font-bold text-sm text-on-surface">
                      Published Gallery Moments ({filteredGallery.length})
                    </h3>
                    <p className="text-[10px] text-on-surface-variant">
                      Active events visible in Student Life section
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex border border-outline-variant/30 rounded-sm overflow-hidden text-xs">
                    {[
                      { key: 'all', label: 'All' },
                      { key: 'sports', label: 'Sports' },
                      { key: 'stem', label: 'STEM' },
                      { key: 'arts', label: 'Arts' },
                      { key: 'community', label: 'Campus' },
                    ].map((pill) => (
                      <button
                        key={pill.key}
                        type="button"
                        onClick={() => setGalleryFilter(pill.key)}
                        className={`px-3 py-1 text-xs font-bold transition-colors cursor-pointer ${
                          galleryFilter === pill.key ? 'bg-black text-white' : 'bg-transparent hover:bg-surface-container-low text-on-surface-variant'
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredGallery.map((item) => {
                    const photoCount = (item.images && item.images.length > 0) ? item.images.length : 1;
                    return (
                      <div
                        key={item.id}
                        className="bg-surface-container-low/50 rounded-sm border border-outline-variant/30 overflow-hidden flex flex-col justify-between group hover:border-black/30 transition-all"
                      >
                        <div>
                          <div className="h-36 bg-black relative overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-2 left-2 bg-black/70 text-white font-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              {item.tag}
                            </span>
                            {photoCount > 1 && (
                              <span className="absolute top-2 right-2 bg-black text-white font-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow">
                                <span className="material-symbols-outlined text-[11px]">photo_library</span>
                                <span>{photoCount} Photos</span>
                              </span>
                            )}
                          </div>
                          <div className="p-3 space-y-1">
                            <h4 className="font-headline font-bold text-xs text-on-surface line-clamp-1">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-on-surface-variant line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-[10px]">
                          <span className="text-on-surface-variant">{item.date}</span>
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete "${item.title}" from gallery?`)) {
                                deleteGalleryItem(item.id);
                              }
                            }}
                            className="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-700 font-bold rounded-sm transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[13px]">delete</span>
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: NEWS & NOTICES */}
          {/* ========================================================================= */}
          {activeTab === 'news' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                    News &amp; Notices Publisher
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Publish official SEE board notices, admission circulars, and sports achievements.
                  </p>
                </div>
                <Link
                  to="/news"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-sm border border-outline-variant/20 transition-all"
                >
                  <span>View Public Newsfeed</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </Link>
              </div>

              {newsSuccess && (
                <div className="p-3.5 bg-emerald-50 border-l-4 border-emerald-600 text-xs font-bold text-emerald-900 flex items-center gap-2 rounded-sm">
                  <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                  <span>{newsSuccess}</span>
                </div>
              )}

              {/* News Form Card */}
              <div className="bg-white p-6 rounded-sm border border-outline-variant/20 shadow-xs space-y-5">
                <div className="border-b border-outline-variant/15 pb-3">
                  <h3 className="font-headline font-bold text-base text-on-surface">
                    Draft New Article / Announcement
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Fill in details to publish directly to the public website.
                  </p>
                </div>

                <form onSubmit={handleNewsSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Category
                      </label>
                      <select
                        value={newsForm.category}
                        onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs font-medium text-on-surface focus:ring-1 focus:ring-black"
                      >
                        <option value="notices">Admissions &amp; Notices</option>
                        <option value="stem">STEM &amp; Robotics</option>
                        <option value="sports">Sports &amp; Athletics</option>
                        <option value="academic">Academic &amp; SEE Board</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Badge Style
                      </label>
                      <select
                        value={newsForm.badge}
                        onChange={(e) => setNewsForm({ ...newsForm, badge: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs font-medium text-on-surface focus:ring-1 focus:ring-black"
                      >
                        <option value="Official Notice">Official Notice</option>
                        <option value="Champions">Champions Trophy</option>
                        <option value="District Award">District Award</option>
                        <option value="Academic Notice">Academic Notice</option>
                        <option value="School Community">School Community</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Date (B.S. / A.D.)
                      </label>
                      <input
                        type="text"
                        value={newsForm.date}
                        onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                        placeholder="e.g. Baisakh 15, 2081"
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Tag
                      </label>
                      <input
                        type="text"
                        value={newsForm.tag}
                        onChange={(e) => setNewsForm({ ...newsForm, tag: e.target.value })}
                        placeholder="e.g. Admissions Desk"
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Article Headline *
                    </label>
                    <input
                      type="text"
                      required
                      value={newsForm.title}
                      onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                      placeholder="e.g. Budhanilkantha Scholars Triumph at Regional Robotics & Science Exhibition"
                      className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-8">
                      <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Cover Image URL
                      </label>
                      <input
                        type="text"
                        value={newsForm.image}
                        onChange={(e) => setNewsForm({ ...newsForm, image: e.target.value })}
                        placeholder="https://... or /images/..."
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div className="sm:col-span-4 pt-4 sm:pt-0">
                      <label className="block text-[11px] font-bold text-transparent mb-1 select-none sm:block hidden">
                        File
                      </label>
                      <label className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-sm text-xs font-bold cursor-pointer transition-colors border border-outline-variant/30">
                        <span className="material-symbols-outlined text-[16px]">upload_file</span>
                        <span>Upload Local Image</span>
                        <input type="file" accept="image/*" onChange={handleNewsFileUpload} className="hidden" />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Summary Text *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newsForm.summary}
                      onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                      placeholder="Detailed content for the news release..."
                      className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black hover:bg-neutral-800 text-white rounded-sm font-label text-xs uppercase tracking-widest font-bold transition-all shadow-sm cursor-pointer"
                    >
                      Publish Announcement
                    </button>
                  </div>
                </form>
              </div>

              {/* Published News List */}
              <div className="bg-white rounded-sm border border-outline-variant/20 shadow-xs overflow-hidden">
                <div className="p-4 sm:p-5 border-b border-outline-variant/20 bg-surface-container-low/30">
                  <h3 className="font-headline font-bold text-sm text-on-surface">
                    Published Dispatches ({news.length})
                  </h3>
                </div>

                <div className="divide-y divide-outline-variant/10">
                  {news.map((item) => (
                    <div key={item.id} className="p-4 hover:bg-surface-container-low/30 transition-colors flex items-start justify-between gap-4">
                      <div className="flex gap-4 min-w-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 rounded-sm object-cover bg-black shrink-0"
                        />
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase bg-black text-white px-1.5 py-0.2 rounded-sm">
                              {item.badge}
                            </span>
                            <span className="text-[10px] text-on-surface-variant font-medium">
                              {item.date} • {item.tag}
                            </span>
                          </div>
                          <h4 className="font-headline font-bold text-xs text-on-surface truncate">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-on-surface-variant line-clamp-2">
                            {item.summary}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Delete news article "${item.title}"?`)) {
                            deleteNewsArticle(item.id);
                          }
                        }}
                        className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-sm transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">delete</span>
                        <span>Delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: ADMISSION INQUIRIES (Precision Ledger Table) */}
          {/* ========================================================================= */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                    Student Admission Inquiries
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Manage candidate applications, interview appointments, and enrollment decisions.
                  </p>
                </div>
                <Link
                  to="/admissions"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-sm border border-outline-variant/20 transition-all"
                >
                  <span>Admission Portal</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </Link>
              </div>

              {/* Precision Table Card */}
              <section className="bg-white rounded-sm border border-outline-variant/20 shadow-xs overflow-hidden">
                {/* Table Header Filter Bar */}
                <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-4 bg-surface-container-low/30">
                  <div className="flex border border-outline-variant/30 rounded-sm overflow-hidden text-xs">
                    {[
                      { key: 'all', label: 'All Inquiries' },
                      { key: 'New', label: 'New' },
                      { key: 'Contacted', label: 'Contacted' },
                      { key: 'Interview Scheduled', label: 'Interview' },
                      { key: 'Enrolled', label: 'Enrolled' },
                    ].map((pill) => (
                      <button
                        key={pill.key}
                        type="button"
                        onClick={() => setInquiryFilter(pill.key)}
                        className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
                          inquiryFilter === pill.key ? 'bg-black text-white' : 'bg-transparent hover:bg-surface-container-low text-on-surface-variant'
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-64">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">
                      search
                    </span>
                    <input
                      type="text"
                      value={inquirySearch}
                      onChange={(e) => setInquirySearch(e.target.value)}
                      placeholder="Filter by name, grade, phone..."
                      className="w-full bg-white border border-outline-variant/30 rounded-sm py-1.5 pl-8 pr-3 text-xs focus:ring-1 focus:ring-black text-on-surface"
                    />
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[650px]">
                    <thead>
                      <tr className="bg-surface-container-low/60 border-b border-outline-variant/20">
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Parent &amp; Student
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Grade / Level
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Contact Info
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Received Date
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Status
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10 text-xs">
                      {filteredInquiries.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-8 text-center text-on-surface-variant">
                            No admission inquiries found matching criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredInquiries.map((inq) => (
                          <tr key={inq.id} className="hover:bg-surface-container-low/40 transition-colors group">
                            <td className="px-5 py-3.5">
                              <div className="font-bold text-on-surface">{inq.parentName}</div>
                              {inq.studentName && (
                                <div className="text-[10px] text-on-surface-variant">Student: {inq.studentName}</div>
                              )}
                            </td>
                            <td className="px-5 py-3.5 font-semibold text-on-surface">
                              <span className="px-2 py-0.5 bg-surface-container-high rounded-sm text-[11px]">
                                {inq.grade}
                              </span>
                            </td>
                            <td className="px-5 py-3.5">
                              <div className="font-mono text-[11px]">{inq.phone}</div>
                              {inq.email && <div className="text-[10px] text-on-surface-variant">{inq.email}</div>}
                            </td>
                            <td className="px-5 py-3.5 text-on-surface-variant text-[11px]">
                              {inq.date}
                            </td>
                            <td className="px-5 py-3.5">
                              <select
                                value={inq.status}
                                onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                                className={`text-[11px] font-bold px-2 py-1 rounded-sm border transition-colors cursor-pointer ${
                                  inq.status === 'New'
                                    ? 'bg-blue-50 text-blue-900 border-blue-300'
                                    : inq.status === 'Contacted'
                                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                                    : inq.status === 'Interview Scheduled'
                                    ? 'bg-purple-50 text-purple-900 border-purple-300'
                                    : inq.status === 'Enrolled'
                                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                                    : 'bg-surface-container text-on-surface-variant border-outline-variant/30'
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Enrolled">Enrolled</option>
                                <option value="Archived">Archived</option>
                              </select>
                            </td>
                            <td className="px-5 py-3.5 text-right space-x-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveNotesInquiry(inq);
                                  setInquiryNoteInput(inq.notes || '');
                                }}
                                title="Add/View Counselor Notes"
                                className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-[11px] font-bold rounded-sm border border-outline-variant/20 transition-all cursor-pointer"
                              >
                                Notes {inq.notes ? '•' : ''}
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  if (confirm(`Delete inquiry for ${inq.parentName}?`)) {
                                    deleteInquiry(inq.id);
                                  }
                                }}
                                title="Delete Inquiry"
                                className="p-1 text-red-600 hover:bg-red-50 rounded-sm transition-colors cursor-pointer inline-flex items-center"
                              >
                                <span className="material-symbols-outlined text-[16px]">delete</span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Notes Modal */}
              {activeNotesInquiry && (
                <div
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
                  onClick={() => setActiveNotesInquiry(null)}
                >
                  <div
                    className="bg-white max-w-md w-full p-6 rounded-sm border border-outline-variant/30 shadow-lg space-y-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                      <div>
                        <h4 className="font-headline font-bold text-sm text-on-surface">
                          Admissions Counselor Notes
                        </h4>
                        <p className="text-[10px] text-on-surface-variant">
                          Applicant: {activeNotesInquiry.parentName} ({activeNotesInquiry.grade})
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveNotesInquiry(null)}
                        className="text-on-surface-variant hover:text-black cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <textarea
                      rows={4}
                      value={inquiryNoteInput}
                      onChange={(e) => setInquiryNoteInput(e.target.value)}
                      placeholder="Add interview notes, transportation route notes, or fee concession info..."
                      className="w-full p-3 bg-surface-container-low border border-outline-variant/30 rounded-sm text-xs text-on-surface focus:ring-1 focus:ring-black"
                    />

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveNotesInquiry(null)}
                        className="px-3 py-1.5 bg-surface-container-high text-xs font-bold rounded-sm cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          updateInquiryStatus(activeNotesInquiry.id, activeNotesInquiry.status, inquiryNoteInput);
                          setActiveNotesInquiry(null);
                        }}
                        className="px-4 py-1.5 bg-black text-white text-xs font-bold rounded-sm cursor-pointer"
                      >
                        Save Notes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: CONTACT MESSAGES */}
          {/* ========================================================================= */}
          {activeTab === 'messages' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                    Contact Us Messages Inbox
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Inquiries submitted through the Contact Us ticket submission form.
                  </p>
                </div>
                <Link
                  to="/contact"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-sm border border-outline-variant/20 transition-all"
                >
                  <span>Open Contact Page</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </Link>
              </div>

              {/* Messages Table Card */}
              <section className="bg-white rounded-sm border border-outline-variant/20 shadow-xs overflow-hidden">
                <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-4 bg-surface-container-low/30">
                  <div className="flex border border-outline-variant/30 rounded-sm overflow-hidden text-xs">
                    {[
                      { key: 'all', label: 'All Messages' },
                      { key: 'Unread', label: 'Unread' },
                      { key: 'Read', label: 'Read' },
                      { key: 'Replied', label: 'Replied' },
                    ].map((pill) => (
                      <button
                        key={pill.key}
                        type="button"
                        onClick={() => setMessageFilter(pill.key)}
                        className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
                          messageFilter === pill.key ? 'bg-black text-white' : 'bg-transparent hover:bg-surface-container-low text-on-surface-variant'
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-64">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">
                      search
                    </span>
                    <input
                      type="text"
                      value={messageSearch}
                      onChange={(e) => setMessageSearch(e.target.value)}
                      placeholder="Search ticket #, name, topic..."
                      className="w-full bg-white border border-outline-variant/30 rounded-sm py-1.5 pl-8 pr-3 text-xs focus:ring-1 focus:ring-black text-on-surface"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[650px]">
                    <thead>
                      <tr className="bg-surface-container-low/60 border-b border-outline-variant/20">
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Ticket ID &amp; Sender
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Subject / Topic
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Contact Phone
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Date
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Status
                        </th>
                        <th className="px-5 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10 text-xs">
                      {filteredMessages.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-8 text-center text-on-surface-variant">
                            No contact messages found.
                          </td>
                        </tr>
                      ) : (
                        filteredMessages.map((msg) => (
                          <tr key={msg.id} className="hover:bg-surface-container-low/40 transition-colors group">
                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10px] bg-black text-white px-1.5 py-0.2 rounded-sm">
                                  {msg.ticketId}
                                </span>
                                <span className="font-bold text-on-surface">{msg.name}</span>
                              </div>
                              {msg.email && <div className="text-[10px] text-on-surface-variant mt-0.5">{msg.email}</div>}
                            </td>
                            <td className="px-5 py-3.5">
                              <div className="font-semibold text-on-surface line-clamp-1">{msg.topic}</div>
                              <div className="text-[10px] text-on-surface-variant line-clamp-1">{msg.message}</div>
                            </td>
                            <td className="px-5 py-3.5 font-mono text-[11px]">
                              {msg.phone}
                            </td>
                            <td className="px-5 py-3.5 text-on-surface-variant text-[11px]">
                              {msg.date}
                            </td>
                            <td className="px-5 py-3.5">
                              <select
                                value={msg.status}
                                onChange={(e) => updateMessageStatus(msg.id, e.target.value as any)}
                                className={`text-[11px] font-bold px-2 py-1 rounded-sm border transition-colors cursor-pointer ${
                                  msg.status === 'Unread'
                                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                                    : msg.status === 'Read'
                                    ? 'bg-blue-50 text-blue-900 border-blue-300'
                                    : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                                }`}
                              >
                                <option value="Unread">Unread</option>
                                <option value="Read">Read</option>
                                <option value="Replied">Replied</option>
                                <option value="Archived">Archived</option>
                              </select>
                            </td>
                            <td className="px-5 py-3.5 text-right space-x-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveViewMessage(msg);
                                  if (msg.status === 'Unread') {
                                    updateMessageStatus(msg.id, 'Read');
                                  }
                                }}
                                className="px-2.5 py-1 bg-black hover:bg-neutral-800 text-white text-[11px] font-bold rounded-sm transition-all cursor-pointer"
                              >
                                View Message
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  if (confirm(`Delete message ticket ${msg.ticketId}?`)) {
                                    deleteMessage(msg.id);
                                  }
                                }}
                                className="p-1 text-red-600 hover:bg-red-50 rounded-sm transition-colors cursor-pointer inline-flex items-center"
                              >
                                <span className="material-symbols-outlined text-[16px]">delete</span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* View Message Modal */}
              {activeViewMessage && (
                <div
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
                  onClick={() => setActiveViewMessage(null)}
                >
                  <div
                    className="bg-white max-w-lg w-full p-6 rounded-sm border border-outline-variant/30 shadow-lg space-y-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs bg-black text-white px-1.5 py-0.2 rounded-sm">
                            {activeViewMessage.ticketId}
                          </span>
                          <h4 className="font-headline font-bold text-sm text-on-surface">
                            {activeViewMessage.name}
                          </h4>
                        </div>
                        <p className="text-[10px] text-on-surface-variant mt-0.5">
                          Tel: {activeViewMessage.phone} {activeViewMessage.email ? `• ${activeViewMessage.email}` : ''}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveViewMessage(null)}
                        className="text-on-surface-variant hover:text-black cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                        Subject: {activeViewMessage.topic}
                      </span>
                      <div className="p-4 bg-surface-container-low rounded-sm text-xs text-on-surface whitespace-pre-wrap leading-relaxed">
                        {activeViewMessage.message}
                      </div>
                      <span className="text-[10px] text-on-surface-variant block">
                        Received: {activeViewMessage.date}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-outline-variant/20">
                      <button
                        type="button"
                        onClick={() => {
                          updateMessageStatus(activeViewMessage.id, 'Replied');
                          setActiveViewMessage(null);
                        }}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-sm cursor-pointer flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">check</span>
                        <span>Mark as Replied</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveViewMessage(null)}
                        className="px-3 py-1.5 bg-surface-container-high text-xs font-bold rounded-sm cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: SETTINGS & SYSTEM */}
          {/* ========================================================================= */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                  System &amp; Data Settings
                </h2>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Inspect localStorage data stores, sync status, and database restore utilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-outline-variant/20 shadow-xs space-y-4">
                  <h3 className="font-headline font-bold text-sm text-on-surface">
                    Data Storage Inventory
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2.5 bg-surface-container-low rounded-sm">
                      <span className="text-on-surface-variant">Gallery Event Items</span>
                      <strong className="text-on-surface">{gallery.length} Records</strong>
                    </div>
                    <div className="flex justify-between p-2.5 bg-surface-container-low rounded-sm">
                      <span className="text-on-surface-variant">Newsfeed Articles</span>
                      <strong className="text-on-surface">{news.length} Records</strong>
                    </div>
                    <div className="flex justify-between p-2.5 bg-surface-container-low rounded-sm">
                      <span className="text-on-surface-variant">Admission Applications</span>
                      <strong className="text-on-surface">{inquiries.length} Records</strong>
                    </div>
                    <div className="flex justify-between p-2.5 bg-surface-container-low rounded-sm">
                      <span className="text-on-surface-variant">Contact Tickets</span>
                      <strong className="text-on-surface">{messages.length} Records</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-sm border border-outline-variant/20 shadow-xs space-y-4">
                  <h3 className="font-headline font-bold text-sm text-on-surface">
                    Sample Data &amp; Reset
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Restore the default sample data for Budhanilkantha School (sports events, robotics articles, and demo admission inquiries).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('Are you sure you want to restore default sample data? This will reset all records.')) {
                        resetToDefaults();
                        alert('System data restored to defaults successfully.');
                      }
                    }}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-sm border border-red-200 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                    <span>Restore Sample Data</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
