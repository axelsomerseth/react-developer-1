import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function ListAlbums({ url }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleSearch = (event) => {
    setSearch(() => event.target.value);
    if (event.target.value) {
      setSearchParams("q=" + event.target.value);
    } else {
      setSearchParams("");
    }
  };

  // componentDidUpdate: without dependencies, runs on every render.
  useEffect(() => {});

  // componentDidMount
  useEffect(() => {
    // REST API call when component was mounted.
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setItems(() => [...json]);
        setFilteredItems(() => [...json]);
        setSearch(() => searchParams.get("q") || "");
      })
      .catch((error) => console.error(error));

    // Setup resize event listener, runs on mount
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup resize event listener, runs on un-mount
    return () => {
      setItems([]);
      setFilteredItems([]);
      window.removeEventListener("resize", updateWindowWidth);
    };
    // eslint-disable-next-line
  }, []);

  // Update list when on mount or when when search and item changes
  useEffect(() => {
    if (search) {
      const newItems = items.filter((i) =>
        i.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(() => newItems);
    } else {
      setFilteredItems(() => [...items]);
    }
  }, [search, items]);

  const handleTouch = (event) => {
    console.log(`Screen touched, info: `);
    console.log(event.changedTouches[0]);
  };

  const handleClick = (event) => {
    console.log(`${event.target.innerText} table header was clicked`);
  };

  return (
    <>
      <div className="container" onTouchEnd={handleTouch}>
        <div className="row mb-2">
          <div className="col">
            <span>Window Width: {windowWidth}</span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col d-flex justify-content-center">
            <input
              type="search"
              className="form-control"
              onChange={handleSearch}
              value={search}
              placeholder="Search by Title"
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <table className="table table-dark table-striped table-hover table-bordered align-middle">
              <thead className="text-center">
                <tr>
                  <th scope="col" style={{ width: "5%" }} onClick={handleClick}>
                    ID
                  </th>
                  <th scope="col" style={{ width: "5%" }} onClick={handleClick}>
                    UserID
                  </th>
                  <th
                    scope="col"
                    style={{ width: "30%" }}
                    onClick={handleClick}
                  >
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length ? (
                  filteredItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="text-center">{item.id}</td>
                        <td className="text-center">{item.userId}</td>
                        <th scope="row">{item.title}</th>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="table-active">
                    <td
                      colSpan="3"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      No data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListAlbums;
