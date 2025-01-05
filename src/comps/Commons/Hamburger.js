import { NavLink } from "react-router-dom";
import { hamburgerLinks, socialButtons } from "../../data/Constants";

const Hamburger = ({ setHamburger }) => {
  const closeHamburger = () => {
    setHamburger(false);
  };

  return (
    <menu
      className="text-slate-100 p-5 ps-9 flex flex-col justify-between h-full"
      dir="rtl"
    >
      <ul className="grid gap-y-3">
        <li>
          <NavLink
            to="/contact"
            className="button button-light"
            onClick={closeHamburger}
          >
            رزرو کلاس
          </NavLink>
        </li>
        {hamburgerLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.href}
                className="button button-dark"
                onClick={closeHamburger}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <ul className="grid grid-cols-4 gap-4">
          {socialButtons.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="button button-dark p-0 size-12 flex flex-fullcenter hover:text-2xl"
                >
                  <i className={item.iconClass} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </menu>
  );
};

export default Hamburger;
