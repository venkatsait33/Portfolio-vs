const Skills = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2 m-2 mockup-code">
        <p className="mb-2 text-xl tracking-widest text-center text-purple-200 uppercase">
         Coding Skills & tools
        </p>
        <ul className="grid grid-cols-2 max-[560px]:grid-cols-1">
          <li>
            <pre className="text-2xl font-semibold " data-prefix=">">
              &nbsp; REACTJS
            </pre>
          </li>

          <li>
            <pre data-prefix=">" className="text-2xl font-semibold ">
              &nbsp; JAVASCRIPT
            </pre>
          </li>
          <li>
            <pre data-prefix=">" className="text-2xl font-semibold ">
              &nbsp; HTML5
            </pre>
          </li>
          <li>
            <pre data-prefix=">" className="text-2xl font-semibold ">
              &nbsp; CSS3
            </pre>
          </li>
          <li>
            {" "}
            <pre data-prefix=">" className="text-2xl font-semibold ">
              &nbsp; GITHUB
            </pre>
          </li>
          <li>
            <pre data-prefix=">" className="mb-10 text-2xl font-semibold ">
              &nbsp; TAILWINDCSS
            </pre>
          </li>
        </ul>
        <p className="text-xl tracking-widest text-center text-purple-200 uppercase">
          exposed to
        </p>
        <ul className="grid grid-cols-2 max-[560px]:grid-cols-1">
          <li>
            <pre data-prefix=">" className="text-2xl font-semibold ">
              &nbsp; Firebase
            </pre>
          </li>
          <li>
            <pre data-prefix=">" className="text-2xl font-semibold ">
              &nbsp; Redux
            </pre>
          </li>
          <li>
            <pre data-prefix=">" className="mb-10 text-2xl font-semibold">
              &nbsp; daisyui
            </pre>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
