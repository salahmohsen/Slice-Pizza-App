import { GiFullPizza } from "react-icons/gi";

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-9xl text-white backdrop-blur-lg">
      <span className=" animate-spin-slow">
        <GiFullPizza />
      </span>
    </div>
  );
}

export default Loader;
