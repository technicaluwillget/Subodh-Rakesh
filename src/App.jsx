import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
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

export function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  // State managed activities, news, gallery with localStorage persistence
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('sr_activities');
    return saved ? JSON.parse(saved) : initialPublicActivities;
  });

  const [newsItems, setNewsItems] = useState(() => {
    const saved = localStorage.getItem('sr_news');
    return saved ? JSON.parse(saved) : initialNewsUpdates;
  });

  const [galleryItems, setGalleryItems] = useState(() => {
    const saved = localStorage.getItem('sr_gallery');
    return saved ? JSON.parse(saved) : initialMediaGallery;
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('sr_messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [customPhoto, setCustomPhoto] = useState(() => {
    return localStorage.getItem('sr_custom_photo') || '/subodh-rakesh.jpg';
  });

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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomPhoto(reader.result);
        localStorage.setItem('sr_custom_photo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
        customPhoto={customPhoto}
        onPhotoChange={handlePhotoChange}
      />

      {/* 3. About Us Section */}
      <About customPhoto={customPhoto} />

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
        customPhoto={customPhoto}
        onPhotoChange={handlePhotoChange}
      />

    </div>
  );
}

export default App;
