import React, { useRef } from 'react'

const projects = [
  {
    title: "Doctor Appointment & Ambulance Booking",
    video: "/project/Project1.mp4",
    desc: "A web platform for booking doctor appointments and ambulances online, featuring real-time availability, notifications, and secure user authentication using PHP and MySQL."
  },
  {
    title: "Student Attendance System",
    video: "/project/Project2.mp4",
    desc: "A web-based student attendance management system built using PHP and MySQL. It allows teachers to mark attendance, view reports, and manage student records efficiently with a simple and secure interface."
  },
  {
    title: "E-commerce (Frontend)",
    video: "/project/Project3.mp4",
    desc: "A responsive e-commerce user interface designed using HTML, CSS, and JavaScript. This project demonstrates product listings, shopping cart UI, and modern design principles, focusing on frontend development only."
  }
]

const Projects = () => {
  // Create an array of refs for each video
  const videoRefs = useRef([]);

  const handleMouseEnter = (idx) => {
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].play();
    }
  };

  const handleMouseLeave = (idx) => {
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].pause();
      videoRefs.current[idx].currentTime = 0;
    }
  };

  return (
    <div id='work'>
      <section className='py-12 px-4'>
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg uppercase">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          {/* Two underlines: one long, one short, both thin */}
          <div className="flex flex-col items-center mt-2">
            <div className="h-1 w-56 bg-amber-300 rounded-full mb-2 shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]"></div>
            <div className="h-1 w-40 bg-yellow-200 rounded-full shadow-[0_0_6px_1px_rgba(253,224,71,0.5)]"></div>
          </div>
          <p className="text-gray-300 text-center mt-4 max-w-2xl">
            A showcase of my projects I have worked on, highlighting my skills and experience in various technology.<b> Hover to play video</b>
          </p>
        </div>
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-white/10 border-2 border-amber-300/40 rounded-2xl shadow-xl neon-project-box flex flex-col items-center p-4 transition-transform hover:scale-105 duration-300"
              style={{
                boxShadow: "0 0 16px 2px #fbbf24, 0 0 32px 4px #fff1c1a0"
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className="w-full rounded-xl overflow-hidden mb-4 border border-amber-200 shadow-[0_0_12px_2px_rgba(251,191,36,0.3)]">
                <video
                  ref={el => videoRefs.current[idx] = el}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  className="w-full h-48 object-cover"
                  style={{ background: "#222" }}
                />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-2 text-center drop-shadow">
                {project.title}
              </h3>
              <p className="text-gray-200 text-center text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects