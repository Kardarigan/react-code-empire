import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Course_Card = ({ thing }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <Link
      ref={ref}
      to={thing.path}
      className={`text-center rounded-lg overflow-hidden transition-all duration-300 group hover:scale-105 ${className}`}
    >
      <div
        className="h-[200px]"
        style={{
          backgroundColor: thing.color[0],
          background: `linear-gradient(0deg, ${thing.color[0]} 0%, ${thing.color[1]} 100%)`,
        }}
      >
        <div className="flex-fullcenter pt-5 pb-1">
          {thing.title == "HTML,CSS" && (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt={thing.title + " logo"}
              className="center-obj max-w-24"
            />
          )}
          <img
            src={thing.logo}
            alt={thing.title + " logo"}
            className="center-obj object-contain max-w-24 min-h-24"
          />
        </div>
        <div className="text-slate-50 relative">
          <h2 className="title">{thing.title}</h2>
          <h2 className="font-medium">{thing.persianTitle}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card;
