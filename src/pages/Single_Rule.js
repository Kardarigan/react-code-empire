import { useParams } from "react-router-dom";
import { policy } from "../data/Policy";
import { Article, Breadcrumb, Hero, Rules_Scroll } from "../comps/Portal";

const Single_Rule = () => {
  const { rule } = useParams();
  const theRule = policy.find(
    (e) =>
      e &&
      e.title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase() ===
        rule.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );
  return (
    <>
      <Hero title={theRule.title} />
      <Breadcrumb />
      <div className="grid gap-12 lg:grid-cols-5 padding-x padding-t pb-60 container">
        <main className="lg:col-span-3">
          <section className="py-2 mac-border flex-seperate mb-12 text-blue-700">
            <h5>تاریخ اعتبار قانون :</h5>
            <h5>{theRule.validity}</h5>
          </section>
          <Article article={theRule.article} />
        </main>
        <aside className="lg:col-span-2">
          <Rules_Scroll title="دیگر قوانین" rules={policy} />
        </aside>
      </div>
    </>
  );
};

export default Single_Rule;
