import instagram_logo from "../../assets/instagram-logo.png";

const Instagram = () => {
  return (
    <section className="container padding-x padding-b">
      <a
        href="https://www.instagram.com/"
        className="flex-seperate max-lg:flex-col-reverse padding-x rounded-lg"
        style={{
          background: "rgb(14,30,56)",
          background:
            "linear-gradient(137deg, rgba(14,30,56,1) 0%, rgba(18,36,66,1) 35%, rgba(81,26,83,1) 91%)",
        }}
      >
        <h3 className="title-lg max-w-[600px] lg:text-justify text-center mb-5 text-slate-50 max-lg:pb-12">
          هر روز کلی خبر و مطالب آموزشی توی پیج اینستاگرام امــپــراتــــــوری
        </h3>
        <div className="translate-y-[-30px]">
          <img src={instagram_logo} alt="instagram logo" className="ghost" />
        </div>
      </a>
    </section>
  );
};

export default Instagram;
