import React from "react";
import { Helmet } from "react-helmet-async";
import { SITES_INFO } from "config";

export interface ISEO {
  title?: string;
  description?: string;
}

export default (meta: ISEO = { title: "", description: "" }): JSX.Element => {
  const setTitle = meta.title
    ? `${meta.title} - ${SITES_INFO.title}`
    : SITES_INFO.title;
  const setDescription = meta.description
    ? `${meta.title} - ${SITES_INFO.title}`
    : SITES_INFO.description;

  return (
    <Helmet>
      <title>{setTitle}</title>
      <meta name="description" content={setDescription} />
    </Helmet>
  );
};
