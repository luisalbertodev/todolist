import { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { HeaderDashboard, Seo } from "components";
import { Todo } from "components/todo";
import { withLoader, withAuth } from "HOC";
import { useGlobalContext } from "context/GlobalContext";

import Layout from "components/layout";

const Main = ({ setChargePage }) => {
  const gContext = useGlobalContext();

  useEffect(() => {
    setChargePage(false);
  }, []);

  return (
    <>
      <Seo
        title="Inicio"
        description=""
        pathSlug={window.location.pathname}
        keywords={["dashboard, kpi"]}
        image=""
      />
      <Layout>
        <Row>
          <Col xs={12}>
            <HeaderDashboard
              onBack={false}
              title={`Bienvenido ${gContext?.user?.name}`}
            />
          </Col>
          <Todo />
        </Row>
      </Layout>
    </>
  );
};

export default withAuth(withLoader(Main, "Cargando inicio"));
