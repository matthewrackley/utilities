/**
 * @file index.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import * as React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root') || document.body.appendChild(document.createElement('div')));
document.addEventListener('DOMContentLoaded', () => {
  root.render(React.createElement(App));
});
