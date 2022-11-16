import './Navbar.css';
import './Plugin.css';
import NavbarItems from './NavbarItems';

function Navbar(){
    return (
        <div className="Navbar-frame flex flex-row align-center letter-spacing-2 fs-400 ff-serif justify-center">
            <NavbarItems title="title 1"/>
            <NavbarItems title="title 2"/>
            <NavbarItems title="title 1"/>
            <NavbarItems title="title 1"/>

        </div>
    );
}
export default Navbar;