import React from 'react';

var Event = React.createClass({

	onClick: function(){
		this.props.onClick(this.props.id);
	},

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
			top: this.props.top + "px",
			backgroundImage: 'url(' + imageSource + ')',
		};

		return(
			<div className="link" onClick={this.onClick} style={style}>
			</div>
		)
	}
});

export default Event;