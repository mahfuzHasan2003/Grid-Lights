import "./Heading.css";
const Heading = () => {
  return (
    <div className="mb-5">
      <h1 className="text-3xl md:text-6xl font-extrabold uppercase">
        <span
          id="app-heading"
          className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 animate-gradient text-transparent bg-clip-text"
        >
          Grid Lights
        </span>
      </h1>
      <p className="mt-5 font-mono">
        Click to fill up every cell, and it&apos;ll return to the initial stage
        after all are filled.
      </p>
    </div>
  );
};

export default Heading;
