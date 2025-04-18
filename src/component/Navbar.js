import { BiCameraMovie } from "react-icons/bi";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar_second_div">
            <nav className="navbar_second_div">
                <NavLink to="/">
                    <BiCameraMovie size={64} className="Navbar-logo-image"></BiCameraMovie>
                </NavLink>
                <NavLink to="/">
                    <p className="movies-para">Movies</p>
                </NavLink>
                <NavLink to="/Watchlist">
                    <p className="Watchlist-para">Watchlist</p>
                </NavLink>
            </nav>
        </div>
    );
}


export default Navbar;
