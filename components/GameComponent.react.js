import React from 'react';
import PlayerStatus from './PlayerStatus.react';
import Event from './Event.react';
import Player from './Player.react';
import Events from './Events';

var GameComponent = React.createClass({
	getInitialState: function(){
		return({
			eventIndex: 0,
			playerMoney: 15,
			playerHealth: 85,
			playerTime: 0,
			events: {},
			activeEvent: null,
			playerX: 400,
			playerY: 100,
			eventResults: null
		});
	},

	renderEventDetail: function(){
		if(this.state.activeEvent.type == "health"){
			return(
				<div className="event-description">
					<div>
						<p className="description" dangerouslySetInnerHTML={{__html:this.state.activeEvent.text}}>
						</p>
						<p>
						Takes {this.state.activeEvent.time} hours
						</p>
						<p>
						Cost: ${this.state.activeEvent.cost}
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
					<p className="description" dangerouslySetInnerHTML={{__html:this.state.activeEvent.text}}>
					</p>
					<p>
					Takes: {this.state.activeEvent.time} hours
					</p>
					<p>
					Reward: ${this.state.activeEvent.reward}
					</p>
					<p>
					Lose: {this.state.activeEvent.health} health
					</p>
					<div className="close-button link" onClick={this.onClose}>Reject</div>
					<div className="accept-button link" onClick={this.onAccept}>Accept</div>
				</div>
			);
		}
	},

	onCriticalFailure: function(){
		var currentEvent = this.state.activeEvent;
		var currentHealth = this.state.playerHealth;
		var currentTime = this.state.playerTime;
		var currentMoney = this.state.playerMoney;
		var events = this.state.events;
		var newPlayerX = currentEvent.left;
		var newPlayerY = currentEvent.top + 30;

		currentTime += 2 * currentEvent.time;
		currentHealth -= 2 * currentEvent.health;

		this.setState({
			playerMoney: currentMoney,
			playerTime: currentTime,
			playerHealth: currentHealth,
			events: events,
			playerX: newPlayerX,
			playerY: newPlayerY,
			eventResults: "Critical failure. No reward. " + 2 * currentEvent.time + " hours lost. Lost " + 2*currentEvent.health + " health."
		});

		// Remove results after 5 seconds
		window.setTimeout(function(){
			this.setState({
				eventResults: null
			});
		}.bind(this), 5 * 1000);

		this.onClose();
		delete events[currentEvent.id];
		this.setState({events: events});
	},

	onCriticalSuccess: function(){
		var currentEvent = this.state.activeEvent;
		var currentHealth = this.state.playerHealth;
		var currentTime = this.state.playerTime;
		var currentMoney = this.state.playerMoney;
		var events = this.state.events;
		var newPlayerX = currentEvent.left;
		var newPlayerY = currentEvent.top + 30;

		currentMoney += 2*currentEvent.reward;
		currentTime += currentEvent.time/2;
		currentHealth -= currentEvent.health / 2;

		this.setState({
			playerMoney: currentMoney,
			playerTime: currentTime,
			playerHealth: currentHealth,
			events: events,
			playerX: newPlayerX,
			playerY: newPlayerY,
			eventResults: "Critical success! + $" + 2*currentEvent.reward + ". Only lost " + currentEvent.health/2 + " health and " + currentEvent.time/2 + " hours."
		});

		// Remove results after 5 seconds
		window.setTimeout(function(){
			this.setState({
				eventResults: null
			});
		}.bind(this), 5 * 1000);

		this.onClose();
		delete events[currentEvent.id];
		this.setState({events: events});
	},

	onAccept: function(){
		var currentEvent = this.state.activeEvent;
		var currentHealth = this.state.playerHealth;
		var currentTime = this.state.playerTime;
		var currentMoney = this.state.playerMoney;
		var events = this.state.events;
		var newPlayerX = currentEvent.left;
		var newPlayerY = currentEvent.top + 30;

		if(this.state.activeEvent.type != "health"){
			var random = Math.random() * 100;
			if(random >= 0 && random <= this.state.activeEvent.criticalSuccess){
				this.onCriticalSuccess();
				return;
			}
			else if(random >= (100 - this.state.activeEvent.criticalFail) && random <= 100){
				this.onCriticalFailure();
				return;
			}
			else{
				currentMoney += currentEvent.reward;
				currentTime += currentEvent.time;
				currentHealth -= currentEvent.health;
				this.setState({
					playerMoney: currentMoney,
					playerTime: currentTime,
					playerHealth: currentHealth,
					events: events,
					playerX: newPlayerX,
					playerY: newPlayerY,
					eventResults: "Success! + $" + currentEvent.reward + ". -" + currentEvent.health + " health.  +" + currentEvent.time  + " hours."
				});
			}
		}

		else{
			currentMoney -= currentEvent.cost;
			currentTime += currentEvent.time;
			currentHealth += currentEvent.health;
			this.setState({
				playerMoney: currentMoney,
				playerTime: currentTime,
				playerHealth: currentHealth,
				events: events,
				playerX: newPlayerX,
				playerY: newPlayerY,
				eventResults: "+ " + currentEvent.health + " health.  - $" + currentEvent.cost
			});
		}

		window.setTimeout(function(){
			this.setState({
				eventResults: null
			});
		}.bind(this), 5 * 1000);

		this.onClose();
		delete events[currentEvent.id];
		this.setState({events: events});
	},

	onClose: function(){
		var events = this.state.events;
		delete events[this.state.activeEvent.id];
		this.setState({activeEvent: null, events: events});
	},

	onClickEvent: function(eventId){
		this.setState({activeEvent: this.state.events[eventId]});
	},

	generateEvent: function(eventObj){
		var currentEvents = this.state.events;
		currentEvents[eventObj.id] = eventObj;
		this.setState({events: currentEvents});
	},

	componentDidMount: function(){
		var me = this;
		window.setTimeout(function(){
			me.generateEvent(Events.one)
		}, 1000 * 5);
		window.setTimeout(function(){
			me.generateEvent(Events.two)
		}, 1000 * 10);
		window.setTimeout(function(){
			me.generateEvent(Events.three)
		}, 1000 * 15);
		window.setTimeout(function(){
			me.generateEvent(Events.four)
		}, 1000 * 20);
		window.setTimeout(function(){
			me.generateEvent(Events.five)
		}, 1000 * 25);
		window.setTimeout(function(){
			me.generateEvent(Events.six)
		}, 1000 * 30);
	},

	incrementCount: function(){
		var currentCount = this.state.eventIndex;
		this.setState({eventIndex: currentCount + 1});
		return currentCount + 1;
	},

	render: function(){
		var resultsText;
		if(this.state.eventResults){
			resultsText = (
				<div className="results">
					{this.state.eventResults}
				</div>
			);
		}
		var events = Object.keys(this.state.events).map(function(event){
			var eventObj = this.state.events[event];
			return <Event onClick={this.onClickEvent} key={eventObj.id} type={eventObj.type} left={eventObj.left} top={eventObj.top} id={event}/>;
		}.bind(this));

		var eventDetail;
		if(this.state.activeEvent){
			eventDetail = this.renderEventDetail();
		}

		return(
			<div id="game-master">
			{events}
			{resultsText}
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