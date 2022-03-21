import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./ErrorBoundary.styles.jsx";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/3suxlvm.png" />
          <ErrorImageText>Oh no! We tripped up!</ErrorImageText>
          <p>
            You had been told you should always check your shoes before getting
            up from the bleachers. Freshman were known to walk under them and
            tie peoples’ shoes together.
          </p>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
