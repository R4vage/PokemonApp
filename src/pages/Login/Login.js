import "./Login.css"
import React, {} from "react";
import { useLogin } from "../../hooks/useLogin"
export default function Login (){
    const {forgot, handleSubmit, loginData, handleChange} = useLogin();




    return(
    <>
        <div className="Login">
            <div className="login__Container">
                <h1>Login</h1>
                <form className="login__form form" onSubmit={handleSubmit}>
                    <h3 className="login__subtitle">Por favor, rellene los campos con sus credenciales únicas</h3>
                    <label className="login__input input">
                        <h3>Email:</h3>
                        <input type="text" name="email" className="loginFormularioInput" placeholder="Ingrese su e-mail" value={loginData.email} onChange={handleChange}/>
                    </label>

                    <label className="login__input input">
                        <h3>Contraseña:</h3>
                        <input type="password" name="password" className="loginFormularioInput" placeholder="Ingrese su contraseña" value={loginData.password}  onChange={handleChange}/>
                    </label>


                    <h3 className="login__subtitle--forgot" onClick={forgot}>¿Te olvidaste la contraseña? Clickea aquí</h3>

                    <input type="submit" value="Login" className="login__submit submit" onClick={console.log()}/>

                </form>
            </div>
        </div>
    </>
    )
}