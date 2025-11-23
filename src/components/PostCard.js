import React, { useState } from 'react';

export default function PostCard({ post, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onEdit({ ...post, title, body });
    setEditMode(false);
  };

  return (
    <div className="post-card">
      {editMode ? (
        <>
          <input 
            className="post-input"
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          <textarea 
            className="post-input"
            value={body} 
            onChange={e => setBody(e.target.value)} 
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button className="edit-btn" onClick={() => setEditMode(true)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(post.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
