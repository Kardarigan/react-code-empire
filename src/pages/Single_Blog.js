import { useParams } from "react-router-dom";
import { blogs } from "../data/Blogs";
import { Blog_Main, Blog_Side, Breadcrumb, Hero } from "../comps/Portal";

const Single_Blog = () => {
  const { blog } = useParams();
  const theBlog = blogs.find(
    (e) =>
      e &&
      e.title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase() ===
        blog.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <>
      <Hero title={theBlog.title} background={theBlog.cover} />
      <Breadcrumb />
      <section className="grid lg:grid-cols-3 gap-8 container padding">
        <Blog_Main blog={theBlog} />
        <Blog_Side author={theBlog.author} />
      </section>
    </>
  );
};

export default Single_Blog;
