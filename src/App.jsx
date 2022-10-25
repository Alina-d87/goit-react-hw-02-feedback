import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/ButtonInterface";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Message";

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	onLeaveFeedback = (propertyName) => {
		this.setState((prevState) => {
			const name = prevState[propertyName];
			return {
				[propertyName]: name + 1,
			};
		})
	}

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	}
	
	countPositiveFeedbackPercentage = () => {
		const { good } = this.state;
		const total = this.countTotalFeedback();
		const result = (good / total) * 100;
		return Number(result.toFixed(2));
	}

	render() {
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
		const options = ['Good', 'Neutral', 'Bad'];
		return (
			<div>
				<Section title="Please leave feedback">
					<FeedbackOptions
						onLeaveFeedback={this.onLeaveFeedback}
						options={options} />
				</Section>
				{!total ? <Notification message="There is no feedback" /> :
					<Section title="Statistics">
						<Statistics
							state={this.state}
							total={total}
							positivePercentage={positivePercentage} />
					</Section>}
			</div>
		);
	}
}