import foodVideo from '../assets/videos/food_video.mp4';

const HeroSection = () => {

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
    </>
  );
};

export default HeroSection; 