/* eslint-disable react/jsx-curly-newline */
import RadioAntd from "antd/lib/radio";
import { Controller } from "react-hook-form";

export const Radio = ({
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
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => {
        return <RadioAntd {...rest} {...field} />;
      }}
    />
  );
};
