import { customersReviews } from "../../data/Constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Customers = () => {
  return (
    <section className="padding-x py-10">
      <h2 className="title">
        <i className="fa-solid fa-hashtag text-purple-500" />
        <span className="halfbg-left"> چیز که دیگران دربارمون میگن</span>
      </h2>
      <div dir="ltr" className="mt-24">
        <Splide
          aria-label="Tesla Hero Slider"
          options={{
            perMove: 1,
            type: "loop",
            arrows: true,
            autoplay: true,
            pagination: false,
            gap: "2em",
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
            focus: "center",
          }}
        >
          {customersReviews.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="size-full card">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-24 h-24 me-8"
                  />
                  <div dir="rtl" className="text-start">
                    <h3>
                      {item.name}
                      <span className="mx-2 font-thin">/</span>
                      <span className="text-slate-300 text-[10px]">
                        {item.job}
                      </span>
                    </h3>
                    <hr className="my-2 opacity-30" />
                    <p className="text-xs text-justify mt-3">{item.review}</p>
                    <p className="text-slate-200 md:text-[10px] text-[8px] text-end mt-2">
                      آخرین همکاری : {item.lastCooperation}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Customers;
