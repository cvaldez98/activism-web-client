import React from 'react'
import { Layout, PageHeader } from 'antd'

function StartHeader() {
    return (
        <Layout style={{ opacity:'0.8'}}>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Select your representatives"
                subTitle="Check the states which you want to send emails to and add a subject line."
            />
        </Layout>
    );
}

export default StartHeader;