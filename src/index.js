import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// import store from './pages/store';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import Footer from './pages/components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import bg from './assets/appimages/bg.png';
import * as serviceWorker from './serviceWorker';
import './fonts/Aclonica-Regular.ttf';
import './fonts/Alatsi-Regular.ttf';
ReactDOM.render(
  // <Provider store={store}>
     <div>
    <img className="bgStyle" src={bg} />
    <BrowserRouter>
   
    <App />
    

    </BrowserRouter>
    <Footer />
    </div>
    ,

    // </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
