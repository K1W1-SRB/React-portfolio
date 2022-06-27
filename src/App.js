import React from 'react';
import Navbar from './components/Navbar';
import { gql } from "graphql-request";

export const GET_POST = gql`
    query {
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
  `;

export default function App() {

  return(
    <div className='app'>
      <Navbar/>
    </div>
  )
}