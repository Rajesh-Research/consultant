'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Calendar, MessageSquare, Briefcase, Zap } from 'lucide-react';

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Corporate Consultation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const consultationOfferings = [
    {
      title: 'AI Strategy & Advisory',
      desc: 'Guiding executive leadership teams on AI/ML roadmaps, scalability, and technical strategy for business transformation.',
      icon: Briefcase
    },
    {
      title: 'Sports Analytics & Biomechanics',
      desc: 'Developing specialized analytical solutions, player performance tracking models, and motion capture video pipelines.',
      icon: Zap
    },
    {
      title: 'Biomedical AI Systems',
      desc: 'Advising on wearable technology design, signal analytics (EMG/ECG), and digital rehabilitation monitoring tools.',
      icon: Calendar
    },
    {
      title: 'Corporate Training & Seminars',
      desc: 'Delivering tailored masterclasses and technical speaking sessions on Microsoft Fabric, Deep Learning, and industrial AI.',
      icon: MessageSquare
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: 'Corporate Consultation',
        message: ''
      });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div id="consultation" className="space-y-12">
      
      {/* Visual Header Banner */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[200px] px-8 sm:px-12 py-8 relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Technical strategy · AI Advisory · Board membership
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Consultation & Advisory
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              Dr. Kumar partners with forward-thinking enterprises, sports organizations, and startups to architect high-performance machine learning systems and data strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Advisory Areas */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Advisory Offerings</h3>
          <div className="space-y-4">
            {consultationOfferings.map((offering, idx) => {
              const Icon = offering.icon;
              return (
                <div key={idx} className="glass p-5 rounded-xl border border-white/5 flex gap-4 hover:border-white/15 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{offering.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{offering.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass p-6 sm:p-8 rounded-xl border border-white/5 relative overflow-hidden">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-white/5 text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  Thank you for your interest. Dr. Rajesh Kumar K V or his team will review your proposal and respond via email within 2-3 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 border border-white/10 rounded-lg text-sm text-text-secondary hover:text-white hover:border-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Request a Consultation</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0f1015] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-text-secondary/50 focus:border-white/30 outline-none text-sm transition-all"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0f1015] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-text-secondary/50 focus:border-white/30 outline-none text-sm transition-all"
                      placeholder="e.g. john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="org" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="org"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#0f1015] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-text-secondary/50 focus:border-white/30 outline-none text-sm transition-all"
                      placeholder="e.g. Woxsen University"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#0f1015] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-white/30 outline-none text-sm transition-all appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 10px center', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="Corporate Consultation">Corporate Consultation</option>
                      <option value="Academic Collaboration">Academic Collaboration</option>
                      <option value="Keynote Speaking Request">Keynote Speaking Request</option>
                      <option value="Mentorship Inquiry">Mentorship Inquiry</option>
                      <option value="Other Technical Advisory">Other Technical Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    Project details or request *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0f1015] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-text-secondary/50 focus:border-white/30 outline-none text-sm transition-all resize-none"
                    placeholder="Describe your research project, consulting timeline, or speaking engagement parameters..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white hover:bg-white/90 disabled:opacity-50 text-[#07080b] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/5 transition-all cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Submitting inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle size={16} />
                    <span>Failed to submit. Please try again.</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
