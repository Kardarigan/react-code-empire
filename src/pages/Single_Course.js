import { useParams } from "react-router-dom";
import { Article, FAQ, Hero, Main_Side } from "../comps/Portal";
import { courses } from "../data/Courses";
import { useEffect, useState } from "react";

const Single_Course = () => {
  const { course } = useParams();
  const theCourse = courses.find((e) => e && e.path === course);
  const subtitle = theCourse.persianTitle + ", " + theCourse.describe;
  const [showRegisterButton, setShowRegisterButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 3200) {
        setShowRegisterButton(true);
      } else {
        setShowRegisterButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero title={theCourse.title} subtitle={subtitle} />
      <section className="grid md:grid-cols-5 gap-8 container padding-x padding-t pb-60 relative">
        <div className="md:col-span-3 max-md:pb-12 grid gap-y-12">
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
      <button
        className={`md:hidden fixed bottom-16 z-20 left-10 button-dark rounded title-sm w-52 h-12 displayTrans ${
          showRegisterButton ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => window.scrollTo(0, 0)}
      >
        ثبت نام
      </button>
    </>
  );
};

export default Single_Course;
