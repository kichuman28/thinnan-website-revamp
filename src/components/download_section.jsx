import GoogleIcon from '../assets/icons/google_icon';
import AppleIcon from '../assets/icons/apple_icon';
import downloadScreenshot from '../assets/images/download_section.webp';

const DownloadSection = () => {
  return (
    <section id="download" className="py-10 sm:py-16 md:py-24 bg-gray-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-dark to-black"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FB6B23' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Left gradient blur */}
      <div className="absolute -left-32 top-1/3 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl"></div>
      
      {/* Right gradient blur */}
      <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Text content */}
          <div className="text-white relative text-center md:text-left">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full opacity-40 blur-2xl"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 relative leading-tight sm:leading-snug">
              your social life,<br/>
              back in real life.<br/>
              <span className="mt-3 sm:mt-6 block">download thinnan now!</span>
            </h2>
          </div>
          
          {/* Screenshot */}
          <div className="relative mt-3 sm:mt-4 md:mt-0">
            <div className="flex justify-center md:justify-end">
                {/* Phone frame details - removed transform hover effect */}
                
             
                  
                  {/* App screenshot image */}
                  <img 
                    src={downloadScreenshot} 
                    alt="thinnan app screenshot" 
                    className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[350px] object-cover mx-auto"
                  />

                
                {/* Decorative elements */}
                <div className="absolute -right-8 sm:-right-16 -bottom-8 sm:-bottom-16 w-24 h-24 sm:w-32 sm:h-32 bg-accent opacity-30 rounded-full blur-xl"></div>
                <div className="absolute -left-8 sm:-left-12 -top-8 sm:-top-12 w-16 h-16 sm:w-24 sm:h-24 bg-accent opacity-20 rounded-full blur-xl"></div>

              
              {/* Background phone shadow for depth */}
              <div className="absolute top-8 -right-8 w-[300px] h-[620px] bg-black/30 rounded-[40px] blur-xl -z-10 hidden lg:block"></div>
            </div>
          </div>

          {/* Buttons below screenshot */}
          <div className="mt-3 sm:mt-4 md:mt-5 md:col-span-2 flex flex-row gap-3 sm:gap-4 md:gap-4 justify-center md:justify-start flex-wrap md:flex-nowrap">
            <a 
              href="https://play.google.com/store/apps/details?id=com.jathikka.thinaan&hl=en" 
              className="flex items-center justify-center bg-black/40 backdrop-blur-sm text-white px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-xl hover:bg-black/60 transition-all duration-300 shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group relative overflow-hidden border border-white/10 min-w-[140px] sm:min-w-[150px] md:min-w-[160px] flex-1 sm:flex-none"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/30 to-accent/10 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              <GoogleIcon />
              <div className="ml-2 sm:ml-3 md:ml-4 relative">
                <div className="text-xs sm:text-sm md:text-base">GET IT ON</div>
                <div className="text-sm sm:text-base md:text-lg font-medium">Google Play</div>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/fi/app/thinnan/id6502411893" 
              className="flex items-center justify-center bg-black/40 backdrop-blur-sm text-white px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-xl hover:bg-black/60 transition-all duration-300 shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group relative overflow-hidden border border-white/10 min-w-[140px] sm:min-w-[150px] md:min-w-[160px] flex-1 sm:flex-none"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/30 to-accent/10 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              <AppleIcon />
              <div className="ml-2 sm:ml-3 md:ml-4 relative">
                <div className="text-xs sm:text-sm md:text-base">Download on the</div>
                <div className="text-sm sm:text-base md:text-lg font-medium">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection; 