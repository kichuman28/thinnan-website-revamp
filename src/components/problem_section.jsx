const ProblemSection = () => (
  <section className="relative py-24 sm:py-32 md:py-40 bg-background overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }}></div>

      {/* Floating Dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">


      {/* Main Heading */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text leading-tight">
          Social media moved online.
          <br />
          <span className="relative inline-block mt-2">
            Life didn’t.
            <span
              className="block mx-auto h-1 w-full max-w-xs sm:max-w-sm mt-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              style={{ height: '4px' }}
            />
          </span>
        </h2>
      </div>



      {/* Bottom Tagline */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xl sm:text-2xl md:text-3xl text-secondary-grey font-light leading-relaxed">
          We believe food is meant to bring people together—
          <span className="text-primary font-medium">not just fill feeds.</span>
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
