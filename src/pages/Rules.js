import Rules_Overview from "../comps/Company/Rules_Overview";
import { Breadcrumb, Hero } from "../comps/Portal";

const Rules = () => {
  return (
    <>
      <Hero
        title="منشور امپراتوری کد"
        subtitle="برای پیوستن به امپراتوری کد از قوانین ما آگاه شو"
      />
      <Breadcrumb />
      <p className="label p-5 text-center">
        پیش از هر گونه استفاده از وبسایت حتما تمام منشور (قوانین) را به دقت
        بخوانید. از توجه شما سپاسگزاریم.
      </p>
      <Rules_Overview />
    </>
  );
};

export default Rules;
