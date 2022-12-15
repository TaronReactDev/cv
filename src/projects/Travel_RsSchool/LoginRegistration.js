import React, {useState} from "react";
import FbIcon from "./img/social/Facebook.svg";
import GoogleIcon from "./img/social/Google.svg";


export default function LoginRegistration({handleClick}) {

    const [loginOrRegistration, setLoginOrRegistration] = useState(true)

    const handleRegistration = ()=>{
        setLoginOrRegistration(!loginOrRegistration)

    }

    return (

        <div className="containerLoginRegistr" >
            <div className="containerLoginRegistrBackground" onClick={handleClick}></div>

            {loginOrRegistration ?
                <section className="loginContainer">

                    <h2>Log in to your account</h2>
                    <button className="fbBtn"> <img src={`${FbIcon}`}/>Sign In with Facebook </button>
                    <button className="googleBtn"><img src={`${GoogleIcon}`}/>Sign In with Google</button>

                    <ul>
                        <li>
                            <div className="line"></div>
                        </li>
                        <li><span>or</span></li>
                        <li>
                            <div className="line"></div>
                        </li>
                    </ul>


                    <form className="inputForm">
                        <lable for="email"><p>Email</p><input type="email" id="email"/></lable>
                        <lable for="password"><p>Password</p><input type="password" id="password"/></lable>
                    </form>


                    <button className="signBtn">Sign In</button>

                    <span className="forgotPass">Forgot Your Password? </span>
                    <div className="line full"></div>
                    <span className="accountregistrSpan">Don’t have an account? <span
                        className="registrLink" onClick={handleRegistration}>Register</span> </span>

                </section> :

                <section className="loginContainer">
                    <h2>Create account</h2>

                    <form className="inputForm">
                        <lable htmlFor="email"><p>Email</p><input type="email" id="email"/></lable>
                        <lable htmlFor="password"><p>Password</p><input type="password" id="password"/></lable>
                    </form>

                    <button className="signBtn">Sign Up</button>
                    <div className="line full"></div>
                    <span className="accountregistrSpan">Already have an account? <span  className="registrLink" onClick={handleRegistration}>Log in</span> </span>


                </section>}
        </div>
    )
}