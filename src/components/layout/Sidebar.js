import { useState, useMemo, memo } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import { NavLink } from "react-router-dom";
import { Logo } from "components";

export const Sidebar = memo(
  ({ currentKeys, currentData = [], onAction, location, classSidebar }) => {
    const [keys, setKeys] = useState([]);

    const handleOnSelectChange = (openKeys) => {
      setKeys(openKeys);
    };

    return (
      <Layout.Sider
        collapsed
        width={200}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
        className={classSidebar}
      >
        <Logo className="logo-sidebar" />
        <Menu
          openKeys={keys}
          onOpenChange={handleOnSelectChange}
          selectedKeys={currentKeys}
          theme="dark"
          mode="inline"
          className="sidebar"
        >
          {useMemo(() => currentData, [currentData]).map(
            ({ submenu, icon, childrens = [] }, subKey) => (
              <Menu.SubMenu
                key={`sub${subKey + 1}`}
                title={
                  <span>
                    {icon}
                    <span>{submenu}</span>
                  </span>
                }
              >
                {childrens.map(({ to, key, onClick, type, label }) => {
                  if (onClick) {
                    return (
                      <Menu.Item key={key}>
                        <NavLink
                          to={to === "" ? location.pathname : to}
                          onClick={() => onAction(type)}
                        >
                          {label}
                        </NavLink>
                      </Menu.Item>
                    );
                  }

                  return (
                    <Menu.Item key={key}>
                      <NavLink to={to}>{label}</NavLink>
                    </Menu.Item>
                  );
                })}
              </Menu.SubMenu>
            )
          )}
        </Menu>
      </Layout.Sider>
    );
  }
);
