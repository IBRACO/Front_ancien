import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
// import { Button } from "./Button";
import "./css/Navbar.css";

import UserContext from "../contexts/UserContext";
import { Protected } from ".";

import { IconContext } from "react-icons";
import { Button } from "./Button";

function Navbar() {
  const context = useContext(UserContext);

  const logout = () => {
    const { setUser } = context;
    setUser(null);
    window.location.href = "/";
  };

  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar fixed-top">
        <div className="sidebarContener">
          <IconContext.Provider value={{ color: "gray" }}>
            <div>
              <Link to="#" className="menu-bars">
         
              </Link>
            </div>
          </IconContext.Provider>
        </div>

        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closMobileMenu}>
            EASL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Protected>
              <li className="nav-item">
                <Link
                  to="/cotisation"
                  className="nav-links"
                  onClick={closMobileMenu}
                >
                  COTISATION
                </Link>
              </li>
            </Protected>
            <Protected noauth={true}>
              <li className="nav-item">
                <Link
                  to="/contactUs"
                  className="nav-links"
                  onClick={closMobileMenu}
                >
                  NOUS CONTACTER
                </Link>
              </li>
            </Protected>

            <Protected noauth={true}>
              <li className="nav-item">
                <Link
                  to="/quiSommesNous"
                  className="nav-links"
                  onClick={closMobileMenu}
                >
                  QUI SOMMES NOUS
                </Link>
              </li>
            </Protected>

            <Protected>
              <li className="nav-item">
                <Link to="/chat" className="nav-links" onClick={closMobileMenu}>
                  Chat
                </Link>
              </li>
            </Protected>

            <Protected role={2}>
              <li className="nav-item">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <li>
                      <Link to="/ccotisation" onClick={closMobileMenu}>
                        COTISATION
                      </Link>
                    </li>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <li>
                      <Link to="/cactualite" onClick={closMobileMenu}>
                        ACTUALITE
                      </Link>
                    </li>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <li>
                      <Link to="/cadhesion" onClick={closMobileMenu}>
                        ADHESION
                      </Link>
                    </li>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </Protected>
          </ul>
          <Protected noauth={true}>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              AUTENTIFICATION
            </Button>
          </Protected>

          <Protected>
            <button onClick={logout}>Logout</button>
          </Protected>

          {/* <Link to="/connexion">
            {button && <Button buttonStyle="btn-outline">Connexion</Button>}
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
