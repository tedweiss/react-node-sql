import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import {Addresses} from './ui/Addresses'
import useFetch from './services/useFetch'

interface Test {
  greeting: string
}

const App: React.FC<Test> = ({greeting = 'hello'}) => {
  const {loading, data, error} = useFetch('/api/addresses/1', [])

  const addresses = data
  return (
    <div className="App">
      {greeting}
      {!loading && !error && <Addresses addresses={addresses} />}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
