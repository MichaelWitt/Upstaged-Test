import React, { Component } from "react";
import MaterialTable from "material-table";
import API from "../utils/API";

class News extends Component {
  state = {
    filteredNews: [],
  };

  news = [];

  componentDidMount() {
    API.getNews().then((results) => {
      this.news = results.data.articles;
      console.log("this.news:", this.news);
      this.setState({
        filteredNews: this.news,
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
                <a href={rowData.website} target="_blank" rel="noreferrer">
                  <img
                    src={rowData.image}
                    alt={rowData.image}
                    style={{ width: 350, height: 200 }}
                  />
                </a>
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
            {
              title: "Date",
              field: "date",
            },
          ]}
          data={this.state.filteredNews.map((news) => {
            let tableData = {
              image: `${news.urlToImage}`,
              website: `${news.url}`,
              description: `${news.description}`,
              content: `${news.content}`,
              source: `${news.source.name}`,
              date: `${news.publishedAt.split(/[T ]/i, 1)[0]}`,
            };
            return tableData;
          })}
          options={{
            paging: true,
            pageSize: 50,
            emptyRowsWhenPaging: true,
            pageSizeOptions: [6, 12, 20, 50],
          }}
          title="News"
        />
      </div>
    );
  }
}

export default News;
