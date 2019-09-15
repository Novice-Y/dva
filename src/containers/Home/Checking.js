import React, { Component } from "react";

class Checking extends Component {
    render() {
        return (
            <div>
                this is Checking page
                {this.props.children}
            </div>
        );
    }
}

export default Checking;
