import { useState, useEffect } from 'react';

// Import backed/trusted logos
import logoOne from '../assets/images/backed/one.png';
import logoTwo from '../assets/images/backed/two.png';
import logoThree from '../assets/images/backed/three.png';
import logoFour from '../assets/images/backed/four.png';
import logoFive from '../assets/images/backed/five.png';
import logoSix from '../assets/images/backed/six.png';

const TrustedBackedSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Logo data with actual images - organized by rows
  const firstRowLogos = [
    { id: 2, name: "Partner 2", image: logoTwo },
    { id: 3, name: "Partner 3", image: logoThree },
    { id: 4, name: "Partner 4", image: logoFour },
    { id: 5, name: "Partner 5", image: logoFive }
  ];

  const secondRowLogos = [
    { id: 1, name: "Partner 1", image: logoOne },
    { id: 6, name: "Partner 6", image: logoSix }
  ];

  return (
    <section className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-16 sm:pb-20 md:pb-28 lg:pb-36 xl:pb-44 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-block">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-text mb-2 sm:mb-3 md:mb-5 relative inline-block">
              trusted & backed by
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-grey mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto px-4">
            proudly supported by world-class partners and advisors who believe in our vision
          </p>
        </div>

        {/* Logos in two rows */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* First Row - 4 logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {firstRowLogos.map((logo, index) => (
              <img
                key={logo.id}
                src={logo.image}
                alt={logo.name}
                className={`w-auto ${logo.id === 5 ? 'h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16' : 'h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28'} object-contain transition-all duration-1000 ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              />
            ))}
          </div>

          {/* Second Row - 2 logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {secondRowLogos.map((logo, index) => (
              <img
                key={logo.id}
                src={logo.image}
                alt={logo.name}
                className={`w-auto ${logo.id === 6 ? 'h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16' : 'h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28'} object-contain transition-all duration-1000 ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${(firstRowLogos.length + index) * 150}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBackedSection;

