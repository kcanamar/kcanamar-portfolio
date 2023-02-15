import * as Icons from "react-icons/si";

/* Your icon name from database data can now be passed as prop */
const DynamicSiIcon = ({ name }) => {
  const IconComponent = Icons[name];
  return <IconComponent />;
};

export default DynamicSiIcon