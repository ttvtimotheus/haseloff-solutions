'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import PixelButton from './PixelButton';
import PixelCard from './PixelCard';
import PixelSpinner from './PixelSpinner';

export default function ContactForm() {
  const t = useTranslations('contact');
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('form.validation.nameRequired');
    }

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
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Weiterleitung zur Danke-Seite nach kurzer Verzögerung
        setTimeout(() => {
          router.push('/danke');
        }, 1000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-surface relative overflow-hidden">
      {/* Pixel-Highlights im Hintergrund */}
      <div className="absolute top-16 left-14 w-3 h-3 bg-secondary rounded-pixel-sm animate-pulse opacity-20" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-pixel animate-pulse opacity-15" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-pixel-sm animate-pulse opacity-25" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <PixelCard missingCorner="top-right">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-display font-medium mb-2">
                    {t('form.name')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-primary rounded-pixel focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 relative before:absolute before:content-[''] before:top-0 before:right-0 before:w-3 before:h-3 before:bg-background"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-background"></div>
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600" role="alert" aria-live="polite">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-display font-medium mb-2">
                    {t('form.email')}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-primary rounded-pixel focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-background"></div>
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600" role="alert" aria-live="polite">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-display font-medium mb-2">
                    {t('form.message')}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-primary rounded-pixel focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 resize-none"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-background"></div>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600" role="alert" aria-live="polite">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-pixel border-2 border-green-300" role="alert" aria-live="polite">
                    {t('form.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-pixel border-2 border-red-300" role="alert" aria-live="polite">
                    {t('form.error')}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <PixelButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center gap-3"
                  >
                    {isSubmitting && <PixelSpinner size="sm" />}
                    {isSubmitting ? t('form.sending') : t('form.send')}
                  </PixelButton>
                  
                  <div className="text-center sm:text-right">
                    <p className="text-sm text-gray-600 mb-1">{t('alternative')}</p>
                    <a href={`mailto:${t('email')}`} className="font-display font-medium text-secondary hover:text-secondary-dark hover:translate-x-[1px] transition-all duration-200">
                      {t('email')}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
