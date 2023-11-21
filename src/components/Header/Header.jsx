import { navLinks } from "../NavMenu";
import { NavLink } from "react-router-dom";
import { Container } from "./Header.styled";

export const Header = () => {
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
            <header>
                <Container>
                    {NavBar()}
                </Container>
            </header>
        </>
    );
};