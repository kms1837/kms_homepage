var React = require('react');

exports.start = function(request, response) {
    viwe();
}

function viwe() {
    var Hello = React.createClass({
      render: function() {
        return (
          <div className="container">Hello {this.props.name}</div>
        );
      }
    })
    
    React.render(<Hello name="React" />, document.getElementById("app"));   
}