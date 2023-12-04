import { Link, useLocation } from "react-router-dom"




function Header() {
    const currentPage = useLocation().pathname;

    return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/AboutMe" className={currentPage === "/AboutMe" ? "nav-link active" : "nav-link"}>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio" className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/CV" className={currentPage === "/CV" ? 'nav-link active' : 'nav-link'}> Resume</Link>
                </li>
            </ul>
    )
}

export default Header;