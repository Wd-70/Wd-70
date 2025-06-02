// app/about/page.tsx
import AboutHero from '@/components/sections/AboutHero';
import MyStory from '@/components/sections/MyStory';
import Skills from '@/components/sections/Skills';
import Vision from '@/components/sections/Vision';
import CallToAction from '@/components/sections/CallToAction';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MyStory />
      <Skills />
      <Vision />
      <CallToAction />
    </main>
  );
}