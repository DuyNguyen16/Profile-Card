import React from "react";
import "./App.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.0deg", "-10.0deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.0deg", "10.0deg"]
  );

  const handleMouseCursor = (e) => {
    const rect = e.target.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const xMov = mouseX / width - 0.5;
    const yMov = mouseY / height - 0.5;

    x.set(xMov);
    y.set(yMov);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseCursor}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[33rem] sm:h-[38rem] w-[18rem] sm:w-[26rem] rounded-xlr"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div className="w-[288px] h-[448px] sm:w-[330px] rounded-xl grid">
          <div className="grid items-end w-full h-full">
            <div className="h-36 w-36 sm:h-48 sm:w-48  absolute left-[50%] top-[-50px] translate-x-[-50%] shadow-2xl">
              <div className="w-full h-full bg-cover bg-[url('./image/profile.png')] rounded-xl shadow-2xl"></div>
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-lg text-center pt-5">
                Duy Nguyen
              </h1>
              <h1 className="text-center text-sm">Software Developer</h1>
              <div className="flex place-content-center pt-5">
                <div className="w-3/4 flex place-content-evenly">
                  <a href="https://github.com/DuyNguyen16" target="_blank">
                    <FaGithub className="w-8 h-8 flex cursor-pointer" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khanh-duy-nguyen/"
                    target="_blank"
                  >
                    <FaLinkedin className="w-8 h-8 flex cursor-pointer" />
                  </a>
                  <a target="_blank">
                    <FaInstagramSquare className="w-8 h-8 flex cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex place-content-center items-center">
            <div className="w-3/4 items-center justify-center">
              <h1 className="text-center text-sm">
                I'm Duy Nguyen, a software developer with a love for both coding
                and socializing. I thrive on learning, be it in the realm of
                technology or the experiences life has to offer. My cheerful
                personality adds a positive vibe to any environment, and I'm
                always excited about new challenges and opportunities for
                growth.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
