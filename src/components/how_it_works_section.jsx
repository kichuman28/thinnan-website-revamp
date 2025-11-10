import { useState, useEffect } from 'react';
import feature5 from '../assets/images/features/feature_5.png';
import feature4 from '../assets/images/features/feature_4.png';

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const steps = [
    {
      id: 0,
      image: feature5,
      title: 'add your real friends',
      subtitle: 'From scroll to stove in three taps',
    },
    {
      id: 1,
      image: feature4,
      title: 'Get matched with food lovers',
      subtitle: 'No algorithms. No ads. Just real people and real food.',
    },
    {
      id: 2,
      image: feature5,
      title: 'Start planning together',
      subtitle: 'Turn content into conversation',
    },
    {
      id: 3,
      image: feature4,
      title: 'Create your cookout or eatout',
      subtitle: 'Make it official',
    },
    {
      id: 4,
      image: feature5,
      title: 'Share your story',
      subtitle: 'Capture the memories',
    }
  ];

  // Auto-rotate through steps (only if user hasn't interacted)
  useEffect(() => {
    if (userInteracted) return;
    
    const timer = setInterval(() => {
      handleStepChange((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [steps.length, userInteracted]);

  const handleStepChange = (newStepOrFunction) => {
    setIsTransitioning(true);
    
    // Small delay for fade out effect
    setTimeout(() => {
      if (typeof newStepOrFunction === 'function') {
        setCurrentStep(newStepOrFunction);
      } else {
        setCurrentStep(newStepOrFunction);
      }
      
      // Fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const goToStep = (index) => {
    if (index !== currentStep && index >= 0 && index < steps.length) {
      setUserInteracted(true);
      handleStepChange(index);
    }
  };

  const goToNext = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const visible = [];
    
    // Previous card (left preview) - only if not first slide
    if (currentStep > 0) {
      visible.push({ ...steps[currentStep - 1], position: 'left', index: currentStep - 1 });
    }
    
    // Current card (active)
    visible.push({ ...steps[currentStep], position: 'center', index: currentStep });
    
    // Next card (right preview) - only if not last slide
    if (currentStep < steps.length - 1) {
      visible.push({ ...steps[currentStep + 1], position: 'right', index: currentStep + 1 });
    }
    
    return visible;
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Main Content - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8 sm:space-y-10">
            
            {/* Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-text">
                how does it work?
              </h2>
            </div>

            {/* Step Indicator with smooth transition */}
            <div 
              className="transition-all duration-500 ease-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                step {currentStep + 1}
              </p>
            </div>

            {/* Title with smooth transition */}
            <div 
              className="transition-all duration-500 ease-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
                transitionDelay: isTransitioning ? '0ms' : '100ms',
              }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary-text">
                {steps[currentStep].title}
              </h3>
            </div>

            {/* Subtitle with smooth transition */}
            <div 
              className="transition-all duration-500 ease-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
                transitionDelay: isTransitioning ? '0ms' : '200ms',
              }}
            >
              <p className="text-base sm:text-lg md:text-xl text-secondary-grey leading-relaxed">
                {steps[currentStep].subtitle}
              </p>
            </div>

            {/* Navigation Dots - Below text on mobile, same position on desktop */}
            <div className="flex gap-3 pt-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setUserInteracted(true);
                    goToStep(index);
                  }}
                  className="transition-all duration-500 ease-out rounded-full hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  style={{
                    width: index === currentStep ? '48px' : '12px',
                    height: '12px',
                    backgroundColor: index === currentStep ? '#7C310A' : '#D1D5DB',
                    transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                  }}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Carousel with Blurred Previews */}
          <div className="flex items-center justify-center lg:justify-end py-12">
            <div className="relative w-full max-w-[420px] h-[700px] sm:h-[750px] md:h-[800px]">
              
              {getVisibleCards().map((card) => {
                const isActive = card.position === 'center';
                const isLeftPreview = card.position === 'left';
                const isRightPreview = card.position === 'right';

                const handleClick = () => {
                  if (isLeftPreview) {
                    goToPrevious();
                  } else if (isRightPreview) {
                    goToNext();
                  }
                };

                return (
                  <div
                    key={`${card.id}-${card.index}`}
                    className={`absolute top-1/2 left-1/2 w-[280px] h-[580px] sm:w-[310px] sm:h-[640px] md:w-[340px] md:h-[703px] ${
                      !isActive ? 'cursor-pointer' : ''
                    }`}
                    onClick={!isActive ? handleClick : undefined}
                    style={{
                      transform: isActive
                        ? 'translate(-50%, -50%) scale(1)'
                        : isLeftPreview
                        ? 'translate(calc(-50% - 140px), -50%) scale(0.88)'
                        : 'translate(calc(-50% + 140px), -50%) scale(0.88)',
                      opacity: isActive ? 1 : 0.5,
                      zIndex: isActive ? 30 : isLeftPreview ? 10 : 20,
                      filter: isActive ? 'blur(0px)' : 'blur(3px)',
                      transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                      pointerEvents: 'auto',
                    }}
                  >
                    <div 
                      className="relative w-full h-full"
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}

              {/* Decorative glow effect for active card */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[620px] -z-10 blur-3xl opacity-15 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle, #7C310A 0%, transparent 70%)',
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
