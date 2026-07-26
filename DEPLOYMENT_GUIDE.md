# Deployment Guide - Vercel & Firebase

Complete step-by-step guide to deploy your portfolio on Vercel with Firebase backend.

## 📋 Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] GitHub account (for code repository)
- [ ] Vercel account (free tier available)
- [ ] Firebase account (free Spark plan available)
- [ ] Git installed and configured

## 🔧 Step 1: Prepare Local Project

### 1.1 Install Dependencies

```bash
cd "Personal Website"
npm install
```

### 1.2 Create Environment File

```bash
cp .env.local.example .env.local
```

For now, you can leave placeholder values. We'll update after Firebase setup.

## 🔥 Step 2: Setup Firebase

### 2.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a new project"**
3. Enter project name: `rajesh-kumar-portfolio`
4. Enable Google Analytics (optional)
5. Click **"Create project"** and wait for completion

### 2.2 Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (⚙️ icon)
2. Scroll to **"Your apps"** section
3. Click **"Web"** icon if not already created
4. Register app with name `portfolio-web`
5. Copy the config object:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

### 2.3 Update Local Environment Variables

Edit `.env.local` and replace with your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

### 2.4 Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 - should work without errors.

## 🌐 Step 3: Setup GitHub Repository

### 3.1 Initialize Git Repository

```bash
cd "Personal Website"
git init
git add .
git commit -m "Initial portfolio commit"
```

### 3.2 Create GitHub Repository

1. Go to [GitHub.com](https://github.com/new)
2. Create repository: `rajesh-kumar-portfolio`
3. Don't initialize with README (you already have one)
4. Click **"Create repository"**

### 3.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/rajesh-kumar-portfolio.git
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` with your GitHub username.

## ✈️ Step 4: Deploy on Vercel

### 4.1 Connect Vercel to GitHub

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Click **"GitHub"** and connect your GitHub account
5. Search for `rajesh-kumar-portfolio` and click **"Import"**

### 4.2 Configure Project

Vercel will auto-detect Next.js. Leave defaults and click **"Deploy"**.

### 4.3 Add Environment Variables

After initial deployment:

1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add each variable from `.env.local`:
   - Name: `NEXT_PUBLIC_FIREBASE_API_KEY`
   - Value: (paste your Firebase API Key)
   - Environments: Select **Production**, **Preview**, **Development**
   - Click **"Add"**

Repeat for all 6 Firebase environment variables.

### 4.4 Redeploy

1. Go to **Deployments**
2. Click on the latest deployment
3. Click **"Redeploy"** to apply environment variables

## 🎯 Step 5: Verify Deployment

### 5.1 Check Live Site

Your site is now live at: `rajesh-kumar-portfolio.vercel.app`

### 5.2 Test Functionality

- [ ] Navigation works
- [ ] Responsiveness on mobile
- [ ] Profile toggle (Teaching/Corporate) works
- [ ] Smooth scroll animations
- [ ] Contact links work

### 5.3 Run Vercel Analytics

1. In Vercel Dashboard, enable **Web Analytics**
2. Track page views and performance metrics

## 🎁 Step 6: Custom Domain (Optional)

### 6.1 Add Domain

1. In Vercel project → **Settings** → **Domains**
2. Add your custom domain
3. Instructions will appear for DNS configuration

### 6.2 Configure DNS

Follow Vercel's DNS instructions for your domain registrar.

DNS Records needed:
```
Name         Type    Value
@            A       76.76.19.89
www          CNAME   cname.vercel-dns.com
```

## 📊 Step 7: Setup Firebase Data (Optional)

### 7.1 Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **"Create Database"**
3. Choose **Test mode** (for development)
4. Select region closest to you
5. Click **"Create"**

### 7.2 Create Collections

In Firestore Console, create these collections:

```
1. contact_submissions
   - Fields: email (string), message (string), timestamp (timestamp)

2. portfolio_analytics
   - Fields: section_viewed (string), timestamp (timestamp)

3. visitor_count
   - Fields: count (number), last_updated (timestamp)
```

### 7.3 Update Firestore Rules

Replace default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read for all documents
    match /{document=**} {
      allow read;
    }
    
    // Allow write to contact_submissions from anyone
    match /contact_submissions/{document=**} {
      allow create;
    }
    
    // Allow analytics writes from frontend
    match /portfolio_analytics/{document=**} {
      allow create;
    }
  }
}
```

Click **Publish**.

## ✅ Verification Checklist

- [ ] GitHub repository created and pushed
- [ ] Vercel project created and deployed
- [ ] Environment variables added to Vercel
- [ ] Live site accessible
- [ ] Custom domain configured (optional)
- [ ] Firebase collections created
- [ ] Firestore security rules updated
- [ ] All links working
- [ ] Mobile responsiveness verified

## 🚀 Automated Deployments

Vercel will automatically redeploy whenever you:
1. Push changes to GitHub `main` branch
2. Create a Pull Request (preview deployment)

### Deployment Process

```bash
# Make changes locally
git add .
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Vercel automatically deploys!
# Check status at https://vercel.com/dashboard
```

## 🔄 Continuous Updates

To keep your portfolio updated:

1. **Update content**: Edit `src/data/portfolio.ts`
2. **Update components**: Edit files in `src/components/`
3. **Commit and push**: 
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
4. **Vercel deploys automatically** ✅

## 📞 Support & Troubleshooting

### Issue: Deployment Failed

1. Check **Vercel Build Logs**:
   - Go to Failed Deployment → **Build Output**
2. Common issues:
   - Missing environment variables → Add in Settings
   - Node version mismatch → Check `node_modules`
   - TypeScript errors → Run `npm run build` locally

### Issue: Firebase Not Connecting

1. Verify `.env.local` values match Firebase Console
2. Check Firestore security rules allow reads
3. Clear browser cache and retry

### Issue: Custom Domain Not Working

1. Check DNS records were updated
2. Wait 24-48 hours for DNS propagation
3. Use DNS checker tool to verify

## 🎓 Next Steps

1. **Add Contact Form**: Implement email functionality
2. **Blog Section**: Add a blog with Firestore backend
3. **Analytics**: Track visitor statistics
4. **Testimonials**: Add client testimonials section
5. **CMS**: Use Sanity or Strapi for content management

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Congratulations! Your portfolio is now live on Vercel! 🎉**

Share your live site URL: `https://rajesh-kumar-portfolio.vercel.app`
