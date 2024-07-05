import { MdMail } from "react-icons/md";
import Education from "./Education";
import Skills from "./Skills";
import { FaAddressBook } from "react-icons/fa";

const About = () => {
  return (
    <div className=" max-[560px]:w-[90%] max-[560px]:text-xl max-[560px]:leading-8 max-[560px]:p-2 max-[560px]:m-2 
    max-[970px]:w-[90%]">
      <div className="flex flex-col gap-2 p-2 m-2 mockup-code">
        <p className="text-xl tracking-widest text-center text-purple-200 uppercase">
          About Me
        </p>
        <p className="text-2xl font-semibold text-orange-300">
          &nbsp; T.Venkata Sai
        </p>
        <p className="flex items-center gap-1 text-lg">
          &nbsp;
          <MdMail /> venkatsait33@gmail.com
        </p>
        <p className="flex items-center gap-1 text-lg">
          &nbsp;
          <FaAddressBook /> Jaggayyapet, NTR Krishna<small>(dt)</small>, Andhra
          Pradesh, India - &nbsp; 521175
        </p>

        <p className="p-2 text-base tracking-wider">
          I &apos; m T.VenkataSai, a Frontend Developer with a passion for
          creating visually stunning and user-friendly web applications. With a
          solid foundation in HTML, CSS, JavaScript, and React, I am dedicated
          to delivering high-quality code that exceeds expectations.
        </p>
      </div>

      <Skills />
      <Education />
    </div>
  );
};

export default About;
