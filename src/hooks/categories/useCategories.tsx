import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import categoriesQuery from "./queries/categories";

export interface useCategoryPros {
  name?: string;
}

export interface Thumbnail {
  mediaItemUrl?: string;
  uri?: string;
  altText?: string;
  caption?: string;
  date?: Date;
  modified?: string;
  mediaType?: string;
  description?: string;
}

export interface ChildField {
  nodes?: MainField[];
}

export interface ExtraField {
  thumbnail?: Thumbnail;
}

export interface MainField {
  id?: string;
  name?: string;
  slug?: string;
  uri?: string;
  description?: string;
  isRestricted?: boolean;
  extraField?: ExtraField;
}

export interface IUseCategoriesHook extends MainField {
  children?: ChildField;
}

export default ({
  name = "",
}: useCategoryPros): [boolean, IUseCategoriesHook] => {
  const [categories, updateCategories] = useState<IUseCategoriesHook>({});
  const { loading, data } = useQuery(categoriesQuery, {
    variables: {
      first: 0,
      where: {
        name,
      },
    },
  });

  useEffect(() => {
    if (!loading && data) {
      const menuItem = data?.categories?.nodes?.[0] ?? [];
      updateCategories(menuItem);
    }
  }, [data, loading]);

  return [loading, categories];
};
