import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetails.css';

const PostDetails = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  const post = posts.find((post) => post.id === parseInt(postId));
  const user = users.find((user) => user.id === post?.userId);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (post) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => setComments(response.data))
        .catch((error) => console.error('Error fetching comments:', error));
    }
  }, [post, postId]);

  if (!post || !user) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>
      <div className="author-details">
        <h2>Author: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Company: {user.company?.name}</p>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <h4 className="comment-title">{comment.name}</h4>
              <p className="comment-body">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetails;
