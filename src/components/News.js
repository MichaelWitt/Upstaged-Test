import React, { Component } from "react";
import MaterialTable from "material-table";
import API from "../utils/API";

class News extends Component {
  state = {
    filteredUsers: [],
  };

  users = [];

  componentDidMount() {
    API.getUsers().then((results) => {
      this.users = results.data;
      console.log("this.users:", this.users);
      console.log("this.users:", this.users.articles[0].author);
      this.setState({
        filteredUsers: this.users,
      });
    });
  }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            {
              title: "Star",
              field: "star",
              render: (rowData) => (
                <img src={rowData.star} alt={rowData.star} />
              ),
            },
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Phone", field: "phone" },
            { title: "Username", field: "username" },
            { title: "Location", field: "location" },
            { title: "Age", field: "age" },
          ]}
          data={this.state.filteredUsers.map((user) => {
            let tableData = {
              star: `${user.picture.medium}`,
              name: `${user.articles[0].author}`,
              email: `${user.email}`,
              phone: `${user.phone}`,
              username: `${user.login.username}`,
              location: `${user.location.city + ", " + user.location.state}`,
              age: `${user.dob.age}`,
            };
            return tableData;
          })}
          options={{
            paging: true,
            pageSize: 50,
            emptyRowsWhenPaging: true,
            pageSizeOptions: [6, 12, 20, 50],
          }}
          title="⭑"
        />
      </div>
    );
  }
}

export default News;
