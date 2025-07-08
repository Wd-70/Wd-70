# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Commands
- `npm run dev` - Start development server (uses NODE_OPTIONS for memory allocation)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Development Workflow
The development server uses increased memory allocation (`NODE_OPTIONS='--max-old-space-size=4096'`) to handle the build process effectively.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animation**: Framer Motion for smooth transitions
- **Database**: MongoDB (via Mongoose)
- **Email**: Nodemailer with Gmail SMTP
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Fonts**: Inter and Fira Code (Google Fonts)

### Key Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── projects/          # Project showcase pages
│   ├── contact/           # Contact page
│   └── about/             # About page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Skills, etc.)
│   ├── projects/         # Project-specific components
│   ├── contact/          # Contact form components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
│   ├── data/            # Static data (projects.ts)
│   ├── db/              # Database connection
│   └── validations/     # Zod schemas
├── models/              # Mongoose models
├── types/               # TypeScript type definitions
└── constants/           # Animation constants
```

### Core Data Model
Projects are managed through a centralized data structure in `lib/data/projects.ts`:
- Categories: 'mobile', 'web', 'automation'
- Three-tier pricing structure (standard, deluxe, premium)
- Gallery images and tech stack information
- Detailed project information including challenges and solutions

### Theme System
- Dark/Light mode toggle with system preference detection
- FOUC (Flash of Unstyled Content) prevention
- Smooth 0.3s transition animations between themes
- Theme persistence via localStorage

### Animation System
- Framer Motion for page transitions and micro-interactions
- Stagger animations for list items
- Scroll-triggered animations using Intersection Observer
- Performance-optimized animations using transform and opacity

### Contact System
- React Hook Form with Zod validation
- MongoDB integration for message storage
- Email notifications via Nodemailer
- IP address and user agent logging for security

## Environment Variables Required

```env
# Database
MONGODB_URI=mongodb+srv://...

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

## Key Conventions

### File Naming
- Components: PascalCase (`MyComponent.tsx`)
- Hooks: camelCase with 'use' prefix (`useScrollAnimation.ts`)
- Utilities: camelCase (`utils.ts`)
- Types: PascalCase (`Project.ts`)

### Component Structure
- Use 'use client' directive for client-side components
- Implement proper TypeScript typing for all components
- Follow shadcn/ui patterns for consistent styling
- Use Tailwind CSS utility classes

### State Management
- React Hook Form for form state
- Local state with useState for simple components
- Context API for theme management

### Performance Considerations
- Next.js Image component for optimized images
- Dynamic imports for code splitting
- Proper memo usage for expensive operations
- Intersection Observer for scroll animations

## Common Tasks

### Adding New Projects
1. Update `lib/data/projects.ts` with new project data
2. Add project images to `public/images/projects/`
3. Create detail components in `src/app/projects/detail/components/` if needed
4. Update TypeScript types in `types/project.ts` if schema changes

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Implement consistent spacing using Tailwind's scale
- Use CSS variables for theme colors
- Maintain 60fps animations by using transform and opacity

### Form Handling
- Use React Hook Form with Zod for validation
- Implement proper error handling and user feedback
- Use Sonner for toast notifications
- Follow accessibility guidelines for forms

## Project-Specific Details

This is a Korean developer portfolio website ('Wd-70') showcasing Flutter mobile apps, Next.js web applications, and automation projects. The site uses a service-oriented approach similar to freelance platforms, with detailed pricing tiers and project galleries.

The codebase emphasizes performance, accessibility, and user experience with smooth animations and responsive design across all devices.