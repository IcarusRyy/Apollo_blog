import { Layout } from "antd"
import React, { FC } from "react"
import { withRouter } from "react-router-dom"
import FooterInfo from "src/components/footer"
import NavHeader from "src/components/header"

const { Header, Footer, Content } = Layout

const LayoutPage = (props) => {
  console.log(props, "props")
  return (
    <>
      <Layout>
        <Header>
          <NavHeader />
        </Header>
        <Content>1</Content>
        <Footer>
          <FooterInfo />
        </Footer>
      </Layout>
    </>
  )
}
export default withRouter(LayoutPage)
