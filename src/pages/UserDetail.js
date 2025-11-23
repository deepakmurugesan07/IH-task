import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usersData from '../data/Users.json';
import postsData from '../data/Posts.json';
import PostCard from '../components/PostCard';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    setTimeout(() => {
      const u = usersData.find(u => u.id === parseInt(id));
      setUser(u);
      const userPosts = postsData.filter(p => p.userId === parseInt(id));
      setPosts(userPosts);
      setLoading(false);
    }, 500);
  }, [id]);

  const addPost = () => {
    if(!newPostTitle || !newPostBody) return;
    const newPost = { id: Date.now(), userId: user.id, title: newPostTitle, body: newPostBody };
    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostBody('');
  };

  const editPost = updatedPost => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  const deletePost = id => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  if(loading) return <p className="loading-text">Loading user details...</p>;
  if(!user) return <p className="loading-text">User not found.</p>;

  const displayedPosts = posts.slice(0, page * perPage);

  return (
    <div className="user-detail">
      {/* User Info */}
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>

      {/* Add New Post */}
      <div className="add-post">
        <h3>Add New Post</h3>
        <input 
          className="post-input"
          placeholder="Title" 
          value={newPostTitle} 
          onChange={e => setNewPostTitle(e.target.value)} 
        />
        <textarea 
          className="post-input"
          placeholder="Body" 
          value={newPostBody} 
          onChange={e => setNewPostBody(e.target.value)}
        />
        <button className="add-btn" onClick={addPost}>Add Post</button>
      </div>

      {/* Posts */}
      <h3 className="posts-title">Posts</h3>
      {displayedPosts.map(p => (
        <PostCard key={p.id} post={p} onEdit={editPost} onDelete={deletePost} />
      ))}

      {displayedPosts.length < posts.length && (
        <button className="load-more-btn" onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}
