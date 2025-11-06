import React, { useRef } from 'react'
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
    <section className="relative w-[100svw] h-screen overflow-hidden aspect-video">
      {/* Full screen video */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        autoPlay
        muted
      >
        <source src="/hero.webm" type="video/webm" />
      </video>
      
      {/* Dark overlay to make text more readable */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Bottom-right aligned content with padding */}
      <div className="relative z-1 flex flex-col items-start justify-end w-full h-full text-white p-5 md:p-10 lg:py-12 lg:px-[5vw]">
        <div className="max-w-xl sm:max-w-3xl lg:max-w-5xl">
          <h1 className="text-[15vw] tracking-tight sm:text-3xl md:text-4xl lg:text-[4vw] font-bold md:mb-3 mb-[1.5vh] text-left font-satoshi z-[10]">
            <MaskText 
              phrases={['tech@nyu']} 
              customDelay={0.75} 
              duration={1.5}
            />
          </h1>
          <div className="text-2xl sm:text-base md:text-xl lg:text-[2.5vw] text-left font-satoshi tracking-tight">
            <MaskText 
              phrases={['The Space for Artists, Makers, and Hackers to Build @ NYU.']} 
              customDelay={0.75} 
              duration={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
