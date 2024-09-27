import { blogOverall } from "../data/Constants";
import { Blog_Overview, Hero, Overall } from "../comps/Portal";

const Blog = () => {
  return (
    <>
      <Hero
        title="ما مطالبی داریم  که حتما لازمت میشن"
        subtitle="چه باما کار کنی چه نکنی بد نیست یه نگاهی بهشون بندازی"
      />
      <Blog_Overview />
      <Overall thing={blogOverall} />
    </>
  );
};

export default Blog;
