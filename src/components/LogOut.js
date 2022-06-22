import React from 'react';
import _ from 'lodash';

export default class LogOut extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      setExpiryTime(0);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}
