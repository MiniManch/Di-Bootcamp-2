import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary'
export default class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      error: null,
    };
  }

  handleClick = () => {
    if (this.state.counter + 1 === 5) {
      this.setState({ error: true });
    } else {
      this.setState((prevState) => ({ counter: prevState.counter + 1, error: null }));
    }
  };

  render() {
    return (
      <ErrorBoundary error={this.state.error}>
          <h1 onClick={this.handleClick}>The count is: {this.state.counter}</h1>
      </ErrorBoundary>
      );
  }
}
