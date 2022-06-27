import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { request } from 'graphql-request';

import Post from '../Posts/post';

export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { posts } = await request(
        'https://api-eu-west-2.graphcms.com/v2/cl4fmhib408wi01yrau795mzd/master',
        `
        {
          posts {
            id
            title
            datePublished
            slug
            content {
              html
            }
            author {
              name
              avatar {
                url
              }
            }
            coverPhoto {
              publishedAt
              createdBy {
                id
              }
              url
            }
          }
        }
    `
      );

      setPosts(posts);
    };


    fetchPost();
  }, []);

  return (
    <div className="Post">
      <Router>
        {!posts ? (
          'Loading'
        ) : (
          <React.Fragment>
            <ul>
              {posts.map(({ id, title, author, coverPhoto, datePubllished, slug}) => (
                <li key={id}>
                  <Link to={`/posts/${slug}`}>{title}</Link>
                </li>
              ))}
            </ul>
            <Switch>
              <Route path="/posts/:slug">
                <Post posts={posts} />
              </Route>
            </Switch>
          </React.Fragment>
        )}
      </Router>
    </div>
  );
}