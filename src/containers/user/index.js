import React, { Component } from "react";

class User extends Component {
    render() {
        return (
            <div>
                <h3>用户界面</h3>
                {this.props.children}
            </div>
        );
    }
}

export default User;
