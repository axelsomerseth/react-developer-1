import Navbar from "../components/Navbar";
import ListAlbumsClass from "../components/ListAlbumsClass";

const ListAlbumsClassRoute = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">List Albums Class</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ListAlbumsClass
                url={"http://jsonplaceholder.typicode.com/albums"}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListAlbumsClassRoute;
