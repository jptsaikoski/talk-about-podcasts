import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(props) {
    const activeLink = "sidebar__nav-link active",
    normalLink = "sidebar__nav-link";

    return (
        <nav className="sidebar">

            <div className="sidebar__logo">
                <img className="sidebar__logo-image" src="/images/logo.svg" alt="A logo do app."/>
            </div>

            <ul className="sidebar__nav">
                <li className="sidebar__nav-item">
                    <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/">
                        <img className="sidebar__nav-icon" src="/icons/discover.png" alt="Ícone da página Descobrir."/>
                        Descobrir
                    </NavLink>
                </li>
                <li className="sidebar__nav-item">
                    <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/search">
                        <img className="sidebar__nav-icon" src="/icons/search.png" alt="Ícone da página Buscar."/>
                        Busca
                    </NavLink>
                </li>
                <li className="sidebar__nav-item">
                    <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/library">
                        <img className="sidebar__nav-icon" src="/icons/library.png" alt="Ícone da página Biblioteca."/>
                        Biblioteca
                    </NavLink>
                </li>
                <li className="sidebar__nav-item">
                    <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/settings">
                        <img className="sidebar__nav-icon" src="/icons/settings.png" alt="Ícone da página Configurações."/>
                        Configurações
                    </NavLink>
                </li>
            </ul>

            <div className="sidebar__user">
                <div className="sidebar__user-avatar">
                    <img className="sidebar__avatar-image" src="/images/avatar.png" alt="O avatar do usuário."/>
                </div>
                <div className="sidebar__user-info">
                    <span className="sidebar__user-name">Pedro Saikoski</span>
                </div>
            </div>

        </nav>
    );
}