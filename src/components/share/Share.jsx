import React from 'react'
import "./share.css"
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons"
import axios from "axios"
import {useState, useRef} from "react"

export default function Share() {
    
    //const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file,setFile] = useState(null);


    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img className="sharePP" src={PF+"/person/baseavatar.jpg"} alt="" />
                    <input placeholder="I'm the best !" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom" >
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText"> Photo </span>
                            <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpg,.jpeg" onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText"> Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                            <span className="shareOptionText"> Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </div>
            </div>
        </div>
    )
}
