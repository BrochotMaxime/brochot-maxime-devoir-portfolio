import Hero from '../components/Home/Hero';
import { AboutSkills } from '@/components/Home/AboutSkills';

export const metadata = {
  title: 'Portfolio – John Doe',
  description: 'Développeur web front-end React'
}

export default function Home() {
  return (
    <main>
      <Hero />


      <AboutSkills />
      
    </main>
  );
}