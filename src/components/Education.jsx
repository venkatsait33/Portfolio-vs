const Education = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2 m-2 mx-auto mockup-code">
        <p className="text-xl tracking-widest text-center text-purple-200 uppercase">
          Education
        </p>
        <ul className="flex flex-col gap-3">
          <li className="flex flex-col gap-2">
            <pre className="text-lg font-semibold " data-prefix=">">
              &nbsp; B.TECH
            </pre>
            <pre className="flex max-[560px]:flex-wrap max-[560px]:mx-auto max-[560px]:place-content-between p-1 m-1">
              <span>CGPA:7.13</span> &nbsp;
              <span className="max-[560px]:text-[15px] max-[560px]:ml-2">
                Year of Passing:2022
              </span>{" "}
              &nbsp;
              <span className="max-[560px]:text-[15px] max-[560px]:ml-6">
                GIET Engineering collage,Rajahmundary,AP
              </span>
            </pre>
          </li>
          <li className="flex flex-col gap-2">
            <pre className="text-lg font-semibold " data-prefix=">">
              &nbsp;Diploma
            </pre>
            <pre className="flex mx-auto max-[560px]:flex-wrap place-content-between p-1 m-1">
              <span className="max-[560px]:text-[20px] max-[560px]:ml-2">
                Percentage:68.3
              </span>{" "}
              &nbsp;
              <span className="max-[560px]:text-[15px] max-[560px]:ml-2">
                Year of Passing:2018
              </span>{" "}
              &nbsp;
              <span className="max-[560px]:text-[15px] max-[560px]:ml-6">
                Mandava Institute of Engg & Tech,Jaggayyapet,Ap
              </span>
            </pre>
          </li>
          <li className="flex flex-col gap-2">
            <pre className="text-lg font-semibold " data-prefix=">">
              &nbsp; SSC
            </pre>
            <pre className="flex mx-auto max-[560px]:flex-wrap place-content-between p-1 m-1">
              <span>CGPA:7.3</span>&nbsp;{" "}
              <span className="max-[560px]:text-[15px] max-[560px]:ml-2">
                Year of Passing:2014
              </span>{" "}
              &nbsp;
              <span className="max-[560px]:text-[15px] max-[560px]:ml-6">
                SSS Model School,Penuganchiprolu,AP
              </span>
            </pre>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
