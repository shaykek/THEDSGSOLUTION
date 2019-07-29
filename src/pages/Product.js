import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/app";

import Article from "../components/sections/Article";

import NotFound from "../pages/NotFound";
import PageForm from "../components/blocks/PageForm/PageForm";

import DataAnalysisForm from "../components/forms/dataAnalysisForm";

const Product = ({
  match: {
    params: { name }
  }
}) => {
  const { pages } = useContext(AppContext);
  const dataAnalysisForm = pages["data-analysis-form"];

  if (!pages[name]) {
    return <NotFound />;
  }

  const {
    [name]: { article, title, form }
  } = pages;

  return (
    <>
      <Article
        banner={article.banner}
        content={article.content}
        variant={article.variant}
        contact={article.contact}
        title={title}
        thin="true"
        align="left"
      >
        {dataAnalysisForm && (
          <DataAnalysisForm {...{ dataAnalysisForm }} className="light" />
        )}
        {/* <PageForm form={form.url} /> */}
      </Article>
    </>
  );
};

Product.propTypes = {
  match: PropTypes.object
};

export default Product;
