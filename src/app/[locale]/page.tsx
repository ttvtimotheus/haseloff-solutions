import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import FAQ from '@/components/FAQ';
import FAQSchema from '@/components/FAQSchema';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Philosophy />
      <FAQ />
      <ContactForm />
      <FAQSchema />
    </>
  );
}
