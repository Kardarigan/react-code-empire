import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Stand = ({ thing, index }) => {
  const heights = ["h-60", "h-72", "h-64"];
  const { ref, className } = Loaded_Animation("h-24", heights[index]);
  const path = "/courses/" + thing.path;
  return (
    <div className="w-1/3 flex flex-col justify-end h-80">
      <div ref={ref} className={`stand ${className}`}>
        <Link
          to={path}
          className="text-center text-slate-100 translate-y-[-20%] py-8 block md:mx-8 mx-3 rounded-lg"
          style={{
            backgroundColor: thing.color[0],
            background: `-webkit-linear-gradient(0deg, ${thing.color[0]} 0%, ${thing.color[1]} 100%)`,
          }}
        >
          <h2 className="title-res drop-shadow-2xl line-clamp-1" dir="ltr">
            {thing.title}
          </h2>
          <h2 className="para text-center">{thing.persianTitle}</h2>
        </Link>
        <div className="stand-column" />
      </div>
    </div>
  );
};

export default Stand;
