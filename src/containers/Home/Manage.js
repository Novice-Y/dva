import React, { Component } from "react";

class Manage extends Component {
    render() {
        return (
            <div>
                this is manage page
                {this.props.children}
            </div>
        );
    }
}

export default Manage;
