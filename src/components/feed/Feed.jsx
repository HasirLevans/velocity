import React, { Component } from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from "./../post/Post"
import Mypictures from "../mypictures/Mypictures"

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            cFeed : "SPost",
        }   

    }
    
    ChangetoMP = () =>{
        this.setState({cFeed : "Mypic"})
    }


    render(){

        if(this.state.cFeed === "SPost"){
            return (
                <div className="feed">
                    <div className="feedWrapper">
                        <Share />
                        <Post />
                    </div>
                </div>
            )
        }

        if(this.state.cFeed === "Mypic"){
            return(
                <div className="feed">
                    <div className="feedWrapper">
                        <Mypictures />
                    </div>
                </div>
            )
        }
    }
}

export default Feed;