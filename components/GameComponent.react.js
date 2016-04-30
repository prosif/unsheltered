import React from 'react';
import PlayerStatus from './PlayerStatus.react';

var GameComponent = React.createClass({
	getInitialState: function(){
		return({
			playerMoney: 15,
			playerHealth: 85,
			playerTime: 0
		});
	},

	render: function(){
		return(
			<div id="game-master">
			<PlayerStatus 
				money={this.state.playerMoney} 
				health={this.state.playerHealth}
				time={this.state.playerTime}
			/>
			</div>
		);
	}
});

export default GameComponent;