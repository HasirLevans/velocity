import  React, {Component} from 'react';
import "./Homepage.css"
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";


class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            cFeed : "SPost"
        }
    }

    GoToP = () =>{
        this.props.AllerProfile();
    }

    GoToOut = () =>{
        this.props.AllerConn();
    }
    

    render() {
        return(
            <div>
                <Topbar goToP = {this.GoToP} goToOut = {this.GoToOut}/>
                <div className="homeContainer">
                    <Leftbar/>
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        )
    }
}

export default Homepage;


