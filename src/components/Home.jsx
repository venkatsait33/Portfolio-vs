import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import cv from "../assets/cv.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex px-5 mt-2 mb-2 sm:flex-wrap " id="title">
        <div className="grid grid-cols-2 mt-2 mb-4 max-[560px]:grid-cols-1 max-[560px]:place-items-center">
          <article className="p-10 text-center max-[560px]:w-full  justify-center items-center">
            <h1 className="text-xl flex flex-wrap gap-2 place-items-center font-medium tracking-wide max-[560px]:text-3xl">
              Hi, I &apos;m{" "}
              <span className="text-3xl animate-charcter text-slate-500">
                T Venkata Sai
              </span>
              <span className="hand">🤚</span>
            </h1>
            <ul>
              <li className="mt-5 text-base tracking-wide">
                Front-End Developer
              </li>
              <li className="mt-5 text-base tracking-wide">
                passionate about creating beautiful and functional websites.
              </li>

              <li className="mt-5 text-lg tracking-wide">
                <span>📧</span> &nbsp;venkatsait33@gmail.com
              </li>
            </ul>

            <ul className="grid grid-cols-3 p-3 mt-10 place-items-center">
              <li>
                <a href="https://github.com/venkatsait33" target="_blank">
                  <FaGithubSquare className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/venkatsai-t/"
                  target="_blank"
                >
                  <FaLinkedin className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaTwitterSquare className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
                </a>
              </li>
            </ul>
            <Link to="/contactForm" className="mt-5 btn">
              Contact Me
            </Link>
          </article>
          <article className="w-[100%] max flex items-center justify-center text-center">
            <img
              src={cv}
              alt=""
              className="w-[80%] object-cover block max-[560px]:w-[50%] sm:place-items-center"
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
