import "./Plugin.css";
import "./UserProfile.css";
import dp from "../assests/profileUploads/dp.webp";
import post from "../assests/profilePhotos/post.jpg";

function UserProfile(props) {
  return (
    <div className="userprofile flex align-center text-dark justify-center flex-col">
      <div className="userprofile-info flex flex-row">
        <div className="userprofile-dp">
          <div style={{ backgroundImage: `url(${dp})` }} />
        </div>
        <div className="userprofile-info ">
          <div className="userprofile-info-name">Yash</div>
          <div className="userprofile-info-city">Kanpur</div>
        </div>
      </div>
        <div className="userprofile-info-buttons flex flex-row ">
          <div className="userprofile-info-buttons-like ">Like</div>
          <div className="userprofile-info-buttons-dislike ">Dislike</div>
        </div>
    </div>
  );
}
export default UserProfile;
