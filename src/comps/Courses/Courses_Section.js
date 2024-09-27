import { Course_Card } from "../Portal";

const Courses_Section = ({ course }) => {
  return (
    <div className="mt-12">
      <h2 className="title-lg">
        <i className="fa-solid fa-hashtag text-purple-500 me-2" />
        <span className="halfbg-left">{course.title}</span>
      </h2>
      <hr className="border-purple-500 my-5" />
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
        {course.courses.map((item, index) => {
          return <Course_Card thing={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Courses_Section;
