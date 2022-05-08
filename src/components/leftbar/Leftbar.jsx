import React, { Component } from 'react'
import "./leftbar.css"
import { RssFeed, InsertPhoto, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, Event, DirectionsBike } from "@material-ui/icons"

class Leftbar extends Component  {

    render(){
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
                            <HelpOutline className="leftbarIcon" />
                            <span className="leftbarListItemText">Questions</span>
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
                    {/* <button className="leftbarButton">Show More</button> */}
                    <hr className="leftbarHr"/>
                    <ul className="leftbarFriendList">
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                            <span className="leftbarFriendName">Ami1</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/3.jpg" alt="" />
                            <span className="leftbarFriendName">Ami2</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/4.jpg" alt="" />
                            <span className="leftbarFriendName">Ami3</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/4.jpg" alt="" />
                            <span className="leftbarFriendName">Ami3</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/4.jpg" alt="" />
                            <span className="leftbarFriendName">Ami3</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                            <span className="leftbarFriendName">Ami1</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                            <span className="leftbarFriendName">Ami1</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                            <span className="leftbarFriendName">Ami1</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                            <span className="leftbarFriendName">Ami1</span>
                        </li>
                        <li className="leftbarFriend">
                            <img className="leftbarFriendImg" src="/assets/person/2.jpg" alt="" />
                            <span className="leftbarFriendName">Ami1</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Leftbar;