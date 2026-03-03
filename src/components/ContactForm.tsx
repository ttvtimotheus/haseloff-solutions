'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Spinner from './Spinner';
import AnimateIn from './AnimateIn';

export default function ContactForm() {
  const t = useTranslations('contact');
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _honey: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('form.validation.nameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('form.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.validation.emailInvalid');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('form.validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('form.validation.messageMin');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', _honey: '' });
        setTimeout(() => router.push('/danke'), 1000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const fields = [
    { name: 'name', type: 'text', label: t('form.name') },
    { name: 'email', type: 'email', label: t('form.email') },
  ];

  return (
    <section id="kontakt" className="py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <h2 className="font-display font-extrabold text-display-xl text-ink mb-4">
              {t('title')}
            </h2>
            <p className="text-ink/40 text-base sm:text-lg mb-16 sm:mb-20">
              {t('subtitle')}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              <input type="text" name="_honey" value={formData._honey} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <label
                    htmlFor={field.name}
                    className={cn(
                      'absolute left-0 transition-all duration-300 pointer-events-none font-display',
                      focused === field.name || formData[field.name as keyof typeof formData]
                        ? 'text-[11px] -top-4 text-ink/40'
                        : 'text-base top-3 text-ink/25'
                    )}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className={cn(
                      'w-full px-0 py-3 bg-transparent border-0 border-b-[1.5px] focus:outline-none transition-colors text-ink text-lg font-display',
                      errors[field.name] ? 'border-red-400' : 'border-ink/10 focus:border-ink'
                    )}
                  />
                  {errors[field.name] && (
                    <motion.p
                      className="mt-2 text-xs text-red-400 font-display"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors[field.name]}
                    </motion.p>
                  )}
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className={cn(
                    'absolute left-0 transition-all duration-300 pointer-events-none font-display',
                    focused === 'message' || formData.message
                      ? 'text-[11px] -top-4 text-ink/40'
                      : 'text-base top-3 text-ink/25'
                  )}
                >
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  className={cn(
                    'w-full px-0 py-3 bg-transparent border-0 border-b-[1.5px] focus:outline-none transition-colors text-ink text-lg font-display resize-none',
                    errors.message ? 'border-red-400' : 'border-ink/10 focus:border-ink'
                  )}
                />
                {errors.message && (
                  <motion.p
                    className="mt-2 text-xs text-red-400 font-display"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {submitStatus === 'success' && (
                <motion.p
                  className="text-green-600 font-display text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {t('form.success')}
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  className="text-red-400 font-display text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {t('form.error')}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-ink text-cream px-8 py-4 rounded-full font-display font-bold text-sm flex items-center gap-3 disabled:opacity-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting && <Spinner size="sm" />}
                {isSubmitting ? t('form.sending') : t('form.send')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </motion.button>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
