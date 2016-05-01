import React from 'react';

var Player = React.createClass({

	render: function(){
		var imageSource = "images/player_indicator.png";

		var style = {
			height: "40px",
			width: "40px",
			position: "absolute",
			left: (window.innerWidth / 2 - 333) + this.props.left + "px",
			top: this.props.top + "px",
			backgroundImage: 'url(' + imageSource + ')',
		};

		return(
			<div style={style}>
			</div>
		)
	}
});

export default Player;