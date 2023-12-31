import { GiFullPizza } from "react-icons/gi";

function Loader() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center text-9xl text-white backdrop-blur-sm">
      <span className=" animate-spin-slow">
        <GiFullPizza />
      </span>
    </div>
  );
}

export default Loader;
