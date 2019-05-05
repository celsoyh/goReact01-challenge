import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './_partials/header';
import Post from './components/Post';
import './styles/main.scss';

class App extends Component {
  state = {
    posts: [
      {
        avatar: '/images/prof1.jpg',
        name: 'User Number One',
        date: 'Há x dias atrás',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        avatar: '/images/prof2.png',
        name: 'User Number Two',
        date: 'Há x dias atrás',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        avatar: '/images/prof3.jpeg',
        name: 'User Three Number',
        date: 'Há x dias atrás',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts.map(post => {
            return <Post postInfo={post} />;
          })}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
