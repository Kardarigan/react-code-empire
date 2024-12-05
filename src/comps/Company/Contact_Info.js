import { contactInfo } from "../../data/Constants";

const Contact_Info = () => {
  return (
    <section className="pagecenter">
      <h3 className="title text-center">
        <span className="mac-bg">راه های ارتباط با امپراتوری</span>
      </h3>
      <div className="box mt-5">
        <ul className="grid gap-y-5">
          {contactInfo.map((item, index) => {
            return (
              <li key={index}>
                <h5 className="title-sm">
                  <i className="fa-solid fa-hashtag"></i>
                  {item.label}
                </h5>
                <p className="para mt-1 text-end" dir="ltr">
                  {item.describe}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact_Info;
