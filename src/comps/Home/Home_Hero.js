import Hero_Bg from "../../assets/Hero.jpg";
import Hero_Video from "../../assets/Hero_Bg.mp4";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Home_Hero = () => {
  return (
    <section
      className="h-screen bg-fullcenter relative"
      style={{ backgroundImage: "url(" + Hero_Bg + ")" }}
    >
      <div className="w-full text-center absolute z-10 mt-24">
        <div className="text-7xl text-slate-50 mx-auto padding max-w-[800px]">
          <h1>امپــراتـــوری</h1>
          <h1 className="text-purple-500">کــــــــــــــــــد</h1>
          <p className="text-base max-sm:text-sm">
            <TypeAnimation
              sequence={[
                "ما برات بهترین سایت رو میسازیم",
                2500,
                "ما بهت یاد میدیم چطوری برنامه نویسی کنی",
                3000,
                "ما زندگیت رو بهتر میکنیم",
                2000,
                "ما مسیر موفقیت در این زمینه رو بهت نشون میدیم",
                4000,
                "اگر به امپراتوری بپیوندی!",
                5000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </p>
          <div className="flex justify-center mt-10">
            <Link to="/contact" className="button button-dark">
              ارتباط با امپراتوری
            </Link>
          </div>
        </div>
      </div>
      <video autoPlay muted loop className="bg-fullobject w-full h-screen">
        <source
          src={Hero_Video}
          type={`video/${Hero_Video.split(".").pop()}`}
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Home_Hero;
