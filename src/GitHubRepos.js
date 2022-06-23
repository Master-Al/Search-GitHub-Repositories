import React, { PureComponent } from "react";
import SearchEngine from "./SearchEngine";
import RepoList from "./RepoList";
import axios from "axios";
import _ from "lodash";
import { Empty } from "antd";

class GitHubRepos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchProj: "",
      repos: [],
      disable: true,
    };
  }

  getRepos = (title) => {
    axios
      .get(`https://api.github.com/search/repositories?q=${title}`)
      .then((res) => {
        this.setState({ repos: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearchTextInput = (e) => {
    const data = e.target.value;
    if (!_.isEmpty(data)) {
      this.setState({
        searchProj: data,
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  };

  handleSubmit = () => {
    this.getRepos(this.state.searchProj);
  };

  render() {
    return (
      <div>
        <SearchEngine
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          disable={this.state.disable}
          onSearchTextInput={this.handleSearchTextInput}
          onSubmit={this.handleSubmit}
        />

        <hr />
        {_.isEmpty(this.state.repos) || this.state.repos?.items.length === 0 ? (
          <Empty />
        ) : (
          <RepoList repos={this.state.repos} top={this.props.top} />
        )}
      </div>
    );
  }
}

export default GitHubRepos;
