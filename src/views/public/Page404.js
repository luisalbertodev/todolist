import Result from "antd/lib/result";
import Button from "antd/lib/button";
import { useHistory } from "react-router-dom";

import { withLoader } from "HOC";
import { WrapperPage404 } from "components/page404";

const Page404 = () => {
  const history = useHistory();
  return (
    <WrapperPage404
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0"
    >
      <Result
        status="404"
        title="Página no encontrada"
        subTitle="Revisa la dirección a la que deseas acceder"
        extra={
          <Button type="primary" onClick={() => history.replace("/")}>
            REGRESAR A INICIO
          </Button>
        }
      />
    </WrapperPage404>
  );
};

export default withLoader(Page404, "Cargando...");
