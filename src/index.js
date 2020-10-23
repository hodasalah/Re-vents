import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configureStore';
import {Provider} from 'react-redux';


const rootEl= document.getElementById('root');
const store= configureStore();
let render=()=>{
	ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,

    rootEl
  );
} 
// from webpack we will get our app work without refresh every time
if(module.hot){
	module.hot.accept('./app/layout/App',()=>{
		setTimeout(render)
	});
} 
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
