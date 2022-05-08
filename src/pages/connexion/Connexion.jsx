import React from "react";
import { useContext, useRef } from "react";
import "./connexion.css";
import { loginCall } from "../../apiCalls";
import { ConnContext } from "../../context/ConnContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Connexion() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(ConnContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="connexion">
      <div className="connexionWrapper">
        <div className="connexionLeft">
          <span className="connexionDesc">Connectez-vous !</span>
        </div>
        <div className="connexionRight">
          <form className="connexionBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="connexionInput"
              ref={email}
            />
            <input
              placeholder="Mot de passe"
              type="password"
              required
              minLength="6"
              className="connexionInput"
              ref={password}
            />
            <button
              className="connexionButton"
              type="submit"
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Se connecter"
              )}
            </button>
            <span className="connexionForgot">Mot de passe oublié ?</span>
            <div className="connexionregister">
              <Link to="/register">
                <button className="connexionRegisterButton">
                  {isFetching ? (
                    <CircularProgress color="white" size="20px" />
                  ) : (
                    "S'inscrire"
                  )}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
