import { courseBenefits } from "../../data/Courses";
import Benefit_Card from "./Benefit_Card";

const Course_Benefits = () => {
  return (
    <section className="padding">
      <div className="pagecenter">
        <h3 className="title-lg text-center">
          <span className="mac-bg">سود کلاس ی آنلاین خصوصی</span>
        </h3>
        <p className="mt-12 para text-center">
          کلاس ی آنلاین خصوصی برخلاف کلاس های عادی نتیجه ی قابل اطمینان تری داره
          و آینده ی پس از این کلاس تضمین شده خواهد بود. چند تا از ویژگی هایی که
          سبب این برتری میشه رو این پایین برات توضیح دادیم:
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 container mt-12">
        {courseBenefits.map((item, index) => {
          return <Benefit_Card benefit={item} i={index} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Course_Benefits;
