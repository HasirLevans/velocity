import React from "react";
import "./post.css";
import { Favorite } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { ConnContext } from "../../context/ConnContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(ConnContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
                <img
                  className="postPP"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/baseavatar.jpg"
                  }
                  alt=""
                />
              </Link>
              <span className="postUsername"> {user.username} </span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText"> {post?.desc}</span>
            <img className="postImg" src={PF + post.img} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBotLeft">
              <Favorite
                htmlColor="silver"
                className="likeIcon"
                onClick={likeHandler}
              />
              <span className="postLikeCounter">
                {like} personnes ont aimé !
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
