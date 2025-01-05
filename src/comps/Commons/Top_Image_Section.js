import { Loaded_Animation } from "../Portal";

const Top_Image_Section = ({ title = null, label = null, describe, cover }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section className="padding container grid gap-y-5">
      <div>
        <img
          ref={ref}
          src={cover}
          alt={title}
          className={`w-full rounded-lg max-h-[80vh] bg-fullobject filter-blue ${className}`}
        />
        {label && <p className="label">* {label}</p>}
      </div>
      {title && (
        <h2 className="title-lg">
          <i className="fa-solid fa-hashtag" />
          <span className="halfbg-left">{title}</span>
        </h2>
      )}
      <p className="para">{describe}</p>
    </section>
  );
};

export default Top_Image_Section;
