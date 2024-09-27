import { useParams } from "react-router-dom";
import { Hero, Article, Main_Side, Availability } from "../comps/Portal";
import { services } from "../data/Services";

const Single_Service = () => {
  const { service } = useParams();
  const theService = services.find((e) => e.path === service);

  return (
    <>
      <Hero title={theService.title} background={theService.cover} />
      <section className="grid md:grid-cols-5 gap-8 container padding">
        <div className="md:col-span-3">
          <Availability available={theService.availability} />
          <Article article={theService.paragraphs} />
        </div>
        <Main_Side details={theService.details} link={theService.link} />
      </section>
    </>
  );
};

export default Single_Service;
