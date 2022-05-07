import React, { Component } from 'react'
import Rightbar from "../rightbar/Rightbar"
import Feed from "../feed/Feed"
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Profil(){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?username=Jean`);
          setUser(
            res.data
          );
        };
        fetchUser();
    }, []);


    return(
    <div className='profileContainer'>
        <div className='profileRightTop'>
            
            <div className='profileCover'>
            <img className='photoDeCouverture' src='/assets/person/1.jpg' alt=''/>
            <img className='photoDeProfil' src='/assets/person/1.jpg' alt=''/>
            </div>

            <div className='infoProfil'>
                <h4 className='nomPrenom'>{user.username}</h4>
                <span className='description'>{user.desc}</span>
                <div className='Follows'>
                    <li className='Followers'>280 Followers</li>
                    <li className='Following'>280 Followings</li>
                </div>
            </div>
        </div>
        <div className='profileRightBottom'>
            <Feed username="Jean"/>
            <Rightbar/>
        </div>
    </div>
    )


}