import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

export interface IApolloClientOption {
  options?: {
    queryDeduplication?: boolean;
    connectToDevTools?: boolean;
  };
  link: ApolloLink | undefined;
  initialState?: any;
  fragmentMatcher?: any;
  fragmentMatcherLink?: any;
}

export default ({
  options,
  link,
  initialState,
  fragmentMatcher,
  fragmentMatcherLink,
}: IApolloClientOption) => {
  if (!link) {
    throw Error("Please pass a network interface to be used on apollo client");
  }

  const cache = new InMemoryCache({
    // you might see o => o.id commonly with Apollo.
    // If the IDs are only unique per type (this is typical if an ID is just an
    // ID out of a database table), you can use the `__typename` field to scope it.
    // This is a GraphQL field that's automatically available, but you do need
    // to query for it also. @SEE: http://dev.apollodata.com/angular2/cache-updates.html#dataIdFromObject
    dataIdFromObject: (result) =>
      result.id && result.__typename
        ? `${result.__typename}${result.id}`
        : result.id,
    addTypename: true,
    fragmentMatcher: fragmentMatcher || undefined,
  });

  const apolloClient = new ApolloClient({
    link: fragmentMatcherLink
      ? ApolloLink.from([fragmentMatcherLink, link])
      : link,
    cache: initialState ? cache.restore(initialState) : cache,
    ...options,
  });

  return apolloClient;
};
