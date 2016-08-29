import React from 'react';

const enhance = Component => class extends React.Component {
  render() {
    return (
      <Component {...this.props} {...otherProps} />
    );
  }
}

export default enhance;

