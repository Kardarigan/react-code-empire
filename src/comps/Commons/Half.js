import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Half = ({ thing, reverse = false }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section
      ref={ref}
      className={`padding-x py-10 flex  flex-col-reverse ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/2 flex-fullcenter z-10">
        <div className={reverse ? "" : "text-end"}>
          <h3 className="title-super font-bold relative max-md:px-2">
            <span
              className={`absolute max-md:right-3 max-md:halfbg-left max-md:text-slate-50 ${
                reverse
                  ? "md:translate-x-[31%] md:halfbg-right"
                  : "md:translate-x-[69%] md:halfbg-left"
              } translate-y-[-150%] md:w-[150%]`}
            >
              {thing.title}
            </span>
          </h3>
          <p className="my-5 para max-w-[500px]">{thing.describe}</p>
          <Link to="/contact" className="button button-dark">
            شروع همکاری
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
              className="w-full bg-fullobject ghost rounded"
            />
          )}
        </div>
        <span
          className={`absolute max-md:hidden text-purple-500 ${
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