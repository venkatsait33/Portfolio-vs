import web_dev from "../assets/web-dev.jpg";
import reactjs from "../assets/react-certficate.jpg";

const Certificates = () => {
  return (
    <div className="flex max-[560px]:flex-wrap items-center justify-center gap-8 w-100 h-100">
      <div className="shadow-xl card bg-base-100 w-[80%]">
        <div className="card-body">
          <h2 className="card-title">Web Development Online Course</h2>
          <p>it&apos;s organized by Frontlines EduTech Private Limited(FLM)</p>
          <h1 className="text-base font-bold">Tech-Stack</h1>
          <p>HTML5,CSS3,JAVASCRIPT</p>
        </div>
        <figure>
          <img
            src={web_dev}
            alt="Web-Development-certificate"
            className="mb-2 w-[90%]"
          />
        </figure>
      </div>
      <div className="shadow-xl card bg-base-100 w-[80%] mb-5">
        <div className="card-body">
          <h2 className="card-title">ReactJS Online Course</h2>
          <p>it&apos;s organized by Frontlines EduTech Private Limited(FLM)</p>
          <h1 className="text-base font-bold">Tech-Stack</h1>
          <p>
            React-Router-Dom, TailwindCSS, DaisyUI, Redux & Redux Toolkit, Axios
            and More.
          </p>
          <p>
            Hands-on projects included to reinforce learning and practical
            application of concepts.
          </p>
        </div>
        <figure>
          <img
            src={reactjs}
            alt="ReactJS-certificate"
            className="w-[90%] mb-2"
          />
        </figure>
      </div>
    </div>
  );
};

export default Certificates;
