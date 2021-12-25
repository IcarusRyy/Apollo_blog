import React from "react"
import "./index.scss"
const FooterInfo = (props) => {
  return (
    <>
      <div className="footer-content">
        <div>
          <span>Apollo的个人博客系统</span>
          <a
            className="a-cont"
            href="https://github.com/IcarusRyy/Apollo_blog"
            target="_blank"
            rel="noreferrer"
          >
            「源代码」
          </a>
        </div>
        <div>
          <a
            className="a-cont"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noreferrer"
          >
            域名信息管理系统
          </a>
        </div>
        <div>
          <span className=" footer-item three-color common-hover">React</span>
          <span className=" footer-item three-color common-hover">Redux</span>
          <span className=" footer-item three-color common-hover">Antd</span>
          <span className=" footer-item three-color common-hover">
            Clouabase
          </span>
          <span className=" footer-item three-color common-hover">Webify</span>
        </div>
      </div>
    </>
  )
}
export default FooterInfo
