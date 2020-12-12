import * as React from 'react'
import logo from './logo.svg'
import './App.css'

interface Test {
  greeting: string
}

const App: React.FC<Test> = ({greeting = 'hello'}) => {
  return (
    <div className="App">
      {greeting}
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
