import {
  Home_Hero,
  Services,
  Half,
  Customers,
  Overall,
  Popular_Courses,
  Instagram,
} from "../comps/Portal";
import { homeOverall, lessCode, whatWeAre } from "../data/Constants";

const Home = () => {
  return (
    <>
      <Home_Hero />
      <Services homepage />
      <Half thing={lessCode} />
      <Popular_Courses />
      <Half thing={whatWeAre} reverse />
      <Instagram />
      <Customers />
      <Overall thing={homeOverall} />
    </>
  );
};

export default Home;
