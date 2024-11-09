import Image from 'next/image';
import Link from 'next/link';
import About from './About/page';
import Services from './Services/page';
import Contact from './Contact/page';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h2 className="hero-heading">Hi! I Am</h2>
          <h1 className="hero-name">Nida Muhammad Nasar</h1>
          <p className="hero-description">A Creative Front-end Developer</p>
          <div className="mt-8">
            <Link href="/About" className="hero-button">Know More</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            src="/images/hero-pic.png"
            alt="Profile Picture"
            width={400}
            height={300}
            className="hero-image"
          />
        </div>
      </section>

      <div>
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
