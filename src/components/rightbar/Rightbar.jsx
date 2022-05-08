import React from "react";
import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ConnContext } from "../../context/ConnContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(ConnContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <img className="rightbarAd" src="/assets/ad/3.jpg" alt="" />
      </div>
    </div>
  );
}
