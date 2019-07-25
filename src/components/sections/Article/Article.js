import React from "react";
import PropTypes from "prop-types";

import ContactUs from "../../../pages/ContactUs";

import Image from "../../shared/Image";

import { renderContent } from "../../../helpers";

import "./Article.scss";

const Article = ({
  variant,
  banner,
  content,
  contact,
  title,
  thin = false,
  align,
  children
}) => (
  <section className={`article ${thin && "article--gup"}`}>
    <div
      className={`${
        thin
          ? `container container__product container__product--theme-${variant} `
          : ""
      }`}
    >
      <main className="article__main">
        <div className="article__row">
          <div>
            <Image className="article__banner" {...banner} />
          </div>
          <div>
            {title && (
              <h2
                className={`article__page-title article__page-title--theme-${variant}`}
              >
                {title}
              </h2>
            )}

            {align
              ? renderContent(content, "article", variant, "justify")
              : renderContent(content, "article", variant)}
          </div>
        </div>
        {contact && (
          <div className="article__contact">
            <ContactUs />
          </div>
        )}
        {children}
      </main>
    </div>
  </section>
);

Article.propTypes = {
  variant: PropTypes.string,
  banner: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  content: PropTypes.array.isRequired,
  contact: PropTypes.bool.isRequired
};

export default Article;
