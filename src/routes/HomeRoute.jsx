import { React } from "react";
import Navbar from "../components/Navbar";

const HomeRoute = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mb-2 mt-2">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">This is the home page</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeRoute;
