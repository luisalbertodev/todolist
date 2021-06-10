import { COLUMNS_SIDEBAR, ADMIN, EMPLOYEE } from "constant";

export const getCurrentKeys = (type, currentItem) => {
  const joinItems = type.reduce((acc, el) => [...acc].concat(el.childrens), []);
  const data = joinItems.filter((item) => item.to === currentItem);
  if (!data.length) return "";
  return data[0].key || "";
};

export const getCurrentColumn = (type) => {
  let label;
  switch (type) {
    case EMPLOYEE:
      label = EMPLOYEE;
      break;
    default:
      label = ADMIN;
      break;
  }

  return COLUMNS_SIDEBAR[label];
};
