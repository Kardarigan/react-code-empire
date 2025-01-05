import { courses } from "../../data/Courses";
import { Stand } from "../Portal";

const Popular_Courses = () => {
  const filteredCourses = courses.filter((course) => course.rank < 4);

  filteredCourses.sort((a, b) => a.rank - b.rank);

  const reorderedCourses = [
    filteredCourses[1],
    filteredCourses[0],
    filteredCourses[2],
  ];

  return (
    <section className="container padding mt-12">
      <h3 className="title-lg text-center">
        <span className="mac-bg">محبوبترین کلاس ها</span>
      </h3>
      <div className="flex mt-12 md:gap-x-12">
        {reorderedCourses.map((item, index) => {
          return <Stand thing={item} index={index} key={index} />;
        })}
      </div>
      <div className="stand-found"></div>
    </section>
  );
};

export default Popular_Courses;
