import { DataSection, DataStyled } from "./Statistics.styled";
import { NotifyPosition } from "../Notification/Message.styled";

const Statistics = ({ state, total, positivePercentage }) => {
	return (
		<NotifyPosition>
			<DataSection>
				<DataStyled>Good: {state.good}</DataStyled>
				<DataStyled>Neutral: {state.neutral}</DataStyled>
				<DataStyled>Bad: {state.bad}</DataStyled>
				<DataStyled>Total: {total}</DataStyled>
				<DataStyled>Positive feedback: {positivePercentage} %</DataStyled>
			</DataSection>
		</NotifyPosition>
	)
}

export default Statistics;
	


