import { rulesBill } from "../../data/Policy";
import { Article, Tip } from "../Portal";

const Rules_Overview = () => {
  return (
    <>
      <section className="pagecenter mt-0">
        <Article article={rulesBill} icons={false} gap="gap-y-12" />
        <Tip
          message="هرگونه استفاده از خدمات وبسایت <b>امپراتوری کد</b> به منظور خواندن و پذیرش منشور قوانین این وبسایت می‌باشد"
          className="text-xs mt-12"
        />
        <h3 className="title mb-10">
          <span className="mac-bg">قوانین ویژه</span>
        </h3>
        <div className="grid grid-cols-4"></div>
      </section>
    </>
  );
};

export default Rules_Overview;
