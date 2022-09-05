import client from "../client";
import React from "react";
import Blogs from "../components/blogs";
import Pfp from "../images/k1w1 logo illustator.svg";

export default class Posts extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="blog">
        <div className="blog-container">
          <main className="wrapper">
            <h1 className="blog-heading">Blog</h1>
            <p className="about-blog">
              This blog is about my jorney through programing Learning and
              improvment i will be adding tips i have learned into these blogs
              so you can learn something to
            </p>
            <Blogs posts={this.state.articles} />
          </main>
        </div>
      </div>
    );
  }
}
