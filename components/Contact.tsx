import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../App';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Mesajınız başarıyla gönderildi.');
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      });
  };

  return (
    <section id="contact" className="py-24 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* INFO SIDE */}
          <div className="w-full md:w-2/5 bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.contactTitle}</h2>
              <p className="text-slate-400 mb-12">{t.contactSubtitle}</p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email</div>
                    <div className="text-lg">semihsoykaniletisim@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-20 flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/soykandev/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 transition-all duration-300"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/soykansemih"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/soykansemih"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-slate-700 transition-all duration-300"
                title="GitHub"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="mailto:semihsoykaniletisim@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                title="Email"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="w-full md:w-3/5 p-10 md:p-16">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input name="name" placeholder={t.nameLabel} required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                <input name="email" type="email" placeholder={t.emailLabel} required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>

              <textarea name="message" rows={5} placeholder={t.messageLabel} required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />

              <button type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700">
                {t.sendBtn}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
