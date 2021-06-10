import { useState, useEffect } from "react";
import Button from "antd/lib/button";
import message from "antd/lib/message";
import { useHistory } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, Logo } from "components";
import { WrapperLogin, LoginBox, BlurredBox } from "components/login";
import { YupLogin, loginSchema, users } from "constant";
import { useGlobalContext } from "context/GlobalContext";
import { withLoader } from "HOC";

const Login = ({ setChargePage }) => {
  const gContext = useGlobalContext();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupLogin),
    defaultValues: loginSchema,
  });

  const handleStartSesion = async (form) => {
    setLoading(true);

    const userFind = users.find(({ email, password }) => {
      return form.email === email && form.password === password;
    });

    if (userFind) {
      setLoading(false);
      gContext.setUser(userFind);
      history.push("/");
    } else {
      setLoading(false);
      message.error(
        "Verifique su correo y contraseña sean correctos para continuar."
      );
    }
  };

  const onSubmit = (e) => {
    handleStartSesion(e);
  };

  useEffect(() => {
    setChargePage(false);

    if (gContext.user) {
      history.push("/");
    }
  }, [gContext.user]);

  return (
    <>
      <WrapperLogin
        fluid
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="250"
        data-aos-offset="150"
      >
        <Row>
          <Grid>
            <Row center="xs" middle="xs" className="min-vh-100">
              <BlurredBox data-aos="fade-up" data-aos-duration="2000">
                <LoginBox>
                  <Logo isExtends width={232} className="ma-auto" />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      label="Ingresa tu cuenta o correo electrónico"
                      name="email"
                      classMain="pa0"
                      control={control}
                      error={errors.email?.message}
                      placeholder="ejemplo@gmail.com"
                    />
                    <Input
                      label="Contraseña"
                      type="password"
                      name="password"
                      classMain="pa0"
                      control={control}
                      error={errors.password?.message}
                      placeholder="Ingresa una contraseña"
                    />
                    <Col md={12} className="mt3">
                      <Button
                        htmlType="submit"
                        type="primary"
                        size="large"
                        className="w-100"
                        loading={isLoading}
                      >
                        CONTINUAR
                      </Button>
                    </Col>
                  </form>
                </LoginBox>
              </BlurredBox>
            </Row>
          </Grid>
        </Row>
      </WrapperLogin>
    </>
  );
};

export default withLoader(Login, "Cargando identificación");
