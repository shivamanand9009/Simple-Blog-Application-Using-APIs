import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../store/postsSlice';
import { fetchUsers } from '../store/usersSlice';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getUserById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  if (loading) return <p>Loading posts...</p>;

  return (
    <>
    <h1 className="page-title">Posts</h1>
    <div className="home-page">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.body}</p>
          <p className="post-author">Author: {getUserById(post.userId)}</p>
          <Link to={`/posts/${post.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default HomePage;
