var React = require('react');
var ReactDOM = require('react-dom');

exports.start = function (request, response) {
  viwe();
};

function viwe() {
  var Hello = React.createClass({
    displayName: 'Hello',

    render: function () {
      return React.createElement(
        'div',
        { className: 'container' },
        'Hello'
      );
    }
  });

  ReactDOM.render(React.createElement(Hello, { name: 'React' }), document.getElementById("app"));
}