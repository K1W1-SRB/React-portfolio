import React from 'react';
import { useParams } from 'react-router-dom';

function Post({ posts }) {
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  return (
  <div>
    <h1>{post.name}</h1>
  </div>
  );
}

export default Post;