var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  displayName: 'Hello',

  render: function () {
    return React.createElement('div', null, 'Hello ', this.props.name);
  }
});

React.render(React.createElement(Hello, { name: 'React' }), document.getElementById("app"));