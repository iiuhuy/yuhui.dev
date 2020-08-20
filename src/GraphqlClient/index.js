// Initialize
const cache = new InMemoryCache()
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: `bearer ${token}`, // 申请的token
  },
}))
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql', // 所有请求的Url
  batchInterval: 10,
  opts: {
    credentials: 'cross-origin',
  },
})
const client = new ApolloClient({
  clientState: { resolvers, defaults, cache, typeDefs },
  cache, // 本地数据存储, 暂时用不上
  link: authLink.concat(httpLink),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <LayoutRouter />
    </ApolloProvider>
  )
}
