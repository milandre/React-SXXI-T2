import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/logo-somos.png'

export function Header() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState(" hidden");
    const [isMenuCliked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuCliked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass(" visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass(" hidden");
        }
        setIsMenuClicked(!isMenuCliked);
    }

    const datos = [
        { name: "Inicio", link: "/home", linkClass: "" },
        { name: "Nosotros", link: "/nosotros", linkClass: "" },
        { name: "Novedades", link: "/novedades", linkClass: "" },
        { name: "Testimonios", link: "/testimonios", linkClass: "" },
        { name: "Contacto", link: "/contacto", linkClass: "" },
        { name: "Contribuye", link: "/contribuye", linkClass: "" },
        { name: "Log In", link: "/login", linkClass: " login-btn" },
        { name: "Registrate", link: "/register", linkClass: " register-btn" },
    ];

    return (
        <header className="header-container">
            <img src={logo} alt="logo somos mas" className="header-logo desk" />
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <div className={"menu" + menu_class}>
                    <ul className={"nav-links" + menu_class}>
                        {datos.map((obj) => {
                            const { name, link, linkClass } = obj;
                            return (
                                <li key={name}>
                                    <Link
                                        to={link}
                                        className=
                                        {window.location.pathname === link ? "resaltar header-link" + linkClass : "header-link" + linkClass}>
                                        {name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
            <img src={logo} alt="logo somos mas" className={"header-logo mobile"} />
        </header>
    );
}