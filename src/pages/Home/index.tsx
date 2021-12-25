import React from "react"
import BlogCard from "./BlogCard"
import "./index.scss"
const HomePage = () => {
  return (
    <>
      <div className="home-box">
        <div className="home-header">
          <div className="home-header-box animate_animated">
            <div className="home-header-title">哈喽啊 吴彦祖</div>
            <div className="home-header-content">时间就像胸 挤一挤就有了</div>
          </div>
        </div>
        <div style={{ color: "red" }}>1</div>
        <div className="home-body">
          <div className="home-main">1</div>
          <div className="home-aside">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage
