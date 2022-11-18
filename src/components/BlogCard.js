import "./Plugin.css";
import "./BlogCard.css";
import dp from "../assests/profileUploads/dp.webp";
import background from "../assests/bg-img.jpg";
import post from "../assests/profilePhotos/post.jpg";
import like from "../assests/images/like-pending.png";

import dislike from "../assests/images/unlike-pending.png";

function BlogCard(props) {
  return (
    <div className="blogcard bg-dark text-dark ff-sans-normal flex justify-center align-center flex-col">
      <div className="uploaderinfo align-center flex flex-col">
        <div className="uploaderinfo-img "><div style={{ backgroundImage: `url(${dp})` }}/></div>

        <div className="uploaderinfo-text ff-noto fs-400">{props.name}</div>
      </div>
      <div className="uploaderphoto"><div style={{ backgroundImage: `url(${post})` }}/></div>
      <div className="uploadercaption fs-25">{props.caption}</div>
      <div className="uploaderbuttons flex flex-row">
        <div className="uploaderbuttons-like"><div style={{ backgroundImage: `url(${like})` }}/></div>
        <div className="uploaderbuttons-dislike"><div style={{ backgroundImage: `url(${dislike})` }}/></div>

      </div>
    </div>
  );
}
export default BlogCard;
