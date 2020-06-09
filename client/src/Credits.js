import React from 'react';
import { Card, Col, Row } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'

function Credits() {
    return (
        <div className="site-card-wrapper">
        <Row gutter={16} style={{marginBottom: 16}}>
          <Col span={8}>
            <Card title="Alan Ton" bordered={false}>
                <a href='https://github.com/alandgton/' target='_blank'><GithubOutlined id='icon'/></a>
                <a href='https://www.linkedin.com/in/alanton/' target='_blank'><LinkedinOutlined id='icon'/></a>
              </Card>
          </Col>
          <Col span={8}>
            <Card title="Abdallah Abuhashem" bordered={false}>
                <a href='https://github.com/AbdallahAbuHashem' target='_blank'><GithubOutlined id='icon'/></a>
                <a href='https://www.linkedin.com/in/aabuhash/' target='_blank'><LinkedinOutlined id='icon'/></a>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Carlos Valdez" bordered={false}>
                <a href='https://github.com/cvaldez98' target='_blank'><GithubOutlined id='icon'/></a>
                <a href='https://www.linkedin.com/in/carlosvr98/' target='_blank'><LinkedinOutlined id='icon'/></a>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Uma Krishnan" bordered={false}>
              <div>
                <a href='' target='_blank'><GithubOutlined id='icon'/></a>
                <a href='https://www.linkedin.com/in/uma-krishnan/' target='_blank'><LinkedinOutlined id='icon'/></a>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Nicolas Renteria" bordered={false}>
                <a href='https://github.com/nrenteria' target='_blank'><GithubOutlined id='icon'/></a>
                <a href='https://www.linkedin.com/in/nicolasrenteria/' target='_blank'><LinkedinOutlined id='icon'/></a>
            </Card>
          </Col>
          {/* <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col> */}
        </Row>
      </div>
    );
}

export default Credits