import React from 'react'
import Header from './components/Header'
import Contents from './components/Contents';
import './App.css'

const App = () => {
  return (
    <>
      <div className="container">
        <div className="head">
          <Header />
        </div>

        <div className="content">
          <Contents />
        </div>
      </div>
    </>
  );
}

export default App