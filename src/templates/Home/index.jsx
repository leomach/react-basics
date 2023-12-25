import "./styles.css";
import { useCallback, useEffect, useState } from "react";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPosts] = useState();
  const [allPosts, setAllPosts] = useState();
  const [page, setPage] = useState();
  const [postsPerPage] = useState();
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <h1 className="title">NEWS</h1>
      <div className="search-container">
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}
        <TextInput onchange={handleChange} searchValue={searchValue} />
      </div>
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Nada encontrado.</p>}
      <div className="button-container">
        {!searchValue && (
          <Button onclick={loadMorePosts} disabled={noMorePosts}>
            Show more
          </Button>
        )}
      </div>
    </section>
  );
};

// class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;

//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postsPerPage, allPosts, posts } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   };

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <h1 className="title">NEWS</h1>
//         <div className="search-container">
//           {!!searchValue && <h1>Search Value: {searchValue}</h1>}
//           <TextInput onchange={this.handleChange} searchValue={searchValue} />
//         </div>
//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
//         {filteredPosts.length === 0 && <p>Nada encontrado.</p>}
//         <div className="button-container">
//           {!searchValue && (
//             <Button onclick={this.loadMorePosts} disabled={noMorePosts}>
//               Show more
//             </Button>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

export default Home;
