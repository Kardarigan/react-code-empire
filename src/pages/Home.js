import {
  Home_Hero,
  Half,
  Customers,
  Overall,
  Popular_Courses,
  Instagram,
  Course_Benefits,
  Breadcrumb,
} from "../comps/Portal";
import {
  homeOverall,
  futureAcademy,
  newWays,
  whatWeAre,
} from "../data/Constants";

const Home = () => {
  return (
    <>
      <Home_Hero />
      <Breadcrumb />
      <Half thing={futureAcademy} />
      <Popular_Courses />
      <Half thing={newWays} reverse />
      <Course_Benefits />
      <Half thing={whatWeAre} />
      <Instagram />
      <Customers />
      <Overall thing={homeOverall} />
    </>
  );
};

export default Home;
