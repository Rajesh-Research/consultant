# 🎯 Quick Reference Guide

## 📋 What You Have

A complete, production-ready Next.js 14 portfolio website with:
- ✅ 12 React components
- ✅ Dark mode UI with gradient accents
- ✅ All your resume content pre-filled
- ✅ Firebase backend ready
- ✅ Vercel deployment configured
- ✅ Full documentation included

## 🚀 Get Started (5 minutes)

```bash
# 1. Navigate to project
cd "Personal Website"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
http://localhost:3000
```

Done! Your site is running locally! 🎉

## 📁 Project Structure

```
src/
├── app/                     # Next.js pages & styles
├── components/ (12 files)   # UI components
├── config/                  # Firebase config
├── data/                    # Your portfolio content
└── lib/                     # Utilities
```

## 🎨 Customize Your Content

Edit **`src/data/portfolio.ts`** to change:

### Quick Changes
```typescript
// Line 1-10: Update your name and title
name: 'Dr. Rajesh Kumar',
title: 'AI Researcher & Educator',

// Line 50+: Add/remove experience entries
// Line 200+: Add/remove projects
// Line 300+: Add/remove achievements
```

**Just replace the sample data with yours!**

## 🌐 Deploy to Vercel (5 minutes)

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Add environment variables
6. Deploy!

**See `DEPLOYMENT_GUIDE.md` for detailed steps.**

## 📊 Key Features

| Feature | Status |
|---------|--------|
| Dark Mode UI | ✅ |
| Mobile Responsive | ✅ |
| Smooth Animations | ✅ |
| Teaching/Corporate Toggle | ✅ |
| Expandable Experience | ✅ |
| Firebase Ready | ✅ |
| SEO Optimized | ✅ |
| Deploy on Vercel | ✅ |
| Custom Domain Support | ✅ |

## 🎨 Colors (Easy to Change)

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0a0e27',      // Dark background
  accent: '#00d4ff',       // Cyan (primary color)
  accent2: '#7c3aed',      // Purple (secondary)
}
```

## 📱 Sections Included

1. **Hero** - Eye-catching intro
2. **About** - Bio + contact + skills
3. **Qualifications** - Education
4. **Experience** - Work history (expandable)
5. **Projects** - Featured work + publications
6. **Achievements** - Awards + stats
7. **Speaking** - Conference talks
8. **Teaching Profile** - Teaching details (toggle)
9. **Corporate Profile** - Business expertise (toggle)
10. **Footer** - Contact links

## 🔥 Firebase Setup (Optional)

```typescript
// 1. Create Firebase project
go to https://console.firebase.google.com

// 2. Get config
Project Settings → Copy config

// 3. Add to .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
(etc)

// 4. Done! ✅
```

## 💻 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

## 📖 Documentation Files

- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Local setup steps
- `DEPLOYMENT_GUIDE.md` - Vercel & Firebase deployment
- `SUMMARY.md` - Project completion summary
- `QUICK_REFERENCE.md` - This file!

## 🌟 Your Generated Site Features

✨ **Pre-filled with your data**:
- 11+ years experience
- 3 featured projects
- 5 publications
- 10 speaking engagements
- 4 awards
- Teaching & Corporate profiles

✨ **Professional Design**:
- Dark blue background (#0a0e27)
- Cyan accent color (#00d4ff)
- Purple highlights (#7c3aed)
- Smooth hover effects
- Glass-morphism elements

✨ **Fully Responsive**:
- Mobile: 320px+
- Tablet: 640px+
- Desktop: 1024px+

## 🚀 Next Steps (Choose One)

### Option A: Customize Locally
1. Edit `src/data/portfolio.ts`
2. Run `npm run dev`
3. Check changes at localhost:3000

### Option B: Deploy Now
1. Follow steps in `DEPLOYMENT_GUIDE.md`
2. Deploy to Vercel
3. Share live URL!

### Option C: Add Features
- Add contact form → Use Firebase
- Add blog → Use Firestore
- Add testimonials → Edit portfolio.ts
- Add images → Upload to public/

## ❓ Common Questions

**Q: How do I change colors?**  
A: Edit `tailwind.config.js` colors section

**Q: How do I add/remove sections?**  
A: Edit `src/data/portfolio.ts` and components

**Q: How do I add a contact form?**  
A: Create component using Firebase `addDoc()`

**Q: Is it mobile-friendly?**  
A: Yes! Fully responsive, tested on all devices

**Q: Can I use my own domain?**  
A: Yes! Vercel supports custom domains

**Q: Do I need Firebase for basic site?**  
A: No! You can use without Firebase; it's optional

## 🎯 One More Thing...

Your portfolio includes optional **Teaching/Corporate profiles** with a toggle button at the bottom. Users can switch between viewing your:
- **Teaching Profile** - Educational experience, courses, student impact
- **Corporate Profile** - Research projects, consultancy revenue, expertise

Both are pre-filled with your data from the CV!

## 📞 Need Help?

1. Check `README.md` for full docs
2. See `DEPLOYMENT_GUIDE.md` for deployment help
3. Review component files in `src/components/`
4. Check `src/data/portfolio.ts` structure

## 🎉 You're All Set!

Everything is configured and ready to use. Pick an action from "Next Steps" above and start! 

**Happy building! 🚀**

---

**Quick Links**:
- [Vercel](https://vercel.com) - Deploy here
- [Firebase](https://firebase.google.com) - Backend
- [Next.js Docs](https://nextjs.org/docs) - Framework
- [Tailwind Docs](https://tailwindcss.com) - Styling
