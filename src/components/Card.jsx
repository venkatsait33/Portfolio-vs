import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiRedux, SiDaisyui, SiVitest } from "react-icons/si";
import { InfiniteMovingCards } from "../utils/Infinite-Moving-Cards";

const skill = [
    {
        icon: <FaReact />,
        name: "React JS",
    },
    {
        icon: <FaNodeJs />,
        name: "JavaScript",
    },
    {
        icon: <FaHtml5 />,
        name: "HTML5",
    },
    {
        icon: <IoLogoCss3 />,
        name: "CSS3",
    },
    {
        icon: <RiTailwindCssFill />,
        name: "Tailwind CSS",
    },
    {
        icon: <FaGithub />,
        name: "Github",
    },
    {
        icon: <RiFirebaseFill />,
        name: "Firebase",
    }, {
        icon: <SiRedux />,
        name: "Redux",
    }, {
        icon: <SiDaisyui />,
        name: "DaisyUI",
    },{
        icon:<SiVitest/>,
        name:"Vitest"
    }
];

const Card = () => {
  return (
      <div className="max-[560px]:max-w-sm mx-auto  max-md:max-w-screen-md max-lg:w-full  rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <h1 className="mb-2 text-xl tracking-widest text-center uppercase text-cent max-sm:text-sm">Skills</h1>
          <InfiniteMovingCards
              items={skill}
              direction="right"
              speed="slow"
          />
      </div>
  )
}

export default Card