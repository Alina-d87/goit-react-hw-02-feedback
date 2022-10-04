import React, { Component } from "react";
import FeedbackOptions from "./components/ButtonInterface";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Message";
import { Container } from "./App.styled";

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
		const total = this.countTotalFeedback();
		if (!total) {
			return 0;
		}
		return ((this.state.good / total) * 100).toFixed(2);
	}

	render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
		return (
			<Container>
				<Section title="Please leave feedback">
					<FeedbackOptions
						onLeaveFeedback={this.onLeaveFeedback}
						options={this.state} />
				</Section>
				{!total ? <Notification message="There is no feedback" /> : <Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					positivePercentage={positivePercentage} />}
			</Container>
		)
	}
}