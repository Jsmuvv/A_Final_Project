import {Container,Nav,Navbar as NavbarBs,Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/CartContxt"




export function Navbar(){

    const {openCart,cartAmount} = useShoppingCart()

    return (
        <NavbarBs sticky="top" className = "bg-dark shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to= {"/"} as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to= "/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to= "/login" as={NavLink}>
                        Login
                    </Nav.Link>
                    <Nav.Link to= "/registration" as={NavLink}>
                        Register
                    </Nav.Link>
                    <Nav.Link to= "/feedback" as={NavLink}>
                        Survey!
                    </Nav.Link>
                </Nav>
                {cartAmount > 0 && (<Button 
                onClick={ openCart }
                style = {{ width:"3rem", height:"3rem", position: "relative"}} 
                variant = "outline-light" 
                className = "rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="cart">
                        <path d="M989.1 262.6c-.3-1-.7-1.9-1.1-2.9-.1-.2-.2-.5-.3-.7-.3-.7-.6-1.3-1-1.9-.2-.4-.5-.8-.7-1.2-.3-.4-.5-.8-.8-1.2-.3-.4-.6-.8-.9-1.1-.6-.8-1.3-1.5-1.9-2.2 0 0 0-.1-.1-.1-5.3-5.8-12.8-9.5-21.5-9.5H291.1c-5.5-16.6-10.9-33.2-16.4-49.8-5.9-17.8-11.4-35.7-17.6-53.4-.1-.3-.2-.5-.3-.8-4.2-12.6-15.3-22-28.9-22H63.2c-15.7 0-30.7 13.8-30 30 .7 16.3 13.2 30 30 30h143c2.4 7 4.8 14.6 7.2 21.8 9 27.5 18.1 55 27.1 82.4l35.1 106.5c4.7 14.4 9.5 28.8 14.2 43.2 13.8 41.8 27.5 83.6 41.3 125.4 3 9.2 6.1 18.4 9.1 27.6 0 .1-.1.1-.1.2-14 24.8-27.9 49.7-41.9 74.5-2.3 4.2-4.7 8.2-7 12.3-11.1 19.7 2.9 45 25.9 45H775c21.1 0 42.3.6 63.5.2.3 0 .6.1.9.1 15.7 0 30.7-13.9 30-30.1-.7-16.3-13.2-30.1-30-30.1H368.6c7.3-12.9 14.5-25.8 21.8-38.7 0-.1.1-.2.1-.2h-.1H782c18.9 0 37.8 1 56.7 0 .3 0 .5.1.8.1 14.3 0 24.1-9.5 28.9-22 13.7-35.3 27.3-70.7 41-106 21.8-56.3 43.6-112.7 65.4-169-7.3 18.8-14.5 37.6-21.8 56.4-14.5 37.6-29 75.1-43.6 112.7l-34.2 88.5c11.4-29.5 23-59 34.4-88.6 21.8-56.3 43.5-112.7 65.5-169 4-11.1 12.8-33.4 12.8-33.4s1.3-3.7 2-5.5c.2-.5.3-1 .5-1.5 1.1-4.7.4-10.8-1.3-16zm-240 109.3-17.7 17.7-77.2 77.2c-16.2 16.1-32.3 32.3-48.5 48.5-7.6 7.7-20.6 7.6-28.3 0l-8.5-8.5-59.2-59.2c-7.9-7.9-7.3-20.3 0-28.3s20.9-7.4 28.3 0l8.5 8.5c15 15 30.1 29.9 45.1 45l3.5-3.5 77.2-77.2 48.5-48.5c7.9-7.9 20.3-7.3 28.3 0 8 7.4 7.4 20.9 0 28.3zm57.1 508.4c-20.4 24.7-56.4 34.3-86.3 23-30.4-11.5-50.8-40.1-51.4-72.6 0 0-.2 0-.2-.1 0-.2-.2-.5-.2-.7v-.1c0-.2.2-.5.2-.7.7-36 26.6-68.7 62.5-75.7 32.3-6.3 65.5 8 82.7 36.1 17.2 28.5 13.7 65.3-7.3 90.8zm-344.8 0c-20.4 24.7-56.4 34.3-86.3 23-30.4-11.5-50.6-40.1-51.2-72.6 0-.3.1-.5.1-.8v-.1c0-.2-.2-.5-.1-.7.7-36 26.4-68.7 62.3-75.7 32.3-6.3 65.4 8 82.6 36.1 17.3 28.5 13.7 65.3-7.4 90.8z">
                        </path>
                    </svg>
                    <div className = "rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                    style = {{
                        color:"white", 
                        width: "1.5rem", 
                        height: "1.5rem",
                        position:"absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%,25%)"
                            }}>
                                {cartAmount}
                            </div>

                    </Button>)}
            </Container>
        </NavbarBs>
    )
}