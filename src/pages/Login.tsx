import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { AlertType, UserFormDataType, UserType }from "../type"
import { useNavigate } from "react-router-dom"
import { login,getMe } from '../lib/apiWrapper';

type LoginProps = {
    flashMessage: (newMessage:string|null,newCategory:AlertType|null) => void
    logUserIn: (user:UserType) => void
}

export function Login({flashMessage,logUserIn}: LoginProps) {

    const [userFormData,setUserFormData] = useState<Partial<UserFormDataType>>({username:"",password:""})

    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        let response = await login(userFormData.username!,userFormData.password!)
        if (response.error){
            flashMessage(response.error,'danger')
        } else {
            localStorage.setItem('token',response.data?.token as string)
            localStorage.setItem('tokenExp', response.data?.tokenExpiration as string)
            let userResponse = await getMe(response.data?.token as string)
            logUserIn(userResponse.data!)
            flashMessage("You are logged in", "success")
            navigate("/store")
        }
    }

    return (
        <Card>
            <Card.Body style={{ backgroundColor: 'grey', color: 'white'}}>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username"type="username" placeholder="Enter Username" value = {userFormData.username} onChange={handleInputChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Control  name="password" type="password" placeholder="Password" value = {userFormData.password} onChange={handleInputChange} />
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="This You ?" />
                    </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

