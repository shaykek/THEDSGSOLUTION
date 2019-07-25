import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft
// } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../../../context/app";

import "./NavSub.scss";

const NavSub = ({ location: { pathname }, nextRef, prevRef }) => {
  const {
    template: {
      navigation: { sub }
    }
  } = useContext(AppContext);

  const links = Object.values(sub)
    .filter(array => array.find(object => object["to"] === pathname))[0]
    .slice()
    .reverse();

  const activeLinkIndex = links.findIndex(link => link["to"] === pathname);

  return (
    <nav className="nav-sub">
      <div className="container container--normal">
        <main className="nav-sub__main">
          {links.map(({ name, to }, i) => (
            <Link to={to} key={i}>
              <span
                className={`nav-sub__link nav-sub__link--${activeLinkIndex ===
                  i && "active"}`}
              >
                {name}
              </span>
            </Link>
          ))}
        </main>
      </div>
    </nav>
  );
};

NavSub.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(NavSub);
