import React from 'react';
import Clock from '../Clock';
import Login from '../Login';

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Clock/>
        <Login/>
      </>
    );
  }
}