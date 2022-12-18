import React from "react";
import style from "./css/Header.module.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className={`${style.nav}`}>
            <ul className={`${style.headerUl}`}>
                <Link to="/introduce"><li className={`${style.headerLi}`}>Introduce</li></Link>
                <Link to="/skill"><li className={`${style.headerLi}`}>Skill</li></Link>
                <Link to="/project"><li className={`${style.headerLi}`}>Project</li></Link>
                <Link to="/contact"><li className={`${style.headerLi}`}>Contact</li></Link>
            </ul>
        </nav>
    );
}
export default Header;