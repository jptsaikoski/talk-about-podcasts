import "./Sidebar.css";

export default function Sidebar(props) {
    return (
        <nav className="sidebar">

            <div className="sidebar__logo">
                <img className="sidebar__logo-image" src="/images/logo.svg" alt="A logo do app."/>
            </div>

            <ul className="sidebar__nav">
                <li className="sidebar__nav-item" id="selected">
                    <img className="sidebar__nav-icon" src="/icons/discover.png" alt="Ícone da página Descobrir."/>
                    <a href="#" className="sidebar__nav-link">Descobrir</a>
                </li>
                <li className="sidebar__nav-item">
                    <img className="sidebar__nav-icon" src="/icons/search.png" alt="Ícone da página Buscar."/>
                    <a href="#" className="sidebar__nav-link">Buscar</a>
                </li>
                <li className="sidebar__nav-item">
                    <img className="sidebar__nav-icon" src="/icons/library.png" alt="Ícone da página Biblioteca."/>
                    <a href="#" className="sidebar__nav-link">Biblioteca</a>
                </li>
                <li className="sidebar__nav-item">
                    <img className="sidebar__nav-icon" src="/icons/settings.png" alt="Ícone da página Configurações."/>
                    <a href="#" className="sidebar__nav-link">Configurações</a>
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