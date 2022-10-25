import { Notify, NotifyPosition } from "./Message.styled";

const Notification = ({message}) => {
	return (
		<NotifyPosition>
			<Notify>{message}</Notify>  
		</NotifyPosition>
	)
}

export default Notification;