"use client";

export default function Circle() {
  const logos = [
    "javascript/javascript-original.svg",
    "python/python-original.svg",
    "java/java-original.svg",
    "html5/html5-original.svg",
    "css3/css3-original.svg",
    "react/react-original.svg",
    "tailwindcss/tailwindcss-plain.svg",
    "nodejs/nodejs-original.svg",
    "mongodb/mongodb-original.svg",
  ];

  const total = logos.length;

  return (
    <div className="flex justify-center items-center   ">
      {/* Container with perspective */}
      <div className="relative w-[320px] h-[320px] ">
        {/* Rotating element with preserve-3d */}
        <div className="absolute w-full h-full animate-rotate3d preserve-3d">
          {logos.map((logo, i) => (
            <img
              key={logo}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}`}
              alt={logo.split("/")[0]}
              className="absolute w-[60px] h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
              style={{
                transform: `rotateY(${(360 / total) * i}deg) translateZ(140px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
