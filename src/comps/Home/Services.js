import { services } from "../../data/Services";
import { Link } from "react-router-dom";

const Services = ({ homepage = false }) => {
  return (
    <section className="padding-x py-10" id="services">
      <h2 className="title-super">
        <span className="text-purple-500">
          <i className="fa-solid fa-hashtag" />
        </span>
        <span className="halfbg-left"> خدماتی که ما ارایه میدیم</span>
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-12">
        {services.map((item) => {
          return (
            <div className="flex-fullcenter min-h-[200px]" key={item.title}>
              <Link
                to={"/service/" + item.path}
                className="size-full bg-blue-500 border-4 shadow-lg rounded-3xl border-slate-100 transition-all duration-300 backdrop-blur hover:scale-105 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 relative transition-all text-slate-50">
                  <div className="md:text-3xl md:my-5 flex items-center transition-all md:group-hover:text-xl md:group-hover:my-0">
                    <i className={item.icon} />
                    <h3 className="ps-2">{item.title}</h3>
                  </div>
                  <p className="text-sm mt-3 displayTrans md:opacity-0 md:invisible md:absolute md:group-hover:opacity-100 md:group-hover:visible">
                    {item.describe}
                  </p>
                </div>
                <div className="relative border-t-4 border-slate-100 inline-flex items-center justify-start py-3 pl-4 pr-12 font-bold text-blue-500 transition-all hover:pl-10 hover:pr-6 bg-slate-100 group/lets">
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-purple-400 group-hover/lets:h-full"></span>
                  <span className="absolute text-slate-950 right-0 pr-4 duration-200 ease-out group-hover/lets:translate-x-12">
                    <i className="fal fa-chevron-right" />
                  </span>
                  <span className="absolute text-slate-50 left-0 pl-2.5 -translate-x-12 group-hover/lets:translate-x-0 ease-out duration-200">
                    <i className="fal fa-chevron-right" />
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover/lets:text-white">
                    بزن بریم
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {homepage && (
        <div className="flex-fullcenter mt-12">
          <Link to="/service" className="button button-dark">
            مطالعه بیشتر
          </Link>
        </div>
      )}
    </section>
  );
};

export default Services;
