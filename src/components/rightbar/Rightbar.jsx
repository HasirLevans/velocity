import React from 'react'
import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gateau.png" alt="" />
                    <span className="birthdayText">
                        <b>Momo</b> et <b>3 autres</b> amis ont leurs anniversaires aujourd'hui !
                    </span>
                </div>
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