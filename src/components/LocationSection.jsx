import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/subhodhData';

export const LocationSection = () => {
  // Google Maps Embed URL for Jwalapur, Haridwar, Uttarakhand
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27668.7903723381!2d78.10657386008688!3d29.924296720235378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947098e98bc01%3A0x673993e36eec89e9!2sJwalapur%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass size={14} className="text-blue-600" />
            <span>क्षेत्रीय उपस्थिति</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
            हमारा स्थान <span className="text-[#FF683D]">(Our Location)</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {personalInfo.location}
          </p>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-clean relative bg-slate-100">
          
          {/* Map Info Floating Box */}
          <div className="absolute top-4 left-4 z-10 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-slate-200 hidden sm:block">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF683D] mb-1">
              <MapPin size={14} />
              <span>ज्वालापुर, हरिद्वार</span>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              उत्तराखंड के पवित्र हरिद्वार जिले के प्रमुख ऐतिहासिक व जनसेवा क्षेत्र ज्वालापुर की मानचित्र स्थिति।
            </p>
            <a
              href="https://maps.google.com/?q=Jwalapur,Haridwar,Uttarakhand"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-700"
            >
              <span>गूगल मैप्स में खोलें</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96">
            <iframe
              title="Jwalapur Haridwar Map"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
