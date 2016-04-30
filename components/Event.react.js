import React from 'react';

var Event = React.createClass({
	render: function(){
		var imageSource;
		switch(this.props.type){
			case "low":
				imageSource = "images/lowRisk_indicator.png";
				break;
			case "medium":
				imageSource = "images/mediumRisk_indicator.png";
				break;
			case "high":
				imageSource = "images/highRisk_indicator.png";
				break;
			case "health":
				imageSource = "images/store_indicator.png";
				break;
		}

		var style = {
			height: "63px",
			width: "40px",
			position: "absolute",
			left: (window.innerWidth / 2 - 333) + this.props.left + "px",
			top: (window.innerHeight / 2 - 240) + this.props.top + "px",
			backgroundImage: 'url(' + imageSource + ')',
		};

		return(
			<div style={style}>
			</div>
		)
	}
});

export default Event;