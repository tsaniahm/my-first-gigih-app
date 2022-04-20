import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img className="nav-image" src="images/giphy.png" alt="#" />
                </li>
                <li className="nav-home">
                    <Link
                        to='/'
                    // style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}
                    >
                        GHIPHY.
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to='/trending'
                        // style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}
                    >
                        Trending
                    </Link>
                </li>
                <li className="nav-item">Reactions</li>
                <li className="nav-item">Entertaiment</li>
                <li className="nav-item">Sports</li>
            </ul>
        </nav>
    )
}

export default Navbar;