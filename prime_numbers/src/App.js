import React, { Component } from 'react';
import NavigationAppBar from './components/NavigationAppBar';
import { Route, Switch } from 'react-router-dom';
import { UncontrolledAlert } from 'reactstrap';
import './styles/styles.css';

import FrontPage from './pages/FrontPage';
import PrimeNumbers from './pages/PrimeNumbers';
import PrimeSlow from './pages/PrimeSlow';
import PrimeFast from './pages/PrimeFast';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unhandledPromiseRejections: []
    };
  }

  componentDidMount() {
    window.onunhandledrejection = (err) => {
      this.setState((state) => {
        const unhandledPromiseRejections = [...state.unhandledPromiseRejections, err.reason];

        return {
          unhandledPromiseRejections
        };
      });
    };
  }

  render() {
    const unhandledPromiseRejections = this.state.unhandledPromiseRejections;
    let alerts = unhandledPromiseRejections.map((rejection, index) => {
      return (
        <UncontrolledAlert key={index} color="danger">
          <h4 className="alert-heading">{rejection.message}</h4>
          <hr />
          <p className="mb-0">{rejection.response ? rejection.response.data.message : ''}</p>
        </UncontrolledAlert>
      );
    });

    return (
      <>
        <NavigationAppBar />
        <main role="main" className="container">
          {alerts}
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/primtall" component={PrimeNumbers} />
            <Route path="/treeeeeeeeeig" component={PrimeSlow} />
            <Route path="/ZOOOOOOM" component={PrimeFast} />
            <Route component={FrontPage} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
