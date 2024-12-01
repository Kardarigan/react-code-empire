import { socialButtons } from "../../data/Constants";

const Contact_Us = () => {
  const links = [
    {
      title: "پل های ارتباطی",
      w: "w-2/5",
      list: [
        { href: "#", iconClass: "fa-brands fa-telegram" },
        { href: "#", iconClass: "fa-solid fa-message-sms" },
        { href: "#", iconClass: "fa-solid fa-envelope" },
      ],
    },
    {
      title: "شبکه های اجتماعی",
      w: "w-3/5",
      list: socialButtons,
    },
  ];
  return (
    <section className="pagecenter">
      <div className="flex max-md:flex-col gap-x-32 text-center">
        {links.map((item, index) => {
          return (
            <div className={item.w + " mx-auto mt-6"} key={index}>
              <h5 className="title-sm">{item.title}</h5>
              <ul className="flex justify-center gap-4 mt-5">
                {item.list.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="button button-outline-blue rounded-lg p-0 text-2xl size-16 flex flex-fullcenter hover:text-2xl"
                      >
                        <i className={item.iconClass} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact_Us;
