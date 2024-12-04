import { Link } from "react-router-dom";
import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";

const Magazin = () => {
  return (
    <section className="container padding my-24">
      <div className="box md:grid grid-cols-4">
        <div className="col-span-1">
          <div className="card block max-md:-translate-y-16 md:translate-x-44 md:w-[200%] text-center">
            <h3 className="title-lg">
              مجله‌ی امپراتوری از سراسر دنیای تکنولوژی
            </h3>
            <p className="para my-8 max-md:hidden">
              سربازان امپراتوری کد، هر روز و هر شب در حال گردآوری کارا ترین و
              بدردبخور ترین مطالب از تمام دنیای تکنولوژی به ویژه برنامه نویسی
              هستند تا شما دوستان گرامی بتونید در راه تبدیل شدن به یک برنامه
              نویس حرفه ای تبدیل بشید و بجز کدزدن از چیز های مربوط بهش هم آگاه
              بشید و هم چیزهایی هم به طور اضافه یادبگیرید.
            </p>
            <Link to="/blog" className="button button-dark mt-5">
              مشاهده تمام مقالات
              <i className="fa-duotone fa-solid fa-sword rotate-[225deg] ms-2" />
            </Link>
          </div>
        </div>
        <div className="col-span-3 relative">
          <div className="md:absolute grid md:grid-cols-2 md:-translate-x-32 md:-translate-y-24 gap-3">
            {blogs.slice(-4).map((blog, index) => {
              return (
                <Blog_Card
                  blog={blog}
                  key={index}
                  customClass={index % 2 === 0 ? "md:-translate-y-20" : ""}
                />
              );
            })}
          </div>

          <Link to="/blog" className="button button-dark mt-5 md:hidden">
            مشاهده تمام مقالات
            <i className="fa-duotone fa-solid fa-sword rotate-[225deg] ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Magazin;
