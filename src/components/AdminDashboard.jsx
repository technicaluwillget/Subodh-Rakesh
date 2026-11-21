import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Lock, 
  LayoutDashboard, 
  User, 
  Image as ImageIcon, 
  Newspaper, 
  Calendar, 
  Inbox, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  CheckCircle, 
  Camera, 
  Server,
  LogOut
} from 'lucide-react';
import { personalInfo } from '../data/subhodhData';
import subodhPhoto from '../assets/subodh-rakesh.jpg';

export const AdminDashboard = ({ 
  isOpen, 
  onClose,
  activities,
  setActivities,
  newsItems,
  setNewsItems,
  galleryItems,
  setGalleryItems,
  messages
}) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  // Dashboard navigation tab
  const [currentTab, setCurrentTab] = useState('overview');

  // Form states for adding new activity
  const [newActivity, setNewActivity] = useState({
    title: '',
    category: 'public-outreach',
    date: new Date().toLocaleDateString('hi-IN'),
    location: 'ज्वालापुर, हरिद्वार',
    image: '/gallery/gallery-1.jpg',
    description: '',
    status: 'सक्रिय'
  });

  // Form states for adding/editing news
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [newNews, setNewNews] = useState({
    title: '',
    date: new Date().toLocaleDateString('hi-IN'),
    location: '',
    source: 'प्रेस विज्ञप्ति',
    tag: 'धार्मिक एवं सामाजिक कार्यक्रम',
    category: 'धार्मिक एवं सामाजिक कार्यक्रम',
    image: '/gallery/gallery-2.jpg',
    excerpt: '',
    fullContent: ''
  });

  // Form states for adding gallery photo
  const [newMedia, setNewMedia] = useState({
    title: '',
    category: 'Public Events',
    url: '/gallery/gallery-3.jpg',
    date: new Date().toLocaleDateString('hi-IN'),
    type: 'photo'
  });

  const [statusNotice, setStatusNotice] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default master PIN for admin access
    if (password === 'admin123' || password === 'subodh2024') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('गलत पासवर्ड! (डिफ़ॉल्ट पासवर्ड: admin123)');
    }
  };

  const showNotice = (msg) => {
    setStatusNotice(msg);
    setTimeout(() => setStatusNotice(''), 3000);
  };

  // Activity handlers
  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!newActivity.title) return;
    const item = { ...newActivity, id: 'act-' + Date.now() };
    setActivities([item, ...activities]);
    showNotice('नई सार्वजनिक गतिविधि सफलतापूर्वक जोड़ी गई!');
    setNewActivity({
      title: '',
      category: 'public-outreach',
      date: new Date().toLocaleDateString('hi-IN'),
      location: 'ज्वालापुर, हरिद्वार',
      image: '/gallery/gallery-1.jpg',
      description: '',
      status: 'सक्रिय'
    });
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter(a => a.id !== id));
    showNotice('गतिविधि हटा दी गई!');
  };

  // News handlers
  const handleStartEditNews = (news) => {
    setEditingNewsId(news.id);
    setNewNews({
      title: news.title || '',
      date: news.date || '',
      location: news.location || '',
      source: news.source || 'प्रेस विज्ञप्ति',
      tag: news.tag || news.category || 'धार्मिक एवं सामाजिक कार्यक्रम',
      category: news.category || news.tag || 'धार्मिक एवं सामाजिक कार्यक्रम',
      image: news.image || '',
      excerpt: news.excerpt || '',
      fullContent: news.fullContent || ''
    });
  };

  const handleCancelEditNews = () => {
    setEditingNewsId(null);
    setNewNews({
      title: '',
      date: new Date().toLocaleDateString('hi-IN'),
      location: '',
      source: 'प्रेस विज्ञप्ति',
      tag: 'धार्मिक एवं सामाजिक कार्यक्रम',
      category: 'धार्मिक एवं सामाजिक कार्यक्रम',
      image: '/gallery/gallery-2.jpg',
      excerpt: '',
      fullContent: ''
    });
  };

  const handleSaveNews = (e) => {
    e.preventDefault();
    if (!newNews.title) return;

    if (editingNewsId) {
      setNewsItems(newsItems.map(item => 
        item.id === editingNewsId ? { ...item, ...newNews } : item
      ));
      showNotice('समाचार विवरण सफलतापूर्वक अपडेट हुआ!');
      handleCancelEditNews();
    } else {
      const item = { 
        ...newNews, 
        id: 'news-' + Date.now(), 
        isLatest: true 
      };
      setNewsItems([item, ...newsItems]);
      showNotice('नया समाचार सफलतापूर्वक प्रकाशित हुआ!');
      handleCancelEditNews();
    }
  };

  const handleDeleteNews = (id) => {
    setNewsItems(newsItems.filter(n => n.id !== id));
    showNotice('समाचार हटा दिया गया!');
  };

  // Media handlers
  const handleAddMedia = (e) => {
    e.preventDefault();
    if (!newMedia.title) return;
    const item = { ...newMedia, id: 'med-' + Date.now() };
    setGalleryItems([item, ...galleryItems]);
    showNotice('मीडिया गैलरी में नई तस्वीर जोड़ी गई!');
    setNewMedia({
      title: '',
      category: 'Public Events',
      url: '/gallery/gallery-3.jpg',
      date: new Date().toLocaleDateString('hi-IN'),
      type: 'photo'
    });
  };

  const handleDeleteMedia = (id) => {
    setGalleryItems(galleryItems.filter(m => m.id !== id));
    showNotice('गैलरी से तस्वीर हटा दी गई!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#172033] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF683D] flex items-center justify-center font-bold text-xs">
              SR
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                सुबोध राकेश — एडमिन कंट्रोल पैनल (Admin Portal)
              </h3>
              <p className="text-[11px] text-slate-400">
                वेबसाइट सामग्री, समाचार, सार्वजनिक गतिविधियां एवं संदेश प्रबंधन
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs"
              >
                <LogOut size={14} />
                <span>लॉगआउट</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Status Notice Toast */}
        {statusNotice && (
          <div className="px-6 py-2.5 bg-emerald-500 text-white text-xs font-bold flex items-center gap-2">
            <CheckCircle size={15} />
            <span>{statusNotice}</span>
          </div>
        )}

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-8 sm:p-14 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-[#FF683D] flex items-center justify-center mb-4 shadow-sm">
              <Lock size={30} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#172033]">
              एडमिन प्रमाणीकरण (Security Login)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mt-1 mb-6">
              सुरक्षा कारणों से केवल अधिकृत व्यक्ति ही वेबसाइट सामग्री को बदल सकते हैं।
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="एडमिन पासवर्ड दर्ज करें (admin123)"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF683D] focus:ring-2 focus:ring-orange-100"
              />

              {authError && (
                <p className="text-xs text-rose-500 font-semibold">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#FF683D] hover:bg-[#E55328] text-white font-bold text-sm shadow-md transition"
              >
                डैशबोर्ड में प्रवेश करें
              </button>

              <div className="text-[11px] text-slate-400 pt-2">
                डिफ़ॉल्ट मास्टर पासवर्ड: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-700">admin123</code>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-60 bg-[#F5F6FA] border-r border-slate-200 p-3 flex md:flex-col gap-1 overflow-x-auto shrink-0">
              <button
                onClick={() => setCurrentTab('overview')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition ${
                  currentTab === 'overview'
                    ? 'bg-[#172033] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <LayoutDashboard size={16} />
                <span>ओवरव्यू (Overview)</span>
              </button>

              <button
                onClick={() => setCurrentTab('activities')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition ${
                  currentTab === 'activities'
                    ? 'bg-[#172033] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Calendar size={16} />
                <span>गतिविधियां ({activities.length})</span>
              </button>

              <button
                onClick={() => setCurrentTab('news')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition ${
                  currentTab === 'news'
                    ? 'bg-[#172033] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Newspaper size={16} />
                <span>समाचार व मीडिया ({newsItems.length})</span>
              </button>

              <button
                onClick={() => setCurrentTab('gallery')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition ${
                  currentTab === 'gallery'
                    ? 'bg-[#172033] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <ImageIcon size={16} />
                <span>गैलरी प्रबंधन ({galleryItems.length})</span>
              </button>

              <button
                onClick={() => setCurrentTab('messages')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition ${
                  currentTab === 'messages'
                    ? 'bg-[#172033] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Inbox size={16} />
                <span>संदेश इनबॉक्स ({messages.length})</span>
              </button>

              <button
                onClick={() => setCurrentTab('backend')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold text-left whitespace-nowrap transition ${
                  currentTab === 'backend'
                    ? 'bg-[#172033] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Server size={16} />
                <span>बैकएंड सेटअप गाइड</span>
              </button>
            </div>

            {/* Active Tab Panel */}
            <div className="flex-1 p-6 overflow-y-auto">
              
              {/* TAB 1: OVERVIEW */}
              {currentTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#172033]">डैशबोर्ड अवलोकन (Overview)</h4>
                    <p className="text-xs text-slate-500">लाइव वेबसाइट स्थिति व त्वरित आँकड़े</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-[#FF683D]">
                      <div className="text-2xl font-black">{activities.length}</div>
                      <div className="text-xs text-slate-600 mt-1 font-semibold">कुल सार्वजनिक गतिविधियां</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
                      <div className="text-2xl font-black">{newsItems.length}</div>
                      <div className="text-xs text-slate-600 mt-1 font-semibold">प्रकाशित समाचार व घोषणाएं</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600">
                      <div className="text-2xl font-black">{galleryItems.length}</div>
                      <div className="text-xs text-slate-600 mt-1 font-semibold">फोटो व वीडियो गैलरी</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                      <div className="text-2xl font-black">{messages.length}</div>
                      <div className="text-xs text-slate-600 mt-1 font-semibold">प्राप्त संपर्क संदेश</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F5F6FA] border border-slate-200 space-y-3">
                    <h5 className="font-bold text-sm text-[#172033]">सुबोध राकेश जी का आधिकारिक परिचय संक्षेप</h5>
                    <div className="text-xs text-slate-600 space-y-1">
                      <p>• <strong>स्थान:</strong> ज्वालापुर, हरिद्वार, उत्तराखंड</p>
                      <p>• <strong>ईमेल:</strong> {personalInfo.email}</p>
                      <p>• <strong>फोन:</strong> +91 {personalInfo.phone}</p>
                      <p>• <strong>इंस्टाग्राम:</strong> {personalInfo.instagram}</p>
                      <p>• <strong>फेसबुक पेज:</strong> {personalInfo.facebookPage}</p>
                      <p>• <strong>फेसबुक अकाउंट:</strong> {personalInfo.facebookProfile}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: MANAGE ACTIVITIES */}
              {currentTab === 'activities' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#172033]">सार्वजनिक गतिविधियां जोड़ें व प्रबंधित करें</h4>
                    <p className="text-xs text-slate-500">जनसंपर्क, चौपाल व सामुदायिक बैठकों का विवरण</p>
                  </div>

                  {/* Add form */}
                  <form onSubmit={handleAddActivity} className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200 space-y-3">
                    <div className="font-bold text-xs text-[#172033] uppercase">नई गतिविधि जोड़ें</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="गतिविधि का नाम"
                        value={newActivity.title}
                        onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                        className="px-3 py-2 rounded-lg border text-xs"
                        required
                      />
                      <input
                        type="text"
                        placeholder="स्थान (उदा. ज्वालापुर)"
                        value={newActivity.location}
                        onChange={(e) => setNewActivity({ ...newActivity, location: e.target.value })}
                        className="px-3 py-2 rounded-lg border text-xs"
                      />
                    </div>
                    <textarea
                      placeholder="संक्षिप्त विवरण..."
                      rows={2}
                      value={newActivity.description}
                      onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-xs"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#172033] text-white text-xs font-bold hover:bg-[#24324D]"
                    >
                      <Plus size={14} />
                      <span>गतिविधि जोड़ें</span>
                    </button>
                  </form>

                  {/* List */}
                  <div className="space-y-2">
                    {activities.map((a) => (
                      <div key={a.id} className="p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-[#172033]">{a.title}</div>
                          <div className="text-slate-500">{a.location} • {a.date}</div>
                        </div>
                        <button
                          onClick={() => handleDeleteActivity(a.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                          title="हटाएं"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: MANAGE NEWS */}
              {currentTab === 'news' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[#172033]">
                        {editingNewsId ? 'समाचार विवरण संपादित करें (Edit News)' : 'नया समाचार प्रकाशित करें (Add News)'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        वास्तविक समाचार, धार्मिक एवं सामाजिक कार्यक्रम, उत्तराखण्ड विशेष अपडेट्स
                      </p>
                    </div>

                    {editingNewsId && (
                      <button
                        onClick={handleCancelEditNews}
                        className="px-3 py-1.5 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300"
                      >
                        एडिट रद्द करें (Cancel)
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  <form onSubmit={handleSaveNews} className="p-5 rounded-2xl bg-[#F5F6FA] border border-slate-200 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">समाचार शीर्षक *</label>
                        <input
                          type="text"
                          placeholder="समाचार का मुख्य शीर्षक"
                          value={newNews.title}
                          onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">समाचार श्रेणी (Category)</label>
                        <select
                          value={newNews.category || newNews.tag}
                          onChange={(e) => setNewNews({ ...newNews, category: e.target.value, tag: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                        >
                          <option value="धार्मिक एवं सामाजिक कार्यक्रम">धार्मिक एवं सामाजिक कार्यक्रम</option>
                          <option value="उत्तराखण्ड विशेष">उत्तराखण्ड विशेष</option>
                          <option value="जनसंपर्क गतिविधियां">जनसंपर्क गतिविधियां</option>
                          <option value="सामाजिक कार्य">सामाजिक कार्य</option>
                          <option value="नवीनतम समाचार">नवीनतम समाचार</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">तारीख (Date)</label>
                        <input
                          type="text"
                          placeholder="उदा. 9 नवंबर या नवंबर 2024"
                          value={newNews.date}
                          onChange={(e) => setNewNews({ ...newNews, date: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">स्थान (Location)</label>
                        <input
                          type="text"
                          placeholder="उदा. ज्वालापुर, गढ़मीरपुर, हरिद्वार"
                          value={newNews.location}
                          onChange={(e) => setNewNews({ ...newNews, location: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">स्रोत (Source)</label>
                        <input
                          type="text"
                          placeholder="उदा. आधिकारिक प्रेस विज्ञप्ति"
                          value={newNews.source}
                          onChange={(e) => setNewNews({ ...newNews, source: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">फोटो URL या इमेज लिंक</label>
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={newNews.image}
                        onChange={(e) => setNewNews({ ...newNews, image: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">संक्षिप्त सारांश (Excerpt) *</label>
                      <textarea
                        placeholder="समाचार का मुख्य सारांश जो कार्ड में दिखेगा..."
                        rows={2}
                        value={newNews.excerpt}
                        onChange={(e) => setNewNews({ ...newNews, excerpt: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">पूरा समाचार विवरण (Full Content)</label>
                      <textarea
                        placeholder="विस्तृत समाचार, वक्ताओं, अतिथियों के नाम और पूरा संदेश..."
                        rows={5}
                        value={newNews.fullContent}
                        onChange={(e) => setNewNews({ ...newNews, fullContent: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FF683D] text-white text-xs font-bold hover:bg-[#E55328] shadow-xs"
                      >
                        {editingNewsId ? <Save size={14} /> : <Plus size={14} />}
                        <span>{editingNewsId ? 'अपडेट सेव करें (Save Changes)' : 'समाचार प्रकाशित करें'}</span>
                      </button>

                      {editingNewsId && (
                        <button
                          type="button"
                          onClick={handleCancelEditNews}
                          className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold"
                        >
                          रद्द करें
                        </button>
                      )}
                    </div>
                  </form>

                  {/* List of News Items with Edit and Delete Buttons */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-slate-600 uppercase tracking-wider">
                      वर्तमान प्रकाशित समाचार ({newsItems.length})
                    </h5>

                    {newsItems.map((n) => (
                      <div key={n.id} className="p-3.5 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="space-y-0.5 max-w-xl">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-[#FF683D]">
                              {n.tag || n.category}
                            </span>
                            {n.date && <span className="text-slate-400 font-mono text-[11px]">{n.date}</span>}
                          </div>
                          <div className="font-bold text-[#172033] line-clamp-1">{n.title}</div>
                          <div className="text-slate-500 line-clamp-1 text-[11px]">{n.excerpt}</div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => handleStartEditNews(n)}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold"
                            title="एडिट करें"
                          >
                            <Edit3 size={13} />
                            <span>एडिट</span>
                          </button>

                          <button
                            onClick={() => handleDeleteNews(n.id)}
                            className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                            title="हटाएं"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: GALLERY */}
              {currentTab === 'gallery' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#172033]">मीडिया गैलरी प्रबंधन</h4>
                    <p className="text-xs text-slate-500">फोटो और वीडियो लिंक जोड़ें</p>
                  </div>

                  <form onSubmit={handleAddMedia} className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="फोटो / वीडियो शीर्षक"
                        value={newMedia.title}
                        onChange={(e) => setNewMedia({ ...newMedia, title: e.target.value })}
                        className="px-3 py-2 rounded-lg border text-xs"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={newMedia.url}
                        onChange={(e) => setNewMedia({ ...newMedia, url: e.target.value })}
                        className="px-3 py-2 rounded-lg border text-xs"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#172033] text-white text-xs font-bold"
                    >
                      <Plus size={14} />
                      <span>तस्वीर जोड़ें</span>
                    </button>
                  </form>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {galleryItems.map((m) => (
                      <div key={m.id} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 group">
                        <img src={m.url} alt={m.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => handleDeleteMedia(m.id)}
                          className="absolute top-2 right-2 p-1 rounded bg-rose-600 text-white opacity-0 group-hover:opacity-100 transition"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: MESSAGES */}
              {currentTab === 'messages' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#172033]">नागरिकों के प्राप्त संदेश ({messages.length})</h4>
                    <p className="text-xs text-slate-500">संपर्क फॉर्म से भेजे गए सभी संदेश</p>
                  </div>

                  {messages.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-400 bg-slate-50 rounded-2xl">
                      वर्तमान में कोई नया संदेश उपलब्ध नहीं है।
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((msg) => (
                        <div key={msg.id} className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200 text-xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#172033] text-sm">{msg.name}</span>
                            <span className="text-slate-400 font-mono text-[11px]">{msg.date}</span>
                          </div>
                          <div className="text-slate-600">
                            <strong>ईमेल:</strong> {msg.email} | <strong>फोन:</strong> {msg.phone}
                          </div>
                          <div className="text-slate-800 font-semibold pt-1">
                            विषय: {msg.subject}
                          </div>
                          <p className="text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 mt-1">
                            {msg.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 7: BACKEND SETUP GUIDE */}
              {currentTab === 'backend' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="text-lg font-bold text-[#172033]">Node.js & MongoDB बैकएंड सेटअप निर्देश</h4>
                    <p className="text-slate-500">डेटाबेस को स्थायी रूप से कनेक्ट करने के लिए निम्नलिखित निर्देश देखें:</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono space-y-2 overflow-x-auto text-[11px]">
                    <p className="text-orange-400">// 1. MongoDB Connection (server/db.js):</p>
                    <p>const mongoose = require('mongoose');</p>
                    <p>mongoose.connect(process.env.MONGODB_URI);</p>
                    <br />
                    <p className="text-orange-400">// 2. Contact Schema & API route:</p>
                    <p>app.post('/api/contact', async (req, res) =&gt; &#123;</p>
                    <p>&nbsp;&nbsp;const newMsg = await ContactMessage.create(req.body);</p>
                    <p>&nbsp;&nbsp;res.json(&#123; success: true, newMsg &#125;);</p>
                    <p>&#125;);</p>
                  </div>

                  <p className="text-slate-600">
                    वर्तमान में यह डैशबोर्ड ब्राउज़र के सुरक्षित स्टोरेज (Local Memory) में रियल-टाइम काम करता है, जिससे आप बिना सर्वर के भी सभी बदलाव लाइव देख सकते हैं।
                  </p>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
