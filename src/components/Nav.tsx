import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthNav from "./AuthNav";
import SearchModal from "./SearchModal";

interface IMenu {
  id: string;
  name: string;
  redirectPath: string;
  subMenu?: ISubMenu[];
}

interface ISubMenu {
  id: string;
  name: string;
  redirectPath: string;
}

const Menu = () => {
  const { t } = useTranslation("menu");

  const menu: IMenu[] = [
    {
      id: "1",
      name: t("recipes"),
      redirectPath: "/recipes",
    },
    {
      id: "2",
      name: t("fitness"),
      redirectPath: "#",
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

  return (
    <header>
      <nav className="navbar navbar-expand-xl bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span>Fitshape</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-nav-scroll mx-auto">
              {menu.map((e) =>
                e.subMenu ? (
                  <li className="nav-item dropdown" key={e.id}>
                    <NavLink
                      className="nav-link dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      to={e.redirectPath}
                    >
                      {e.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      {e.subMenu.map((s) => (
                        <li key={s.id}>
                          <NavLink
                            to={s.redirectPath}
                            className="dropdown-item"
                          >
                            {s.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" key={e.id}>
                    <NavLink className="nav-link" to={e.redirectPath}>
                      {e.name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="nav flex-nowrap align-items-center">
            <div className="nav-item me-2">
              <a data-bs-toggle="modal" data-bs-target="#searchModal">
                <i className="bi bi-search"></i>
              </a>
            </div>
            <AuthNav />
          </div>
        </div>
        <SearchModal />
      </nav>
    </header>
  );
};

export default Menu;
