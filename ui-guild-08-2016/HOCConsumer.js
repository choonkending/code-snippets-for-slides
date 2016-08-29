import React from 'react';
import enhance from 'enhanceHOC';

const DumbComponent = props => <div />;
const EnhancedComponent = enhance(DumbComponent);

class Consumer extends React.Component {
  render() {
    <EnhancedComponent />
  }
}


