import"./index.scss";

import { LOGO } from "../../constants/constImages";
import HeaderItems from "./HeaderItems";

const HeaderComponent = () => {
  return (
    <div id="header">
      <img src={LOGO} alt="" />
      <div id="menu">
      {HeaderItems.map(item => (
        <a href="" key={item.id}> {item} </a>
      ))}
      </div>
    </div>
  );
};

export default HeaderComponent;