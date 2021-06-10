import InputAntd from "antd/lib/input";
import InputNumber from "antd/lib/input-number";
import { Row, Col } from "react-flexbox-grid";
import { WrapperInput } from "components/core";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const ContainerFormatInput = styled(Col)`
  .ant-input-number {
    width: 100% !important;
  }
`;

const TYPE_INPUTS = {
  TEXT_AREA: "TextArea",
  SEARCH: "Search",
  GROUP: "Group",
  PASSWORD: "Password",
  NUMBER: "Number",
};

export const Input = ({
  type = "text",
  name = "",
  placeholder = "",
  classInput = "",
  xs = 12,
  md = 12,
  classMain,
  classLabel,
  label,
  defaultValue,
  size = "large",
  maxLength,
  disabled,
  error,
  control,
  ...rest
}) => {
  let CurrentInputAntd;

  const currentType = type.toLowerCase();
  switch (currentType) {
    case TYPE_INPUTS.TEXT_AREA.toLowerCase():
      CurrentInputAntd = InputAntd[TYPE_INPUTS.TEXT_AREA];
      break;
    case TYPE_INPUTS.SEARCH.toLowerCase():
      CurrentInputAntd = InputAntd[TYPE_INPUTS.SEARCH];
      break;
    case TYPE_INPUTS.GROUP.toLowerCase():
      CurrentInputAntd = InputAntd[TYPE_INPUTS.GROUP];
      break;
    case TYPE_INPUTS.PASSWORD.toLowerCase():
      CurrentInputAntd = InputAntd[TYPE_INPUTS.PASSWORD];
      break;
    case TYPE_INPUTS.NUMBER.toLowerCase():
      CurrentInputAntd = InputNumber;
      break;
    default:
      CurrentInputAntd = InputAntd;
      break;
  }

  if (currentType === TYPE_INPUTS.NUMBER.toLowerCase()) {
    return (
      <ContainerFormatInput xs={xs} md={md} className={classMain}>
        <Row>
          <WrapperInput classLabel={classLabel} label={label}>
            <Controller
              name={name}
              control={control}
              defaultValue={defaultValue}
              render={({ field }) => {
                return (
                  <CurrentInputAntd
                    {...rest}
                    {...field}
                    size={size}
                    className={classInput}
                    placeholder={placeholder}
                    disabled={disabled}
                  />
                );
              }}
            />
            {error && <small className="red pt1">{error}</small>}
          </WrapperInput>
        </Row>
      </ContainerFormatInput>
    );
  }

  return (
    <ContainerFormatInput xs={xs} md={md} className={classMain}>
      <Row>
        <WrapperInput classLabel={classLabel} label={label}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => {
              return (
                <CurrentInputAntd
                  {...rest}
                  {...field}
                  size={size}
                  type={currentType}
                  className={classInput}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  disabled={disabled}
                />
              );
            }}
          />
          {error && <small className="red pt1">{error}</small>}
        </WrapperInput>
      </Row>
    </ContainerFormatInput>
  );
};
