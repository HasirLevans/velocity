import React from 'react'
import "./post.css"
import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons"

export default function Post() {
    
    return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postPP" src="/assets/person/1.jpg" alt="" />
                        <span className="postUsername"> User1 </span>
                        <span className="postDate">date</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"> moi</span>
                    <img className="postImg" src="/assets/post/10.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBotLeft">
                        <Favorite htmlColor="silver" className="likeIcon"/>
                        <span className="postLikeCounter">9 personnes ont aimé</span>
                    </div>
                    <div className="postBotRight">
                        <span className="postCommentText">10 commentaires</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
