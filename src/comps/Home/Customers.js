import { customersReviews } from "../../data/Constants";

const Customers = () => {
  return (
    <section className="padding-x py-10">
      <h2 className="title-super">
        <i className="fa-solid fa-hashtag text-purple-500" />
        <span className="halfbg-left"> چیز که دیگران دربارمون میگن</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-24 gap-14">
        {customersReviews.map((item, index) => {
          return (
            <div
              key={index}
              className="flex border-b border-blue-500 border-opacity-25 pb-2"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-24 h-24 me-3"
              />
              <div className="">
                <h3>
                  {item.name}{" "}
                  <span className="text-slate-500 font-thin">/ {item.job}</span>
                </h3>
                <p className="text-xs text-slate-700 text-justify mt-3">
                  {item.review}
                </p>
                <p className="text-slate-500 md:text-[10px] text-[8px] text-end mt-2">
                  آخرین همکاری : {item.lastCooperation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
