import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        this.setState({
          users: data.results,
        });
      });
  }
  render() {
    return (
      <div>
        <h2>Users Component</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          id blanditiis aut sit cum, fuga deserunt, magni voluptate iure dolorum
          hic? Iusto iure distinctio quas incidunt ea accusamus voluptates
          expedita repellat porro eligendi debitis placeat ducimus vel
          voluptatum nulla inventore unde nihil, ex harum hic. Sunt asperiores
          doloribus recusandae dignissimos beatae quia nihil dolores, cupiditate
          rerum ipsam, debitis, necessitatibus corrupti suscipit reiciendis
          illum. Aperiam non excepturi ipsa quia ut voluptatem laboriosam dicta
          ducimus ea nam fuga totam dolorum architecto quibusdam porro placeat
          neque, mollitia nemo commodi blanditiis error vitae enim optio! Quae
          labore et quisquam excepturi consequuntur dolores ipsam tenetur.
        </p>
        {this.state.users.length > 0 ? (
          <div style={{ marginTop: "50px" }}>
            <table style={{ width: "80%", margin: "auto" }} cellPadding={10}>
              <thead style={{ background: "black", color: "white" }}>
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>EMAIL ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={user.picture.medium}
                          width="100"
                          height="100"
                        />
                      </td>
                      <td>{user.name.first}</td>
                      <td>{user.gender}</td>
                      <td>{user.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>No Users Info</h2>
        )}
      </div>
    );
  }
}

export default Users;
