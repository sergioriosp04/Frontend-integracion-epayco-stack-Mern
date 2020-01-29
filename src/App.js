import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
//redux
import store from './store'
import { Provider } from 'react-redux'
//components
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Redirect from="/" to="/dashboard" /> */}
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
        <Switch>
          <Route exact path="/register"/>
          <Route exact path="/login"/>
          <Route exact path='/*' component={Sidebar} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
