
import { ApolloClient, HttpLink, from } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'
import { ApolloProvider } from '@apollo/client';


export const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APP_GRAPH + "graphql",
  credentials: 'same-origin',
})

const authLink = setContext((_, { headers }) => {
  const cookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
  return {
      headers: {
          ...headers,
          Authorization: cookie ? `Bearer ${cookie}` : "",
      }
  }

  return {
    headers
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      (graphQLErrors as any[]).forEach(({ message, locations, path, original_message }) => {
          if (original_message?.includes("(Api Key not valid)")) {
              document.location.href = "/";
          }
          console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
      }
      );
  if (networkError) {
      console.log(`[Network error]: ${networkError}`)
  };
});


export const apolloClient = new ApolloClient({
  name: "vcards",
  version: "0.0.0",
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache()
})

interface Props {
  children: React.ReactNode;
}

export const ProviderApollo = ({ children }: Props) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )
}
