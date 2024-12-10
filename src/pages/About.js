import {
  Half,
  Hero,
  Top_Image_Section,
  About_Numbers,
  Overall,
  Companies,
  About_Team,
  Breadcrumb,
} from "../comps/Portal";
import Cover_1 from "../assets/painting_of_an_ancient_Persian_with_sassanid_helmet_thousanse_soldiers_while_their_coding_in_their_laptop_png(1).png";
import Cover_2 from "../assets/painting_of_an_ancient_Persian_with_sassanid_helmet_thousans_soldiers_while_their_coding_in_their_laptop_in_front_of_the_perspolise_png.png";
import { about } from "../data/Constants";

const About = () => {
  return (
    <>
      <Hero
        title="پیش از هرچیز بهتره مارو بشناسی :)"
        subtitle="میتونی هر چی که میخوای از ما بدونی، تو این بخش پیدا کنی"
      />
      <Breadcrumb />
      <div className="container">
        <Top_Image_Section
          label="جوخه ی هشتم، لشگر دوم کدزن ها، درحال سفارش شام دیشب"
          cover={Cover_1}
          describe="اینجا امپراتوری ای از کد هاست! امپراتوری کد دارای ارتشی در کدزدن های نخبه، مشاورانیماهر و آموزگارانی با تجربه است که برای افزایش کیفیت کسب و کار ها و همچنین بنای دیگر پادشاهی ها از هیچ میجنگند. این است امپراتوری کد..."
        />
        <Half thing={about.job} reverse />
        <Companies />
        <Half thing={about.reagon} />
        <Top_Image_Section
          label="دسته ی یکم، لشگر تازه کار ها، درحال یافتن راهی برای وسط آوردن یک المنت"
          cover={Cover_2}
          title="ما از نیرو های تازه کار استقبال میکنیم"
          describe="اینجا امپراتوری ای از کد هاست! امپراتوری کد دارای ارتشی در کدزدن های نخبه، مشاورانیماهر و آموزگارانی با تجربه است که برای افزایش کیفیت کسب و کار ها و همچنین بنای دیگر پادشاهی ها از هیچ میجنگند. این است امپراتوری کد..."
        />
      </div>
      <About_Numbers />
      <div className="container">
        <Half thing={about.idea} />
      </div>
      <About_Team />
      <p className="label opacity-30 text-center">Long live the Empire</p>
    </>
  );
};

export default About;
