import { Link } from "react-router-dom";
import "./navbar.css";
import Search from "../ui/Search/Search";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img className="logo__img" src="/epic-show-logo.png" alt="" />{" "}
          <div className="logo__title">EpicShow</div>
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span>Shows</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav__link__icon"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>

            <ul className="nav__submenu">
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Hollywood
                </Link>{" "}
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Japanese
                </Link>{" "}
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Korean
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Indian
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Tamil
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Bollywood
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Malaylam
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Telugu
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span>Genres</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav__link__icon"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>

            <ul className="nav__submenu">
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Action
                </Link>{" "}
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Romantic
                </Link>{" "}
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Drama
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Historical
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Thriller
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Comedy
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  RomCom
                </Link>
              </li>
              <li className="submenu__item">
                <Link className="submenu__link" to="/">
                  Musical
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <Search placeholder="Search your favorite show..." />


      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mobile-search"
          aria-hidden
          width={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

    </header>
  );
};

export default Navbar;
