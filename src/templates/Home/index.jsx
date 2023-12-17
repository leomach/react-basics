import "./styles.css";
import { Component } from "react";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button onclick={this.loadMorePosts} text={"texto qualquer"}></Button>
        </div>
      </section>
    );
  }
}

export default Home;
