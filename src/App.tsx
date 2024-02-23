import { Routes, Route}  from "react-router-dom"
import  Container  from "react-bootstrap/Container"
import VideoBackground from "./pages/VideoBackground"
import "../VideoBackground.css";
import { Store } from "./pages/Store"
import { Login }  from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { Registration } from "./pages/Registration";
import { ShoppingCartProvider } from "./context/CartContxt"
import "../styles.css"
import { useEffect } from "react";
import AlertMessage from "./components/AlertMessage";
import { useState } from "react";
import { AlertType, UserType } from "./type";
import Feedback from "./pages/Feedback";



function App() {
    useEffect(() => {
    document.body.style.backgroundColor = "#696969";
    document.body.style.color = "white";
  },); 

  const [IsLoggedIn,setIsLoggedIn] = useState(false)
  const [LoggedInUser, setLoggedInUser] = useState<UserType|null>(null);

  const [message,setMessage] = useState<string|null>(null)
  const [category,setCategory] = useState<AlertType|null>(null)

  const flashMessage = (newMessage:string|null,newCategory:AlertType|null) => {
    setMessage(newMessage);
    setCategory(newCategory);
  }

  const logUserIn = (user:UserType) => {
    setIsLoggedIn(true);
    setLoggedInUser(user)
  }



  return (
    <ShoppingCartProvider>
      <Navbar />
      {message && <AlertMessage message={message} category={category} flashMessage={flashMessage}/>}
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<VideoBackground />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login flashMessage={flashMessage} logUserIn={logUserIn}/>} />
          <Route path="/registration" element={<Registration flashMessage={flashMessage} />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
