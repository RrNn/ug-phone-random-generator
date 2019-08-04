import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import Generator from './components/Generator';
import './index.scss';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/generate" component={Generator} />
            <Route
              render={() => {
                return (
                  <h1 className="not-found has-text-centered">That page ain't here buoy!</h1>
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
