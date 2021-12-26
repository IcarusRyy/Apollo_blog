/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Layout } from "antd"
import React, { FC, useCallback, useEffect, useState, useRef } from "react"
import throttle from "lodash/throttle"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import FooterInfo from "src/components/footer"
import NavHeader from "src/components/header"
import { BACKGROUND_IMG } from "src/constant"
import "./index.scss"
import _ from "lodash"
import "animate.css"
import "antd/dist/antd.css"
import Routes from "src/routes"
const { Header, Footer, Content } = Layout
const LayoutPage = (props) => {
  // console.log(props, "props")
  // const [imgNumber, setImgNumber] = useState(8);
  const [isShowNav, setIsShowNav] = useState<boolean>(true)
  const handleClothes = useCallback(() => {
    let imgNumber = 8
    // 从组件 直接.这个bibao()？
    return function bibao() {
      console.log(imgNumber, "上一张图片的索引")
      const layout = document.getElementById("blog-box")
      const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const res = arr.filter((item) => item !== imgNumber)
      console.log(res, "过滤掉上一张图片的索引")
      const num = Math.floor(Math.random() * arr.length)
      console.log(num, "num")
      if (res[num] === imgNumber || num === res.length) {
        console.log("同")
        handleClothes()
      } else {
        imgNumber = res[num]
        // setImgNumber(res[num]);
        let img = new Image()
        img.src = BACKGROUND_IMG[res[num]].img
        // 确定图片加载完成后再进行背景图片切换
        img.onload = function () {
          layout.style.backgroundImage = "url(" + img.src + ")"
        }
      }
    }
  }, [])
  const handleTest = useCallback(() => {
    console.log("naaum")
  }, [])
  const throttleHandleTest = throttle(handleTest, 8000, {
    leading: true,
    trailing: false,
  })
  //   {leading: true, trailing: false}：只在延时开始时调用
  // {leading: false, trailing: true}：默认情况，即在延时结束后才会调用函数
  // {leading: true, trailing: true}：在延时开始时就调用，延时结束后也会调用
  // deboucne 还有 cancel 方法，用于取消防抖动调用

  const throttleHandleClothes = throttle(handleClothes(), 2000, {
    leading: true,
    trailing: false,
  })
  const routes = [...Routes]
  const handleHeaderShow = useCallback(() => {
    // 当前页面离页面顶部的距离
    let scrollTop = document.getElementById("blog-box").scrollTop
    console.log(scrollTop)
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
  const throttledScrollHandle = throttle(handleHeaderShow, 300)
  useEffect(() => {
    document
      .getElementById("blog-box")
      .addEventListener("scroll", throttledScrollHandle)
    // }
  }, [])
  console.log("重新渲染")

  return (
    <>
      <Layout
        className="animate_animated layout-box"
        id="blog-box"
        style={{
          // transition: "3s",
          backgroundImage: `url(${BACKGROUND_IMG[8].img})`,
        }}
      >
        <Header style={{ height: "60px", padding: "0", background: "none" }}>
          <NavHeader
            isShowNav={isShowNav}
            handleClothes={throttleHandleClothes}
          />
        </Header>
        {/* <Button onClick={throttleHandleTest}>++</Button> */}
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
