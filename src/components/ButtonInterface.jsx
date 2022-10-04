import { Button } from "../App.styled";

const FeedbackOptions = ({ onLeaveFeedback }) => {
	return (
		<section>
			<Button type="button" onClick={(e) => onLeaveFeedback("good")}> Good </Button>
			<Button type="button" onClick={(e) => onLeaveFeedback("neutral")}>Neutral</Button>
			<Button type="button" onClick={(e) => onLeaveFeedback("bad")}>Bad</Button>
		</section>)
}

export default FeedbackOptions;