import React, { useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([
    // Dados fictícios dos posts, incluindo informações de curtidas e comentários
  ]);

  // Função para curtir um post
  const likePost = (postId) => {
    const updatedPosts = posts.map((post, index) => {
      if (index === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          {/* ...código anterior ... */}
          <div className="interactions">
            <button onClick={() => likePost(index)}>Curtir</button>
            <button>Comentar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
