var React = require('react');
var ReactDOM = require('react-dom');

exports.start = function (request, response) {
  response.send(template({
    initialData: JSON.stringify(data),
    markup: React.renderToString(React.createElement(App, {data: data}))
  }));
};