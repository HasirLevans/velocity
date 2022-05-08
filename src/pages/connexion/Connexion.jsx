import React, {Component} from 'react';
import "./connexion.css";
import { useContext, useRef } from "react";
import {loginCall} from "../../apiCalls"
import {ConnContext} from "../../context/ConnContext"
import {Link} from "react-router-dom"

export default function Connexion(){
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(ConnContext);
    const handleClick = (e) =>{
        e.preventDefault();
       loginCall({email:email.current.value,password:password.current.value}, dispatch);
    }



    return(
        <div className="connexion">
            <div className="coWrapper">
                <div className="coTop">
                    <span className="connecter"> Veuillez vous connectez !</span>
                </div>
                <form className="connexionbox" onSubmit={handleClick}>
                    <div className="coMid">
                        <div className="login">
                            <label for="mail">Login</label>
                            <input id="mail" name="mail" type="email" required placeholder="Email" ref={email}/>
                        </div>
                        <div className="password">
                            <label for="password">Mot de passe</label>
                            <input id="password" name="password" type="password" required placeholder="Mot de passe" ref={password}/>
                        </div>
                    </div>
                    <div className="coMBot">
                        <span className="mdpforgot"> Mot de passe oublié ?</span>
                        <Link to="/register" style={{textDecoration:"none"}}>
                            <span className="register1" > Pas de compte ? Inscrivez-vous</span>
                        </Link>
                    </div>
                    
                    <div className="coBott">
                        <div className="buttons">
                            <Link to="/">
                                <button className="submit-btn" type="submit" id="connect" >{isFetching ? "loading" : "Connexion"}</button>
                            </Link>
                            <button className='undo-btn'>Annuler</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}