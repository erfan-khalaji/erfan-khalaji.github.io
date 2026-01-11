# Erfan Khalaji - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, optimized for GitHub Pages deployment.

## Features

- **Modern Design**: Clean, professional aesthetic optimized for technical roles
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Optimized for performance with static export
- **SEO Optimized**: Proper metadata and semantic HTML
- **Easy to Maintain**: Centralized data structure for easy updates

## Prerequisites

- Node.js 18+ and npm
- Git

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your photos:**
   - Place your hero photo at: `public/images/hero-photo.jpg`
   - Place your about photo at: `public/images/about-photo.jpg`
   - Recommended sizes:
     - Hero photo: 800x800px (square, will be displayed as circle)
     - About photo: 1200x800px (landscape)

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This creates an `out` directory with static files ready for deployment.

## Adding Your Photos

1. **Hero Photo** (`public/images/hero-photo.jpg`):
   - Professional headshot
   - Square format recommended (1:1 aspect ratio)
   - High quality, well-lit
   - Will be displayed as a circular image

2. **About Photo** (`public/images/about-photo.jpg`):
   - Can be a working photo, casual shot, or another professional image
   - Landscape format recommended (3:2 or 16:9 aspect ratio)
   - Should complement the hero photo

**Note**: If you don't have photos ready, the site will still work but images will show as broken. You can add placeholder images or update the image paths in the components.

## Adding GitHub Links to Projects

Edit `src/lib/data.ts` and add `githubUrl` to your projects:

```typescript
{
  title: "Your Project",
  // ... other fields
  githubUrl: "https://github.com/yourusername/your-repo",
}
```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy
   - Workflow file: `.github/workflows/deploy.yml`

3. **Your site will be live at:**
   - `https://erfan-khalaji.github.io`

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The `out` directory contains all static files

3. Push the `out` directory contents to the `gh-pages` branch or use GitHub Pages settings

## Updating Content

All content is centralized in `src/lib/data.ts`. Update:
- **Experience**: Edit the `jobs` array
- **Skills**: Edit the `skillCategories` array
- **Projects**: Edit the `projects` array
- **Contact Info**: Edit the `contactInfo` object
- **Summary**: Edit the `professionalSummary` string

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme. The primary color is currently set to blue (`#2563eb`).

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Each component uses Tailwind classes
- Custom CSS: Add to `globals.css` or create component-specific CSS files

## Project Structure

```
├── public/
│   ├── images/          # Your photos go here
│   └── resume.pdf       # Your resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Main page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   └── lib/
│       └── data.ts      # All content data
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
└── next.config.js       # Next.js configuration
```

## Tech Stack

- **Next.js 14**: React framework with static export
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **GitHub Pages**: Hosting platform

## License

This project is personal portfolio content. All rights reserved.

## Support

For issues or questions, please open an issue on GitHub or contact me at ekhalaji@gmail.com.

