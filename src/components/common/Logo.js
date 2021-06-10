import { Link } from "components/core/index";
import logoSmall from "assets/images/logo/logo-small.png";
import logoLarge from "assets/images/logo/logo-large.png";

export const Logo = ({
  width = 120,
  className = "img-fluid",
  isExtends = false,
  isNotLink,
}) => {
  if (isNotLink) {
    return (
      <a href={null}>
        <img
          src={isExtends ? logoLarge : logoSmall}
          alt="logo"
          className={className}
          style={{ width }}
        />
      </a>
    );
  }

  return (
    <Link to="/">
      <img
        src={isExtends ? logoLarge : logoSmall}
        alt="logo"
        className={className}
        style={{ width }}
      />
    </Link>
  );
};
