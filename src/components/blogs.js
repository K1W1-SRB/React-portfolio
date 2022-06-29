import React from 'react'
import Blog from './blog'

const blogs = ({ posts }) => {
  return (
    <div>
        {posts.map((article, index) => <Blog article={article} key={index} />)}
    </div>
  )
}

export default blogs