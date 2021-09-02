import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import CategoryList from './pages/CategoryList/CategoryList';
import SignUp from './pages/SignUp/Signup';
import SignIn from './pages/SignIn/Signin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store  from './store'
import { Provider } from 'react-redux'
import AppTheme from './theme/index';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <AppTheme>
          <Router>
            <Switch>
                <Route exact path='/directory/:id' name='CategoryList' component={CategoryList}/>
                <Route path='/register' name='SignUp' component={SignUp}/>    
                <Route path='/login' name='LogIn' component={SignIn}/>
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
