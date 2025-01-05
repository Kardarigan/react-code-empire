import { Link } from "react-router-dom";
import { learnersRank } from "../../data/Ranking";

const Learners_Rank = () => {
  const tableHeading = ["جایگاه", "پروفایل", "نام", "وضعیت", "رتبه", "کلاس"];
  return (
    <section className="container text-center px-5 padding-y mt-24">
      <h3 className="title-lg">
        <span className="mac-bg">برترین دانشجویان آبان ماه</span>
      </h3>
      <div className="rounded-xl overflow-hidden mt-12 border-2 border-slate-500">
        <table className="w-full">
          <thead className="bg-slate-900 text-slate-100">
            <tr>
              {tableHeading.map((item, index) => {
                return (
                  <th
                    className={`py-5${
                      index === 3 || index === 5 ? " max-md:hidden" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {learnersRank.map((item, index) => {
              return (
                <tr className="border-b">
                  <td className="p-5">{index + 1}</td>
                  <td className="py-5">
                    <img
                      src={item.profile + "?username=" + index}
                      alt={"پروفایل " + item.name}
                      className="size-16 mx-auto"
                    />
                  </td>
                  <td className="p-5">{item.name}</td>
                  <td className="p-5 max-md:hidden">
                    {item.isLearning ? (
                      <span className="rounded bg-slate-900 text-slate-100 p-2">
                        درحال یادگیری
                      </span>
                    ) : (
                      <span className="rounded bg-blue-600 text-blue-100 p-2">
                        پـایـان یادگیری
                      </span>
                    )}
                  </td>
                  <td className="p-5">
                    {item.rank}
                    {item.rank === "جاویدان" && (
                      <i className="fa-duotone fa-solid fa-crown text-blue-400 ms-1" />
                    )}
                  </td>
                  <td className="p-5 max-md:hidden">{item.course}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center label">
        معیار های انتخاب دانشجو های برتر رو میتونی{" "}
        <Link to="/policy/رده‌بندی دانشجویان" className="link">
          اینجا
        </Link>{" "}
        بخونی.
      </p>
    </section>
  );
};

export default Learners_Rank;
