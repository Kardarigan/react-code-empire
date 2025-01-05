import { registerForm } from "../../data/Constants";
import { Form, Hero } from "../Portal";

const Course_Form = () => {
  return (
    <>
      <Hero
        title="انگار میخوای یادگیری رو آغاز کنی"
        subtitle="فرم زیر رو پر کن و کلاس ای که میخوای رو برگزین"
      />
      <section className="container-sm mt-12 pb-40 padding-x">
        <Form fields={registerForm} />
      </section>
    </>
  );
};

export default Course_Form;
