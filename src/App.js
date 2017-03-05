import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import RootRouter from './components/Router';

class SFAApp extends PureComponent {
  static propTypes = {
    User: PropTypes.object,
  }

  static defaultProps = {
    User: {},
  }

  componentDidMount() {
    this.handleNav(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.handleNav(nextProps);
  }

  handleNav = (props) => {
    const { User } = props;
    if (User.isAuthenticated) {
      Actions.home();
    } else if (!User.isAuthenticated) {
      Actions.example();
    }
  }

  render() {
    return <RootRouter />;
  }
}

const mapStateToProps = ({ User }) => ({ User });

export default connect(mapStateToProps)(SFAApp);
