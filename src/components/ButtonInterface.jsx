//import React, { Component } from "react";

//export default class Title extends Component {
//	state = {
//		good: 0,
//		neutral: 0,
//		bad: 0,
//	}

//	handleClickFeedback = () => {
//		this.setState((prevState) => {
//			return {
//				good: prevState.state.good + 1,
//				neutral: prevState.state.neutral + 1,
//				bad: prevState.state.bad + 1,
//			};
//		})
//	}

//	countTotalFeedback = () => {
//		return Object.values(this.state).reduce((total, item) => total + item, 0);
//	}

//	countPositiveFeedbackPercentage = () => {
//		return Math.floor((100 * this.state.good) / this.countTotalFeedback);
//	}

//	render() {
//		const total = this.countTotalFeedback();
//		const percentage = this.countPositiveFeedbackPercentage();
//		return (
//			<div>
//			<section>
//				<h2>Please leave feedback</h2>
//					<button type="button" onClick={() => this.handleClickFeedback(this.state.good)}>Good</button>
//				<button type="button" onClick={this.handleClickFeedback.neutral}>Neutral</button>
//				<button type="button" onClick={this.handleClickFeedback.bad}>Bad</button>
//			</section>
//			<div>
//			</div>
//			<div>
//				<h2>Statistics</h2>
//				<section>
//						<p>Good: {this.state.good}</p>
//					<p>Neutral:</p>
//					<p>Bad:</p>
//					<p>Total: { this.total}</p>
//					<p>Positive feedback: {this.percentage}%</p>
//					<p>No feadback given</p>
//				</section>
//				</div>
//			</div>)
//	}
//}

