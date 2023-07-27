// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: props.error };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ hasError: this.props.error });
    }
  }
  
  render() {
    
    if (this.state.hasError) {
      // Display the fallback UI when an error occurs
      return <div>Oops! Something went wrong.</div>;
    }

    // Render the children components if no error has occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
