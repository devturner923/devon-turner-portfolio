# 🚀 React Portfolio Deployment Guide

## 📋 Prerequisites
- Node.js installed (v16 or higher)
- Git configured
- GitHub account

## 🛠️ Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure EmailJS (Optional)
1. Follow the `EMAILJS_SETUP.md` guide
2. Update `src/config/emailjs.js` with your credentials

### Step 3: Test Locally
```bash
npm start
```
Visit `http://localhost:3000` to preview your portfolio.

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Deploy to GitHub Pages
```bash
npm run deploy
```

## 🎯 What Happens During Deployment

1. **Build Process**: Creates optimized production build
2. **GitHub Pages**: Deploys to `https://marko-0925.github.io/portfolio/`
3. **Automatic**: Updates on every `npm run deploy`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Experience.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── ParticleBackground.js
│   ├── CustomCursor.js
│   └── LoadingAnimation.js
├── config/
│   └── emailjs.js      # EmailJS configuration
├── utils/
│   └── animations.js   # Framer Motion animations
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles

public/
├── profile-avatar.png
├── davidsonhomes-demo.png
├── hotel-royal-demo.png
├── hermitage-demo.png
├── offorte-demo.png
├── _redirects          # SPA routing
└── .nojekyll          # GitHub Pages config
```

## ✨ Features

### 🎨 **Modern Design**
- Responsive layout
- Custom cursor
- Particle background
- Smooth animations

### 🚀 **Performance**
- Optimized build
- Lazy loading
- Fast loading times
- SEO friendly

### 📧 **Contact Form**
- EmailJS integration
- Direct Gmail delivery
- Form validation
- Success/error states

### 🎭 **Animations**
- Framer Motion
- Scroll-triggered animations
- Hover effects
- Page transitions

## 🔧 Customization

### Update Personal Information
Edit these files:
- `src/components/Hero.js` - Name, title, description
- `src/components/About.js` - About text, skills
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Project details
- `src/components/Contact.js` - Contact information

### Change Colors/Styles
Edit `src/index.css` for global styles.

### Add New Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.js`
3. Add navigation link in `src/components/Header.js`

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
```bash
# Check GitHub Pages settings
# Ensure repository is public
# Verify gh-pages branch exists
```

### EmailJS Not Working
1. Check API keys in `src/config/emailjs.js`
2. Verify EmailJS service is active
3. Check browser console for errors

## 📱 Mobile Responsive
The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎉 Success!
Your React portfolio is now live at:
**https://marko-0925.github.io/portfolio/**

## 🔄 Updates
To update your portfolio:
1. Make changes to your code
2. Run `npm run deploy`
3. Changes go live automatically!

## 📞 Support
If you need help:
1. Check the troubleshooting section
2. Review the EmailJS setup guide
3. Check GitHub Pages documentation

