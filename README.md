# My Portfolio

![App Preview](https://imgix.cosmicjs.com/275ddd70-7227-11f1-a87f-d72293b1048a-autopilot-photo-1517245386807-bb43f82c33c4-1782564791445.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern developer portfolio built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Inspired by the soft, dreamy "Murmin" aesthetic of light novels — muted pastels, gentle gradients, elegant serif headings, and airy whitespace. Showcase your projects, skills, work experience, and contact information all powered by your existing Cosmic content.

## ✨ Features

- 🏠 **Elegant Homepage** with hero profile, featured projects, skills preview, and timeline
- 💻 **Projects Gallery** with cover images, screenshots, tech stacks, live & GitHub links
- 🛠️ **Skills Section** grouped by category with proficiency indicators
- 💼 **Work Experience Timeline** with company logos and tech used
- 👤 **About / Contact** with social links and resume download
- 🌸 **Murmin Theme** — soft pastel palette, serif display fonts, dreamy gradients
- 📱 **Fully Responsive** mobile-first design
- ⚡ **Server-Side Rendering** for fast loads and great SEO

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3fc7583086531a9e573f00&clone_repository=6a3fc85b3086531a9e573f49)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info
> i want the theme to be murmin theme like the light novels and stuff make my portfolio for sde"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: profile, skills, work-experience, projects. Create a beautiful, modern, responsive design with a homepage and pages for each content type. A developer portfolio with projects, skills, work experience, and contact info — i want the theme to be murmin theme like the light novels and stuff make my portfolio for sde

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com/docs)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js 18+
- A Cosmic account with your portfolio bucket

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
bun install

# Add your environment variables (see below)

# Run the dev server
bun run dev
```

Create your environment variables in your hosting dashboard or a local `.env` file:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📦 Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with nested data
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single profile
const { object: profile } = await cosmic.objects
  .findOne({ type: 'profile' })
  .depth(1)
```

## 🌌 Cosmic CMS Integration

This app reads from four object types in your bucket:

- **profile** — your name, tagline, bio, avatar, socials, resume
- **skills** — name, category, proficiency
- **work-experience** — company, role, dates, description, tech used
- **projects** — title, summary, screenshots, tech stack, live & GitHub URLs

All data fetching happens server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) for security and performance.

## ☁️ Deployment Options

- **Vercel** — Push to GitHub and import. Add environment variables in project settings.
- **Netlify** — Connect your repo and add the same environment variables.

For production, set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform.

<!-- README_END -->