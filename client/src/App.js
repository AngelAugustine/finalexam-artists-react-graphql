import React from 'react'

import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import Container from '@material-ui/core/Container'
import './App.css'

import AddArtist from './components/forms/AddArtist'
import Artist from './components/listItems/Artist'
import Title from './components/layout/Title'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Container className='App'>
      <Title />
      <AddArtist />
      <Artist />
    </Container>
  </ApolloProvider>
)

export default App
