import React, { FC, useEffect, useState } from "react"
import "./index.scss"
const BlogCard: FC = () => {
  const [timeText, setTimeText] = useState("")
  useEffect(() => {
    const hour = new Date().getHours()
    const timeText =
      hour < 6
        ? "凌晨好"
        : hour < 9
        ? "早上好"
        : hour < 11
        ? "上午好"
        : hour < 13
        ? "中午好"
        : hour < 17
        ? "下午好"
        : hour < 19
        ? "傍晚好"
        : "晚上好"
    setTimeText(timeText)
  }, [])
  return (
    <>
      <div className="blogcard-box animate_animated">
        <div className="aside-card BlogCard-box theme-color">
          <p className="BlogCard-text">
            {timeText}, <br />
            我叫<span className="theme-color-font blog-name">Apollo</span>,
            <br />
            欢迎来到
            <br />
            我的<span className="theme-color-font blog-name">个人博客</span>。
          </p>
          <img src="../../../../public/favicon.ico" alt="" className="avatar" />
        </div>
      </div>
    </>
  )
}
export default BlogCard
