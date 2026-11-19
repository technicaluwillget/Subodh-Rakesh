# Subhodh Rakesh — Senior Personal Portfolio

A modern, responsive, and performant personal portfolio website engineered for **Subhodh Rakesh**. Built with modern frontend architecture, aesthetic glassmorphism, Framer Motion micro-interactions, dark/light theme support, and full accessibility.

---

## 🚀 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (with custom color tokens & glassmorphism utilities)
- **Animations:** Framer Motion (respecting `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Typography:** Outfit (Display/Headings), Inter (Body), JetBrains Mono (Badges & Code)

---

## 🎨 Color Palette & Design System

| Element | Dark Mode (Primary) | Light Mode |
|---|---|---|
| Background | `#0B0F19` | `#F8FAFC` |
| Surface / Cards | `#111827` (Glassmorphism 70%) | `#FFFFFF` (Glassmorphism 85%) |
| Primary Accent | `#6366F1` (Indigo Glow) | `#4F46E5` |
| Secondary Accent | `#06B6D4` (Cyan Glow) | `#0891B2` |
| Main Text | `#F9FAFB` | `#0F172A` |
| Muted Text | `#9CA3AF` | `#64748B` |

---

## 📂 Project Structure

```text
├── public/
│   └── favicon.svg               # Vector brand logo favicon (SR)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx        # Sticky glassmorphic navbar with active section spy, mobile drawer, theme toggle, resume button
│   │   │   ├── Footer.jsx        # Branding, quick links, status indicator, back-to-top button
│   │   │   ├── ParticleBackground.jsx # Lightweight interactive canvas particle system & ambient glows
│   │   │   ├── SectionHeading.jsx# Reusable section heading with animated badge and gradient text
│   │   │   └── ResumeModal.jsx   # Interactive resume viewer with print & text download + confetti
│   │   └── sections/
│   │       ├── Hero.jsx          # Typing role switcher, avatar halo, CTA buttons, metrics bar
│   │       ├── About.jsx         # 2-column story, philosophy, core pillars, career goals
│   │       ├── Skills.jsx        # Categorized skill cards with level badges and filter tabs
│   │       ├── Experience.jsx    # Interactive vertical timeline (Work & Education tabs)
│   │       ├── Projects.jsx      # Filterable project showcase with detail modals & GitHub links
│   │       ├── Achievements.jsx  # Certifications, hackathon victories, and speaker keynotes
│   │       └── Contact.jsx       # Validated contact form, 1-click email copy, status toasts
│   ├── context/
│   │   └── ThemeContext.jsx      # Dark/light mode state synced with document & localStorage
│   ├── data/
│   │   └── portfolioData.js      # Central configuration file for all portfolio content
│   ├── App.jsx                   # Master application layout
│   ├── index.css                 # Custom Tailwind base, components, and scrollbar styles
│   └── main.jsx                  # React DOM mount point
├── index.html                    # SEO tags, Google Fonts, and mobile viewport setup
├── tailwind.config.js            # Extended design system tokens
└── vite.config.js                # Vite build configuration
```

---

## 🛠️ Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` (or the port shown in your terminal) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, minified production bundle in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Customize Content

All text, links, projects, and personal details are centralized in **[`src/data/portfolioData.js`](file:///c:/Users/Vishal/OneDrive/Desktop/Subodh%20Rakesh/src/data/portfolioData.js)**.

1. **Update Name & Bio:** Edit `personalInfo` in `portfolioData.js`.
2. **Add or Modify Skills:** Edit `skillsData.skills` in `portfolioData.js`.
3. **Add Projects:** Add items to `projectsData` with your own demo and GitHub links.
4. **Update Experience:** Adjust `timelineData.experience` and `timelineData.education`.
5. **Connect Contact Form to a Backend:**
   In `src/components/sections/Contact.jsx`, connect to Formspree, EmailJS, or your API route:
   ```javascript
   // Example Formspree integration:
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData)
   });
   ```

---

## ✨ Features & Polish

- **Zero Layout Shifts & Zero Horizontal Overflow**
- **Mobile First & Fully Responsive** (Mobile, Tablet, Laptop, 4K)
- **Reduced Motion Support:** Respects system accessibility preferences
- **Printable & Downloadable Resume:** Direct 1-click text and print preview
- **Interactive Confetti Celebrations** on resume download and message dispatch
- **SEO & Social Open Graph Ready**
