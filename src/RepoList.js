import React, { PureComponent } from "react";
import { Card, Row, Col } from "antd";
import { StarOutlined, ForkOutlined, GithubOutlined } from "@ant-design/icons";
import moment from "moment";

const { Meta } = Card;
class RepoList extends PureComponent {
  render() {
    return (
      <div className="ScrollWrapper">
        <Card title="GitHub Repo Results">
          {this.props.repos.items.map((item) => {
            return (
              <Card.Grid key={item.id}>
                <Meta
                  title={
                    <div>
                      <GithubOutlined /> {""}
                      {item.full_name}
                    </div>
                  }
                  description={
                    <Row
                      style={{
                        width: "100%",
                        display: "block",
                        color: "#000000",
                        paddingBottom: "20px",
                        fontSize: "14px",
                      }}
                    >
                      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            Author:
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <b>{item.owner?.login}</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            Branch:
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            {item.default_branch}
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Row>
                              <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                                <ForkOutlined />
                              </Col>
                              <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                {item.forks_count}
                              </Col>
                              <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                                <StarOutlined />
                              </Col>
                              <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                {item.stargazers_count}
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={14} sm={14} md={14} lg={14} xl={14} xxl={14}>
                            Last Update:
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                            {moment(item.updated_at).format("l")}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  }
                />
              </Card.Grid>
            );
          })}
        </Card>
        <style>
          {`
                  .ant-card-meta-detail {
                      text-align: left !important;
                      width: 100%;
                  }
              `}
        </style>
      </div>
    );
  }
}

export default RepoList;
