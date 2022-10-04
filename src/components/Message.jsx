import { Notify } from "../App.styled";

const Notification = ({message}) => {
	return (
		<div>
			<Notify>{message}</Notify>  
		</div>
	)
}

export default Notification;