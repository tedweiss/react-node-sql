import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import useFetch from './services/useFetch'
import {Profiles} from './ui/Profiles'

interface Test {
  greeting: string
}

const App: React.FC<Test> = ({greeting = 'hello'}) => {
  const {loading, data: id, error} = useFetch(
    '/api/users/tony.stark@starkindustry.com',
    [],
  )

  return (
    <div className="App">
      {greeting}
      {!loading && !error && <Profiles id={id} />}
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
