# 🚀 Quick Setup Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites
- ✅ Node.js 18+ installed
- ✅ npm or yarn
- ✅ A code editor (VS Code recommended)
- ✅ Terminal/Command line access

## Step 1: Install & Run (1 minute)

```bash
cd "Personal Website"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** in your browser ✅

## Step 2: Customize Your Portfolio (5 minutes)

Edit `src/data/portfolio.ts` and update:

1. **Personal Info** (top of file):
   ```typescript
   name: 'Your Name',
   contact: {
     email: 'your@email.com',
     phone: '+91-XXXXXXXXXX',
   },
   ```

2. **Each Section**:
   - `qualifications` - Add your degrees
   - `experience` - Add your jobs
   - `projects` - Add your projects
   - `achievements` - Add your awards
   - `speakingEngagements` - Add your talks
   - `teachingProfile` - Your teaching info
   - `corporateProfile` - Your corporate roles

## Step 3: Build for Production

```bash
npm run build
npm start
```

## 🌐 Ready for Vercel?

See **DEPLOYMENT_GUIDE.md** for complete step-by-step Vercel & Firebase setup.

## 📁 Key Files to Know

```
src/
├── data/portfolio.ts          ← Edit this to customize content
├── components/                ← UI Components
├── app/
│   ├── page.tsx              ← Main page
│   └── globals.css           ← Global styles
└── config/firebase.ts        ← Firebase config
```

## 🎨 Quick Customizations

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0a0e27',      // Dark background
  secondary: '#1a1f3a',    // Light background
  accent: '#00d4ff',       // Cyan highlights
  accent2: '#7c3aed',      // Purple accents
}
```

### Change Fonts
Edit `src/app/layout.tsx` - modify Google Fonts import

### Change Theme
All styles use Tailwind CSS classes in components.

## 🔥 Firebase Setup (Optional)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project
3. Get config from Project Settings
4. Copy config to `.env.local`
5. Done! ✅

## 📱 Test Responsiveness

Press `F12` in browser → Device Toolbar to test mobile view.

## 🚀 Deploy to Vercel

See **DEPLOYMENT_GUIDE.md** for detailed instructions.

## ❓ Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies issue?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling not working?
```bash
npm run build
npm start
```

## 📞 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT_GUIDE.md` for deployment help
- Review `src/data/portfolio.ts` for all customization options

---

**Enjoy building your portfolio! 🎉**

Next: See DEPLOYMENT_GUIDE.md to go live on Vercel!
