import  React from 'react';
import "./topbar.css";
import { Map, Search, Person, Chat, Notifications, Cancel } from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext} from "react"
import { ConnContext } from "../../context/ConnContext";
import { useReducer } from "react";


export default function Topbar() {
  let { user } = useContext(ConnContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
  };
  //const [state, dispatch] = useReducer(ConnReducer, INITIAL_STATE);

  const deco = () => {
    console.log(user)
    user.dispatch();
    console.log(user)
    //navigate("/connexion");
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Velocity</span>
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
            <Chat />
          </div>
          <div className="topbarIconItem">
            <Notifications />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/baseavatar.png"
            }
            alt=""
            className="profilePicture"
          />
        </Link>
        <div className="logoutIcon">
            <Cancel onClick={deco}/>
        </div>
      </div>
    </div>
  );
}
 

