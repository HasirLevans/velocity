import React from 'react'
import { useState, useEffect } from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios"
import Mypictures from "../mypictures/Mypictures"

export default function Feed({username}){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = username 
            ? await axios.get("posts/profile/" + username)
            : await axios.get("posts/timeline/627668dd8342fba80d6a533a");
          setPosts(
            res.data
          );
        };
        fetchPosts();
      }, [username]);

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
                
            </div>
        </div>
    )
}