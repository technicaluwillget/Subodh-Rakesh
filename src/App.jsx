import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PoliticalJourney } from './components/PoliticalJourney';
import { Preparations2027 } from './components/Preparations2027';
import { PublicActivities } from './components/PublicActivities';
import { SocialWork } from './components/SocialWork';
import { MediaGallery } from './components/MediaGallery';
import { NewsUpdates } from './components/NewsUpdates';
import { Contact } from './components/Contact';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { 
  initialPublicActivities, 
  initialNewsUpdates, 
  initialMediaGallery 
} from './data/subhodhData';
import subodhPhoto from './assets/subodh-rakesh.jpg';

export function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  // State managed activities, news, gallery with localStorage persistence
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('sr_activities');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Clear out old dummy activities if present
        if (parsed.some(item => 
          ['act-1', 'act-2', 'act-3', 'act-4', 'act-5', 'act-6'].includes(item.id) ||
          (item.image && item.image.includes('unsplash'))
        )) {
          localStorage.setItem('sr_activities', JSON.stringify([]));
          return [];
        }
        return parsed;
      } catch (e) {
        return [];
      }
    }
    return initialPublicActivities;
  });

  const [newsItems, setNewsItems] = useState(() => {
    const saved = localStorage.getItem('sr_news');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Clear out old dummy news items if present
        if (parsed.some(item => item.id === 'news-1' || item.id === 'news-2')) {
          localStorage.setItem('sr_news', JSON.stringify(initialNewsUpdates));
          return initialNewsUpdates;
        }
        return parsed;
      } catch (e) {
        return initialNewsUpdates;
      }
    }
    return initialNewsUpdates;
  });

  const [galleryItems, setGalleryItems] = useState(() => {
    const saved = localStorage.getItem('sr_gallery');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migrate to real uploaded photos if old unsplash images were cached
        if (parsed.some(item => item.url && item.url.includes('unsplash'))) {
          localStorage.setItem('sr_gallery', JSON.stringify(initialMediaGallery));
          return initialMediaGallery;
        }
        return parsed;
      } catch (e) {
        return initialMediaGallery;
      }
    }
    return initialMediaGallery;
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('sr_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync state changes to localStorage after all states are initialized
  useEffect(() => {
    localStorage.setItem('sr_activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('sr_news', JSON.stringify(newsItems));
  }, [newsItems]);

  useEffect(() => {
    localStorage.setItem('sr_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('sr_messages', JSON.stringify(messages));
  }, [messages]);

  const handleNewMessage = (newMsg) => {
    setMessages(prev => [newMsg, ...prev]);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] text-[#172033] selection:bg-[#FF683D] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Clean White Sticky Navigation Bar */}
      <Navbar 
        onOpenAdmin={() => setAdminOpen(true)}
        onContactClick={() => scrollToSection('contact')}
      />

      {/* 2. Hero Section (Lavender & Light Blue Gradient, 2 Columns) */}
      <Hero
        onProfileClick={() => scrollToSection('about')}
        onActivitiesClick={() => scrollToSection('activities')}
      />

      {/* 3. About Us Section */}
      <About />

      {/* 3.5. Political Journey & Family Legacy Section */}
      <PoliticalJourney />

      {/* 3.8. Recent Activities & 2027 Preparations Section */}
      <Preparations2027 />

      {/* 4. Public Activities Section */}
      <PublicActivities activities={activities} />

      {/* 5. Social Work Section */}
      <SocialWork />

      {/* 6. Photo & Video Gallery (Instagram style) */}
      <MediaGallery galleryItems={galleryItems} />

      {/* 7. News & Updates Section */}
      <NewsUpdates newsItems={newsItems} />

      {/* 8. Contact Section */}
      <Contact onNewMessage={handleNewMessage} />

      {/* 9. Location & Google Maps Section */}
      <LocationSection />

      {/* 10. Footer */}
      <Footer />

      {/* 11. Admin Control Panel Modal */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        activities={activities}
        setActivities={setActivities}
        newsItems={newsItems}
        setNewsItems={setNewsItems}
        galleryItems={galleryItems}
        setGalleryItems={setGalleryItems}
        messages={messages}
      />

    </div>
  );
}

export default App;
