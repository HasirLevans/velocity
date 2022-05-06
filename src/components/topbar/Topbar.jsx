import  React, {Component} from 'react';
import "./topbar.css";
import { Map, Search, Person, Chat, Notifications, Cancel } from "@material-ui/icons";


class Topbar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          {/* <img src="/assets/Logo.png" alt="" className="topbarLogo" onClick = {() => this.props.goToH()}/>  */}
          <span className="topbarLogo" onClick = {() => this.props.goToH()}>Velocity</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <div className="linkItem">
              <Map />
            </div>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">5</span>
            </div>
          </div>
          <img src="/assets/person/1.jpg" alt="" className="profilePicture" onClick = {() => this.props.goToP()} />
          <div className="logoutIcon">
            <Cancel onClick = {() => this.props.goToOut()}/>
          </div>
        </div>
      </div>
    );

  }
}
export default Topbar
 

