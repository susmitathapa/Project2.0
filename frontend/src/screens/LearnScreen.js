import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player';

export default function LearnScreen() {
  return (
    <div>
      <Helmet>
        <title>Learning </title>
      </Helmet>
      <h1>Videos</h1>
      <div className="videos">
        <Row className="rows">
          <Col md={4}>
            <ReactPlayer url="https://www.youtube.com/watch?v=OWv6Ypzn9dg" />
          </Col>
        </Row>

        <Row className="rows">
          <Col md={4}>
            <ReactPlayer url="https://www.youtube.com/watch?v=vtxpQQyS9cc" />
          </Col>
        </Row>

        <Row className="rows">
          <Col md={4}>
            <ReactPlayer url="https://www.youtube.com/watch?v=u8dr2bjUKxo" />
          </Col>
        </Row>

        <Row className="rows">
          <Col md={4}>
            <ReactPlayer url="https://www.youtube.com/watch?v=34pt8yGDL80" />
          </Col>
        </Row>

        <Row className="rows">
          <Col md={4}>
            <ReactPlayer url="https://www.youtube.com/watch?v=ia5fxrzzZKQ" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
