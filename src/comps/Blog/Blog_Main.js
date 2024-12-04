import { Article, FAQ, Share } from "../Portal";

const Blog_Main = ({ blog }) => {
  return (
    <main className="grid gap-y-12 lg:col-span-2">
      <div>
        <div className="flex-seperate mac-border py-3">
          <span className="warn">{blog.category}</span>
          <span>
            <i className="fad fa-calendar text-blue-500 me-1" /> {blog.upload}
          </span>
        </div>
        <Share text="شما به خواندن این مقاله امپراتوری کد دعوت شده اید." />
      </div>
      <img
        src={blog.cover}
        alt={blog.title}
        className="bg-fullobject rounded-xl w-full h-[400px]"
      />
      <Article article={blog.paragraphs} />
      {blog.faq && <FAQ questions={blog.faq} />}
    </main>
  );
};

export default Blog_Main;
