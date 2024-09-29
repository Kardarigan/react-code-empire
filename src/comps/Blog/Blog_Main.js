import { Article, FAQ } from "../Portal";

const Blog_Main = ({ blog }) => {
  return (
    <main className="grid gap-y-12 lg:col-span-3">
      <div className="flex-seperate border-mac py-3">
        <span className="warn">{blog.category}</span>
        <span>
          <i className="fad fa-calendar text-blue-500 me-1" /> {blog.upload}
        </span>
      </div>
      <img
        src={blog.cover}
        alt={blog.title}
        className="bg-fullobject rounded-xl w-full h-[400px]"
      />
      <Article article={blog.paragraphes} />
      {blog.faq && <FAQ questions={blog.faq} />}
    </main>
  );
};

export default Blog_Main;
