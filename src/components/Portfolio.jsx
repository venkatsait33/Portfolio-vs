import { LuCode2 } from "react-icons/lu";
import { info } from "../info";
import { BsBrowserEdge } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-2
      max-[960px]:w-[90%] gap-10 mt-5  max-[560px]:grid-cols-1 mb-10">
      {info.portfolio.map((item, index) => (
        <div
          key={index}
          className="shadow-xl card card-compact bg-base-100 w-96 max-[990px]:w-80"
        >
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center card-title">{item.title}</h2>
            <div className="h-20 overflow-y-scroll scroll-smooth">
              <p>{item.description}</p>
            </div>

            <div className="justify-evenly card-actions ">
              <a
                href={item.demo}
                target="_blank"
                className="border border-gray-700 hover:text-white btn"
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
                className="border border-gray-700 btn hover:text-white"
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
      ))}
    </div>
  );
};

export default Portfolio;
