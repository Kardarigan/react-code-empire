import { Link } from "react-router-dom";
import { footLinks, socialButtons } from "../../data/Constants";
import Footer_Journal from "./Footer_Journal";

const Footer = () => {
  return (
    <footer
      className="w-full bg-slate-900 text-slate-100 text-xs text-center z-20 lg:mt-72 mt-52 padding-x max-lg:pt-24"
      dir="rtl"
    >
      <Footer_Journal />
      <section className="grid lg:grid-cols-5 gap-12 text-start padding">
        {footLinks.map((item, index) => {
          return (
            <div key={index} className={item.class}>
              <h5 className="title-sm mb-4">
                <i className="fa-solid fa-hashtag" />
                {item.title}
              </h5>
              <div>
                {item.describe ? (
                  <p className="text-justify lg:w-2/3">{item.describe}</p>
                ) : item.links ? (
                  <nav>
                    <ul className="grid gap-y-2">
                      {item.links.map((link, i) => {
                        return (
                          <li key={i}>
                            <Link to={link.path} className="link">
                              {link.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                ) : (
                  <ul className="grid gap-y-3">
                    {item.ways.map((way, i) => {
                      return (
                        <li key={i} className="flex-seperate gap-8">
                          <h6 className="flex items-center gap-2">
                            <i
                              className={
                                way.icon + " bg-blue-500 rounded-full p-1"
                              }
                            ></i>
                            {way.label}:
                          </h6>
                          <Link to={way.href}>{way.info}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </section>
      <section className="w-full padding-x">
        <hr />
        <div className="flex-seperate">
          <h6>
            <Link to="/about">Code Empire © 2024</Link>
          </h6>
          <ul className="mt-3 pb-3 grid grid-cols-4 gap-4">
            {socialButtons.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>
                    <i className={item.iconClass} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
