var React = require('react');
var ReactDOM = require('react-dom');

exports.start = function(request, response) {
    viwe();
}

function viwe() {
    var Hello = React.createClass({
      render: function() {
        return (
          <div className="container">Hello</div>
        );
      }
    })
    
    ReactDOM.render(<Hello name="React" />, document.getElementById("app"));   
}