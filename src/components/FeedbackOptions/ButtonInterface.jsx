import { Button, PositionButton } from "./Button.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<PositionButton>
			{options.map(option => {
				return (
					<Button
						type="button"
						key={option}
						onClick={() => onLeaveFeedback(option.toLowerCase())}>
						{option}
					</Button>
				);
			})}
		</PositionButton>
	)
}

export default FeedbackOptions;