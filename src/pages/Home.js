import {
  Home_Hero,
  Half,
  Customers,
  Overall,
  Popular_Courses,
  Instagram,
  Course_Benefits,
  Breadcrumb,
  Courses_Section,
  Magazin,
} from "../comps/Portal";
import {
  homeOverall,
  futureAcademy,
  newWays,
  whatWeAre,
} from "../data/Constants";
import { courses } from "../data/Courses";

const Home = () => {
  const slicedCourses = courses.slice(-6);
  console.log(slicedCourses);

  return (
    <>
      <Home_Hero />
      <Breadcrumb />
      <Half thing={futureAcademy} />
      <section className="container padding-t padding-x">
        <Courses_Section
          course={{ title: "آخرین دوره ها", courses: slicedCourses }}
        />
      </section>
      <Popular_Courses />
      <Half thing={newWays} reverse />
      <Course_Benefits />
      <Half thing={whatWeAre} />
      <Magazin />
      <Instagram />
      <Customers />
      <Overall thing={homeOverall} />
    </>
  );
};

export default Home;
