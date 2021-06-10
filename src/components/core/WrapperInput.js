import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Wrapper = styled(Col)`
  .m-row {
    margin: 0 0.4em;
  }
`;

export const WrapperInput = ({
  xs = 12,
  md = 12,
  classMain = "",
  classLabel = "",
  label = "",
  children,
  center = null,
}) => {
  return (
    <Wrapper xs={xs} md={md} className={classMain}>
      <Row center="xs" className="m-row">
        <Col xs={12}>
          <Row start="xs" center={center}>
            <Col xs={12} className={`${classLabel} pt2 pb2`}>
              <label htmlFor={label}>{label}</label>
            </Col>
            {children}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};
