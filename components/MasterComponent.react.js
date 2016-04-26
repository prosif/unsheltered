import React from 'react';
import GameComponent from './GameComponent.react';

var MasterComponent = React.createClass({
	
	render: function(){
		return (
			<div id="game">
				<GameComponent />
			</div>
		);
	}
});

export default MasterComponent;