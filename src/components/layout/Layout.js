import { useState, useEffect, memo } from "react";
import LayoutAntd from "antd/lib/layout";
import Modal from "antd/lib/modal";
import message from "antd/lib/message";
import { useLocation, useHistory } from "react-router-dom";
import { useGlobalContext } from "context/GlobalContext";
import { getCurrentKeys, getCurrentColumn } from "constant";
import { useWindowSize } from "hooks";
import styled from "styled-components";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const StyledLayoutAntd = styled(LayoutAntd)`
  .logo-header {
    float: left;
    height: 100%;
    object-fit: contain;
    width: 28px !important;
    margin: 0 8px 0 -32px !important;
    filter: invert(1);
  }

  .logo-sidebar {
    height: 32px !important;
    margin: 16px auto !important;
    width: auto !important;
    filter: invert(1);
    display: flex;
  }

  .site-layout-content {
    margin: 16px;
    background: white;
    min-height: calc(100vh - 40px);
    padding: 1em;
    border-radius: 8px;
  }

  .ant-layout {
    padding: 0px;
  }
`;

const Layout = memo(({ children }) => {
  const [currentKeys, setCurrentKeys] = useState("");
  const [currentData, setData] = useState([]);
  const windowSize = useWindowSize();
  const history = useHistory();

  const location = useLocation();
  const gContext = useGlobalContext();

  const logoutSesion = async () => {
    try {
      console.log({ gContext });

      gContext.setUser(undefined);
      history.push("/identificate");
    } catch (error) {
      message.error("Hubo un error al intentar cerrar sesión");
    }
  };

  const handleLogout = () => {
    Modal.confirm({
      title: "¿Esta seguro de cerrar sesión?",
      content: "Esta acción no se puede deshacer",
      okText: "Si, continuar",
      cancelText: "cancelar",
      onOk: () => logoutSesion(),
    });
  };

  const handleAction = (type) => {
    console.log({ type });

    if (type === "logout") {
      handleLogout();
    }
  };

  useEffect(() => {
    const currentColumns = getCurrentColumn();
    const currentKey = getCurrentKeys(currentColumns, location.pathname);
    setData(currentColumns);
    setCurrentKeys(currentKey);
  }, [location.pathname]);

  const isMobile = windowSize.width < 768;

  return (
    <StyledLayoutAntd>
      <Header
        currentKeys={currentKeys}
        currentData={currentData}
        onAction={handleAction}
        location={location}
        classHeader={isMobile ? "" : "dn"}
      />
      <LayoutAntd>
        <Sidebar
          currentKeys={currentKeys}
          currentData={currentData}
          onAction={handleAction}
          location={location}
          classSidebar={isMobile ? "dn" : "min-vh-100"}
        />
        <LayoutAntd>
          <LayoutAntd.Content className="site-layout-content p0">
            {children}
          </LayoutAntd.Content>
        </LayoutAntd>
      </LayoutAntd>
    </StyledLayoutAntd>
  );
});

export default Layout;
