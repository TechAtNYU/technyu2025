import React, { useRef, useEffect } from 'react'
import { MaskText } from '../inlinemask/inline-mask';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   const video = videoRef.current;
    
  //   // Auto-play video when component mounts
  //   if (video) {
  //     video.play().catch(error => {
  //       console.log("Video autoplay failed:", error);
  //       // Many browsers require user interaction before video can play
  //     });

  //     video.addEventListener('timeupdate', () => {
  //     if (video.currentTime >= video.duration - 0.05) {
  //         video.pause();
  //         video.currentTime = video.duration - 0.05;
  //       }
  //     });

  //     // Cleanup
  //     return () => {
  //       video.removeEventListener('timeupdate', () => {
  //         if (video.currentTime >= video.duration - 0.05) {
  //           video.pause();
  //           video.currentTime = video.duration - 0.05;
  //         }
  //       });
  //     };
  //   }
  // }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden aspect-video">
      {/* Full screen video */}
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        poster={'/images/hero-pic.jpg'}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Bottom-right aligned content with padding */}
      <div className="relative z-1 flex flex-col items-start justify-end w-full h-full text-white p-5 md:p-10 lg:py-12 lg:px-[5vw]">
        <div className="max-w-xl sm:max-w-3xl lg:max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-bold mb-3 text-left font-satoshi z-[10]">
            <MaskText 
              phrases={['Tech@nyu']} 
              customDelay={0.75} 
              duration={1.5}
              style='className="text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-bold mb-3 text-left font-satoshi z-[10]'
            />
          </h1>
          <div className="text-sm sm:text-base md:text-lg lg:text-[2vw] text-left font-satoshi">
            <MaskText 
              phrases={['The Space for Artists, Makers, and Hackers to Build @ NYU.']} 
              customDelay={0.75} 
              duration={1.5}
              style='className="text-sm sm:text-base md:text-xl lg:text-[2.5vw] text-left font-satoshi tracking-tight'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
