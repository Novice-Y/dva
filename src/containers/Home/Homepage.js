import React, { Component } from "react";

class Homepage extends Component {
    render() {
        return (
            <div>
                this is homepage
                {this.props.children}
            </div>
        );
    }
}

export default Homepage;
