import { Layout } from "antd"
import React, { FC, useCallback, useEffect, useState } from "react"
import throttle from "lodash/throttle"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import FooterInfo from "src/components/footer"
import NavHeader from "src/components/header"
import { BACKGROUND_IMG } from "src/constant"
import "./index.scss"
import "animate.css"
import "antd/dist/antd.css"
import Routes from "src/routes"
const { Header, Footer, Content } = Layout
const LayoutPage = (props) => {
  // console.log(props, "props")
  const [imgNumber, setImgNumber] = useState(8)
  const [isShowNav, setIsShowNav] = useState<boolean>(true)
  const handleClothes = useCallback(() => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const res = arr.filter((item) => item !== imgNumber)
    const num = Math.floor(Math.random() * arr.length)
    if (num === imgNumber || num === res.length) {
      handleClothes()
    } else {
      setImgNumber(res[num])
    }
  }, [imgNumber])
  const routes = [...Routes]
  const handleHeaderShow = useCallback(() => {
    // 当前页面离页面顶部的距离
    let scrollTop = document.getElementById("blog-box").scrollTop
    // console.log(scrollTop)
    if (scrollTop) {
      setIsShowNav(false)
      // console.log("false")
    } else {
      // console.log("true")
      setIsShowNav(true)
    }
    // 判断切换背景图片
    // if (scrollTop < middleTop) {
    //     mainDiv.style.backgroundImage = "url(./images/1.jpg)"
    // } else if (scrollTop > middleTop) {
    //     mainDiv.style.backgroundImage = "url(./images/2.jpg)"
    // }
  }, [])
  const throttledScrollHandle = throttle(handleHeaderShow, 700)
  useEffect(() => {
    document
      .getElementById("blog-box")
      .addEventListener("scroll", throttledScrollHandle)
    return () => {
      window.addEventListener("scroll", throttledScrollHandle)
    }
  }, [])
  return (
    <>
      <Layout
        className="animate_animated layout-box"
        id="blog-box"
        style={{
          backgroundImage: `url(${BACKGROUND_IMG[imgNumber].img})`,
        }}
      >
        <Header style={{ height: "60px", padding: "0", background: "none" }}>
          <NavHeader isShowNav={isShowNav} handleClothes={handleClothes} />
        </Header>

        <div className="blog-box">
          <Content className="content-box">
            <div className="content-center">
              <Switch>
                {routes.map((i, idx) => (
                  <Route
                    key={`route_${idx}`}
                    path={i.path}
                    component={i.component}
                    exact
                  />
                ))}
                <Redirect from="*" to={"/"} />
              </Switch>
            </div>
          </Content>
          <Footer className="footer-box">
            <FooterInfo />
          </Footer>
        </div>
      </Layout>
    </>
  )
}
export default withRouter(LayoutPage)
