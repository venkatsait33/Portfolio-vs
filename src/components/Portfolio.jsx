import { LuCode2 } from "react-icons/lu";
import { info } from "../info";
import { BsBrowserEdge } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div
      className="grid mx-auto max-md:grid-cols-2 lg:grid-cols-1 max-lg:grid-cols-1
      max-[960px]:w-[90%] gap-10 mt-5  max-[560px]:grid-cols-1 mb-10"
    >
      {info.portfolio.map((item, index) => (
        <div
          key={index}
          className="shadow-xl card card-compact bg-base-100 scroll-smooth duration-200 transform hover:scale-105  lg:card-side  lg:h-[420px] md:w-[70%] lg:w-full md:mx-auto"
        >
          <figure className="">
            <img
              src={item.image}
              alt="Shoes"
              className="object-scale-down w-full p-2 rounded-xl"
            />
          </figure>
          <div className="card-body ">
            <h2 className="flex justify-center card-title">{item.title}</h2>
            <p>{item.description}</p>           
            <div>
              <div className="justify-evenly card-actions ">
                <a
                  href={item.demo}
                  target="_blank"
                  className="border border-gray-700 hover:text-black dark:hover:text-white btn"
                >
                  <p className="flex gap-2">
                    <span>
                      <BsBrowserEdge />
                    </span>{" "}
                    Live Demo{" "}
                  </p>
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  className="border border-gray-700 btn hover:text-black dark:hover:text-white"
                >
                  <p className="flex gap-2">
                    <span>
                      <LuCode2 />
                    </span>
                    Source Code
                  </p>
                </a>
              </div>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
