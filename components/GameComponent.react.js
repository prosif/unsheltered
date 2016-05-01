import React from 'react';
import PlayerStatus from './PlayerStatus.react';
import Event from './Event.react';
import Player from './Player.react';

var GameComponent = React.createClass({
	getInitialState: function(){
		return({
			eventIndex: 0,
			playerMoney: 15,
			playerHealth: 85,
			playerTime: 0,
			events: {},
			activeEvent: null,
			playerX: 250,
			playerY: 250
		});
	},

	renderEventDetail: function(){
		if(this.state.activeEvent.type == "health"){
			return(
				<div className="event-description">
					<div>
						<p>
						{this.state.activeEvent.text}
						</p>
						<p>
						Takes {this.state.activeEvent.time} hours
						</p>
						<p>
						Cost: {this.state.activeEvent.cost}
						</p>
						<p>
						Gain: {this.state.activeEvent.health} health
						</p>
					</div>
					<div className="close-button link" onClick={this.onClose}>Reject</div>
					<div className="accept-button link" onClick={this.onAccept}>Accept</div>
				</div>
			);
		}
		else{
			return(
				<div className="event-description">
					<p>
					{this.state.activeEvent.text}
					</p>
					<p>
					Takes: {this.state.activeEvent.time} hours
					</p>
					<p>
					Reward: ${this.state.activeEvent.reward}
					</p>
					<div className="close-button link" onClick={this.onClose}>Reject</div>
					<div className="accept-button link" onClick={this.onAccept}>Accept</div>
				</div>
			);
		}
	},

	onAccept: function(){
		// TODO: Calculate outcome. For now, always succeed.
		var currentEvent = this.state.activeEvent;
		var currentHealth = this.state.playerHealth;
		var currentTime = this.state.playerTime;
		var currentMoney = this.state.playerMoney;
		var events = this.state.events;
		var newPlayerX = currentEvent.left;
		var newPlayerY = currentEvent.top + 30;
		if(currentEvent.type == "health"){
			currentMoney -= currentEvent.cost;
			currentTime += currentEvent.time;
			currentHealth += currentEvent.health;
			this.setState({
				playerMoney: currentMoney,
				playerTime: currentTime,
				playerHealth: currentHealth,
				events: events,
				playerX: newPlayerX,
				playerY: newPlayerY
			});
		}
		else{
			currentMoney += currentEvent.reward;
			currentTime += currentEvent.time;
			this.setState({
				playerMoney: currentMoney,
				playerTime: currentTime,
				events: events,
				playerX: newPlayerX,
				playerY: newPlayerY
			});
		}
		this.onClose();
		delete events[currentEvent.id];
		this.setState({events: events});
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
			text: "Event one",
			reward: 35,
			time: 3
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents[newEvent.id] = newEvent;
		this.setState({events: currentEvents});
		window.setTimeout(this.generateTenderloinEvent, nextCallTime);
	},

	generateMissionEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "medium", 
			top: 150, 
			left: 350,
			text: "Event two",
			reward: 15,
			time: 2
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents[newEvent.id] = newEvent;
		this.setState({events: currentEvents});
		window.setTimeout(this.generateMissionEvent, nextCallTime);
	},

	generateSunsetEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "health", 
			top: 250, 
			left: 350,
			text: "Health event",
			health: 15,
			time: 1,
			cost: 10
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents[newEvent.id] = newEvent;
		this.setState({events: currentEvents});
		window.setTimeout(this.generateSunsetEvent, nextCallTime);
	},

	generateHealthEvent: function(){
		var newEvent = {
			id: this.incrementCount(), 
			type: "low", 
			top: 350, 
			left: 350,
			text: "Event three",
			reward: 15,
			time: 2
		};
		var nextCallTime = Math.random() * 60 * 1000;
		var currentEvents = this.state.events;
		currentEvents[newEvent.id] = newEvent;
		this.setState({events: currentEvents});
		window.setTimeout(this.generateHealthEvent, nextCallTime);
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
		var events = Object.keys(this.state.events).map(function(event){
			var eventObj = this.state.events[event];
			return <Event onClick={this.onClickEvent} key={eventObj.id} type={eventObj.type} left={eventObj.left} top={eventObj.top} id={eventObj.id}/>;
		}.bind(this));

		var eventDetail;
		if(this.state.activeEvent){
			eventDetail = this.renderEventDetail();
		}

		return(
			<div id="game-master">
			{events}
			<Player left={this.state.playerX} top={this.state.playerY} />
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