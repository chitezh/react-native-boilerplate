import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import Splash from './components/scenes/splash/Splash';
import configureStore from './store';

export default () => {
  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      if (this.state.isLoading) {
        return <Splash />;
      }

      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
    }
  return Root;
};
