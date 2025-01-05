import { policy, rulesBill } from "../../data/Policy";
import { Article, Rules_Scroll, Tip } from "../Portal";

const Rules_Overview = () => {
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
        <div className="mt-12">
          <Rules_Scroll title="کلاس های آموزشی" rules={policy} />;
        </div>
      </section>
    </>
  );
};

export default Rules_Overview;
