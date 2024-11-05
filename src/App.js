import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './components/HomePage';
import PostDetails from './components/PostDetails';
import { fetchPosts } from './store/postsSlice';
import { fetchUsers } from './store/usersSlice';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
