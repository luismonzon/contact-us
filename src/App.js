import React from 'react';
import './App.css';
import { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Router, Route, Switch } from 'react-router-dom';
import { routes } from './modules/routes';

import { createBrowserHistory } from 'history';
const customHistory = createBrowserHistory();


class LoadingComponent extends React.Component {
  render() {
    return (
      <CircularProgress />
    )
  }
}

const Root = () => (
    <Suspense fallback={<LoadingComponent/>}>
      <Router history={customHistory}>
        <Switch>
          {routes.map((route, index) => <Route key={index} {...route}></Route>)}
        </Switch>
      </Router>
    </Suspense>
)

function App() {
  return (
    <Root></Root>
  );
}

export default App;
