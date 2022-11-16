import "./NavbarItems.css";
import "./Plugin.css";

function ModeCardItem(props) {
  return (
    <div className="modecarditem text-white fs-500">
      <div className="flex flex-row">
        {props.time}
        {props.price}
      </div>
    </div>
  );
}
export default ModeCardItem;
