// var React = require("react");

var LoginBox = React.createClass({
	render: function () {
		return (
				<div>
					<label>Username: </label><input />
					<label>Password: </label><input />
					<button>Submit</button>
				</div>
			);
	}
});

ReactDOM.render(
		<LoginBox />,
		document.getElementById('app')
	)