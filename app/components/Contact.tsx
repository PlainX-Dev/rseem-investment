'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, rootMargin: '0px 0px 180px 0px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with your actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 lg:py-32 bg-rseem-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 ltr:left-0 rtl:right-0 w-96 h-96 bg-rseem-teal/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 ltr:right-0 rtl:left-0 w-96 h-96 bg-rseem-emerald/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-rseem-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-rseem-gray font-semibold">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Contact Info Cards */}
          {[
            {
              icon: Phone,
              title: isArabic ? 'الهاتف' : 'Phone',
              content: t('info.phone'),
              href: 'tel:+966555483247',
            },
            {
              icon: Mail,
              title: isArabic ? 'البريد الإلكتروني' : 'Email',
              content: t('info.email'),
              href: 'mailto:info@rseem.com',
            },
            {
              icon: MapPin,
              title: isArabic ? 'العنوان' : 'Address',
              content: t('info.address'),
              href: '#',
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={idx}
                href={card.href}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-8 rounded-xl bg-white border border-rseem-border/50 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rseem-teal to-rseem-emerald flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-rseem-dark mb-2">{card.title}</h3>
                <p className="text-rseem-gray">{card.content}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form & Additional Info */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-rseem-dark mb-6">{isArabic ? 'أرسل لنا رسالة' : 'Send us a Message'}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: t('form.name'), type: 'text' },
                { name: 'email', label: t('form.email'), type: 'email' },
                { name: 'phone', label: t('form.phone'), type: 'tel' },
                { name: 'company', label: t('form.company'), type: 'text' },
                { name: 'subject', label: t('form.subject'), type: 'text' },
              ].map((field, idx) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.05 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-rseem-dark">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-rseem-border/50 focus:border-rseem-teal focus:outline-none transition-colors placeholder:text-rseem-gray/60 rtl:text-right ltr:text-left"
                  />
                </motion.div>
              ))}

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-rseem-dark">
                  {t('form.message')}
                </label>
                <textarea
                  name="message"
                  placeholder={t('form.message')}
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-rseem-border/50 focus:border-rseem-teal focus:outline-none transition-colors resize-none placeholder:text-rseem-gray/60 rtl:text-right ltr:text-left"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-rseem-teal to-rseem-emerald text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('form.submitting') : t('form.submit')}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800"
                >
                  {t('form.success')}
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
                >
                  {t('form.error')}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Additional Info & Map Placeholder */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Office Hours */}
            <div className="p-8 rounded-xl bg-white border border-rseem-border/50 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-rseem-teal" />
                <h4 className="text-lg font-bold text-rseem-dark">{isArabic ? 'ساعات العمل' : 'Office Hours'}</h4>
              </div>
              <p className="text-rseem-gray">{t('info.hours')}</p>
              <p className="text-rseem-gray mt-2 text-sm">{t('info.timezone')}</p>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-square rounded-xl overflow-hidden border border-rseem-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5688842934234!2d46.7122!3d24.7899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d2d2d2d2d2d%3A0x1234567890!2sRseem%20Investment%20Company!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-rseem-dark mb-4">{isArabic ? 'تابعنا' : 'Follow Us'}</h4>
              <div className="flex gap-4">
                {[
                  { name: isArabic ? 'تويتر' : 'Twitter', url: 'https://twitter.com/RSEEMInvest' },
                  { name: isArabic ? 'لينكدإن' : 'LinkedIn', url: 'https://linkedin.com/company/rseem-investment' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-rseem-teal to-rseem-emerald flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    {social.name[0]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
