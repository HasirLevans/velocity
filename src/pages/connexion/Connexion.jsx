import React, {Component} from 'react';
import "./connexion.css";

class Connexion extends Component {
    
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div className="connexion">
                <div className="coWrapper">
                    <div className="coTop">
                        <span className="connecter"> Veuillez vous connectez !</span>
                    </div>
                    <div className="coMid">
                        <div className="login">
                            <label for="mail">Login</label>
                            <input id="mail" name="mail" type="email" placeholder="Username ou email" />
                        </div>
                        <div className="password">
                            <label for="password">Mot de passe</label>
                            <input id="password" name="password" type="password" placeholder="Mot de passe" />
                        </div>
                    </div>
                    <div className="coMBot">
                        <span className="mdpforgot"> Mot de passe oublié ?</span>
                        <span className="register1" onClick = {() => this.props.AllerRegister()}> Pas de compte ? Inscrivez-vous</span>
                    </div>
                    
                    <div className="coBott">
                        <div className="buttons">
                            <button className="submit-btn" type="submit" id="connect" onClick = {() => this.props.AllerHome()}>Connexion</button>
                            <button className='undo-btn'>Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connexion;