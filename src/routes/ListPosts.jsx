import Navbar from "../components/Navbar";
import ListPosts from "../components/ListPosts";

const ListPostsRoute = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">List Posts</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ListPosts />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListPostsRoute;
