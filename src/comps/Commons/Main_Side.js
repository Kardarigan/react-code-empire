import { Link } from "react-router-dom";

const Main_Side = ({
  details,
  specs,
  link,
  price = false,
  capacity = false,
  hint = false,
}) => {
  const formattedPrice = price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  capacity = Number(capacity);

  return (
    <aside className="md:col-span-2">
      <div className="flex flex-col gap-y-3 sticky top-20">
        {(capacity || capacity === 0) && (
          <section
            className={`py-3 mac-border text-slate-50 flex-seperate ${
              capacity === 0
                ? "border-red-500 bg-red-500 text-slate-50"
                : capacity < 10
                ? "border-yellow-400 bg-yellow-400 text-slate-900"
                : "text-slate-50 bg"
            }`}
          >
            <h5>ظرفیت دوره :</h5>
            <h5>{capacity > 0 ? `${capacity} نفر` : "ظرفیت پر شد"}</h5>
          </section>
        )}
        <section className="flex-seperate gap-x-5 text-center text-slate-50">
          {specs.map((item, index) => {
            return (
              <div className="bg w-1/3 py-5 rounded-3xl" key={index}>
                <i className={item.icon + " title"} />
                <h5 className="font-thin opacity-75 text-xs">{item.label}</h5>
                <h5 className="title-sm">{item.describe}</h5>
              </div>
            );
          })}
        </section>
        <section className="warn pt-2 pb-5">
          <h4 className="title">
            <i className="fa-solid fa-hashtag"></i>مشخصات
          </h4>
          <ul className="grid gap-y-3 mt-5">
            {details.map((item, index) => {
              return (
                <li
                  className="flex-seperate rounded-full bg-blue-500 px-5"
                  key={index}
                >
                  <h5 className="font-bold">{item.label} :</h5>
                  <h5>{item.describe}</h5>
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
          to={capacity !== 0 && link.path}
          onClick={() => alert("این دوره پر شده است!")}
        >
          {link.label}
        </Link>
        {hint && (
          <div className="flex items-center">
            <i className="fas fa-checkfa-duotone fa-regular fa-badge-percent me-1"></i>{" "}
            <p className="label">{hint}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Main_Side;
