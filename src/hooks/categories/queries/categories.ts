import { gql } from "graphql.macro";

export default gql`
  query UseCategoriesQuery(
    $first: Int
    $last: Int
    $where: RootQueryToCategoryConnectionWhereArgs
  ) {
    categories(first: $first, last: $last, where: $where) {
      nodes {
        id
        name
        slug
        uri
        termTaxonomyId
        description
        isRestricted
        extraField {
          thumbnail {
            mediaItemUrl
            uri
            altText
            caption
            date
            modified
            mediaType
            description
          }
        }
        children {
          nodes {
            id
            name
            slug
            uri
            description
            isRestricted
            extraField {
              thumbnail {
                mediaItemUrl
                uri
                altText
                caption
                date
                modified
                mediaType
                description
              }
            }
          }
        }
      }
    }
  }
`;
