import React, { Component } from 'react';

class PostHeader extends Component {
  render() {
    return (
      <div className="postHeader">
        <div className="avatarContainer">
          <img
            src={this.props.postInfo.avatar}
            alt={this.props.postInfo.name}
          />
        </div>
        <div className="authorInfo">
          <h2>{this.props.postInfo.name}</h2>
          <p>{this.props.postInfo.date}</p>
        </div>
      </div>
    );
  }
}

export default PostHeader;
