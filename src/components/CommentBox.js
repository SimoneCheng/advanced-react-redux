import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={(e) => this.handleChange(e)} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments} className="fetch-comments">Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);