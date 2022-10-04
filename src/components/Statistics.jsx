import Section from "./Section";
import { DataSection } from "../App.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
			<DataSection>
				<Section title="Statistics">
				<p>Good: {good}</p>
				<p>Neutral: {neutral}</p>
				<p>Bad: {bad}</p>
			<p>Total: {total}</p>
				<p>Positive feedback: {positivePercentage} %</p>
				</Section>
			</DataSection>)
}

export default Statistics;
	


