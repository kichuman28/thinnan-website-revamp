import { useState, useEffect, useRef } from 'react';
import section1 from '../assets/videos/how_it_works/section_1.webm';
import section2 from '../assets/videos/how_it_works/section_2.webm';
import section3 from '../assets/videos/how_it_works/section_3.webm';
import section4 from '../assets/videos/how_it_works/section_4.webm';
import section5 from '../assets/videos/how_it_works/section_5.webm';
import section6 from '../assets/videos/how_it_works/section_6.webm';

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const videoRefs = useRef({});

  const steps = [
    {
      id: 0,
      video: section1,
      title: 'choose your friends',
      subtitle: 'connect with the people who matter most',
    },
    {
      id: 1,
      video: section2,
      title: 'share your craving',
      subtitle: "share what you're craving right now",
    },
    {
      id: 2,
      video: section3,
      title: 'match your cravings',
      subtitle: 'find friends who want the same thing',
    },
    {
      id: 3,
      video: section4,
      title: 'open up a group chat',
      subtitle: 'start the conversation with matched people',
    },
    {
      id: 4,
      video: section5,
      title: 'make plans together',
      subtitle: 'make it happen together',
    },
    {
      id: 5,
      video: section6,
      title: 'share your stories',
      subtitle: 'capture and share your food adventures',
    }
  ];

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle video playback and auto-advance
  useEffect(() => {
    if (!isInView) return;

    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      // Move to next step after video ends (10 seconds)
      if (!userInteracted) {
        const nextStep = (currentStep + 1) % steps.length;
        handleStepChange(nextStep);
      }
    };

    // Fallback timer in case video doesn't fire 'ended' event (11 seconds to be safe)
    const fallbackTimer = setTimeout(() => {
      if (!userInteracted) {
        const nextStep = (currentStep + 1) % steps.length;
        handleStepChange(nextStep);
      }
    }, 11000);

    video.addEventListener('ended', handleVideoEnd);
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(fallbackTimer);
    };
  }, [currentStep, isInView, userInteracted, steps.length]);

  // Reset and play video when step changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    // Pause and unload previous videos to save memory
    Object.keys(videoRefs.current).forEach(key => {
      const idx = parseInt(key);
      if (idx !== currentStep && videoRefs.current[key]) {
        videoRefs.current[key].pause();
        videoRefs.current[key].currentTime = 0;
      }
    });

    // Small delay to ensure smooth transition
    setTimeout(() => {
      video.load();
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video play prevented:", error);
        });
      }
    }, 100);
  }, [currentStep, isInView]);

  const handleStepChange = (newStep) => {
    if (newStep === currentStep) return;
    
    setIsTransitioning(true);
    
    // Fade out
    setTimeout(() => {
      setCurrentStep(newStep);
      
      // Fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const goToStep = (index) => {
    if (index !== currentStep && index >= 0 && index < steps.length) {
      setUserInteracted(true);
      handleStepChange(index);
    }
  };

  const goToPrevious = () => {
    const prevStep = currentStep === 0 ? steps.length - 1 : currentStep - 1;
    goToStep(prevStep);
  };

  const goToNext = () => {
    const nextStep = (currentStep + 1) % steps.length;
    goToStep(nextStep);
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-white text-black py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="space-y-4">
            <p className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight tracking-tight">
              how it works?
            </p>
            <div className="h-px w-16 bg-neutral-900/30" />
          </div>

          <div className="flex-1 flex flex-col justify-end gap-8">
            <div
              className="transition-all duration-500 ease-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-12px)' : 'translateY(0)',
              }}
            >
              <h3 className="text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] font-semibold leading-tight">
                {steps[currentStep].title}
              </h3>
            </div>

            <div
              className="transition-all duration-500 ease-out max-w-xl"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-8px)' : 'translateY(0)',
                transitionDelay: isTransitioning ? '0ms' : '80ms',
              }}
            >
              <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed">
                {steps[currentStep].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border border-[#7C310A] text-[#7C310A] flex items-center justify-center hover:bg-[#7C310A] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C310A]"
                aria-label="Previous step"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="px-6 py-2 bg-[#FEEEDF] text-[#7C310A] rounded-full text-base font-semibold">
                {currentStep + 1} / {steps.length}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-[#7C310A] text-[#7C310A] flex items-center justify-center hover:bg-[#7C310A] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C310A]"
                aria-label="Next step"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="relative w-full max-w-[520px]" style={{ aspectRatio: '720/898' }}>
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isAdjacent = Math.abs(index - currentStep) <= 1;
              const shouldLoad = isActive || (isInView && isAdjacent);

              return (
                <div
                  key={step.id}
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? 'scale(1)'
                      : index < currentStep
                        ? 'scale(0.97)'
                        : 'scale(1.03)',
                    zIndex: isActive ? 10 : 5,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {shouldLoad && (
                    <video
                      ref={(el) => {
                        if (isActive) {
                          videoRef.current = el;
                        }
                        videoRefs.current[index] = el;
                      }}
                      src={step.video}
                      className="w-full h-full object-cover rounded-[32px]"
                      playsInline
                      muted
                      preload={isActive ? 'auto' : 'metadata'}
                      loading="lazy"
                      style={{
                        transform: 'translate3d(0, 0, 0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  )}
                </div>
              );
            })}

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
