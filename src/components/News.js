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
      this.users = results.data.articles;
      console.log("this.users:", this.users);
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
              title: "Articles",
              field: "image",
              render: (rowData) => (
                <img
                  src={rowData.image}
                  alt={rowData.image}
                  style={{ width: 350, height: 200 }}
                />
              ),
            },
            { title: "Content", field: "content" },
            { title: "Description", field: "description" },
            { title: "Source", field: "source" },
            { title: "Author", field: "author" },
            { title: "Date", field: "date" },
          ]}
          data={this.state.filteredUsers.map((user) => {
            let tableData = {
              image: `${user.urlToImage}`,
              content: `${user.content}`,
              description: `${user.description}`,
              source: `${user.source.name}`,
              author: `${user.author}`,
              date: `${user.publishedAt}`,
            };
            return tableData;
          })}
          options={{
            paging: true,
            pageSize: 50,
            emptyRowsWhenPaging: true,
            pageSizeOptions: [6, 12, 20, 50],
          }}
          title="Broadway"
        />
      </div>
    );
  }
}

export default News;
