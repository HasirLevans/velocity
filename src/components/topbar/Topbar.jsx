import  React from 'react';
import "./topbar.css";
import { Map, Search, Person, Chat, Notifications, Cancel } from "@material-ui/icons";
import {Link} from "react-router-dom"


export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;




  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="topbarLogo">Velocity</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="linkItem">
            <Map />
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        <Link to={"/profile"} style={{textDecoration:"none"}}>
          <img src={ PF+"/person/baseavatar.jpg"} alt="" className="profilePicture"  />
        </Link>
        <div className="logoutIcon">
          <Link to="/connexion">
            <Cancel />
          </Link>
        </div>
      </div>
    </div>
  );

}
 

