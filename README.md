# Portfolio Website - Mohammed Naseer

A modern, fully responsive portfolio website built with React, TypeScript, and Tailwind CSS v4.2. Features smooth animations, scroll effects, and a clean, professional design.

## 🚀 Production Deployment

The portfolio website is live and hosted on Vercel. Check it out here:

- **Preview / Domains:** [portfolio-website-five-tau-kt3osfqt7j.vercel.app](https://mhmd-naser-portfolio.vercel.app/)

## 🎨 Features

- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in, slide-in, and scroll-triggered animations using Motion (formerly Framer Motion)
- **Modern Design**: Clean UI with a professional color scheme
- **Accessible**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and efficient rendering

## 🛠️ Tech Stack

- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS v4.2** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Fixed navigation bar
│   │   ├── Hero.tsx          # Hero section with intro
│   │   ├── About.tsx         # About me section
│   │   ├── Expertise.tsx     # Skills and expertise cards
│   │   ├── Projects.tsx      # Featured projects gallery
│   │   ├── Process.tsx       # Design process steps
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── Contact.tsx       # Contact CTA section
│   │   └── Footer.tsx        # Footer component
│   └── App.tsx               # Main app component
├── imports/                  # Figma imported assets
├── styles/
│   ├── fonts.css            # Font imports
│   ├── index.css            # Global styles
│   ├── tailwind.css         # Tailwind imports
│   └── theme.css            # Theme variables
```

## 🎯 Customization Guide

### 1. Personal Information

Update the following in `src/app/components/Hero.tsx`:
- Name and title
- Profile image
- Stats (years of experience, projects, clients)

### 2. About Me Section

Edit `src/app/components/About.tsx`:
- Update the bio text
- Modify highlighted technologies

### 3. Skills & Expertise

Modify the `expertiseCards` array in `src/app/components/Expertise.tsx`:
```typescript
const expertiseCards = [
  {
    icon: <YourIcon />,
    title: "Your Skill",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // Add more cards...
];
```

### 4. Projects

Update projects in `src/app/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Project Name",
    category: "Category",
    tags: ["Tag1", "Tag2"],
    image: yourImage,
    description: "Project description",
  },
  // Add more projects...
];
```

### 5. Testimonials

Edit testimonials in `src/app/components/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    name: "Client Name",
    role: "Position, Company",
    rating: 5,
    text: "Testimonial text",
    avatar: avatarImage,
  },
  // Add more testimonials...
];
```

### 6. Contact Information

Update contact links in `src/app/components/Contact.tsx`:
- Email address
- Social media links (LinkedIn, Instagram, etc.)

### 7. Colors

Primary brand color is defined throughout the components:
- Primary Blue: `#135bec`
- Hover Blue: `#0f4ac5`
- Dark Text: `#0f172a`
- Gray Text: `#475569` and `#64748b`

To change colors globally, search and replace these hex values.

### 8. Navigation Links

Update navigation in `src/app/components/Navigation.tsx`:
```typescript
const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  // Add or modify links...
];
```

## 🎬 Animation Customization

All animations use Motion (Framer Motion). To modify:

**Fade In Animation:**
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Hover Effects:**
```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

**Scroll-Triggered Animations:**
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
```

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 📝 Adding New Sections

To add a new section:

1. Create a new component in `src/app/components/`
2. Import and add it to `App.tsx`
3. Add navigation link if needed
4. Style with Tailwind CSS
5. Add animations with Motion

Example:
```typescript
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function NewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Your content */}
      </motion.div>
    </section>
  );
}
```

## 🎨 Design System

The project uses a consistent design system:
- **Spacing**: 8px grid system
- **Rounded Corners**: 16px, 24px, 9999px (full)
- **Shadows**: Subtle elevation with `shadow-sm`, `shadow-xl`
- **Typography**: Inter font family

## 📦 Images

Images are imported from Figma assets:
```typescript
import image from "figma:asset/[hash].png";
```

To replace with your own images:
1. Use the `ImageWithFallback` component
2. Or use standard `img` tags with your image URLs

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and for portfolio use.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

---

**Built with ❤️ using React & Tailwind CSS**
