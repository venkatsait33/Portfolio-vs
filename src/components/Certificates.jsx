import web_dev from '../assets/web-dev.jpg'

const Certificates = () => {
  return (
    <div className="flex items-center justify-center w-100 h-100">
      <div className="shadow-xl card bg-base-100 w-[80%] mb-5">
        <div className="card-body">
          <h2 className="card-title">Web Development Online Course</h2>
          <p>it&apos;s organized by Frontlines EduTech Private Limited(FLM)</p>
          <h1>Tech-Stack</h1>
          <p>HTML5,CSS3,JAVASCRIPT</p>
        </div>
        <figure>
          <img src={web_dev} alt="Web-Development-certificate" className="" />
        </figure>
      </div>
    </div>
  );
};

export default Certificates;
