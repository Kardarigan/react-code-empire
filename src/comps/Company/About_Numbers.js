import { about } from "../../data/Constants";
import { Count_Animation } from "../Portal";

const About_Numbers = () => {
  return (
    <section className="bg-blue-50 padding">
      <div className="container grid grid-cols-7 md:gap-x-5 gap-3">
        {about.numbers.map((item, index) => {
          const { count, elementRef } = Count_Animation(item.number, 1500);
          return (
            <>
              <div className="text-center" key={index} ref={elementRef}>
                <h6 className="text-blue-500 title-lg">{count}+</h6>
                <h4 className="md:text-sm text-[10px] md:mt-3 mt-1">
                  {item.title}
                </h4>
              </div>
              {index !== about.numbers.length && (
                <div className="w-[1px] bg-slate-950 h-full mx-auto bg-opacity-10" />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default About_Numbers;
