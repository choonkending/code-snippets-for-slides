import React from 'react';

const toggle = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.onToggle = this.onToggle.bind(this);
  }

  render() {
    return (
       <ComposedComponent onToggle={onToggle} isActive={this.state.isActive} />
    );
  }

  onToggle() {
    this.setState({ isActive: !this.state.isActive });
  }
};

const ShowHide = ({onToggle, isActive}) => (
  <div>
    <p onClick={onToggle}>title</p>
    { isActive && <p>content</p> }
  </div>
);


const ConcreteToggle = toggle(ShowHide);
const Consumer = props => <ConcreteToggle />;
