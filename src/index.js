import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner/Spinner';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'
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
const ErrorFallback = React.lazy(() => import('./components/ErrorFallback/ErrorFallback'));

ReactDOM.render(

  <React.StrictMode>
     <Provider store={store}>
        <AppTheme>
          <Router>
            <Switch>   
                <Route path='/login' name='LogIn'>
                  <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <SignIn/> 
                    </ErrorBoundary> 
                  </Suspense>
                </Route>
                <Route path='/register' name='SignUp'> 
                  <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <SignUp/>  
                    </ErrorBoundary>
                  </Suspense>
                </Route>  
                <Route path='/directory/:id' name='CategoryList'>
                  <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <CategoryList  /> 
                    </ErrorBoundary> 
                  </Suspense>
                </Route>
                <Route path='/viewcart' name='ShoppingCart'>
                  <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <ShoppingCart/> 
                    </ErrorBoundary> 
                  </Suspense>
                </Route>
                <Route path='/checkout' name='Checkout'>
                  <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Checkout/>  
                    </ErrorBoundary>
                  </Suspense>
                </Route>
                <Route path='/' name='Home'>
                  <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Home/>  
                    </ErrorBoundary>
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
