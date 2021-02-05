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
            {
              title: "Content",
              field: "content",
              headerStyle: { minWidth: 300 },
              cellStyle: { minWidth: 300 },
            },
            { title: "Details", field: "description" },
            { title: "Source", field: "source" },
            { title: "Date", field: "date" },
          ]}
          data={this.state.filteredUsers.map((user) => {
            let tableData = {
              image: `${user.urlToImage}`,
              description: `${user.description}`,
              content: `${user.content}`,
              source: `${user.source.name}`,
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
          title="On Broadway"
        />
      </div>
    );
  }
}

export default News;
