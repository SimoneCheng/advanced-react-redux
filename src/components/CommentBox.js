import React, { Component } from "react";

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // TODO - call an action creator
        // and save the comment

        this.setState({ comment: "" });
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h4>Add a Comment</h4>
                <textarea onChange={(e) => this.handleChange(e)} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;