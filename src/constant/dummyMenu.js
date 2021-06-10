import SettingOutlined from "@ant-design/icons/SettingOutlined";
import DashboardOutlined from "@ant-design/icons/DashboardOutlined";

export const COLUMNS_SIDEBAR = {
  admin: [
    {
      submenu: "Inicio",
      icon: <DashboardOutlined />,
      childrens: [{ key: "v", label: "TodoList", to: "/" }],
    },
    {
      submenu: "Configuración",
      icon: <SettingOutlined />,
      childrens: [
        {
          key: "z",
          label: "Cerrar sesión",
          to: "",
          type: "logout",
          onClick: true,
        },
      ],
    },
  ],
};
