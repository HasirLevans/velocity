import React, { Component } from 'react'
import Rightbar from "../rightbar/Rightbar"
import Feed from "../feed/Feed"

class Profil extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className='profileContainer'>
            <div className='profileRightTop'>
                
                <div className='profileCover'>
                <img className='photoDeCouverture' src='/assets/person/1.jpg' alt=''/>
                <img className='photoDeProfil' src='/assets/person/1.jpg' alt=''/>
                </div>

                <div className='infoProfil'>
                    <h4 className='nomPrenom'>User Bike</h4>
                    <span className='description'>custumer 213</span>
                    <div className='Follows'>
                        <li className='Followers'>280 Followers</li>
                        <li className='Following'>280 Followings</li>
                    </div>
                </div>
            </div>
            <div className='profileRightBottom'>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
        )
    }

}

export default Profil;