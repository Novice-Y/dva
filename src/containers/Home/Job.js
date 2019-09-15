import React, { Component } from "react";

class Job extends Component {
    render() {
        return (
            <div>
                this is job page
                {this.props.children}
            </div>
        );
    }
}

export default Job;
