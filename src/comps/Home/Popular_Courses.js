import { Link } from "react-router-dom";
import { courses } from "../../data/Courses";
import { Loaded_Animation } from "../Commons/Loaded_Animation";

const Popular_Courses = () => {
  const filteredCourses = courses.filter((course) => course.rank < 4);

  filteredCourses.sort((a, b) => a.rank - b.rank);

  const reorderedCourses = [
    filteredCourses[1],
    filteredCourses[0],
    filteredCourses[2],
  ];

  const heights = ["h-20", "h-36", "h-28"];

  return (
    <section className="container padding">
      <h3 className="title-lg text-center">
        <span className="halfbg-left">محبوبترین دوره ها</span>
      </h3>
      <div className="flex mt-12">
        {reorderedCourses.map((item, index) => {
          const { ref, className } = Loaded_Animation("h-0", heights[index]);

          const path = "/courses/" + item.path;
          return (
            <div key={index} className="w-1/3 flex flex-col justify-end h-36">
              <div
                ref={ref}
                className={`flex-fullcenter transition-all rounded-t-xl ${className}`}
                style={{
                  backgroundColor: item.color[0],
                  background: `linear-gradient(0deg, ${item.color[0]} 0%, ${item.color[1]} 100%)`,
                  overflow: "hidden",
                }}
              >
                <Link to={path} className="text-center text-slate-100">
                  <h2 className="title-res">{item.title}</h2>
                  <h2 className="para mix-blend-soft-light">
                    {item.persianTitle}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Popular_Courses;
