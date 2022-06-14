import Navbar from "../components/Navbar";
import ListAlbums from "../components/ListAlbums";

const ListAlbumsRoute = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">List Albums</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ListAlbums url={"http://jsonplaceholder.typicode.com/albums"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListAlbumsRoute;
