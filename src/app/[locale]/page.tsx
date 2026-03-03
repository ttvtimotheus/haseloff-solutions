import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import FAQ from '@/components/FAQ';
import CtaBanner from '@/components/CtaBanner';
import ContactForm from '@/components/ContactForm';
import FAQSchema from '@/components/FAQSchema';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Stats />
      <Services />
      <Philosophy />
      <FAQ />
      <CtaBanner />
      <ContactForm />
      <FAQSchema />
    </>
  );
}
