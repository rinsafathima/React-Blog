import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{
            textAlign: 'center', 
            color: '#f0f8ff', 
            fontFamily: "'Poppins', 'Comic Sans MS', sans-serif", 
            fontSize: '1.5rem',
            padding: '2rem',
            animation: 'fadeIn 2s ease-out',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
              🎉 Welcome! 😊
            </div>
            <p style={{ margin: 0 }}>
              Let's build something amazing together! ✨
            </p>
            
            {/* Cute floating emoji animation */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', animation: 'float 3s ease-in-out infinite' }}>
              🌸
            </div>
            <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', animation: 'float 3s ease-in-out infinite' }}>
              🍀
            </div>
          </div>
          
      )}
    </>
  );
}

export default PostsList;