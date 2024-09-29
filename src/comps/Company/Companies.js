import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { companies } from "../../data/Constants";

const Companies = () => {
  return (
    <section className="padding-y">
      <h3 className="title text-center mb-10">
        <span className="halfbg-left">
          دانش آموختگان ما در این شرکت ها مشغول به کارند
        </span>
      </h3>
      <div dir="ltr" className="px-5">
        <Splide
          aria-label="Tesla Hero Slider"
          options={{
            perMove: 1,
            type: "loop",
            arrows: true,
            autoplay: true,
            pagination: false,
            gap: "2em",
            perPage: 5,
            breakpoints: {
              640: {
                perPage: 3,
              },
            },
            focus: "center",
          }}
        >
          {companies.map((item, index) => {
            return (
              <SplideSlide key={index} data-splide-interval="2000">
                <a href={item.href}>
                  <img
                    src={item.logo}
                    alt="company logo"
                    className="size-full h-32 object-contain"
                  />
                </a>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Companies;
