import { servicePage } from "../data/Services";
import { Half, Hero, Overall, Services } from "../comps/Portal";

const Service = () => {
  return (
    <>
      <Hero
        title="ما برنامه نویسیم ولی نه فقط برنامه نویس"
        subtitle="ما کلی کارها میتونیم واست انجام بدیم که حتی فکرشم نمیتونی بکنی!"
      />
      <Services />
      <p className="text-center pt-12 pb-32 padding-x label">
        تو صفحه های هر سرویس همه چی دربارشون اومده
      </p>
      {servicePage.halfs.map((item, index) => {
        return (
          <Half
            thing={item}
            key={index}
            reverse={index % 2 === 0 ? false : true}
          />
        );
      })}
      <Overall thing={servicePage.overall} />
    </>
  );
};

export default Service;
