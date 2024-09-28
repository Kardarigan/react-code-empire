import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { companies } from "../../data/Constants";

const Companies = () => {
  return (
    <section>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={100}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="companies logo"
      >
        {companies.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={item.href}>
                <img
                  src={item.logo}
                  alt="company logo"
                  className="size-full h-32 object-contain"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Companies;
