import { useState, useEffect, useRef } from 'react';

const ProblemSection = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const sectionRef = useRef(null);

  const targetText = '1.6 billion';
  const targetValue = targetText.length;
  const duration = 500; // 3 seconds
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Easing function for smooth animation
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Animate counter
  useEffect(() => {
    if (!hasAnimated) return;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.floor(easedProgress * targetValue);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
        setIsComplete(true); // Trigger completion animation
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasAnimated, targetValue, duration]);

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startTimeRef.current = null;
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // // Format number with commas and line break
  // const formatNumber = (num) => {
  //   const formatted = Math.floor(num).toLocaleString('en-US');
  //   // Split "1,600,000,000" into "1,600," and "000,000"
  //   // The formatted string is "1,600,000,000"
  //   // We want to show "1,600," on first line and "000,000" on second line
  //   if (num >= 1600000000) {
  //     return "1,600,\n000,000";
  //   } else if (num >= 1000000) {
  //     // During animation, when number is between 1 million and 1.6 billion
  //     // Format to always show two lines
  //     const millions = Math.floor(num / 1000000);
  //     const thousands = Math.floor((num % 1000000) / 1000);
  //     const ones = Math.floor(num % 1000);
      
  //     if (millions >= 1600) {
  //       return `1,600,\n${thousands.toString().padStart(3, '0')},${ones.toString().padStart(3, '0')}`;
  //     } else if (millions >= 1000) {
  //       const millionsStr = millions.toLocaleString('en-US');
  //       return `${millionsStr},\n${thousands.toString().padStart(3, '0')},${ones.toString().padStart(3, '0')}`;
  //     } else {
  //       return `${millions},\n${thousands.toString().padStart(3, '0')},${ones.toString().padStart(3, '0')}`;
  //     }
  //   } else {
  //     // For numbers less than 1 million, still show on two lines
  //     const thousands = Math.floor(num / 1000);
  //     const ones = Math.floor(num % 1000);
  //     return `${thousands},\n${ones.toString().padStart(3, '0')}`;
  //   }
  // };

  // Reveal "1.6 billion" letter by letter
  const formatNumber = (num) => {
    const length = Math.max(0, Math.min(targetText.length, Math.floor(num)));
    return targetText.slice(0, length);
  };

  // Source links data
  const sources = [
    { 
      id: 1, 
      url: 'https://news.gallup.com/poll/646718/people-worldwide-feel-lonely-lot.aspx', 
      label: '1',
      title: 'Gallup Poll - Global Loneliness Report'
    },
    { 
      id: 2, 
      url: 'https://theharrispoll.com/briefs/gen-z-social-media-smart-phones/', 
      label: '2',
      title: 'Harris Poll - Gen Z Social Media & Smartphones'
    },
    { 
      id: 3, 
      url: 'https://www.smartinsights.com/social-media-marketing/social-media-strategy/new-global-social-media-research/', 
      label: '3',
      title: 'Smart Insights - Global Social Media Research'
    },
    { 
      id: 4, 
      url: 'https://datareportal.com/reports/digital-2024-deep-dive-the-time-we-spend-on-social-media', 
      label: '4',
      title: 'DataReportal - Digital 2024: Time on Social Media'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-4 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background overflow-hidden min-h-screen flex items-center font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        
        {/* Main Content */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
          
          {/* Tagline */}
          <div 
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brown-700 leading-tight text-center">
              digital fatigue is real!
            </p>
          </div>

          {/* Large Number */}
          <div 
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
            }}
          >
            <h1 
              className="font-bold leading-none text-primary text-center"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '-0.018em',
                fontWeight: 900,
                fontSize: 'clamp(5rem, 18vw, 14rem)',
                lineHeight: '1',
                opacity: 0.85,
                whiteSpace: 'pre-line',
                transform: isComplete ? 'scale(1)' : 'scale(1)',
                animation: isComplete ? 'numberPulse 0.6s ease-out' : 'none',
              }}
            >
              {formatNumber(count)}
            </h1>
          </div>

          {/* Animation keyframes */}
          <style>{`
            @keyframes numberPulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          `}</style>

          {/* Text Below Number */}
          <div 
            className="space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-primary-text leading-tight text-center">
              people crave in-person experiences
            </p>
          </div>
        </div>

        {/* Source Links - Modernized pill-style, no icon, reduced spacing */}
        <div 
          className="mt-12 sm:mt-16 md:mt-20 flex justify-end"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transition: 'opacity 1s ease-out 0.8s',
          }}
        >
          <div className="inline-flex flex-wrap gap-1 items-center">
            <span className="text-xs sm:text-sm md:text-base text-secondary-grey/70 tracking-wide mr-1">
              sources:
            </span>
            {sources.map((source, index) => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                title={source.title}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/30 hover:bg-accent/10 transition-all duration-200 text-xs sm:text-sm md:text-base text-primary gap-1 font-medium shadow-sm border border-secondary/30 hover:border-accent/50"
                style={{
                  textDecoration: 'none',
                  boxShadow: '0 1px 6px 0 rgba(80,80,80,0.03)',
                  marginRight: index < sources.length - 1 ? '0.1rem' : 0
                }}
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
