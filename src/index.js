import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
let rootEl= document.getElementById('root');
let render=()=>{
	ReactDOM.render(
		<BrowserRouter>
				<App />
		</BrowserRouter>
		,
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
