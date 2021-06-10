import { Row, Col } from "react-flexbox-grid";
import { Logo } from "components/common";
import styled from "styled-components";

import Spin from "antd/lib/spin";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Styledloader = styled(Row)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  margin: 0;
  p {
    font-size: 16px;
    margin: 10px 0 1em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }

  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Loader = ({ className, message }) => {
  return (
    <Styledloader id="loading" center="xs" middle="xs" className={className}>
      <Col md={12}>
        <Logo isExtends isNotLink className="ma-auto" width={320} />
        <p>{message}</p>
        <Spin indicator={antIcon} />
      </Col>
    </Styledloader>
  );
};
