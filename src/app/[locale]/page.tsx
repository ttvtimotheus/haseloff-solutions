import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import FAQ from '@/components/FAQ';
import FAQSchema from '@/components/FAQSchema';
import ContactForm from '@/components/ContactForm';
import PixelSeparator from '@/components/PixelSeparator';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PixelSeparator />
      <Projects />
      <PixelSeparator />
      <Services />
      <PixelSeparator />
      <Philosophy />
      <PixelSeparator />
      <FAQ />
      <PixelSeparator />
      <ContactForm />
      <FAQSchema />
    </>
  );
}
