import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitProject from './pages/SubmitProject';
import { GlobalProvider } from './store/context';
import "./App.css"

function App() {
  return (
    <div>
      <SubmitProject />
    </div>
  )
}

export default App