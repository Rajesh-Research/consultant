'use client';

import { motion } from 'framer-motion';

interface ProfileToggleProps {
  profileView: 'teaching' | 'corporate';
  setProfileView: (view: 'teaching' | 'corporate') => void;
}

export default function ProfileToggle({ profileView, setProfileView }: ProfileToggleProps) {
  return (
    <section className="py-12 px-4 flex justify-center">
      <div className="glass p-2 rounded-full flex items-center gap-2">
        <button
          onClick={() => setProfileView('teaching')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            profileView === 'teaching'
              ? 'bg-gradient-to-r from-accent to-accent2 text-primary'
              : 'text-text-secondary hover:text-accent'
          }`}
        >
          Teaching Profile
        </button>
        <button
          onClick={() => setProfileView('corporate')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            profileView === 'corporate'
              ? 'bg-gradient-to-r from-accent to-accent2 text-primary'
              : 'text-text-secondary hover:text-accent'
          }`}
        >
          Corporate Profile
        </button>
      </div>
    </section>
  );
}
