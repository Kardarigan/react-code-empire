import { contactForm } from "../data/Constants";
import { Contact_Info, Contact_Us, Form, Hero, Tip } from "../comps/Portal";

const Contact = () => {
  return (
    <>
      <Hero
        title="گویا زمان همکاریمون فرا رسیده!"
        subtitle="تنها باید فرم زیر رو پر کنی تا با امپراتوری تماس بگیری"
      />
      <Contact_Us />
      <Contact_Info />
      <section className="pagecenter pb-40">
        <h3 className="title text-center mb-5">
          <span className="halfbg-left">فرم تماس با امپراتوری</span>
        </h3>
        <Form fields={contactForm} />
        <Tip
          className="mt-12"
          message='اگه ازین فرما خوشت نمیاد یه ایمیل ساده میتونی <a class="link" href="mailto:duckduckstay@hotmail.com">بفرستی</a>.'
        />
      </section>
    </>
  );
};

export default Contact;
