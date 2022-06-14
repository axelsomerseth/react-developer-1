import React from "react";

class ListAlbumsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, items: [] };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    // Setup resize event listener on mount
    window.addEventListener("resize", this.updateWindowWidth);

    // Update list when on mount
    fetch(this.props.url)
      .then((response) => response.json())
      .then((json) => this.setState({ items: json }))
      .catch((error) => console.error(error));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      // Update list when url changes
      fetch(this.props.url)
        .then((response) => response.json())
        .then((json) => this.setState({ items: json }))
        .catch((error) => console.error(error));
    }
  }

  componentWillUnmount() {
    // Cleanup resize event listener on un-mount
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row mb-2">
            <div className="col">
              <span>Window Width: {this.state.windowWidth}</span>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col d-flex justify-content-center">
              <input
                type="search"
                className="form-control"
                placeholder="Search by Title"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col d-flex justify-content-center">
              <table className="table table-dark table-striped table-hover table-bordered align-middle">
                <thead className="text-center">
                  <tr>
                    <th scope="col" style={{ width: "5%" }}>
                      ID
                    </th>
                    <th scope="col" style={{ width: "5%" }}>
                      UserID
                    </th>
                    <th scope="col" style={{ width: "30%" }}>
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.length ? (
                    this.state.items.map((item) => {
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
}

export default ListAlbumsClass;
