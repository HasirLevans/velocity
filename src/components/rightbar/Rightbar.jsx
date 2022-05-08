import React from 'react'
import "./rightbar.css"

export default function Rightbar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <img className="rightbarAd" src="/assets/ad/3.jpg" alt="" />
                <h4 className="rightbarTitle">Amis en Ligne</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarPPContainer">
                            <img className="rightbarPPImg" src="/assets/person/3.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Kit Kat</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarPPContainer">
                            <img className="rightbarPPImg" src="/assets/person/3.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Kit Kat</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarPPContainer">
                            <img className="rightbarPPImg" src="/assets/person/3.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Kit Kat</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}