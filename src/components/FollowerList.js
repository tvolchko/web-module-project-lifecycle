import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component{


    render() {
        return(
            <div>
                {this.props.follows.map(follow =>{
                    return(
                        <Follower follower={follow}/>
                    )
                })}
            </div>
        )
    }
}
export default FollowerList