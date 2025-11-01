import { useEffect, useState } from 'react';
import foodVideo from '../assets/videos/food_video.mp4';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100;
        
        setIsScrolled(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={foodVideo} type="video/mp4" />
          </video>
          
          {/* Video Overlay - Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
          
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">


          {/* Center Content */}
          <div className="flex-1 flex items-center px-6 sm:px-8 md:px-12">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-4xl">
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] animate-fadeInUp">
                  <span className="text-white block mb-2">thinnan.</span>
                  <span className="text-white">for </span>
                  <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-[#FFA726] to-[#FF8A50]">real life</span>
                  <span className="text-white block mt-2">food experiences.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Button - Shows after scrolling past hero */}
      <div
        className={`fixed top-6 right-6 sm:top-8 sm:right-8 md:right-12 z-[60] transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <a
          href="https://thinnan.page.link/download"
          className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white rounded-full font-medium text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 hover:bg-primary/90"
        >
          <span>download now</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default HeroSection; 