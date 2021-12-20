import { Layout } from "antd"
import React, { FC, useCallback, useState } from "react"
import { withRouter } from "react-router-dom"
import FooterInfo from "src/components/footer"
import NavHeader from "src/components/header"
import { BACKGROUND_IMG } from "src/constant"
import "./index.scss"
import "antd/dist/antd.css"

const { Header, Footer, Content } = Layout
const LayoutPage = (props) => {
  console.log(props, "props")
  const [imgNumber, setImgNumber] = useState(0)
  const handleClothes = useCallback(() => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const res = arr.filter((item) => item !== imgNumber)
    const num = Math.floor(Math.random() * arr.length)
    console.log(num, "n")
    if (num === imgNumber || num === res.length) {
      console.log("==")
      handleClothes()
    } else {
      console.log(res[num], "!+")
      setImgNumber(res[num])
    }
  }, [imgNumber])

  return (
    <>
      <Layout>
        <Header className="main-color header-box">
          <NavHeader handleClothes={handleClothes} />
        </Header>
        <div
          style={{
            backgroundImage: `url(${BACKGROUND_IMG[imgNumber].img})`,
          }}
          // style={{
          //   backgroundImage: `url(${require("../static/background-img/1.png")})`,
          // }}
          className="blog-box"
        >
          <Content>1</Content>
        </div>
        <Footer>
          <FooterInfo />
        </Footer>
      </Layout>
    </>
  )
}
export default withRouter(LayoutPage)
