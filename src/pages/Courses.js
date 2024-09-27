import { All_Courses, Hero, Overall } from "../comps/Portal";
import Cover from "../assets/courses.png";
import { coursesOverall } from "../data/Constants";

const Courses = () => {
  return (
    <>
      <Hero title="دوره های امپراتوری" background={Cover} />
      <All_Courses />
      <Overall thing={coursesOverall} />
    </>
  );
};

export default Courses;
