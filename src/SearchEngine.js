import React, { PureComponent } from "react";
import { Button, Input } from "antd";

class SearchBar extends PureComponent {
  onSearch = (value) => console.log(value);
  render() {
    return (
      <Input.Group compact size="large">
        <Input
          placeholder="Search github repository"
          onChange={this.props.onSearchTextInput}
          style={{ width: "calc(100% - 200px)" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <Button
          size="large"
          type="primary"
          disabled={this.props.disable}
          onClick={this.props.onSubmit}
        >
          Submit
        </Button>
      </Input.Group>
    );
  }
}

export default SearchBar;
