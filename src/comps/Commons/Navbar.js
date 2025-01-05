import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Hamburger } from "../Portal";
import { navLinks } from "../../data/Constants";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;
      setHamburger(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHamburger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${
          navbarBackground || hamburger ? "bg-slate-900 " : "bg-transparent"
        } w-full md:px-5 fixed top-0 z-20 transition-all duration-300${
          hamburger ? " opacity-100" : ""
        }`}
      >
        <div
          className="mx-auto max-w-[1200px] flex-seperate max-md:px-5 text-slate-100 py-3"
          dir="rtl"
        >
          <button
            className={`md:hidden flex-fullcenter text-xl rounded size-10 ${
              hamburger ? "bg-slate-700 text-slate-50" : "bg-slate-800"
            }`}
            onClick={() => setHamburger(!hamburger)}
          >
            <i
              className={`fas fa-sharp fa-bars transition-all ${
                hamburger ? "rotate-90" : ""
              }`}
            />
          </button>
          <Link to="/">
            <h2 className="text-2xl">
              <span>امپراتوری</span> <span className="text-blue-400">کد</span>
            </h2>
          </Link>
          <nav className="flex flex-row items-center gap-4 ms-6 font-bold max-md:hidden">
            {navLinks.map((item, index) => {
              return (
                <NavLink to={item.href} key={index} className="navitem">
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <Link
            to="/courses/register-form"
            className="button button-outline-light max-md:hidden"
          >
            رزرو کلاس
          </Link>
        </div>
      </header>
      <section
        className={`displayTrans fixed ${
          hamburger ? "visible opacity-100" : "invisible opacity-0"
        } w-screen h-[calc(100%-64px)] top-[64px] left-0 right-0 z-50 bg-slate-900`}
      >
        <Hamburger setHamburger={setHamburger} />
      </section>
    </>
  );
};

export default Navbar;
