import React from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './pages/CategoryList/CategoryList';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ShoppingCart from './pages/ShoppingCart/Shoppingcart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppTheme from './theme/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store  from './redux/store'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <AppTheme>
          <Router>
            <Switch>   
                <Route path='/login' name='LogIn' component={SignIn}/>
                <Route path='/register' name='SignUp' component={SignUp}/>   
                <Route path='/directory/:id' name='CategoryList' component={CategoryList}/> 
                <Route path='/viewcart' name='ShoppingCart' component={ShoppingCart}/>
                <Route path='/checkout' name='Checkout' component={Checkout}/>
                <Route path='/' name='Home' component={Home}/>  
            </Switch>
          </Router>
        </AppTheme>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
