import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  fetch('http://localhost:8080/posts');
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
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
         <div className={classes.welcomeMessage}>
         <div className={`${classes.welcomeTitle} ${classes.fadeInRotate}`}>🎉 Welcome! 😊</div>
         <p className={`${classes.welcomeText} ${classes.fadeInRotate}`}>
           Let's build something amazing together! ✨
         </p>

         <img src="https://cdn.pixabay.com/photo/2024/04/01/10/31/ai-generated-8668580_1280.png " alt="Vector" className={classes.vectorImage} />

        </div>
    
       
          
      )}
    </>
  );
}

export default PostsList;