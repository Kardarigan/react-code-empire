import { teamMembers } from "../../data/Constants";
import { Loaded_Animation } from "../Portal";

const About_Team = () => {
  const durations = ["duration-[2000ms]", "", "duration-[3000ms]"];

  return (
    <section className="padding text-center container">
      <h3 className="title-lg mb-10">
        <span className="halfbg-left">آینده ی شما در دستان مطمئنی است</span>
      </h3>
      <p>
        با تیم کار کشته ی امپراتوری کد آشنا شو! البته که اینا عکسای خودمون نیستن
        :)
      </p>
      <div className="flex mt-12">
        {teamMembers.map((item, index) => {
          const { ref, className } = Loaded_Animation();

          return (
            <div
              className={`border-4 border-slate-800 text-slate-50 group relative rounded-lg overflow-hidden ${className} ${
                durations[index]
              } ${index === 1 ? " scale-105 z-10" : ""}`}
              key={index}
              ref={ref}
            >
              <div className="text-center absolute left-0 right-0 bottom-0 md:pb-5 pb-1 min-h-10 rounded-t-3xl bg-slate-800 bg-opacity-70 transition-all group-hover:rounded-none group-hover:min-h-full">
                <h2 className="title md:mt-5">{item.name}</h2>
                <h4 className="font-thin md:text-sm text-[10px]">
                  {item.role}
                </h4>
                <p className="lg:mt-20 mt-5 max-w-[80%] mx-auto md:text-sm text-xs absolute right-0 left-0">
                  {item.bio}
                </p>
              </div>
              <img src={item.profile} alt={"پروفایل " + item.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About_Team;
