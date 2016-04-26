import React from 'react';

var SplashScreen = React.createClass({
	render: function(){
		return(
			<img id="start" className="link" onClick={this.props.onStart} src="images/startB.png" />
		);
	}
});

export default SplashScreen;