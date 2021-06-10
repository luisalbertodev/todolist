/* eslint-disable react/jsx-curly-newline */
import SelectAntd from "antd/lib/select";
import { Controller } from "react-hook-form";
import { WrapperInput } from "components/core";

export const Select = ({
  options = [],
  defaultValue = "",
  disabled = false,
  name = "",
  xs,
  md,
  classMain,
  classLabel,
  label,
  control,
  valueOption,
  labelOption,
  size = "large",
  placeholder,
  error,
  ...rest
}) => {
  return (
    <WrapperInput
      xs={xs}
      md={md}
      classMain={classMain}
      classLabel={classLabel}
      label={label}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
          return (
            <SelectAntd
              {...rest}
              {...field}
              showSearch
              size={size}
              disabled={disabled}
              placeholder={placeholder}
              optionFilterProp="children"
              filterOption={(inpt, { children }) =>
                children.toLowerCase().indexOf(inpt.toLowerCase()) >= 0
              }
              filterSort={(a, b) =>
                a.children.toLowerCase().localeCompare(b.children.toLowerCase())
              }
              className="w-100"
            >
              {options.map((item) => {
                return (
                  <SelectAntd.Option
                    key={valueOption ? item[valueOption] : item}
                    value={valueOption ? item[valueOption] : item}
                  >
                    {labelOption ? item[labelOption] : item}
                  </SelectAntd.Option>
                );
              })}
            </SelectAntd>
          );
        }}
      />
      {error && <small className="red pt1">{error}</small>}
    </WrapperInput>
  );
};
