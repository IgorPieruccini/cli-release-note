import * as ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './app';
import "./index.css"

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />)
}

