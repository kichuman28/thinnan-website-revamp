import { useState, useEffect, useRef } from 'react';
import section1 from '../assets/videos/how_it_works/slide_0.mp4';
import section2 from '../assets/videos/how_it_works/slide_1.mp4';
import section3 from '../assets/videos/how_it_works/slide_2.mp4';
import section4 from '../assets/videos/how_it_works/slide_3.mp4';
import section5 from '../assets/videos/how_it_works/slide_4.mp4';
import section6 from '../assets/videos/how_it_works/slide_5.mp4';
import section7 from '../assets/videos/how_it_works/slide_6.mp4';

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const videoRefs = useRef({});
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 1024;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    videoRef.current = null;
  }, [isDesktop]);

  const imageAspectRatio = '1011 / 1795';
  const defaultAspectRatio = '720 / 898';

  const steps = [
    {
      id: 0,
      video: section1,
      isImage: false,
      title: 'add real \nfriends',
      subtitle: 'on thinnan, we add our friends\n— the ones we actually wish to\nhang out with.',
    },
    {
      id: 1,
      video: section2,
      isImage: false,
      title: 'hit\ncrave',
      subtitle: 'when something delicious\ncatches our eye',
    },
    {
      id: 2,
      video: section3,
      isImage: false,
      title: 'crave &\nmatch',
      subtitle: 'friends who also want that\nsame experience',
    },
    {
      id: 3,
      video: section4,
      isImage: false,
      title: 'start\ncravings chat',
      subtitle: 'add a couple more friends, and\nturn it into a real hangout',
    },
    {
      id: 4,
      video: section5,
      isImage: false,
      title: 'make\nplans together',
      subtitle: 'turn it into a real hangout —\na spontaneous cookout or an\neatout.',
    },
    {
      id: 5,
      video: section6,
      isImage: false,
      title: 'share stories',
      subtitle: 'photos and moments as shared\nmemories, creating content\nborn from real experiences',
    },
    {
      id: 6,
      video: section7,
      isImage: false,
      title: 'badges & streaks',
      subtitle: 'gamify these moments\nwith cuisine badges and\nfriendship streaks',
    }
  ];

  const isImageStep = steps[currentStep]?.isImage;

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

  const AUTO_ADVANCE_DURATION = 11000;

  // Handle playback and auto-advance
  useEffect(() => {
    if (!isInView) return;

    const advance = () => {
      if (!userInteracted) {
        const nextStep = (currentStep + 1) % steps.length;
        handleStepChange(nextStep);
      }
    };
    let cleanup = () => {};

    if (isImageStep) {
      const timer = setTimeout(advance, AUTO_ADVANCE_DURATION);
      cleanup = () => clearTimeout(timer);
    } else {
      const video = videoRef.current;
      if (!video) return;

      const getVideoDuration = () => {
        if (video.duration && isFinite(video.duration) && video.duration > 0) {
          return video.duration * 1000 + 500;
        }
        return AUTO_ADVANCE_DURATION;
      };

      let fallbackTimer = setTimeout(advance, getVideoDuration());

      const handleLoadedMetadata = () => {
        clearTimeout(fallbackTimer);
        fallbackTimer = setTimeout(advance, getVideoDuration());
      };

      video.addEventListener('ended', advance);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      cleanup = () => {
        video.removeEventListener('ended', advance);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        clearTimeout(fallbackTimer);
      };
    }

    return cleanup;
  }, [currentStep, isInView, userInteracted, steps.length, isImageStep]);

  // Reset and play video when step changes
  useEffect(() => {
    // Pause and unload previous videos to save memory
    Object.keys(videoRefs.current).forEach(key => {
      const idx = parseInt(key);
      if (idx !== currentStep && videoRefs.current[key]) {
        videoRefs.current[key].pause();
        videoRefs.current[key].currentTime = 0;
      }
    });

    if (!isInView || isImageStep) {
      if (isImageStep) {
        videoRef.current = null;
      }
      return;
    }

    const video = videoRef.current;
    if (!video) return;

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
  }, [currentStep, isInView, isImageStep]);

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

  const currentAspectRatio = isImageStep ? imageAspectRatio : defaultAspectRatio;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-white text-black py-12 py-[40px] md:py-[40px] lg:py-[80px] sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Mobile layout */}
        {!isDesktop && (
          <div className="flex flex-col items-center text-center gap-5">
            <div className="space-y-1.5 md:py-[10px]">
              <p className="text-3xl font-semibold text-black">how it works?</p>
            </div>

            <div className="relative mx-auto w-full max-w-[500px]" style={{ aspectRatio: currentAspectRatio }}>
              <div className="relative w-full h-full">
                {steps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isAdjacent = Math.abs(index - currentStep) <= 1;
                  const shouldLoad = isActive || (isInView && isAdjacent);

                  return (
                    <div
                      key={`mobile-${step.id}`}
                      className="absolute inset-0 transition-all duration-500 ease-in-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'scale(1)'
                          : index < currentStep
                            ? 'scale(0.98)'
                            : 'scale(1.02)',
                        zIndex: isActive ? 10 : 5,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      {shouldLoad &&
                        (step.isImage ? (
                          <img
                            src={step.video}
                            alt={step.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            ref={(el) => {
                              if (isActive) {
                                videoRef.current = el;
                              }
                              videoRefs.current[index] = el;
                            }}
                            src={step.video}
                            className="w-full h-full object-contain"
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
                        ))}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4 w-full">
              <div className="min-h-[10px] lg:min-h-[40px] flex items-center justify-center px-2">
                <h3 className="text-2xl font-medium text-black text-center">
                  {steps[currentStep].title.replace(/\n/g, ' ')}
                </h3>
              </div>

              <div className="min-h-[80px] lg:min-h-[80px] flex items-center justify-center px-3">
                <p className="whitespace-pre-line text-base text-neutral-800 leading-relaxed text-center">
                  {steps[currentStep].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full border border-[#7C310A] text-[#7C310A] flex items-center justify-center hover:bg-[#7C310A] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C310A]"
                aria-label="Previous step"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="px-4 py-1.5 bg-[#FEEEDF] text-[#7C310A] rounded-full text-sm font-semibold">
                {currentStep + 1} / {steps.length}
              </div>

              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-[#7C310A] text-[#7C310A] flex items-center justify-center hover:bg-[#7C310A] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C310A]"
                aria-label="Next step"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Desktop / tablet layout */}
        {isDesktop && (
          <div className="flex flex-row gap-12">
            {/* Left column */}
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-16 xl:px-36 flex flex-col gap-10">
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
                  <h3 className="whitespace-pre-line text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] font-semibold leading-tight">
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
                  <p className="whitespace-pre-line text-xl sm:text-2xl text-neutral-700 leading-relaxed">
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
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-10 xl:px-14 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]" style={{ aspectRatio: currentAspectRatio }}>
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
                      {shouldLoad &&
                        (step.isImage ? (
                          <img
                            src={step.video}
                            alt={step.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            ref={(el) => {
                              if (isActive) {
                                videoRef.current = el;
                              }
                              videoRefs.current[index] = el;
                            }}
                            src={step.video}
                            className="w-full h-full object-contain"
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
                        ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
