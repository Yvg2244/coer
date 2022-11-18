import './Navbar.css';
import './Plugin.css';
import NavbarItems from './NavbarItems';
import findRoute from '../assests/images/findRoute.svg';
import feed from '../assests/images/feed.svg';
import findGuide from '../assests/images/findRoute.svg';


function Navbar(){
    return (
        <div className="Navbar-frame flex flex-row bg-white text-dark align-center letter-spacing-2 fs-400 ff-mons justify-center">
            
            <NavbarItems title="Find Route"/>
            <NavbarItems title="Find Guide"/>
            <NavbarItems title="Blogs"/>
        </div>
    );
}
export default Navbar;