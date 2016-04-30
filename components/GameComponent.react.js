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
			],
			activeEvent: null
		});
	},

	renderEventDetail: function(){
		return(
			<div className="event-description">
				<p>
				{this.state.activeEvent.text}
				</p>
				<div className="close-button link" onClick={this.onClose}>Reject</div>
				<div className="accept-button link" onClick={this.onAccept}>Accept</div>
			</div>
		);
	},

	onAccept: function(){
		this.onClose();
	},

	onClose: function(){
		this.setState({activeEvent: null});
	},

	onClickEvent: function(eventId){
		this.setState({activeEvent: this.state.events[eventId]});
	},

	generateTenderloinEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "high", 
			top: 50, 
			left: 350,
			text: "Event one"
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateMissionEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "medium", 
			top: 150, 
			left: 350,
			text: "Event two"
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateSunsetEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "health", 
			top: 250, 
			left: 350,
			text: "Health event"
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateHealthEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "low", 
			top: 350, 
			left: 350,
			text: "Event three"
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents.push(newEvent);
		this.setState({events: currentEvents});
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
		return currentCount;
	},

	render: function(){
		var events = this.state.events.map(function(event){
			return <Event onClick={this.onClickEvent} key={event.id} type={event.type} left={event.left} top={event.top} id={event.id}/>;
		}.bind(this));

		var eventDetail;
		if(this.state.activeEvent){
			eventDetail = this.renderEventDetail();
		}

		return(
			<div id="game-master">
			{events}
			{eventDetail}
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