import React from 'react';
import SplashScreen from './SplashScreen.react';
import GameComponent from './GameComponent.react';

var MasterComponent = React.createClass({

	getInitialState: function(){
		return({
			splashScreen: true,
			gamePlay: false
		});
	},

	onStart: function(){
		this.setState({
			splashScreen: false,
			gamePlay: true
		});
	},

	renderSplashScreen: function(){
		return (
			<div id="game">
				<SplashScreen onStart={this.onStart} />
			</div>
		);
	},

	renderGamePlay: function(){
		return (
			<div id="game">
				<GameComponent />
			</div>
		);
	},
	
	render: function(){
		if(this.state.splashScreen){
			return this.renderSplashScreen();
		}
		else if(this.state.gamePlay){
			return this.renderGamePlay();
		}
	}
});

export default MasterComponent;