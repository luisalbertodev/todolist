import { NavLink } from "react-router-dom";

export const Link = ({
  to = "",
  children,
  onClick = () => {},
  onKeyPressHandler = () => {},
  className = "",
  isNotLink = false,
  ...rest
}) => {
  if (isNotLink) {
    return (
      <a
        onClick={onClick}
        onKeyPress={onKeyPressHandler}
        className={className}
        href={to}
        role="button"
        tabIndex="0"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink
      to={to}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      className={className}
      role="button"
      {...rest}
    >
      {children}
    </NavLink>
  );
};
