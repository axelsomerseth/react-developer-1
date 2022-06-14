import React, { useState, useEffect } from "react";

function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // REST API call when component was mounted.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(() => [...posts]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col">
            <br />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 g-4">
          {posts.length ? (
            posts.map((p) => {
              return (
                <div key={p.id} className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <h6 className="h6">ID: {p.id}</h6>
                      <p className="card-text">{p.body}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 col-sm-12 d-flex justify-content-center">
              <h5 className="h5">No data.</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListPosts;
