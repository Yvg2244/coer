import './NavbarItems.css';
import './Plugin.css';

function NavbarItems(props){
    return (
       <div className="navbaritems text-white fs-500">{props.title}</div>
    );
}
export default NavbarItems;