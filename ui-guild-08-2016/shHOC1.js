import React from 'react';

const showHide = (Title, Content) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.onToggle = this.onToggle.bind(this);
  }

  render() {
    return (
      <div>
        <Title onClick={onToggle} />
        { this.state.isActive && <Content /> }
      </div>
    );
  }

  onToggle() {
    this.setState({ isActive: !this.state.isActive });
  }
};

// Usage
const Title = props => <p {...props}>title</p>;
const Content = props => <p>content</p>;


const ConcreteToggle = showHide(Title, Content);
const Consumer = props => <ConcreteToggle />;
