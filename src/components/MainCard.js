import React, { useState } from "react";
import "./MainCard.css";
import "./Plugin.css";
import GuideForm from "./GuideForm";
import RouteForm from "./RouteForm";
import ToggleModes from "./ToogleModes";
import GuidePromoCard from "./GuidePromoCard";
import Guideinfo from "./Guideinfo";

function MainCard() {
  const [toggle, setToggle] = useState({
    route: true,
    guide: false,
  });

  return (
    <div className="maincard align-center justify-center flex flex-col">
      <div className="toggleModes align-center justify-center flex flex-row">
        <button className="bg-white ">Route</button>

      </div>
      <RouteForm></RouteForm>
      <div className="toggleModes align-center justify-center flex flex-row">

      <button className="bg-white ">Guide</button>
      </div>
      <GuideForm></GuideForm>
      {/* <Guideinfo/> */}
      
    </div>
  );
}
export default MainCard;
