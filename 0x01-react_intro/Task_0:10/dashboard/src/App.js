import './App.css';
import React from 'react';

export function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <img src='../HolbertonLogo.jpg' className='App-logo' alt='logo'/>
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input id='email' placeholder='email' type='text'/>
        <label htmlFor='password'>Password</label>
        <input id='password' placeholder='password' type='password'/>
        <button>OK</button>
      </div>
      <footer className='App-footer'>
        Copyright {getFullYear()} - {getFooterCopy(false)}
      </footer>
    </div>
  );
}

export default App;
