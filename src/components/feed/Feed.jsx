import React, { Component } from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Mypictures from "../mypictures/Mypictures"

export default function Feed(){

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}