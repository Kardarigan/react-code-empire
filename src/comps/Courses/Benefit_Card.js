import { Loaded_Animation } from "../Portal";

const Benefit_Card = ({ benefit, i }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <div
      className={`card gap-x-8 group hover:z-10 hover:scale-105 transition-all duration-300 select-none ${className}`}
      ref={ref}
    >
      <div className="flex-fullcenter flex-col">
        <i className={benefit.icon + " title-lg group-hover:animate-pulse"} />
        <div className="md:text-[9px] text-[5px] text-slate-300 flex gap-x-1 mt-3">
          {[...Array(4)].map((_, idx) => (
            <i
              key={idx}
              className={`fa-circle ${
                idx < i + 1 ? "fa-solid" : "fa-duotone fa-solid "
              }`}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="title text-slate-100">{benefit.title}</h3>
        <p className="para text-slate-300 mt-2">{benefit.describe}</p>
      </div>
    </div>
  );
};

export default Benefit_Card;
