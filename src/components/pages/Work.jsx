/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image1 from "../../assets/work/Igoblog.png";
import Image2 from "../../assets/work/Nir-info.png";
import Image3 from "../../assets/work/Leslandines.png";
import Image4 from "../../assets/work/myexpat.png";
import Image5 from "../../assets/work/Investissement-locatif.png";
import Image6 from "../../assets/work/nousgerons.png";
import Image7 from "../../assets/work/beetravel.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const datas = [
  { image: Image1, title: "Blog du site Igoblog", url: "https://igoblog.fr" },
  {
    image: Image2,
    title: "Blog de l'entreprise IT Nir'info",
    url: "https://nir-info.mg",
  },
  {
    image: Image3,
    title: "Blog de l'entreprise Leslandines",
    url: "https://leslandines.com",
  },
  {
    image: Image4,
    title: "Blog de l'entreprise My expat",
    url: "https://myexpat.fr",
  },
  {
    image: Image5,
    title: "Intégration du dashboard du site Investissement locatif",
    url: "https://investissement-locatif.com/",
  },
  {
    image: Image6,
    title: "Intégration du site Nousgerons",
    url: "https://nousgerons.com/",
  },
  {
    image: Image7,
    title: "Création du site Beetravel",
    url: "https://github.com/RovaFitia/beetravel",
  },
];

const variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};
const Work = () => {
  const controls = useAnimation();
  const elementRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      elementRefs.current.forEach((elementRef, index) => {
        const elementTop = elementRef.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > elementTop) {
          controls.start("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid-item */}

          {datas.map((item, index) => (
            <motion.div
              key={index}
              ref={(ref) => (elementRefs.current[index] = ref)}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: index * 0.5 }}
            >
              <div className="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                <span className="text-[18px] text-wrap block w-[200px] font-bold text-white tracking-wider text-center">
                  {item.title}
                </span>
                <div className="text-center">
                  <a href={item.url} target="_bank">
                    <button className="text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-sm">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/RovaFitia" target="_bank">
                    <button className="text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-sm">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
