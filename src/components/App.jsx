import React, { Component } from "react";
import { Container } from "./styled/App.styled"
import { DataSection } from "./styled/Statistics.styled";
import { SectionTitle } from "./styled/App.styled";
import { Button } from "./styled/App.styled";
import { TitleText } from "./styled/App.styled";

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
		return ((this.state.good / this.total) * 100).toFixed(2);
	}

	render() {
		const total = Object.values(this.state).reduce((total, item) => total + item, 0);
		console.log(total);
		const positivFeedbeck = ((this.state.good / total) * 100).toFixed(2);
		console.log(positivFeedbeck);
		return (
			<Container>
				<SectionTitle>
					<TitleText>Please leave feedback</TitleText>
					<section>
			<Button type="button" onClick={(good) => this.handleClickGood(good)}> Good </Button>
			<Button type="button" onClick={(neutral) => this.handeClickNeutral(neutral)}>Neutral</Button>
			<Button type="button" onClick={(bad) => this.handeClickBad(bad)}>Bad</Button>
		</section>
				</SectionTitle>
				{!total ? <p>{"There is no feedback!"}</p> : <DataSection>
							<h2>Statistics</h2>
							<p>Good: {this.state.good}</p>
							<p>Neutral: {this.state.neutral}</p>
							<p>Bad: {this.state.bad}</p>
							<p>Total: {total}</p>
							<p>Positive feedback: {positivFeedbeck} %</p>
						</DataSection>}
			</Container>)
	}
}