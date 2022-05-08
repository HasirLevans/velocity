import  React, {Component} from 'react';
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar"
import Profil from "../../components/profil/Profil"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users/${user._id}`);
        setUser(
          res.data
        );
      };
      fetchUser();
  }, [username]);

  return(
    <>
    <Topbar />
    
    <div className="profile">
      <Leftbar />
      <div className='profileContainer'>
        <div className='profileRightTop'>
            
            <div className='profileCover'>
            <img className='photoDeCouverture' src={user.coverPicture || PF+"person/wallpaper.jpg"} alt=''/>
            <img className='photoDeProfil' src={user.profilePicture || PF+"person/baseavatar.jpg"} alt=''/>
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
            <Feed username={username}/>
            <Rightbar user={user}/>
        </div>
    </div>
    </div>
    </>
  )
}