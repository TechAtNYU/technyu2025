import React from 'react'
import ValueCard from '../values/value_card'

const Values = () => {
  return (
    <section id='values' className="relative">
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical grid lines */}
        {[...Array(18)].map((_, i) => (
          <line
            key={`vgrid-${i}`}
            x1={`${(i * 100) / 18}%`} y1="0" x2={`${(i * 100) / 18}%`} y2="100%"
            stroke="white"
            strokeWidth="2"
            opacity={i % 2 === 0 ? 0.6 : 0.3}
            style={{  }}
          />
        ))}
        {/* Horizontal grid lines */}
        {[...Array(24)].map((_, i) => (
          <line
            key={`hgrid-${i}`}
            x1="0" y1={`${(i * 100) / 24}%`} x2="100%" y2={`${(i * 100) / 24}%`}
            stroke="white"
            strokeWidth="2"
            opacity={i % 2 === 0 ? 0.6 : 0.3}
            style={{  }}
          />
        ))}
      </svg>
      {/* Content goes here */}
      <div className="relative z-20 w-full h-[300svh] mt-[10vh] mb-[10vh] pt-[10vh]">
        {/* Parallax sticky cards */}
        <div className="sticky top-0 w-full h-screen mt-[10vh]">
          <div className="w-[80vw] h-[50vh]flex items-center justify-center text-3xl font-bold ml-[5vw]">
            <ValueCard ProgramDetail={{name: "Innovation", url: "#", svgicon: "/values-logos/innovation.svg", description: "We strive to push the boundaries of technology and creativity, fostering an environment where new ideas can flourish."}} variant="purple"/>
          </div>
        </div>
        <div className="sticky top-[11vh] w-full h-screen flex items-center justify-center">
          <div className="w-[80vw] h-[50vh] rounded-2xl shadow-xl flex items-center justify-center text-3xl font-bold ml-[10vw]">
            <ValueCard ProgramDetail={{name: "Community", url: "#", svgicon: "/values-logos/community.svg", description: "We believe in the power of community and collaboration, working together to achieve common goals."}} variant="green"/>
          </div>
        </div>
        <div className="sticky top-[50vh] w-full flex items-start justify-start pb-[10vh]">
          <div className="w-[80vw] h-[50vh] rounded-2xl shadow-xl flex items-center justify-center text-3xl font-bold ml-[10vw]">
            <ValueCard ProgramDetail={{name: "Growth", url: "#", svgicon: "/values-logos/growth.svg", description: "We are committed to continuous growth and improvement, both as individuals and as an organization."}} variant="purple"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values