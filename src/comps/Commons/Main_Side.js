import { Link } from "react-router-dom";

const Main_Side = ({ details, link, price = false, capacity = false }) => {
  const formattedPrice = price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  return (
    <aside className="md:col-span-2">
      <div className="flex flex-col gap-y-5 sticky top-20">
        {(capacity || capacity === 0) && (
          <section
            className={`py-3 warn flex-seperate ${
              capacity === 0
                ? "border-red-500 bg-red-500 text-slate-50"
                : capacity < 10
                ? "border-yellow-400 bg-yellow-400 text-slate-900"
                : "text-slate-50"
            }`}
          >
            <h5>ظرفیت دوره :</h5>
            <h5>{capacity > 0 ? `${capacity} نفر` : "ظرفیت پر شد"}</h5>
          </section>
        )}
        <section className="warn pt-2 pb-5">
          <h4 className="title">
            <i className="fa-solid fa-hashtag"></i> مشخصات
          </h4>
          <ul className="grid gap-y-3 mt-5">
            {details.map((item, index) => {
              return (
                <li className="flex-seperate warn bg-blue-400" key={index}>
                  <span className="font-bold">{item.label} :</span>
                  <span>{item.describe}</span>
                </li>
              );
            })}
          </ul>
        </section>
        {price && (
          <section className="py-3 warn flex-seperate">
            <h5 className="text-slate-200">بهای دوره :</h5>
            <h5>{formattedPrice} تومان</h5>
          </section>
        )}
        <Link
          className="py-3 button button-outline-dark rounded-3xl"
          to={link.path}
        >
          {link.label}
        </Link>
      </div>
    </aside>
  );
};

export default Main_Side;
