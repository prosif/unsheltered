import React from 'react';

var PlayerStatus = React.createClass({
	render: function(){
		return (
			<div id="status">
				Time: {this.props.time}<br />
				Money: ${this.props.money}<br />
				Health: {this.props.health}
			</div>
		);
	}
});

export default PlayerStatus;