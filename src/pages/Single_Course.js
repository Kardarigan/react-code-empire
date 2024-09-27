import { useParams } from "react-router-dom";
import { Article, FAQ, Hero, Main_Side } from "../comps/Portal";
import { courses } from "../data/Courses";

const Single_Course = () => {
  const { course } = useParams();
  const theCourse = courses.find((e) => e && e.path === course);
  const subtitle = theCourse.persianTitle + ", " + theCourse.describe;

  return (
    <>
      <Hero title={theCourse.title} subtitle={subtitle} />
      <section className="grid md:grid-cols-5 gap-8 container padding">
        <div className="md:col-span-3 pb-60 grid gap-y-12">
          <Article article={theCourse.paragraphs} />
          <FAQ questions={theCourse.faq} />
        </div>
        <Main_Side
          details={theCourse.specs}
          link={{ label: "ثبت نام", path: theCourse.registerLink }}
          capacity={theCourse.capacity}
          price={theCourse.price}
        />
      </section>
    </>
  );
};

export default Single_Course;
