import React, { useState } from 'react';

function Feed() {
  const [comments, setComments] = useState([]);
  
  // Função para adicionar comentário
  const addComment = (postId, commentText) => {
    const newComment = {
      postId,
      text: commentText,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="feed">
      {/* ...código anterior ... */}
      {posts.map((post, index) => (
        <div key={index} className="post">
          {/* ...código anterior ... */}
          <div className="comment-section">
            {comments
              .filter((comment) => comment.postId === index)
              .map((comment, commentIndex) => (
                <p key={commentIndex}>{comment.text}</p>
              ))}
            <input
              type="text"
              placeholder="Adicione um comentário"
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  addComment(index, e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
