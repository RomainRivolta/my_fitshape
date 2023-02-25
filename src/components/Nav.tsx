/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthNav from "./AuthNav";
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
  const [navBg, setNavBg] = useState('bg-transparent');
  const handleNavCollapse = () => setIsNavCollapsed((state) => !state)

  const location = useLocation();

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
      redirectPath: "/blogs",
    },
  ];

  const updatePosition = (): void => {
    setScrollPosition(window.scrollY);
  }

  const getLocation = () =>{
    console.log(location.pathname.split('/')[1])
    switch (location.pathname.split('/')[1]) {
      case "blogs":
        setNavBg('bg-light');
        break;
      default:
        setNavBg('bg-transparent');
        break;
    }
  }

  useEffect(() => {
    const watchLocation = () =>{
      getLocation();
    }
    
    const watchScroll = () => {
      window.addEventListener('scroll',updatePosition);
    }
    watchLocation();
    watchScroll();
    return () => {
      window.removeEventListener('scroll', updatePosition);
    }
  })
  return (
    <header className={`${scrollPosition > 0 ? 'bg-body': navBg } fixed-top`}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <Link className="navbar-brand" to="/">
            <span>Fitshape</span>
          </Link>
          <button
            className={`${isNavCollapsed ? '' : 'collapsed'} navbar-toggler border-0 shadow-none`}
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
