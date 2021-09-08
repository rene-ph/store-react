import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner/Spinner';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'
import AppTheme from './theme/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';
import PublicRoute from "./components/PublicRoute/PublicRoute";
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));
const CategoryList = React.lazy(() => import('./pages/CategoryList/CategoryList'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const SignUp = React.lazy(() => import('./pages/SignUp/Signup'));
const SignIn = React.lazy(() => import('./pages/SignIn/Signin'));
const ShoppingCart = React.lazy(() => import('./pages/ShoppingCart/Shoppingcart'));
const ErrorFallback = React.lazy(() => import('./components/ErrorFallback/ErrorFallback'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router>
              <Switch>
                <PublicRoute path='/login' name='LogIn' component={SignIn} restricted />
                <PublicRoute path='/register' name='SignUp' component={SignUp} restricted />
                <Route path='/directory/:id' name='CategoryList' component={CategoryList} />
                <Route path='/viewcart' name='ShoppingCart' component={ShoppingCart} />
                <Route path='/checkout' name='Checkout' component={Checkout} />
                <Route exact path='/' name='Home' component={Home} />
                <Route name='Error' component={NotFound}/>
              </Switch>
            </Router>
          </ErrorBoundary>
        </Suspense>
      </AppTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
