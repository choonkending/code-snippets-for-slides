import React, { Component } from 'react';

class ShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.onToggle = this.onToggle.bind(this);
  }


  render() {
    return (
      <div>
        <p onClick={this.onToggle}>title</p>
        { this.state.isActive && <p>content</p> }
      </div>
    );
  }


  onToggle() {
    this.setState({ isActive : !this.state.isActive });
  }
}
