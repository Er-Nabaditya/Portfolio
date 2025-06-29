import React from 'react'

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Bhubaneswar Engineering College(BEC),Bhubaneswar,Odisha",
    year: "2025",
    logo: "/logos/bec.jpg",
    desc: "Major in Computer Science and Engineering",
    score:"7.96 CGPA"
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Talcher Autonomous College,Talcher,Odisha",
    logo: "/logos/talcher.jpg",
    desc: "PCM Comp.sc",
    score:"62.33 Percentage"
  },
  {
    degree: "Matriculation (10th)",
    school: "Panchayat Raj High School,Pitiri,Odisha",
    
    logo: "/logos/ten.webp",
    desc: "Completed 10th grade",
    score:"74.16 Percentage"
  }
]

const Education = () => {
  return (
    <div id='education'>
      <div className='mt-12'>
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg uppercase">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          {/* Two underlines: one long, one short, both thin */}
          <div className="flex flex-col items-center mt-2">
            <div className="h-1 w-56 bg-amber-300 rounded-full mb-2 shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]"></div>
            <div className="h-1 w-40 bg-yellow-200 rounded-full shadow-[0_0_6px_1px_rgba(253,224,71,0.5)]"></div>
          </div>
          <p className="text-gray-300 text-center mt-4 max-w-2xl">
            My academic journey, highlighting my degrees and institutions.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative flex justify-center items-start min-h-[400px] mt-10">
          {/* Vertical neon line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 shadow-[0_0_16px_4px_rgba(251,191,36,0.7)] z-0"></div>
          <div className="flex flex-col gap-10 w-full max-w-2xl z-10">
            {educationData.map((edu, idx) => {
              // BTech and Matriculation left, 12th right
              const isRight = idx === 1;
              return (
                <div
                  key={idx}
                  className={`flex items-center w-full`}
                >
                  <div className="relative flex items-center w-full">
                    {/* Branch line - left for left boxes, right for right box (12th) */}
                    <div
                      className={`
                        hidden md:block absolute
                        ${isRight ? "left-1/2" : "right-1/2"}
                        top-1/2 -translate-y-1/2
                        h-0.5 w-12 bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]
                      `}
                      style={{
                        [isRight ? 'left' : 'right']: 'calc(50% + 12px)'
                      }}
                    ></div>
                    {/* Mobile: branch always left, below the box */}
                    <div
                      className={`
                        md:hidden absolute
                        left-1/2
                        top-full
                        mt-2
                        h-0.5 w- bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]
                      `}
                      style={{
                        left: 'calc(50% - 5px)'
                      }}
                    ></div>
                    {/* Logo and Info */}
                    <div
                      className={`
                        relative z-10 flex flex-col items-center group
                        bg-transparent
                        transition-transform cursor-pointer
                        ${isRight
                          ? "ml-auto md:items-end md:ml-103 " // right side, margin from line
                          : "mr-auto md:items-start md:mr-103"} // left side, margin from line
                        w-[90vw] max-w-xs sm:max-w-sm md:max-w-md
                      `}
                    >
                      <img
                        src={edu.logo}
                        alt={edu.degree}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full border-4 border-amber-300 shadow-[0_0_16px_4px_rgba(251,191,36,0.7)] bg-white"
                      />
                      <div className="bg-gray-900/80 rounded-xl px-4 py-3 mt-3 shadow-lg border border-amber-300/60 neon-edu-box text-center w-full transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-amber-300">
                        <h3 className="text-base sm:text-lg font-bold text-amber-400 mb-1">{edu.degree}</h3>
                        <p className="text-white font-semibold text-sm sm:text-base">{edu.school}</p>
                        <p className="text-gray-300 text-xs sm:text-sm">{edu.score}</p>
                        <p className="text-gray-400 text-xs mt-1">{edu.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

/* Add to your CSS (index.css or App.css) for neon effect:
.neon-edu-box {
  box-shadow:
    0 0 8px #fbbf24,
    0 0 16px #fbbf24;
  border-color: #fbbf24 !important;
}
*/