import  Card  from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import  Form  from "react-bootstrap/Form"
import { useState } from "react"
import { AlertType, UserFormDataType }from "../type"
import { useNavigate } from "react-router-dom"
import { register } from "../lib/apiWrapper"


type SignUpProps = {
    flashMessage: (newMessage:string|null, newCategory:AlertType|null) => void
}

export function Registration({ flashMessage }: SignUpProps) {

    const navigate = useNavigate()

    const [userFormData, setUserFormData] = useState<UserFormDataType>({
        firstName:"",
        email:"",
        lastName:"",
        password:"",
        username:"",        
        confirmPassword:""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        let response = await register(userFormData)
        if (response.error){
            flashMessage(response.error,'danger')
        } else {
            let newUser = response.data
            flashMessage(`Congrats ${newUser?.firstName} ${newUser?.lastName} you have signed up with the username ${newUser?.username}`,'light')
            navigate("/login")
        }
    }

    const disableSubmit =  userFormData.password.length < 5 || userFormData.password !== userFormData.confirmPassword

    return (
        <>
        <div>
        <h1 className ="text-center"> Register</h1>
        <Card>
            <Card.Body style={{ backgroundColor: 'grey', color: 'white' }}>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name = "firstName" placeholder='Enter First Name' value ={userFormData.firstName} onChange={handleInputChange}></Form.Control>
                    
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name = "lastName" placeholder='Enter Last Name' value ={userFormData.lastName} onChange={handleInputChange}></Form.Control>
                    
                    <Form.Label>Email</Form.Label>
                    <Form.Control name = "email" type="email" placeholder='Enter Email' value ={userFormData.email} onChange={handleInputChange}></Form.Control>
                    
                    <Form.Label>Username</Form.Label>
                    <Form.Control name = "username" placeholder='Enter Username' value ={userFormData.username} onChange={handleInputChange}></Form.Control>
                    
                    <Form.Label>Password</Form.Label>
                    <Form.Control name = "password" type="password" placeholder='Enter password' value ={userFormData.password} onChange={handleInputChange}></Form.Control>

                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name = "confirmPassword" type = "password" placeholder='Re-Enter Password' value ={userFormData.confirmPassword} onChange={handleInputChange}></Form.Control>
                    {disableSubmit && <Form.Text className="text-dark">Your Password must be at Least 6 characters and match</Form.Text>}

                    <Button type = "submit" variant="outline-primary" className="w-100 mt-3" disabled = {disableSubmit}>Sign up</Button>
                </Form>
            </Card.Body>
        </Card>
        </div>
        </>
    )
}
