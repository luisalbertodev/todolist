import { useHistory } from "react-router-dom";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import styled from "styled-components";

const StyledPageHeader = styled(PageHeader)`
  overflow: auto;
  margin-bottom: 16px;
`;

export const HeaderDashboard = ({
  title,
  extra,
  other,
  onClick,
  textBtn,
  loading,
  onBack = true,
  ...rest
}) => {
  const history = useHistory();

  return (
    <StyledPageHeader
      onBack={onBack ? false : () => history.goBack()}
      ghost={false}
      style={{ border: "1px solid #ddd", borderRadius: 8 }}
      title={title}
      extra={
        extra
          ? [
              <Button
                {...rest}
                key="1"
                htmlType="submit"
                type="primary"
                loading={loading}
                onClick={onClick}
              >
                {textBtn}
              </Button>,
            ]
          : other
      }
    />
  );
};
