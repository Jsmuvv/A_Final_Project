import Alert from "react-bootstrap/Alert"
import { AlertType } from "../type"

type AlertMessageProps = {
    message:string|null,
    category: AlertType|null
    flashMessage: (newMessage: string|null, newCategory:AlertType|null) => void
}

export default function AlertMessage({message,category, flashMessage}: AlertMessageProps) {
    return (
        <Alert variant={category ?? "primary"} dismissible onClose={() => {flashMessage(null,null)}}>{message}</Alert>
    )
}