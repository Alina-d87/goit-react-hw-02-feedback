import countTotalFeedback from "./Total";

const countPositiveFeedbackPercentage = (state) => {
	Math.floor((100 * state.good) / countTotalFeedback);
}

export default countPositiveFeedbackPercentage;