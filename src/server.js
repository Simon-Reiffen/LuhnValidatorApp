import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';

module.exports = function render() {
  return renderToString(<App />);
};