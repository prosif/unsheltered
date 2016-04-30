import React from 'react';
import PlayerStatus from './PlayerStatus.react';
import Event from './Event.react';

var GameComponent = React.createClass({
	getInitialState: function(){
		return({
			eventIndex: 0,
			playerMoney: 15,
			playerHealth: 85,
			playerTime: 0,
			events: [
			]
		});
	},

	generateTenderloinEvent: function(){
		var newEvent = {id: this.incrementCount(), type: "high", top: 100, left: 350};
		// Call self again after random amount of time < 1 minute
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		console.log("Going to call myself again in", nextCallTime / 1000, "seconds");
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateMissionEvent: function(){
		var newEvent = {id: this.incrementCount(), type: "medium", top: 200, left: 350};
		// Call self again after random amount of time < 1 minute
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		console.log("Going to call myself again in", nextCallTime / 1000, "seconds");
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateSunsetEvent: function(){
		var newEvent = {id: this.incrementCount(), type: "health", top: 300, left: 350};
		// Call self again after random amount of time < 1 minute
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		console.log("Going to call myself again in", nextCallTime / 1000, "seconds");
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateHealthEvent: function(){
		var newEvent = {id: this.incrementCount(), type: "low", top: 400, left: 350};
		// Call self again after random amount of time < 1 minute
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		console.log("Going to call myself again in", nextCallTime / 1000, "seconds");
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	componentDidMount: function(){
		window.setTimeout(this.generateTenderloinEvent, 1000 * 2);
		window.setTimeout(this.generateMissionEvent, 1000 * 5);
		window.setTimeout(this.generateSunsetEvent, 1000 * 8);
		window.setTimeout(this.generateHealthEvent, 1000 * 12);
	},

	incrementCount: function(){
		var currentCount = this.state.eventIndex;
		this.setState({eventIndex: currentCount + 1});
		return currentCount + 1;
	},

	render: function(){
		var events = this.state.events.map(function(event){
			return <Event key={event.id} type={event.type} left={event.left} top={event.top} />;
		});

		return(
			<div id="game-master">
			{events}
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