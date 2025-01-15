import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Course_Card = ({ thing }) => {
  const { ref, className } = Loaded_Animation();
  const formattedPrice = thing.price
    ? thing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  return (
    <Link
      ref={ref}
      to={"/courses/" + thing.path}
      className={`text-center rounded-lg relative transition-all duration-300 group hover:scale-105 ${className}`}
    >
      <div
        className="max-w-[90%] w-full absolute right-[5%] rounded-3xl"
        style={{
          backgroundColor: thing.color[0],
          background: `linear-gradient(0deg, ${thing.color[0]} 0%, ${thing.color[1]} 100%)`,
        }}
      >
        <div className="flex-fullcenter pt-5 pb-1">
          {thing.title === "HTML,CSS" && (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt={thing.title + " logo"}
              className="center-obj max-w-20"
            />
          )}
          <img
            src={thing.logo}
            alt={thing.title + " logo"}
            className="center-obj object-contain max-w-20 min-h-20"
          />
        </div>
        <div className="text-slate-50 relative pb-5">
          <h2 className="title">{thing.title}</h2>
          <h2 className="font-medium">{thing.persianTitle}</h2>
        </div>
        <h4 className="absolute para-sm left-2 top-2 bg-opacity-40 px-2 pt-1 pb-1 bg-slate-100 rounded-full">
          <i className="fas fa-user me-1" />
          {thing.specs[0].describe}
        </h4>
      </div>
      <div className="mac-border mt-12 pt-36 pb-5 text-start">
        <h2 className="title-sm">{thing.fullTitle}</h2>
        <p className="line-clamp-2 text-ellipsis text-sm mt-3">
          {thing.paragraphs[0].paragraph[0]}
        </p>
        <div className="mt-12 flex-seperate">
          <h6>
            {thing.capacity > 0 ? (
              <span className="text-blue-600 flex">
                <i className="fas fa-check size-6 flex-fullcenter me-1 bg-blue-200 rounded-full"></i>{" "}
                دارای ظرفیت
              </span>
            ) : (
              <span className="text-red-600 flex">
                <i className="fas fa-xmark size-6 flex-fullcenter me-1 bg-red-100 rounded-full"></i>{" "}
                تکمیل ظرفیت
              </span>
            )}
          </h6>
          <div className="flex relative">
            <h3 className="text-2xl font-sans font-extrabold me-3">
              {formattedPrice}
            </h3>
            <span className="absolute text-[10px] left-0 top-0 bottom-0 -rotate-90">
              تومان
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card;
