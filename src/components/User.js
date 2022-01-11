import React from "react";

class User extends React.Component {


    render(){
        if(!this.props.user){
            return(
                <div>
                    <h1>Loading!</h1>
                </div>
            )
        }
        return(
            <div>
                <img src={this.props.user.avatar_url}/>
                <p>{this.props.user.name}</p>
                <p>Total Repos: {this.props.user.public_repos}</p>
                <p>Followers: {this.props.user.followers}</p>
            </div>
        )
    }
}
export default User