import React, { Component, PropTypes } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.onToggle = this.onToggle.bind(this);
  }

  render() {
    return (
        this.props.children(this.state.isActive, this.onToggle)
    );
  }

  onToggle() {
    this.setState({
      isActive: !this.state.isActive
    });
  }
}

// How to use
const ToggleConsumer = props => (
  <Toggle>
  {
    (isActive, onToggle) => {
      return (
        <div>
          <Title onClick={onToggle} />
          { isActive && <Content /> }
        </div>
      );
    }
  }
  </Toggle>
);
