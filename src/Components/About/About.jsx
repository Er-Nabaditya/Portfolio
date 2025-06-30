import React from "react";
import Tilt from "react-parallax-tilt";
import photo from "../../Photos/bicky.png"; // Make sure this path is correct

const roles = [
  "PHP Developer",
  "MERN Stack Developer",
  "UI/UX Designer",
  "Coder",
];

const About = () => {
  const [currentRole, setCurrentRole] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [typing, setTyping] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;
    setDisplayedText("");
    setTyping(true);

    const currentRoleText = roles[currentRole];
    let charIndex = 0;

    function type() {
      if (!isMounted) return;
      if (charIndex <= currentRoleText.length) {
        setDisplayedText(currentRoleText.slice(0, charIndex));
        charIndex++;
        setTimeout(type, 80);
      } else {
        setTyping(false);
        setTimeout(() => {
          if (isMounted) setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }

    type();

    return () => {
      isMounted = false;
    };
  }, [currentRole]);

  return (
    <section
      id="about"
      className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-4 py-12 transition-all duration-700 animate-fade-in"
    >
      {/* Left Side: Text */}

      <div className="w-full md:w-1/2 max-w-xl mx-auto text-center md:text-left mb-6 md:mb-0 flex flex-col gap-1">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-1 leading-tight transition-all duration-700">
          Hi, I am
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1 leading-tight transition-all duration-700">
          Nabaditya Bhutia
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 text-amber-500 leading-tight transition-all duration-700">
          <span className="text-white">I am a </span>
          <span className="text-amber-500 transition-opacity duration-500">
            {displayedText}
            <span className="animate-pulse">{typing ? "|" : ""}</span>
          </span>
        </h3>
        <p className="text-base sm:text-[15px] text-gray-200 mt-4 mb-8">
          I'm Nabaditya Bhutia, a dedicated web developer experienced in HTML,
          CSS, Tailwind CSS, JavaScript, React.js, PHP, and MySQL. I have
          developed projects such as an Online Doctor Appointment & Ambulance
          Booking System and performed dataset analysis for TATA. My two web
          development internships at Internshala and Octanet enhanced my
          practical skills and understanding of real-world applications. I enjoy
          building responsive, user-friendly interfaces and aim to deliver
          clean, efficient code while constantly learning and growing in the
          field of web development
        </p>
        <div className="flex justify-center">
          <a
            href="/Nabaditya_Resume_1.pdf"
            download
            className="px-4 py-1.5 text-white font-semibold rounded-md shadow-md text-sm border-2 neon-border hover:bg-amber-600 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Side: Photo with Tilt */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
        >
          <div className="relative">
            <img
              src={photo}
              alt="Nabaditya Bhutia"
              className="w-86 h-86 object-cover rounded-[50%] shadow-2xl cursor-pointer transition-all duration-500 filter brightness-110 contrast-125 saturate-125 neon-frame border-8"
            />
            {/* Optional overlay for color enhancement */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,193,7,0.10) 0%, rgba(0,0,0,0.15) 100%)",
              }}
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default About;
