import { useState, useEffect } from 'react';

const HowItStartedSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Dummy images - using placeholder divs with background colors for now
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop',
      alt: 'Starting the journey',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=600&fit=crop',
      alt: 'Early days',
      className: 'col-span-1 row-span-2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=600&fit=crop',
      alt: 'Building the team',
      className: 'col-span-1 row-span-2'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop',
      alt: 'First cookout',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=400&fit=crop',
      alt: 'Growing community',
      className: 'col-span-2 row-span-1'
    }
  ];

  return (
    <section id="how-it-started" className="pt-8 sm:pt-10 md:pt-12 pb-20 sm:pb-28 md:pb-36 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div 
          className={`mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text relative inline-block">
            how it all started?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </h2>
        </div>

        {/* Masonry Grid Layout */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ 
            transitionDelay: '200ms',
            gridAutoRows: 'minmax(300px, auto)'
          }}
        >
          {/* Block 1 - Top Left (Wide Horizontal) */}
          <div 
            className={`col-span-1 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-secondary to-accent/20">
              <img 
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Block 2 - Middle (Tall Vertical, Spans 2 Rows) */}
          <div 
            className={`col-span-1 row-span-2 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative w-full h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-accent/30 to-secondary">
              <img 
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Block 3 - Right (Tall Vertical, Spans 2 Rows) */}
          <div 
            className={`col-span-1 row-span-2 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative w-full h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-secondary to-accent/20">
              <img 
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Block 4 - Bottom Left (Wide Horizontal) */}
          <div 
            className={`col-span-1 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-accent/30 to-secondary">
              <img 
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Block 5 - Bottom Right (Wide Horizontal, Spans 2 Columns) */}
          <div 
            className={`col-span-1 sm:col-span-2 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-secondary via-accent/20 to-secondary">
              <img 
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItStartedSection;

