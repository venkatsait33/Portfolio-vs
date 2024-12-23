import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiRedux, SiDaisyui, SiVitest } from "react-icons/si";

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

const TechnicalSkills = () => {
    return (
        <div>
            <div className="flex flex-col gap-2 p-2 m-2 ">
                <p className="mb-2 text-xl tracking-widest uppercase text-cent max-sm:text-sm">
                    Technology
                </p>
                <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-[560px]:grid-cols-2 lg:gap-5 gap-3 mx-auto">
                    {skill.map((item) => (
                        <li key={item.name} className="">
                            <p
                                className="flex gap-2 p-2 lg:w-[150px] text-2xl font-semibold shadow-2xl card place-items-center "
                                data-prefix=""
                            >
                                <p className="object-contain rounded-full max-sm:w-8 max-sm:h-8">
                                    {item.icon}
                                </p>
                                <p className="ml-2 text-lg font-semibold max-sm:text-sm">
                                    {item.name}
                                </p>
                            </p>
                        </li>
                    ))}
                </ul>
                <p className="text-xl tracking-widest text-center text-purple-200 uppercase">

                </p>

            </div>
        </div>
    )
}

export default TechnicalSkills