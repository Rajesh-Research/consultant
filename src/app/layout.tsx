import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://dr-rajesh-kumar.vercel.app'),
  title: 'Dr. Rajesh Kumar K V | AI Product Consultant & Physical AI Engineer',
  description: 'Official portfolio of Dr. Rajesh Kumar K V - AI Product Consultant, Physical AI Engineer, Chief Technological Scientist at AIRC, and Associate Dean at Woxsen School of Technology.',
  keywords: 'AI Research, Machine Learning, Deep Learning, Business Analytics, Sports Analytics, Woxsen University, Dr. Rajesh Kumar K V, France Bélanger Chair Professor, Biomedical AI, Technical Speaker, Wearable Robotics, OpenSim Simulation',
  authors: [{ name: 'Dr. Rajesh Kumar K V' }],
  openGraph: {
    title: 'Dr. Rajesh Kumar K V | AI Scientist, Professor & Speaker',
    description: 'Official portfolio of Dr. Rajesh Kumar K V - Chief Technological Scientist at AIRC, Associate Dean at Woxsen School of Technology, France Bélanger Chair Professor of Information Systems, and international speaker.',
    url: 'https://dr-rajesh-kumar.vercel.app',
    siteName: 'Dr. Rajesh Kumar K V Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Dr. Rajesh Kumar K V',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary text-text font-sans">
        <CustomCursor />
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="fixed inset-0 -z-9 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,255,0.1),rgba(255,255,255,0))]" />
        {children}
      </body>
    </html>
  );
}
