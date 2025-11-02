import { useState } from 'react';

const CommunitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Kalyani Anjana",
      role: "Pastry Chef",
      quote: "I moved to Helsinki from Paris and wanted to connect with locals through food. thinnan helped me share my pastry skills and make friends who appreciate French cuisine.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vishnu George",
      role: "Home Cook",
      quote: "I host weekly Kerala cookouts through thinnan. It's amazing to share my culture's food with people who are curious and excited to learn about new flavors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Julia Korhonen",
      role: "Food Enthusiast",
      quote: "I've tried dishes from around the world without leaving my neighborhood. The connections I've made through sharing meals have become some of my closest friendships.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="community" className="py-20 sm:py-28 md:py-36 relative overflow-hidden bg-white">
      
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-text mb-3 relative">
              our food community
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-secondary-grey max-w-2xl mx-auto mt-6">
            Join thousands of food enthusiasts sharing meals and creating connections.
          </p>
        </div>

        {/* Featured Testimonial - Large and Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-white to-accent/5 p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
            {/* Large Quote Icon */}
            <div className="mb-4">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <div className="relative min-h-[200px] sm:min-h-[240px] md:min-h-[260px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="absolute w-full transition-opacity duration-700"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    transition: 'opacity 700ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                  }}
                >
                  {/* Quote */}
                  <p className="text-xl sm:text-2xl md:text-3xl text-primary-text italic mb-6 leading-relaxed font-light">
                    <span className="text-primary font-medium">"{testimonial.quote}"</span>
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center pt-4 border-t-2 border-primary/20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20 shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-primary-text mb-0.5">{testimonial.name}</h4>
                      <p className="text-sm sm:text-base text-primary font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t-2 border-primary/20">
              <button 
                onClick={prevTestimonial} 
                className="p-3 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-primary hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex 
                        ? 'bg-primary w-12 h-3 scale-110 shadow-lg shadow-primary/30' 
                        : 'bg-primary/20 hover:bg-primary/40 w-3 h-3'
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="p-3 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-primary hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 