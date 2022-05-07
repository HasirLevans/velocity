import  React, {Component} from 'react';
import "./Homepage.css"
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";


export default function Homepage() {
    
    return(
        <>
            <Topbar />
            <div className="homeContainer">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}


