import React from "react";
import style from "./css/Header.module.css";
function Header() {
    return (
        <nav className={`${style.nav}`}>
            <ul className={`${style.headerUl}`}>
                <li className={`${style.headerLi}`}>Introduce</li>
                <li className={`${style.headerLi}`}>Skill</li>
                <li className={`${style.headerLi}`}>Project</li>
                <li className={`${style.headerLi}`}>Contact</li>
            </ul>
        </nav>
    );
}
export default Header;