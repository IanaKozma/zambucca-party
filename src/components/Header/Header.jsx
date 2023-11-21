import logo from '../../images/logo.png';
import { navLinks } from "../NavMenu";
import { Container, HeaderImg, NavMenu, Link } from "./Header.styled";

export const Header = () => {
    const NavBar = () => {
        return (
            <nav>
                {navLinks.map(({ to, label }) => (
                    <Link key={to} to={to}>{label}</Link>
                ))}
            </nav>
        );
    };

    return (
        <>
            <header>
                <Container>
                        
                        <NavMenu>
                            {NavBar()}
                        </NavMenu>
                    <HeaderImg src={logo} alt="Logo" />
                </Container>
            </header>
        </>
    );
};