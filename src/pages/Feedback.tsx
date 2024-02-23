import  Card  from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";


export default function Feedback() {

    const [data,setData] = useState({
        name:"",
        email:"",
        feedback:""
    })

    const handleChange = (e) => {

        const {name, value} = e.target
        console.log(value)
        setData({...data,[name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <>
        <Card className = "feedback">
            <Card.Body>
                <h1>FeedBack Form</h1>
                <Form className = "feedback" onSubmit={handleSubmit}>
                    <div className ="mb-3">
                        <input placeholder="Username" name = "name" onChange={(e) => handleChange(e)} />
                    </div >
                    <div className ="mb-3">
                        <input placeholder="Email" name = "email" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className ="mb-3">
                        <input placeholder="Feedback" name = "feedback" onChange={(e) => handleChange(e)}/>
                    </div>
                    <Button className="btn btn-primary" onClick = {handleSubmit}>Submit Feedback</Button>
                </Form>
            </Card.Body>
        </Card>
        {/* <Card>
            <Card.Body>
            
            </Card.Body>
        </Card> */}
        </>
    )
}