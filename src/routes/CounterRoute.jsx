import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

const CounterRoute = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mb-3">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">Counter Example</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Counter />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CounterRoute;
