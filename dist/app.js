// var React = require("react");

var LoginBox = React.createClass({
	displayName: 'LoginBox',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'Username: '
			),
			React.createElement('input', null),
			React.createElement(
				'label',
				null,
				'Password: '
			),
			React.createElement('input', null),
			React.createElement(
				'button',
				null,
				'Submit'
			)
		);
	}
});

ReactDOM.render(React.createElement(LoginBox, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map
