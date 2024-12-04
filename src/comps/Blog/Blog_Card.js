import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Blog_Card = ({ blog, customClass = "" }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <Link
      ref={ref}
      to={"/blog/" + blog.title}
      className={`overflow-hidden rounded-2xl border-4 border-blue-500 group relative ${className} ${customClass}`}
    >
      <p className="absolute text-end w-full">
        <span className="bg-blue-500 px-2 py-1 rounded-br-lg">
          {blog.category}
        </span>
      </p>
      <div className="h-[300px] w-full">
        <img src={blog.cover} alt={blog.title} className="bg-fullobject" />
      </div>
      <div className="px-3 py-1 absolute bottom-0 transition-all bg-white/55 backdrop-blur-sm rounded-t-lg md:group-hover:pb-8 max-md:pb-8">
        <h3 className="md:text-2xl text-xl flex items-center transition-all md:group-hover:text-xl">
          {blog.title}
        </h3>
        <p className="line-clamp-2 text-ellipsis text-sm mt-3 displayTrans md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible">
          {blog.paragraphs[0].paragraph}
        </p>
        <p className="text-end label absolute p-2 left-0 bottom-0">
          {blog.upload}
        </p>
      </div>
    </Link>
  );
};

export default Blog_Card;
