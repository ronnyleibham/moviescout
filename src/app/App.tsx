import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonBookmark from './components/ButtonBookmark/ButtonBookmark';
import ButtonHome from './components/ButtonHome/ButtonHome';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return <ButtonHome clicked={true} />;
}

export default App;
