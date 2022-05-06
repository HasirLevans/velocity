import React, {Component} from 'react';
import "./register.css";

class Register extends Component {
    
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div className="register">
                <div className="reWrapper">
                    <div className="reTop">
                        <span className="inscrire"> Veuillez vous inscrire !</span>
                    </div>
                    <div className="reMid">
                        <div className="rusername">
                        <label for="rusername"> Username</label>
                            <input id="rusername" name="rusername" type="rusername" placeholder="@Username"/>
                        </div>
                        <div className="rlogin">
                            <label for="rmail">Login</label>
                            <input id="rmail" name="rmail" type="email" placeholder="name@email.com" />
                        </div>
                        <div className="rpassword">
                            <label for="rpassword">Mot de passe</label>
                            <input id="rpassword" name="rpassword" type="password" placeholder="Mot de passe" />
                        </div>
                        <div className="rpassword">
                            <label for="rpassword">Mot de passe</label>
                            <input id="rpassword" name="rpassword" type="password" placeholder="Confirmer votre mot de passe" />
                        </div>
                    </div>
                    <div className="reBott">
                        <div className="rbuttons">
                            <button className="rsubmit-btn" type="submit" id="rconnect" onClick = {() => this.props.AllerHome()}>Inscription</button>
                            <button className='rundo-btn' type="submit" onClick = {() => this.props.AllerConn()}>Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;