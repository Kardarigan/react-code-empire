import { Link } from "react-router-dom";
import { policy, rulesBill } from "../../data/Policy";
import { Article, Rules_Scroll, Scroll, Tip } from "../Portal";

const Rules_Overview = () => {
  const categoryFilter = (categoryName) => {
    return policy.filter((e) => e.category === categoryName);
  };

  const courseRules = categoryFilter("course");
  const freelanceRules = categoryFilter("freelance");

  const specialRules = [
    {
      title: "دوره های آموزشی",
      rules: courseRules,
    },
    {
      title: "همکاری فریلنسری",
      rules: freelanceRules,
    },
  ];

  return (
    <>
      <section className="pagecenter mt-0">
        <Article article={rulesBill} icons={false} gap="gap-y-12" />
        <Tip
          message="هرگونه استفاده از خدمات وبسایت <b>امپراتوری کد</b> به منظور خواندن و پذیرش منشور قوانین این وبسایت می‌باشد"
          className="mt-12"
        />
        <h3 className="title text-center w-full mt-20">
          <span className="mac-bg">قوانین ویژه</span>
        </h3>
        <div className="grid grid-cols-2 gap-10 mt-12">
          {specialRules.map((item, index) => {
            return <Rules_Scroll rules={item} key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Rules_Overview;
