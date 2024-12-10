import {
  All_Courses,
  Breadcrumb,
  Course_Benefits,
  FAQ,
  Hero,
  Learners_Rank,
  Overall,
} from "../comps/Portal";
import Cover from "../assets/courses.png";
import { coursesOverall } from "../data/Constants";
import { coursesQuestions } from "../data/Courses";

const Courses = () => {
  return (
    <>
      <Hero title="دوره های امپراتوری" background={Cover} />
      <Breadcrumb />
      <All_Courses />
      <Learners_Rank />
      <Course_Benefits />
      <FAQ questions={coursesQuestions} className="container padding" />
    </>
  );
};

export default Courses;
