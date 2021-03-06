import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import Landing from '../../pages/Landing';

const Root = ({ store, history }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" component={Landing}/>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;
