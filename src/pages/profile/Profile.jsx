import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ConnContext } from "../../context/ConnContext";
import { Add, Remove } from "@material-ui/icons";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const { user: currentUser, dispatch } = useContext(ConnContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  
  /*useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id));
  })*/

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="photoDeCouverture"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/wallpaper.jpg"
                }
                alt=""
              />
              <img
                className="photoDeProfil"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/baseavatar.jpg"
                }
                alt=""
              />
            </div>
            <div className="infoProfil">
              <h4 className="nomPrenom">{user.username}</h4>
              <span className="description">{user.desc}</span>
            </div>
            <div className="fbutton">
              {user.username !== currentUser.username && (
                <button className="followButton" onClick={handleClick}>
                  {followed ? "Unfollow" : "Follow"}
                  {followed ? <Remove /> : <Add />}
                </button>
              )}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}