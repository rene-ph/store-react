import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner/Spinner';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppTheme from './theme/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store  from './redux/store'
import './index.css';

const Checkout  = React.lazy(() => import('./pages/Checkout/Checkout'));
const CategoryList  = React.lazy(() => import('./pages/CategoryList/CategoryList'));
const Home = React.lazy(() => import('./pages/Home/Home')); 
const SignUp = React.lazy(() => import('./pages/SignUp/SignUp')); 
const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'));
const ShoppingCart = React.lazy(() => import('./pages/ShoppingCart/ShoppingCart'));

ReactDOM.render(

  <React.StrictMode>
     <Provider store={store}>
        <AppTheme>
          <Router>
            <Switch>   
                <Route path='/login' name='LogIn'>
                  <Suspense fallback={<Spinner/>}>
                    <SignIn/>  
                  </Suspense>
                </Route>
                <Route path='/register' name='SignUp'> 
                  <Suspense fallback={<Spinner/>}>
                    <SignUp/>  
                  </Suspense>
                </Route>  
                <Route path='/directory/:id' name='CategoryList'> 
                  <Suspense fallback={<Spinner/>}>
                    <CategoryList/>  
                  </Suspense>
                </Route>
                <Route path='/viewcart' name='ShoppingCart'>
                  <Suspense fallback={<Spinner/>}>
                    <ShoppingCart/>  
                  </Suspense>
                </Route>
                <Route path='/checkout' name='Checkout'>
                  <Suspense fallback={<Spinner/>}>
                    <Checkout/>  
                  </Suspense>
                </Route>
                <Route path='/' name='Home'>
                  <Suspense fallback={<Spinner/>}>
                    <Home/>  
                  </Suspense>
                </Route>
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
