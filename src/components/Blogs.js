import "./Plugin.css";
import "./Blogs.css";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <div className="blogs align-center justify-center flex flex-col">
     <BlogCard  name="Yash" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>
     <BlogCard  name="Yash" caption="Dummy" ></BlogCard>
     <BlogCard  name="Yash" caption="Dummy" ></BlogCard>
     <BlogCard  name="Yash" caption="Dummy" ></BlogCard>

    </div>
  );
}
export default Blogs;
