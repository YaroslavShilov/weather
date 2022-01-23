import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './state';

let rerendeEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        card={store.card}
        cards={store.state.cards}
        choosedTower={store.choosedTower}
        choosedCity={store.state.choosedCity}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerendeEntireTree(store.getState());
store.subscribe(rerendeEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
