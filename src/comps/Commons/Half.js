import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Half = ({ thing, reverse = false }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section
      ref={ref}
      className={`container padding-x py-10 flex flex-col-reverse ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/2 flex-fullcenter z-10">
        <div className={reverse ? "" : "text-end"}>
          <h3 className="title-super font-bold relative max-md:px-2">
            <span
              className={`absolute max-md:right-3 max-md:halfbg-left max-md:text-slate-50 ${
                reverse ? "md:left-0 md:halfbg-right" : "right-0 md:halfbg-left"
              } translate-y-[-150%] text-nowrap`}
            >
              {thing.title}
            </span>
          </h3>
          <p className="my-5 para max-w-[500px]">{thing.describe}</p>
          <Link to="/courses" className="button button-dark">
            مشاهده‌ی کلاس ها
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className={`md:p-12 flex-fullcenter ${className}`}>
          {thing.cover?.endsWith(".mp4") || thing.cover?.endsWith(".webm") ? (
            <video autoPlay muted loop className="bg-fullobject ghost w-full">
              <source
                src={thing.cover}
                type={`video/${thing.cover.split(".").pop()}`}
              />
              Your browser does not support the video tag.
            </video>
          ) : thing.icon ? (
            <i className={thing.icon + " md:text-[300px] text-[100px]"} />
          ) : (
            <img
              src={thing.cover}
              alt={thing.title}
              className="w-full bg-fullobject ghost rounded filter-blue"
            />
          )}
        </div>
        <span
          className={`absolute max-md:hidden ${
            reverse ? "" : "left-0"
          } translate-y-[-150%] md:text-9xl hover:rotate-180 transition-all`}
        >
          <i className="fa-solid fa-hashtag" />
        </span>
      </div>
    </section>
  );
};

export default Half;
