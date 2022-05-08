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
                    <h3 className="login__subtitle">Please, fill the form with your credentials</h3>
                    <label className="login__input input">
                        <input type="text" name="email" className="loginFormularioInput" placeholder="E-mail" value={loginData.email} onChange={handleChange}/>
                    </label>
                    <br/>
                    <label className="login__input input">
                        <input type="password" name="password" className="loginFormularioInput" placeholder="Password" value={loginData.password}  onChange={handleChange}/>
                    </label>


                    <h3 className="login__subtitle--forgot">Did you forgot your password?<span onClick={forgot}> Click here!</span></h3>

                    <input type="submit" value="Login" className="login__submit submit" onClick={console.log()}/>

                </form>
            </div>
        </div>
    </>
    )
}