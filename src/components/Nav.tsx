/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthNav from "./AuthNav";
import SearchModal from "./SearchModal";
import { useEffect, useState } from "react";

interface IMenu {
  id: string;
  name: string;
  redirectPath?: string;
  subMenu?: ISubMenu[];
}

interface ISubMenu {
  id: string;
  name: string;
  redirectPath: string;
}

const Nav = () => {
  const { t } = useTranslation("menu");
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleNavCollapse = () => setIsNavCollapsed((state) => !state)

  const menu: IMenu[] = [
    {
      id: "1",
      name: t("recipes"),
      redirectPath: "/recipes",
    },
    {
      id: "2",
      name: t("fitness"),
      subMenu: [
        {
          id: "2.1",
          name: t('exercices'),
          redirectPath: "/fitness",
        },
        {
          id: "2.2",
          name: t("my training"),
          redirectPath: "/mytraining",
        },
      ],
    },
    {
      id: "3",
      name: t("calorie calculator"),
      redirectPath: "/caloriecalculator",
    },
    {
      id: "4",
      name: t("blog"),
      redirectPath: "/blog",
    },
  ];

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition)
  
  },[]);


  return (
    <header className={`${scrollPosition > 0 ? 'bg-body': 'bg-transparent' } fixed-top border-top border-primary`}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand text-black" to="/">
            <span>Fitshape</span>
          </Link>
          <button
            className={`${isNavCollapsed ? '' :'collapsed'} navbar-toggler border-0 shadow-none`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list text-primary" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <div className={isNavCollapsed ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-lg-3 navbar-nav-scroll">
               {menu.map((e) =>
                e.subMenu ? (
                  <li className="nav-item dropdown" key={e.id}>
                    <a
                      className="nav-link dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      {e.name}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-arrow">
                      {e.subMenu.map((s) => (
                        <li key={s.id}>
                          <NavLink
                            to={s.redirectPath}
                            className="dropdown-item"
                            onClick={handleNavCollapse}
                          >
                            {s.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" key={e.id}>
                    <NavLink className="nav-link" to={e.redirectPath!} onClick={handleNavCollapse}>
                      {e.name}
                    </NavLink>
                  </li>
                )
              )} 
            </ul>
            <AuthNav />
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Nav;
