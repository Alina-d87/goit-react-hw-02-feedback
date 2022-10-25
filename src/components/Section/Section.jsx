import { TitleText } from "./Section.styled";

const Section = ({ title, children }) => {
	return (
		<div>
			<TitleText>{title}</TitleText>
			{children}
		</div>
	)
 }

export default Section;