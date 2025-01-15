import {
  Home_Hero,
  Half,
  Customers,
  Popular_Courses,
  Instagram,
  Course_Benefits,
  Breadcrumb,
  Courses_Section,
  Magazin,
} from "../comps/Portal";
import { futureAcademy, newWays, whatWeAre } from "../data/Constants";
import { courses } from "../data/Courses";

const Home = () => {
  const slicedCourses = courses.slice(-6);

  return (
    <>
      <Home_Hero />
      <Breadcrumb />
      <Half thing={futureAcademy} />
      <section className="container padding-x">
        <Courses_Section
          course={{ title: "آخرین کلاس ها", courses: slicedCourses }}
        />
      </section>
      <Popular_Courses />
      <Half thing={newWays} reverse />
      <Course_Benefits />
      <Half thing={whatWeAre} />
      <Magazin />
      <Instagram />
      <Customers />
    </>
  );
};

export default Home;
