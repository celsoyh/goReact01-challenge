import React, { Component } from 'react';
import PostHeader from './PostHeader';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <PostHeader postInfo={this.props.postInfo} />
        <div className="post--content">{this.props.postInfo.content}</div>
      </div>
    );
  }
}

export default Post;
