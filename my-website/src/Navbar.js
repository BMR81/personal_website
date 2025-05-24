import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="nav">
            <div className="home-title">
            <Link to="/" className="site-title">
                Radovic
            </Link>
            </div>
            <ul>
                <CustomLink className="nav-item" to="/about">About</CustomLink>
                <CustomLink className="nav-item" to="/projects">Projects</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }){
    const path = window.location.pathname

    return (
        <li className={path == to ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    );
}