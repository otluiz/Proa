//Exemplo de código para renderizar posts no Feed.js:
import React from 'react';

function Feed() {
  const posts = [
    // Dados fictícios dos posts
    // Cada post deve incluir nome do usuário, imagem de perfil, imagem do post, legenda, etc.
  ];

  return (
    <div className=feed>
      {posts.map((post, index) => (
        <div key={index} className=post>
          <div className=user-info>
            <img src={post.profileImage} alt={post.username} />
            <p>{post.username}</p>
          </div>
          <img src={post.postImage} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;

