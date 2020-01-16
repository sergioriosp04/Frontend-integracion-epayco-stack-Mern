import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//redux
import store from './store'
import { Provider } from 'react-redux'
//components
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Home'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
