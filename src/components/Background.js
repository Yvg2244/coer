import "./Plugin.css";
import RouteForm from "./RouteForm";
import GuideForm from "./GuideForm";
import "./Background.css";
import background from "../assests/bg-img.jpg";
import ToggleModes from "./ToogleModes";
import MainCard from "./MainCard";
import Blogs from "./Blogs";
function Background() {
  return (
    <div
      className="background flex flex-row"
      
    >
      <Blogs></Blogs>
      <MainCard/>
    </div>
  );
}
export default Background;
