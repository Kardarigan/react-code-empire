import { useEffect, useState } from "react";
import { registerForm } from "../../data/Constants";
import { courses } from "../../data/Courses";
import { Form, Hero } from "../Portal";

const Course_Form = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const onHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (courses.map((course) => course.title).includes(hash)) {
        setSelectedCourse(hash);
      } else {
        setSelectedCourse("");
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    window.location.hash = encodeURIComponent(course);
  };

  const chosenCourse = {
    label: "کلاس دلخواه",
    type: "select",
    name: "selected_course",
    options: courses.map((course) => course.title),
    required: true,
  };

  const updatedRegisterForm = [...registerForm, chosenCourse];

  return (
    <>
      <Hero
        title="انگار میخوای یادگیری رو آغاز کنی"
        subtitle="فرم زیر رو پر کن و کلاس ای که میخوای رو برگزین"
      />
      <section className="container-sm mt-12 pb-40 padding-x">
        <Form
          fields={updatedRegisterForm}
          selectedOption={selectedCourse}
          setSelectedOption={setSelectedCourse}
          service="service_6smeggr"
          template="template_h64zus6"
        />
      </section>
    </>
  );
};

export default Course_Form;
