import React from "react";

/** @namespace React.Component */
export default class Result extends React.Component {
    render() {
        return (
            <div>
                <p>Demo: </p>

                <p data-testid="result">
                    {this.props.content}
                </p>
            </div>
        );
    }
}