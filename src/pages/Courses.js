import {
  All_Courses,
  Course_Benefits,
  FAQ,
  Hero,
  Overall,
} from "../comps/Portal";
import Cover from "../assets/courses.png";
import { coursesOverall } from "../data/Constants";
import { coursesQuestions } from "../data/Courses";

const Courses = () => {
  return (
    <>
      <Hero title="دوره های امپراتوری" background={Cover} />
      <All_Courses />
      <Course_Benefits />
      <FAQ questions={coursesQuestions} className="container padding" />
      <Overall thing={coursesOverall} />
    </>
  );
};

export default Courses;
