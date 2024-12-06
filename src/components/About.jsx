import { MdMail } from "react-icons/md";
import Education from "./Education";
import Skills from "./Skills";
import { FaAddressBook } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";

const About = () => {
  return (
    <div
      className=" max-[560px]:w-[90%] max-[560px]:text-xl max-[560px]:leading-8 max-[560px]:p-2 max-[560px]:m-2 
    max-[970px]:w-[90%] w-full  flex flex-col gap-2 p-2 m-2 "
    >
      <ul className="flex flex-col gap-2 p-2 m-2 mockup-code">
        <li className="text-xl tracking-widest text-center text-purple-200 uppercase">
          About Me
        </li>
        <p className="text-2xl font-semibold text-orange-300">
          &nbsp; Tumma.Venkata Sai
        </p>
        <p className="flex items-center gap-1 text-lg max-sm:text-sm">
          &nbsp;
          <MdMail /> venkatsait33@gmail.com
        </p>
        <p className="flex items-center gap-1 text-lg max-sm:text-sm">
          &nbsp;
          <BiMobile /> +91 8184804933
        </p>
        <p className="flex flex-wrap items-center gap-1 text-lg max-sm:text-sm">
          &nbsp;
          <FaAddressBook /> Jaggayyapet, NTR Krishna<small>(dt)</small>, Andhra
          Pradesh, India - &nbsp; 521175
        </p>

        <p className="p-2 mb-2 text-base tracking-wider max-sm:text-sm ">
          I &apos; m T.VenkataSai, a Frontend Developer with a passion for
          creating visually stunning and user-friendly web applications. With a
          solid foundation in HTML, CSS, JavaScript, and React, I am dedicated
          to delivering high-quality code that exceeds expectations.
        </p>
      </ul>

      <Skills />
      <Education />
    </div>
  );
};

export default About;
