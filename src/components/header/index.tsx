import React, { FC, useCallback, useState } from "react"
import { HomeOutlined, SettingOutlined } from "@ant-design/icons"
import classnames from "classnames"
import "./index.scss"
import { NavLink, useHistory } from "react-router-dom"
import { navArr } from "src/constant"
const secondNavArr = [
  { id: 0, name: "找文章", to: "/articles" },
  { id: 1, name: "分类", to: "/classes" },
  { id: 2, name: "标签", to: "/tags" },
]
interface NavHeaderPropsType {
  handleClothes: () => void
  isShowNav: boolean
}
const NavHeader: FC<NavHeaderPropsType> = (props) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false)
  const { handleClothes, isShowNav } = props
  const history = useHistory()
  const handleDropDownEnter = useCallback(() => {
    setIsShowDropDown(true)
  }, [isShowDropDown])
  const handleDropDownLeave = useCallback(() => {
    setIsShowDropDown(false)
  }, [isShowDropDown])
  return (
    <>
      <div className="nav-pc main-color" id={isShowNav ? "" : "hiddenNav"}>
        <div className="nav-content">
          <div
            className="home-btn common-hover"
            onClick={() => history.push("/")}
          >
            <HomeOutlined />
          </div>
          <div
            className="nav-btn common-hover articles-btn"
            onMouseEnter={handleDropDownEnter}
            onMouseLeave={handleDropDownLeave}
          >
            文章
            <div
              className={classnames("articels-menu", {
                "display-none": !isShowDropDown,
              })}
            >
              {secondNavArr.map((item) => (
                <NavLink
                  className="articels-menu-item main-color common-hover"
                  activeClassName="btn-bgc"
                  to={item.to}
                  key={item.id}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          {navArr.map((item, index) => (
            <NavLink
              className={
                index === navArr.length - 1
                  ? "nav-btn common-hover margin-0"
                  : "nav-btn common-hover"
              }
              activeClassName="btn-bgc"
              to={item.to}
              key={item.id}
            >
              {item.name}
            </NavLink>
          ))}
          {/* <a
            className="admin-btn common-hover"
            href="www.baidu.com"
            target="_blank"
            rel="noreferrer"
          >
            <SettingOutlined />
          </a> */}
          <div
            className="nav-clothes-btn common-hover main-color"
            onClick={handleClothes}
          >
            换装
          </div>
        </div>
      </div>
    </>
  )
}
export default NavHeader
