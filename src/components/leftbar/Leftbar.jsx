import React from 'react'
import "./leftbar.css"
import { InsertPhoto, Group, Bookmark, Event, DirectionsBike } from "@material-ui/icons"

export default function Leftbar(){

    return (
        <div className="leftbar">
            <div className="letfbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <InsertPhoto className="leftbarIcon" />
                        <span className="leftbarListItemText">My Pictures</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon" />
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarIcon" />
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <DirectionsBike className="leftbarIcon" />
                        <span className="leftbarListItemText">NFS</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarIcon" />
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                </ul>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="leftbarFriendName">Ami1</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}