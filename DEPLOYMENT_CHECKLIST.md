# ✅ Deployment Checklist

Use this checklist to guide your deployment to Vercel + Firebase.

## 📋 Pre-Deployment (Local Testing)

- [ ] Navigate to project folder: `cd "Personal Website"`
- [ ] Install dependencies: `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Test all pages and sections load correctly
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test smooth scroll navigation
- [ ] Test Teaching/Corporate profile toggle
- [ ] Test expandable experience sections
- [ ] Verify all links work (contact links, etc.)
- [ ] Check animations are smooth

## 📝 Content Customization

- [ ] Review `src/data/portfolio.ts`
- [ ] Verify all your information is correct
- [ ] Check all project details
- [ ] Verify achievement descriptions
- [ ] Confirm speaking engagements list
- [ ] Update teaching profile specifics (if needed)
- [ ] Update corporate profile specifics (if needed)
- [ ] Test changes locally after edits: `npm run build`

## 🔧 Setup Firebase (Optional)

- [ ] Create Firebase project at https://console.firebase.google.com
- [ ] Copy Firebase config from Project Settings
- [ ] Create `.env.local` file in root:
  ```bash
  cp .env.local.example .env.local
  ```
- [ ] Update `.env.local` with Firebase credentials:
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `NEXT_PUBLIC_FIREBASE_APP_ID`
- [ ] Test locally: `npm run dev` (should work without Firebase errors)
- [ ] Create Firestore database (optional, for future features)

## 🐙 GitHub Setup

- [ ] Initialize git: `git init`
- [ ] Add all files: `git add .`
- [ ] Initial commit: `git commit -m "Initial portfolio commit"`
- [ ] Create repository at https://github.com/new
- [ ] Add remote: `git remote add origin https://github.com/YOUR_USERNAME/rajesh-kumar-portfolio.git`
- [ ] Rename branch: `git branch -M main`
- [ ] Push to GitHub: `git push -u origin main`
- [ ] Verify repo on GitHub with all files

## ✈️ Vercel Deployment

- [ ] Go to https://vercel.com/dashboard
- [ ] Click "New Project"
- [ ] Click "Import Git Repository"
- [ ] Connect GitHub account (if not already)
- [ ] Find and select `rajesh-kumar-portfolio` repository
- [ ] Vercel auto-detects Next.js configuration
- [ ] Click "Deploy" and wait for build
- [ ] Check build logs for any errors
- [ ] When complete, visit live URL (e.g., rajesh-kumar-portfolio.vercel.app)
- [ ] Test live site functionality

## 🔑 Add Environment Variables to Vercel

- [ ] Go to project on Vercel
- [ ] Click Settings → Environment Variables
- [ ] Add each Firebase variable:
  - [ ] `NEXT_PUBLIC_FIREBASE_API_KEY`
  - [ ] `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - [ ] `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - [ ] `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - [ ] `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - [ ] `NEXT_PUBLIC_FIREBASE_APP_ID`
- [ ] For each variable:
  - Select environments: Production, Preview, Development
  - Click "Add"
- [ ] Go to Deployments
- [ ] Click on latest deployment
- [ ] Click "Redeploy" to apply environment variables
- [ ] Wait for redeploy to complete
- [ ] Test live site again

## 🌐 Custom Domain (Optional)

- [ ] Go to project on Vercel → Domains
- [ ] Click "Add Domain"
- [ ] Enter your domain name
- [ ] Copy DNS records provided
- [ ] Login to domain registrar
- [ ] Update DNS records:
  ```
  @ A 76.76.19.89
  www CNAME cname.vercel-dns.com
  ```
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify domain works

## 🧪 Post-Deployment Testing

### Functionality Tests
- [ ] Hero section loads with animations
- [ ] Navigation menu works and links scroll correctly
- [ ] About section displays all information
- [ ] Qualifications timeline renders correctly
- [ ] Experience section expands/collapses properly
- [ ] Projects display with images/descriptions
- [ ] Achievements section shows stats
- [ ] Speaking engagements list displays
- [ ] Profile toggle switches between Teaching and Corporate
- [ ] Footer links work (email, phone, social)

### Performance Tests
- [ ] Site loads quickly (under 3 seconds)
- [ ] Smooth animations when scrolling
- [ ] No console errors (check F12 → Console)
- [ ] Images lazy-load properly
- [ ] Mobile performance is good

### Responsive Tests
- [ ] Desktop (1920px) - Full layout
- [ ] Tablet (768px) - Responsive layout
- [ ] Mobile (375px) - Mobile layout
- [ ] Landscape mobile - Correct orientation

### Browser Compatibility
- [ ] Chrome - Works
- [ ] Firefox - Works
- [ ] Safari - Works
- [ ] Edge - Works

### SEO Tests
- [ ] Title tag shows: "Dr. Rajesh Kumar - AI Researcher & Educator"
- [ ] Meta description present
- [ ] Open Graph tags (for social sharing)
- [ ] Check Google Search Console

## 📊 Analytics Setup (Optional)

- [ ] Enable Vercel Web Analytics
- [ ] Setup Google Analytics (optional)
- [ ] Create Firebase analytics dashboard (optional)
- [ ] Monitor visitor trends

## 📢 Share Your Site

- [ ] Get live URL from Vercel
- [ ] Share on LinkedIn: https://linkedin.com/in/kvrkkumar/
- [ ] Share on Twitter/X
- [ ] Add to GitHub profile
- [ ] Update resume with portfolio URL
- [ ] Email contacts your new portfolio

## 🔄 Continuous Updates

- [ ] Save all changes locally first
- [ ] Test locally: `npm run dev`
- [ ] Commit changes: `git commit -m "Update portfolio"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Vercel auto-deploys (watch email)
- [ ] Verify changes on live site

## 🐛 Troubleshooting

If something doesn't work:
- [ ] Check Vercel build logs for errors
- [ ] Check browser console (F12 → Console)
- [ ] Verify `.env.local` values match Firebase
- [ ] Try clearing browser cache (Ctrl+Shift+Delete)
- [ ] Check GitHub push was successful
- [ ] Review component files for typos
- [ ] Re-run `npm run build` locally

## 🎯 Final Verification

- [ ] Live site URL works: ✅ https://rajesh-kumar-portfolio.vercel.app
- [ ] All sections visible and working: ✅
- [ ] Mobile responsive: ✅
- [ ] Fast load time: ✅
- [ ] No errors in console: ✅
- [ ] Environment variables set: ✅
- [ ] Custom domain active (if applicable): ✅
- [ ] Share URL with your network: ✅

## 🎉 Deployment Complete!

You have successfully deployed your portfolio to Vercel!

**Your portfolio is now live and accessible worldwide.**

### What's Next?

1. **Monitor Performance**: Check Vercel analytics
2. **Keep Updated**: Push new versions to auto-deploy
3. **Add Features**: Implement contact form, blog, etc.
4. **Custom Domain**: Add your domain for professional look
5. **Share**: Let people know about your portfolio!

---

**Questions?** Check these files:
- `README.md` - Full documentation
- `DEPLOYMENT_GUIDE.md` - Detailed deployment steps
- `QUICK_REFERENCE.md` - Quick reference guide

**Congratulations! 🚀 Your portfolio is live!**
