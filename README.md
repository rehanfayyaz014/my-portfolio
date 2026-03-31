# Muhammad Rehan - Professional Portfolio

A modern, interactive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a Glassmorphism design with smooth animations and responsive layout.

## Features

✨ **Design**
- Glassmorphism Dark theme with premium aesthetic
- Gradient accents (Cyan to Indigo)
- Smooth scroll-triggered animations
- Fully responsive (mobile, tablet, desktop)
- Dark mode optimized UI

🎨 **Components**
- Hero section with profile picture placeholder
- About section with focus areas
- Skills grid (15+ technical skills)
- Projects showcase (7 featured projects)
- Education timeline
- Contact form & social links
- Back to Top button
- Navbar with smooth scrolling

🚀 **Performance**
- Fast page loads with Vite
- Optimized animations with Framer Motion
- Clean, modular component structure
- Easy data management with separated data.js

## Tech Stack

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 10** - Animation library
- **Vite** - Build tool & dev server
- **React Icons** - Icon library

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with profile
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── About.jsx          # About section
│   │   ├── Skills.jsx         # Skills showcase
│   │   ├── Projects.jsx       # Projects grid (2-3 columns)
│   │   ├── Education.jsx      # Education timeline
│   │   ├── Contact.jsx        # Contact form & footer
│   │   └── BackToTop.jsx      # Scroll to top button
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   ├── data.js                # Portfolio data
│   └── globals.css            # Global styles & Tailwind
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## Data Management

All portfolio content is stored in `src/data.js`. To update your portfolio, simply edit this file:

- **Personal Info**: name, tagline, contact details
- **About**: summary and focus areas
- **Skills**: Add/remove technical skills
- **Projects**: Update projects with descriptions, technologies, and links
- **Education**: Add/modify education details
- **Socials**: Update LinkedIn, GitHub, and email links

Example:
```javascript
export const portfolioData = {
  personal: {
    name: 'MUHAMMAD REHAN',
    email: 'rehanfayyaz014@gmail.com',
    // ... more fields
  },
  // ... other sections
};
```

## Customization

### Update Profile Picture
In `src/data.js`, replace the `profileImage` URL:
```javascript
profileImage: 'YOUR_IMAGE_URL_HERE'
```

### Download Resume Button
In `src/components/Hero.jsx`, update the resume URL:
```javascript
const resumeUrl = 'YOUR_RESUME_PDF_URL';
```

### Change Colors
Edit `tailwind.config.js` to modify:
- Primary gradient: `#20c997` (teal) to `#6366f1` (indigo)
- Accent colors in the theme extend object

### Modify Animations
All animations use Framer Motion. Adjust timing and effects in individual components:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Deploy to GitHub Pages
1. Add to `package.json`: `"homepage": "https://username.github.io/portfolio"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

## Contact Form

The contact form is static (no backend). To add email functionality:
1. Use services like Formspree, Netlify Forms, or EmailJS
2. Update the `Contact.jsx` handleSubmit function
3. Replace the static success message with API calls

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+
- Mobile-friendly and responsive
- Optimized asset loading
- Smooth 60fps animations

## Future Enhancements

- [ ] Backend email integration
- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multilingual support
- [ ] Project filtering
- [ ] Live demo links

## License

This project is open-source and available under the MIT License.

## Support

For questions or issues, feel free to reach out:
- 📧 Email: rehanfayyaz014@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/muhammad-rehan-b20888283
- 🐙 GitHub: https://github.com/rehanfayyaz014

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
