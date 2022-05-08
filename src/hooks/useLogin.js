import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function useLogin() {

const { onSuccess } = useContext(UserContext)
        
const [loginData, setLoginData] = useState({
    email: "",
    password: ""
})

const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }; // 

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData)
    if (loginData.email === "julianm@gmail.com" && loginData.password === "password123")
    {
        alert("Exito")  
        onSuccess()
    }
    else if (loginData.email.length === 0 || loginData.password.length === 0 ){ alert("Debés completar todos los campos :(") }
    else { 
        alert("Los datos ingresados son incorrectos :(")  
    }
};//Handler para el submit.

function forgot (){
    alert("Para recuperar tu contraseña, envianos tus datos a: julianm@gmail.com.")  
}//Alerta para el botón forget

return { forgot, handleSubmit, loginData, setLoginData, handleChange };
}