const Education = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2 m-2 mx-auto mockup-code">
        <p className="text-xl tracking-widest text-center text-purple-200 uppercase">
          Education
        </p>
        <ul className="flex flex-wrap gap-3">
          <li className="flex flex-col gap-2">
            <pre className="text-lg font-semibold " data-prefix=">">
              &nbsp; B.TECH
            </pre>
            <pre className="flex place-content-between">
              <span>CGPA:7.13</span> &nbsp;<span>Year of Passing:2022</span> &nbsp;
              <span>GIET Engineering collage,Rajahmundary,AP</span>
            </pre>
          </li>
          <li>
            <pre className="text-lg font-semibold " data-prefix=">">
              &nbsp;Diploma
            </pre>
            <pre className="flex place-content-between">
              <span>Percentage:68.3</span> &nbsp; <span>Year of Passing:2018</span> &nbsp;
              <span>Mandava Institute of Engg & Tech,Jaggayyapet,Ap </span>
            </pre>
          </li>
          <li>
            <pre className="text-lg font-semibold " data-prefix=">">
              &nbsp; SSC
            </pre>
            <pre className="flex place-content-between">
              <span>CGPA:7.3</span>&nbsp; <span>Year of Passing:2014</span>{" "}
              &nbsp;
              <span>SSS Model School,Penuganchiprolu,AP</span>
            </pre>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
