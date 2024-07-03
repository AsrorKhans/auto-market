import React from 'react';
import { Col, Row, Spin } from 'antd';

function Index() {
  return (
    <Row>
      <Col span={24}>
        <Spin tip="Loading..."></Spin>
      </Col>
    </Row>
  );
}

export default Index;
