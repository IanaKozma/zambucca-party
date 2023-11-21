import { navLinks } from "../NavMenu";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    const NavBar = () => {
        return (
            <nav>
                {navLinks.map(({ to, label }) => (
                    <NavLink key={to} to={to}>{label}</NavLink>
                ))}
            </nav>
        );
    };

    return (
        <>
            <footer>
                <div>
                    {NavBar()}
                </div>
            </footer>
        </>
    );
};