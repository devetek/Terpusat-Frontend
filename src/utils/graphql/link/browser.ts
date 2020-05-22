import "unfetch";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { RetryLink } from "apollo-link-retry";
import { onError } from "apollo-link-error";

export interface IClientBrowserOption {
  headers?: any;
  url: string;
  retry: {
    initialDelay: number;
    maxAttempts: number;
  };
  customLinks?: any[];
}

export default ({
  url = "",
  headers = {},
  retry = {
    initialDelay: 500,
    maxAttempts: 3,
  },
  // e.g RestLink, StateLink, etc
  customLinks = [],
}: IClientBrowserOption) => {
  const retryLink = new RetryLink({
    delay: {
      initial: retry.initialDelay,
      max: Infinity,
      jitter: true,
    },
    attempts: {
      max: retry.maxAttempts,
      retryIf: (error) => Boolean(error),
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    const operationName = (operation && operation.operationName) || "";
    const operationVariables =
      (operation &&
        operation.variables &&
        JSON.stringify(operation.variables)) ||
      "";

    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, operationName: ${operationName}, operationVariables: ${operationVariables}`
        )
      );
    }

    if (networkError) {
      console.error(
        `[Network error]: ${networkError}, operationName: ${operationName}`
      );
      console.error(`stack: ${networkError.stack}`);
    }
  });

  const customFetch = (uri: string, options: any) => {
    const { method, ...contextHeaders } = options.headers;
    const serverUri = url;

    if (process.env.NODE_ENV === "development") {
      delete contextHeaders["x-user-id"];
    }

    const shouldGET = method === "GET";
    const finalUri = shouldGET
      ? `${serverUri}/?query=${options.body}`
      : serverUri;

    return fetch(finalUri, {
      ...options,
      method: shouldGET ? "GET" : "POST",
      body: shouldGET ? undefined : options.body,
      credentials: "include",
      headers: {
        ...headers,
        ...contextHeaders,
      },
    });
  };

  const requestLink = new BatchHttpLink({
    fetch: customFetch,
  });

  const links: ApolloLink[] = [
    retryLink,
    errorLink,
    ...customLinks,
    requestLink,
  ].filter(Boolean);

  if (links?.length) {
    return ApolloLink.from(links);
  }

  if (!links) {
    throw Error("Please pass a network interface to be used on apollo client");
  }
};
