import React, { Component } from "react";
import {Container} from "./App.styled"

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	handleClickGood = (good) => {
		this.setState((prevState) => {
			return {
				good: prevState.good + 1,
			};
		})
	}
    
	handeClickNeutral = (neutral) => {
		this.setState((prevState) => {
			return {
				neutral: prevState.neutral + 1,
			};
		})
	}
    
	handeClickBad = (bad) => {
		this.setState((prevState) => {
			return {
				bad: prevState.bad + 1,
			};
		})
	}

	countTotalFeedback = () => {
		return Object.values(this.state).reduce((total, item) => total + item, 0);
	}

	countPositiveFeedbackPercentage = () => {
		return ((this.state.good / this.countTotalFeedback) * 100).toFixed(2);
	}

	render() {
		const total = Object.values(this.state).reduce((total, item) => total + item, 0);
		const percentage = ((this.state.good / total) * 100).toFixed(2);
		return (
			<Container>
			<section className="title">
				<h2 className="titleText">Please leave feedback</h2>
					<button type="button" onClick={() => this.handleClickGood(this.good)}>Good</button>
					<button type="button" onClick={() => this.handeClickNeutral(this.state.neutral)}>Neutral</button>
					<button type="button" onClick={() => this.handeClickBad(this.state.bad)}>Bad</button>
			</section>
			<div>
			</div>
			<div>
				<h2>Statistics</h2>
				<section>
					<p>Good: {this.state.good}</p>
					<p>Neutral: {this.state.neutral}</p>
					<p>Bad: {this.state.bad}</p>
					<p>Total: {total}</p>
					<p>Positive feedback: {percentage} %</p>
					<p>No feadback given</p>
				</section>
			</div>
			</Container>)
	}
}

