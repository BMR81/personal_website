import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="home-title">
                <a href="/" className="site-title">Radovic</a>
            </div>
            <ul>
                <CustomLink className="nav-item" to="/about">About</CustomLink>
                <CustomLink className="nav-item" to="/projects">Projects</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}