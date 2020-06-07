import React from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import SampleEmail from './SampleEmail';
import { PageHeader } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography


function Form() {
    return (
        <Layout style={{ opacity:'0.8'}}>
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Select "
            subTitle="This is a subtitle"
        />
        </Layout>
    );
}

export default Form;